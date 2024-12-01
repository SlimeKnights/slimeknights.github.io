---
layout: page
title: Casting Recipes
description: This page covers formats for casting items using the casting table or casting basin in Tinkers' Construct since 1.16.
---
{{page.description}}

{% include toc.html %}

## Item Casting

Item casting recipes define casting a fluid into a casting table to produce a standard item. Item casting recipes have two variants, `tconstruct:casting_table` for casting tables, and `tconstruct:casting_basin` for casting basins. Both variants have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:casting_table` or `tconstruct:casting_basin`.
    * {% include field.html name="group" type="string" %} Recipe group for the recipe book, currently unused.
    * {% include field.html name="cast" type="ingredient" %} Item that must be in the table to cast this item. If unset, this part is casted by pouring fluid on an empty table.
    * {% include field.html name="cast_consumed" type="boolean" %} If true, the cast item is consumed when casting this item. If false (default), the cast item is preserved.
    * {% include field.html name="fluid" type="fluid ingredient" %} Fluid consumed to perform this casting recipe.
    * {% include field.html name="cooling_time" type="integer" %} Time in ticks (1/20 of a second) for this recipe to finish cooling.
    * {% include field.html name="result" type="item output" %} Result item for the recipe.
    * {% include field.html name="switch_slots" type="boolean" %} If true, after casting the item will be placed in the input and the cast in the output; used notably for cast creation. Defaults to false.
</div>

## Part Casting

There are two types of part casting recipes. The standard part casting recipes define casting a fluid into a casting table to produce a tool part or material item, which is covered on [Part Recipes](../parts#part-casting). Composite part casting recipes define casting a fluid on a tool part to change the material of the tool part, which is also covered on [Part Recipes](../parts#composite-casting). Both part casting and composite casting require associating a fluid with a material, which is defined on [Material Recipes](../materials#casting-and-composite).

## Potion Casting

Potion casting recipes define casting a potion on an item to produce a potion item. It notably is used to cast potions, splash potions, lingering potions, and tipped arrows. This recipe has two variants, `tconstruct:casting_table_potion` for casting tables, and `tconstruct:casting_basin_potion` for casting basins. Both variants have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:casting_table_potion` or `tconstruct:casting_basin_potion`.
    * {% include field.html name="group" type="string" %} Recipe group for the recipe book, currently unused.
    * {% include field.html name="bottle" type="ingredient" %} Item that must be in the table to cast this item.
    * {% include field.html name="fluid" type="fluid ingredient" %} Fluid consumed to perform this casting recipe. Typically should be a fluid ingredient matching the fluid tag `forge:potion`, though the size may vary.
    * {% include field.html name="cooling_time" type="integer" %} Time in ticks (1/20 of a second) for this recipe to finish cooling.
    * {% include field.html name="result" type="Item ID" %} Result item for the recipe. Expected to be an item that supports potion NBT, such as a potion, splash potion, lingering potion, or tipped arrow.
</div>