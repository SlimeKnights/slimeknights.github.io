---
layout: page
title: Basic Types
redirect_from:
  - /docs/json/resource-location/
---

{% include toc.html %}

## Resource Location

String representing the registry name of an object in the game. Format is always `<domain>:<name>`, where `<domain>` typically represents a mod or datapack ID, and `<name>` is the specific name for this object. Valid characters are any lowercase letter, any number, `-`, `_`, and `/`. A single `:` is allowed between the domain and name.

Note that when creating new content, it is always advised to use a custom domain for your content over that of an existing mod such as `tconstruct` to minimize potential for conflict and to properly show the user the source of the content.

### Registry IDs

A common application of resource locations is an ID of a value in a registry. Unlike regular resource locations, registry IDs are often validated against the registry contents to ensure a matching ID exists.

### Tag Name
<div class="hatnote" markdown=1>
See also [the Minecraft Wiki article on tags](https://minecraft.wiki/w/Tags)
</div>

Another common application of resource locations is an ID of a tag for a registry. Tags typically exist under `data/<domain>/tags/<registry name>/<name>.json`, though material and modifier tags exist under `data/<domain>/tinkering/tags/<materials|modifiers>/<name>.json`.

For JSON tag fields, if the requested tag does not exist the behavior is the same as if the tag is empty.

### Pattern

Another application of resource locations is patterns, which are used as part of the part builder. When defining a pattern `<domain>:<name>`, it will be translated with the tooltip from `pattern.<domain>.<name>`, and will be rendered with an icon from `assets/<domain>/textures/gui/tinker_pattern/<name>.png`. For instance, the pattern `tconstruct:ingot` uses the tooltip `pattern.tconstruct.ingot` and the texture `assets/tconstruct/textures/gui/tinker_pattern/ingot.png`.

## Color

Many JSON contain colors expressed as 6 or 8 digit hex color strings. 6 digit RGB strings use the format of `"RRGGBB"`, while 8 digit ARGB strings use the format of `"AARRGGBB"`. `AA`, `RR`, `GG`, and `BB` are hex numbers between 0 (`00`) and 255 (`FF`) representing the intensity of the color in (case insensitive) hexadecimal, with higher values meaning more of that color is present. On ARGB strings, if only 6 digits are provided then `AA` is set to 255.

For example, `"FF00000"` represents a bright red, as `RR` is 255 and both `GG` and `BB` are 0. If this was an ARGB color, then `AA` would be set to 255 (fully opaque).

## Item Output

An item output is essentially an [ingredient](../ingredients#item-ingredients) for recipe outputs.
In the most basic form, an item output may be just a string field containing an [item ID](#registry-ids), representing the output item with a stack size of 1. In other cases, the item output will be a JSON object, containing either a [stack](#stack-output) or a [tag](#tag-output).

Note that based on the usage of item output, its possible that count is fixed to 1, in which case the count field is ignored. In addition, in some contexts empty item stacks are not supported, in which case an empty stack or a zero count will produce a parsing error.

### Stack Output

Represents an output of an item stack with count and optional NBT. The format for a stack output is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The item output object.
    * {% include field.html name="item" type="item ID" %} Item to output. If unset, defaults to `minecraft:air` making the output empty.
    * {% include field.html name="count" type="integer" %} Output stack size. If unset, defaults to 1. If empty is supported, may be 0 to indicate an empty output.
    * {% include field.html name="nbt" type="object" %} NBT for the item stack, represented as a JSON object. If unset, the output has no NBT.
    * {% include field.html name="nbt" type="string" %} NBT for the item stack, represented as a string. If unset, the output has no NBT.
</div>

### Tag Output

Represents an output of the preferred entry from an item tag using Mantle's [tag preference](/docs/commands/mantle#tag-preference) system. The format for a tag output is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The item output object.
    * {% include field.html name="tag" type="item tag" %} Tag to output. The preferred entry from the tag will be used for the output.
    * {% include field.html name="count" type="integer" %} Output stack size. If unset, defaults to 1.
</div>

## Fluid Stack

A fluid stack represents a fluid with a size, typically used in recipe outputs (as [fluid ingredients](../ingredients#fluid-ingredients) are more flexible for inputs).

Fluid stacks have the following format in JSON:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The item output object.
    * {% include field.html name="fluid" type="fluid ID" %} Fluid in the stack. If unset, defaults to `minecraft:empty` making the stack empty.
    * {% include field.html name="amount" type="integer" %} Output stack size. May be 0 to indicate an empty stack.
    * {% include field.html name="nbt" type="object" %} NBT for the item stack, represented as a JSON object. If unset, the output has no NBT.
    * {% include field.html name="nbt" type="string" %} NBT for the item stack, represented as a string. If unset, the output has no NBT.
</div>

Note that some contexts using fluid stacks disallow empty fluid stacks, in which case an `amount` of 0 or a `fluid` of `minecraft:empty` will cause a parsing error. In addition, some contexts will ignore the output NBT entirely, causing those fields to be ignored.