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

### Text Color

Some JSON formats are deserialized using "text color", which is a variant of RGB colors that also supports parsing named colors. Text colors are parsed using the format of `"#RRGGBB"`, which is the same format as the 6 digit RGB string, except with a leading `#` character. In addition, text colors support the following named colors:

| Name | Value |
| :--- | :---- |
| `black`        | <span class="color" style="background-color: #000000;"/> `"#000000"` | 
| `dark_blue`    | <span class="color" style="background-color: #0000AA;"/> `"#0000AA"` |
| `dark_green`   | <span class="color" style="background-color: #00AA00;"/> `"#00AA00"` |
| `dark_aqua`    | <span class="color" style="background-color: #00AAAA;"/> `"#00AAAA"` |
| `dark_red`     | <span class="color" style="background-color: #AA0000;"/> `"#AA0000"` |
| `dark_purple`  | <span class="color" style="background-color: #AA00AA;"/> `"#AA00AA"` |
| `gold`         | <span class="color" style="background-color: #FFAA00;"/> `"#FFAA00"` |
| `gray`         | <span class="color" style="background-color: #AAAAAA;"/> `"#AAAAAA"` |
| `dark_gray`    | <span class="color" style="background-color: #555555;"/> `"#555555"` |
| `blue`         | <span class="color" style="background-color: #5555FF;"/> `"#5555FF"` |
| `green`        | <span class="color" style="background-color: #55FF55;"/> `"#55FF55"` |
| `aqua`         | <span class="color" style="background-color: #55FFFF;"/> `"#55FFFF"` |
| `red`          | <span class="color" style="background-color: #FF5555;"/> `"#FF5555"` |
| `light_purple` | <span class="color" style="background-color: #FF55FF;"/> `"#FF55FF"` |
| `yellow`       | <span class="color" style="background-color: #FFFF55;"/> `"#FFFF55"` |
| `white`        | <span class="color" style="background-color: #FFFFFF;"/> `"#FFFFFF"` |

## Tool Action

A tool action is a registry defined by Forge for behaviors that a tool may perform. Unlike [item tags](#tag-name), tool actions may be NBT sensitive. Tool action in JSON are simply string values, though any associated behavior typically needs to be defined in code.

For a list of tool actions defined by Forge, see [the Forge GitHub](https://github.com/MinecraftForge/MinecraftForge/blob/1.19.2/src/main/java/net/minecraftforge/common/ToolActions.java).

## Integer Range

Recipe types working with numbers often make use of the integer range type, which contains a minimum and maximum value in a range. This type can be parsed either as an object or an integer. As an object, an integer range has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The integer range object.
    * {% include field.html name="min" type="integer" %} Minimum value for the range. If unset, defaults to the minimum value for the given context.
    * {% include field.html name="max" type="integer" %} Maximum value for the range. If unset, defaults to the maximum value for the given context.
</div>

For an integer range to be valid, `max` must be greater than or equal to `min`. In the integer format, an integer range behaves as follows:

<div class="treeview" markdown=1>
* {% include field.html type="integer" %} The exact value to match.
</div>

This is equivalent to setting both `min` and `max` to the same value.

## Item Stack

A fluid stack represents an item with a size and optional NBT, typically used in recipe outputs (as [item ingredients](../ingredients#item-ingredients) are more flexible for inputs). Note that for most recipes, [item output](#item-output) is preferred due to allowing tag outputs, but select recipes still make use of direct item stacks.

In the most basic form, an item output may be just a string field containing an [item ID](#registry-ids), representing the output item with a stack size of 1:

<div class="treeview" markdown=1>
* {% include field.html type="Item ID" %} The item in the stack.
</div>

Alternatively, an item stack may be expressed as a JSON object, allowing setting count and NBT:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The item stack object.
    * {% include field.html name="item" type="item ID" %} Item in the stack. If unset, defaults to `minecraft:air` making the stack empty.
    * {% include field.html name="count" type="integer" %} Stack size. If unset, defaults to 1. If empty is supported, may be 0 to indicate an empty stack.
    * {% include field.html name="nbt" type="object" %} NBT for the item stack, represented as a JSON object. If unset, the stack has no NBT.
    * {% include field.html name="nbt" type="string" %} NBT for the item stack, represented as a string. If unset, the stack has no NBT.
</div>

Note that based on the usage, count may be fixed to 1, and NBT may be ignored. In addition, some contexts do not support empty item stacks, causing a parsing error.

## Item Output

An item output is essentially an [ingredient](../ingredients#item-ingredients) for recipe outputs.
In the most basic form, an item output may be just a string field containing an [item ID](#registry-ids), representing the output item with a stack size of 1:

<div class="treeview" markdown=1>
* {% include field.html type="Item ID" %} The item to output.
</div>

In other cases, the item output will be a JSON object, containing either a [stack](#stack-output) or a [tag](#tag-output).

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