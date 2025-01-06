---
layout: page
title: Results
description: This page covers common result formats used primarily in recipes.
---
<div class="hatnote" markdown=1>
See also: [Ingredients](../ingredients).
</div>
{{page.description}}

{% include toc.html %}

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

In other cases, the item output will be a JSON object with format as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The item output object.
    * {% include field.html name="item" type="item ID" %} Item to output. If unset, defaults to `minecraft:air` making the output empty. Cannot be set alongside `tag`.
    * {% include field.html name="tag" type="item tag" %} Tag to output using Mantle's [tag preference](/docs/commands/mantle#tag-preference) system. The preferred entry from the tag will be used for the output. Cannot be set alongside `item`.
    * {% include field.html name="count" type="integer" %} Output stack size. If unset, defaults to 1. If empty is supported, may be 0 to indicate an empty output.
    * {% include field.html name="nbt" type="object" %} NBT for the item stack, represented as a JSON object. If unset, the output has no NBT.
    * {% include field.html name="nbt" type="string" %} NBT for the item stack, represented as a string. If unset, the output has no NBT.
</div>

In 1.19 and before, `nbt` is only supported alongside `item`. 1.20 allows using `nbt` with `tag`.

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

## Fluid Output
<div class="hatnote">Upcoming 1.20</div>

A fluid output is essentially an [fluid ingredient](../ingredients#fluid-ingredients) for recipe outputs. Before 1.20, most outputs instead used [fluid stacks](#fluid-stack).

A fluid output has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The item output object.
    * {% include field.html name="fluid" type="fluid ID" %} Fluid to output. If unset, defaults to `minecraft:empty` making the output empty. Cannot be set alongside `tag`.
    * {% include field.html name="tag" type="fluid tag" %} Tag to output using Mantle's [tag preference](/docs/commands/mantle#tag-preference) system. The preferred entry from the tag will be used for the output. Cannot be set alongside `item`.
    * {% include field.html name="amount" type="integer" %} Output stack size. If empty is supported, may be 0 to indicate an empty output.
    * {% include field.html name="nbt" type="object" %} NBT for the item stack, represented as a JSON object. If unset, the output has no NBT.
    * {% include field.html name="nbt" type="string" %} NBT for the item stack, represented as a string. If unset, the output has no NBT.
</div>