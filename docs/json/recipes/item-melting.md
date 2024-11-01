---
layout: page
title: Item Melting Recipes
---
<div class="hatnote" markdown=1>
This page is about the format for item melting recipes. For entity melting recipes, see [Entity Melting Recipes](../entity-melting).
</div>

This page covers the format for item melting recipes, which are used by the melter, smeltery, foundry, and melting modifier to melt items into fluids.

Item melting recipes typically have a time value, which determines how quickly the recipe is performed. For a fuel with a temperature of 1000, the time is expressed in units of 1/5 of a second, meaning a time of 20 would take 4 seconds to melt. For other temperatures, the melting time is multiplied by `1000 / temperature`.

{% include toc.html %}

## Item Melting

Item melting recipes define melting an ordinary item into a fluid.
Item melting recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:melting`.
    * {% include field.html name="ingredient" type="ingredient" %} Item ingredient matching the item to melt.
    * {% include field.html name="time" type="integer" %} Time it takes to melt this item.
    * {% include field.html name="result" type="fluid stack" %} Melting result. Does not support NBT.
    * {% include field.html name="byproducts" type="list" %} Additional results produced in when this item is melted in the foundry. Unused in the melter, smeltery, and melting modifier. If unset, defaults to an empty list.
        * {% include field.html type="fluid stack" %} Byproduct result. Does not support NBT.
    * {% include field.html name="temperature" type="integer" %} Minimum fuel temperature to perform this alloy recipe.
</div>

## Damageable Melting

Damageable melting recipes define melting an item with durability into a fluid. The amount of fluid scales based on the current durability of the item, though it will always round down to the nearest unit size. For instance, if the unit size is 10, then the result will round down to the nearest 10mb.

Damageable melting recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:melting`.
    * {% include field.html name="ingredient" type="ingredient" %} Item ingredient matching the item to melt.
    * {% include field.html name="time" type="integer" %} Time it takes to melt this item.
    * {% include field.html name="result" type="fluid stack" %} Melting result. Does not support NBT.
        * {% include field.html name="unit_size" type="integer" %} Unit size for the melting result. If unset, defaults to 1. 
    * {% include field.html name="byproducts" type="list" %} Additional results produced in when this item is melted in the foundry. Unused in the melter, smeltery, and melting modifier. If unset, defaults to an empty list.
        * {% include field.html type="fluid stack" %} Byproduct result. Does not support NBT.
            * {% include field.html name="unit_size" type="integer" %} Unit size for the byproduct. If unset, defaults to 1.
    * {% include field.html name="temperature" type="integer" %} Minimum fuel temperature to perform this alloy recipe.
</div>

## Ore Melting

Ore melting recipes define melting an ore into a fluid. The result fluid is scaled based on whether the ore is melted in the melter, smeltery, foundry, or using the melting modifier.

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:melting`.
    * {% include field.html name="ingredient" type="ingredient" %} Item ingredient matching the item to melt.
    * {% include field.html name="time" type="integer" %} Time it takes to melt this item.
    * {% include field.html name="result" type="fluid stack" %} Melting result. Does not support NBT.
    * {% include field.html name="rate" type="string" %} Scaling method for melting result, and default scaling method for byproduct results. See [ore rates](#ore-rates).
    * {% include field.html name="byproducts" type="list" %} Additional results produced in when this item is melted in the foundry. Unused in the melter, smeltery, and melting modifier. If unset, defaults to an empty list.
        * {% include field.html type="fluid stack" %} Byproduct result. Does not support NBT.
            * {% include field.html name="rate" type="string" %} Scaling method for byproduct, see [ore rates](#ore-rates). If unset, defaults to the rate from the melting result.
    * {% include field.html name="temperature" type="integer" %} Minimum fuel temperature to perform this alloy recipe.
</div>

### Ore rates

Ore melting recipes support the following rates:

* `none`: No scaling. Useful to scale the result without scaling byproducts or vice versa.
* `metal`: Scales in terms of nuggets. By default:
    * The melter and smeltery produce 12 nuggets per ingot.
    * The foundry 9 nuggets per ingot.
    * Foundry byproducts produce 3 nuggets per ingot.
* `gem`: Scales in terms of "shards" (quarter gems). By default:
    * The melter and smeltery produce 8 shards per gem.
    * The foundry produces 4 shards per gem.
    * Foundry byproducts produce 4 shards per gem.

## Part Melting

The part melting recipe defines melting a tool part into fluid based on the material of the part. This format is covered under [Material Recipes](../materials#melting).