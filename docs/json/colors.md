---
layout: page
title: Resource Colors
description: Since 1.18.2, mods using Mantle can assign colors to a component in JSON. This is most commonly used for the colors of tooltip strings, since methods for setting tooltip colors via language files are both unreliable and limited in options.
---
<div class="hatnote" markdown=1>
This page is about the JSON in Mantle assigning colors to various resources. For the common JSON format for a color, see [Basic Types](../basic-types#color).
</div>

{{page.description}}

## Color Format

Colors are defined in resource packs under `assets/<domain>/mantle/color.json`. The domain `<domain>` has no impact on the behavior of the JSON, it is simply used to allow multiple mods to define a color list without conflicting (as before 1.19.4 Forge did not allow multiple mods to define a resource at the same location in resource packs). In addition, between 1.18 and 1.20 this file can also be loaded from `assets/<domain>/tinkering/color.json`, though it will generate a log warning directing users to the new location.

The color JSON has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A color object.
    * {% include field.html name="\<key\>" type="text color" %} Assigns the key `<key>` to the given color. If `null`, will be skipped (useful for comments).
    * {% include field.html name="\<prefix\>" type="object" %} Recursive definition of a color object. All keys inside the object will be prefixed with `<prefix>.`.
        * {% include field.html name="\<key\>" type="text color" %} Assigns the key `<prefix>.<key>` to the given color. If `null`, will be skipped (useful for comments).
        * {% include field.html name="\<prefix2\>" type="object" %} Recursive definition of a color object. All keys inside the object will be prefixed with `<prefix>.<prefix2>.`.
            * {% include field.html name="\<key\>" type="text color" %} Assigns the key `<prefix>.<prefix2>.<key>` to the given color. If `null`, will be skipped (useful for comments).
            * *May additionally nest any number of prefixes*.
</div>

### Example

The key `example.color.key` may be set to `#123456` using any of the following formats:

```json
{
    "some.comment": null,
    "example.color.key": "#123456"
}
```

```json
{
    "example": {
        "color.key": "#123456"
    }
}
```

```json
{
    "example.color": {
        "key": "#123456"
    }
}
```

```json
{
    "example": {
        "color": {
            "key": "#123456"
        }
    }
}
```

These formats may be freely mixed throughout the file, though note that the same JSON key cannot be defined as both a color and a color object. In other words, if trying to set both `example.color` and `example.color.key`, the following is allowed:

```json
{
    "example": {
        "color": "#123456",
        "color.key": "#123456"
    }
}
```
but the following is not allowed:

```json
{
    "example": {
        "color": "#123456",
        "color": {
            "key": "#123456"
        }
    }
}
```

## Usages

Tinkers' Construct uses the resource color list with the following keys:

* The [modifier](../modifiers) `<domain>:<name>` defines its text color using the key `modifier.<domain>.<name>`.
* The [material](../materials) `<domain>:<name>` defines its text color using the key `material.<domain>.<name>`.
* The [material variant](../materials#variants) `<domain>:<name>#<variant>` defines its text color using the key `material.<domain>.<name>.<variant>`.
* The [mining tier](../tool-stats#mining-tier) `<domain>:<name>` defines its text color using the key `harvest_tier.<domain>.<name>`.