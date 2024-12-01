---
layout: page
title: Part Recipes
description: In order for a Tinkers' Construct tool part or material item (such as a repair kit) to be craftable in the relevant machines, its necessary to define recipes for crafting that part. These recipes perform the actual crafting logic within the machine, and also are used to define any associated costs for the part. Most parts will wish to define all relevant recipes to ensure the part can be made in all relevant machines.
---

<div class="hatnote" markdown=1>
This page is about the JSON to make a tool part or material item craftable. For the recipe making the material side of the part craftable, see [Material Recipes](../materials).
</div>

{{page.description}}

Most recipes define a cost field. The value of the cost is in terms of the "base unit" of the material, which is up to the material to define. For metals, this base unit is typically an ingot, while for wood it is a single plank. As a baseline, 2 of the base unit is expected to craft most tool heads. Typically, the cost of a part should remain consistent across all relevant recipes.

{% include toc.html %}

## Part Builder

The part builder recipe allows creating the tool part in the part builder. This recipe type works in conjunction with [material items](../materials#items). It also notably only allows crafting materials that are marked as craftable in their [material definition](../../materials#definition).

The format for a part builder recipe is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Recipe serializer ID, always `tconstruct:part_builder`.
    * {% include field.html name="group" type="string" %} Recipe group for the recipe book, currently unused.
    * {% include field.html name="pattern" type="pattern" %} Pattern button that must be selected to craft this part. Typically matches the name of the result tool part.
    * {% include field.html name="pattern_item" type="ingredient" version="1.18+" %} Item required in the pattern slot to craft this part. If unset, defaults to an ingredient matching the item tag `tconstruct:patterns/default`.
    * {% include field.html name="cost" type="integer" %} Cost of this part. Will be used to scale the input item cost.
    * {% include field.html name="result" type="object" %} The result of this recipe.
        * {% include field.html name="item" type="item ID" %} Result item for the recipe. Should be an item that supports materials.
        * {% include field.html name="count" type="integer" %} Result count for the recipe. If unset, defaults to 1.
</div>

## Part Casting

Part casting recipes define crafting a tool part by pouring a liquid into a cast. This recipe type works in conjunction with [material fluid](../materials#casting-and-composite). There are two variants of part casting, `tconstruct:table_casting_material` for casting parts in a casting table, and `tconstruct:basin_casting_material` for casting parts in a casting basin. Note most tool parts are casted in a table, the basin format is just provided for consistency with other casting recipe types.

The format for a part casting recipe is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Recipe serializer ID, always `tconstruct:table_casting_material` or `tconstruct:basin_casting_material`.
    * {% include field.html name="group" type="string" %} Recipe group for the recipe book, currently unused.
    * {% include field.html name="cast" type="ingredient" %} Item that must be in the table to cast this tool part. If unset, this part is casted by pouring fluid on an empty table (which is non-standard for tool parts).
    * {% include field.html name="cast_consumed" type="boolean" %} If true, the cast item is consumed when casting this part (used for sand casts). If false (default), the cast item is preserved (used for gold casts).
    * {% include field.html name="item_cost" type="integer" %} Cost of this part. Will be used to scale the input fluid amount.
    * {% include field.html name="result" type="item ID" %} Result item for the recipe. Should be an item that supports materials.
    * {% include field.html name="switch_slots" type="boolean" %} If true, after casting the tool part will be placed in the input and the cast in the output. Defaults to false (which is more standard).
</div>

## Composite Casting

Composite casting recipes define crafting a tool part by pouring a onto the tool part with a different material. This recipe type works in conjunction with [material fluid](../materials#casting-and-composite). There are two variants of composite casting, `tconstruct:table_casting_composite` for composite casting in a casting table, and `tconstruct:basin_casting_composite` for composite casting in a casting basin. Note most tool parts are casted in a table, the basin format is just provided for consistency with other casting recipe types.

The format for a part casting recipe is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Recipe serializer ID, always `tconstruct:table_casting_material` or `tconstruct:basin_casting_material`.
    * {% include field.html name="group" type="string" %} Recipe group for the recipe book, currently unused.
    * {% include field.html name="item_cost" type="integer" %} Cost of this part. Will be used to scale the input fluid amount.
    * {% include field.html name="result" type="item ID" %} Result item for the recipe. Should be an item that supports materials.
    * {% include field.html name="casting_stat_conflict" type="stat type ID" version="1.19+" %} If set, prevents composite casting with any materials that support the given stat type. Used to prevent conflicts between composite casting and [tool casting recipes](../tools#casting).
</div>
