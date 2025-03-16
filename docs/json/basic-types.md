---
layout: page
title: Basic Types
description: This page covers many commonly used JSON elements that show up in a variety off formats in data packs or resource packs.
---
<div class="hatnote" markdown=1>
See also: [Resource Locations](../resource-location), [Conditions](../conditions), [Ingredients](../ingredients), [Results](../results) and [Predicates](../predicates).
</div>
{{page.description}}

{% include toc.html %}

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

## Block State Variant

A block state variant is a string representation of a set of properties for a block state, notably used in the [block state format](https://minecraft.wiki/w/Tutorial:Models#Block_states).

A block state variant is a string containing a comma separated list of `<property>=<value>` pairs, where `<property>` is the name of a property on the block and `<value>` is a string representation of a value. The string does not need to contain every property on the block, only the ones the variant is used to match.

For example, the string `"facing=north,color=red"` would match a block with a property `color` set to `red` and a property `facing` set to `north`. Alternatively, `""` will match all variants of the block.

## Vector

A vector is a list of 3 integer values representing a coordinate, such as a world position or a location within a block model. They have the following format in JSON:

<div class="treeview" markdown=1>
* {% include field.html type="list" %} A vector.
    * {% include field.html type="number" %} First index representing the X value.
    * {% include field.html type="number" %} Second index representing the Y value.
    * {% include field.html type="number" %} Third index representing the Z value.
</div>

Alternatively, in many contexts a vector may also be specified in object format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A vector.
    * {% include field.html name="x" type="number" %} The X value.
    * {% include field.html name="y" type="number" %} The Y value.
    * {% include field.html name="z" type="number" %} The Z value.
</div>

## Direction

A direction is an enumeration of values used commonly for orientations in block models, commonly represented as a string. It has the following possible values:

* `down`: Represents a negative direction on the Y axis.
* `up`: Represents a positive direction on the Y axis.
* `north`: Represents a negative direction on the Z axis.
* `south`: Represents a positive direction on the Z axis.
* `west`: Represents a negative direction on the X axis.
* `east`: Represents a positive direction on the X axis.