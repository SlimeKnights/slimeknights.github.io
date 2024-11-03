---
layout: page
title: Tool Recipes
---
<div class="hatnote" markdown=1>
This page is about recipes defining crafting tools. For the JSON defining the tool properties see [Tool Definitions](../../tool-definitions). For recipes related to modifying tools, see [Modifier Recipes](../modifiers).
</div>

In order for a tool to be craftable, its necessary to define the relevant recipes. This can either allow crafting tools in the tinker station or tinker's anvil, or crafting through other devices such as a casting table.

In addition, this page covers some auxiliary recipes related to tool maintenance that did not fit on other pages, such as repairing and part swapping.

{% include toc.html %}

## Tool Building

The tool building recipe allows crafting a tool in the tinker station or tinker's anvil. While the parts required to craft a tool are defined by the [tool definition](../../tool-definitions), this JSON is required to make the tool craftable in the relevant tables, and also allows defining additional non-tool part costs along with the output count.

Note that tools with no tool parts typically are defined using a standard [crafting table reci[e](https://minecraft.wiki/w/Recipe#crafting_shaped). However, it is possible to define a tool building recipe for them by making use of the `extra_requirements` field.

The format for a tool building recipe is the following:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tool_building`.
    * {% include field.html name="extra_requirements" type="list" %} Additional requirements to craft the tool beyond the tool parts. Order of the requirements matters. Optional if the tool definition has tool parts.
        * {% include field.html type="ingredient" %} Resulting tool. An additional ingredient requirement.
    * {% include field.html name="result" type="item ID" %} Resulting tool. Tool must be a modifiable item with a valid tool definition.
    * {% include field.html name="result_count" type="integer" %} Stack size of the resulting tool. If unset, defaults to 1.
    * {% include field.html name="layout_slot" type="resource location" %} ID of the [station slot layout](../../slot-layouts) used for displaying this recipe in JEI. If unset, defaults to the layout matching the tool's ID.
</div>

## Tool Casting

Tool casting recipe allow creating a tool (that has 1 or 2 materials) in the casting table by pouring molten metal on an item or tool part. This recipe type works in conjunction with [material fluid](../materials#casting-and-composite) for defining fluids used to cast tools. There are two variants of tool casting recipes: `tconstruct:table_tool_casting` for casting tools in the casting table, and `tconstruct:basin_tool_casting` for casting tools in the casting basin. Note that most tools are casted in the casting table, the casting basin recipe type is mainly provided for consistency with other casting recipes.

This recipe also currently defines part swapping by pouring molten metal on a tool, using [material fluid](../materials#casting-and-composite) both to select fluids for composite casting and for swapping materials. In the future, its likely the part swapping functionality will be split into a separate recipe type to allow tool casting using a non-consumed cast.

In addition, in terms of inputs tool casting is the same as [part composite casting](../parts#composite-casting). To minimize conflicts with a fluid that works as both a material and a composite, it is recommended to set the `casting_stat_conflict` field on the part composite casting recipe to the relevant [stat type](../../stat-types) from the tool being casted.

The format for a tool casting recipe is the following:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:table_tool_casting` or `tconstruct:basin_tool_casting`.
    * {% include field.html name="group" type="string" %} Recipe group for the recipe book, currently unused.
    * {% include field.html name="cast" type="ingredient" %} Input item used to cast this item. Will always be consumed in the recipe. If the tool requires 2 materials, the material of this item will be used for the first material on the result item.
    * {% include field.html name="item_cost" type="integer" %} Cost of this part. Will be used to scale the input fluid amount.
    * {% include field.html name="result" type="item ID" %} Resulting tool. Tool must be a modifiable item with a valid tool definition.
</div>

## Tool Recycling

The tool recycling recipe allows breaking a tool into parts in the part builder, selecting the pattern corresponding to the desired part to preserve. This recipe may only be used on tools that have no recipe modifiers applied.

This recipe has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:part_builder_tool_recycling`.
    * {% include field.html name="tools" type="sized ingredient" %} List of tools that may be recycled using this recipe. Defaults to any tool in the item tag `tconstruct:modifiable/multipart`.
    * {% include field.html name="pattern" type="ingredient" %} Item required in the pattern slot to recycle this tool.
</div>

By default, Tinkers' Construct applies this recipe to all tools that are tagged `tconstruct:modifiable/multipart` but not tagged `tconstruct:modifiable/unsalvageable`. This notably allows daggers (which have an output size of 2) to define a separate tool recycling recipe that requires recycling daggers in pairs (to prevent tool part duplication).

## Tool Damaging

The tool damaging recipe allows damaging a tool in the tinker station using an ingredient. It is used in the base mod to allow damaging tools using various forms of potions of harming, which can be useful for getting a specific durability value for maximizing a modifier effect, or simply to test durability loss on tools during development. This recipe will work on any tool with durability.

The tool damaging recipe has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tinker_station_damaging`.
    * {% include field.html name="ingredient" type="ingredient" %} Item used to damage the tool.
    * {% include field.html name="damage_amount" type="integer" %} Amount of durability removed by this recipe.
</div>

## Special Tool Recipes

This section covers various specialized recipes associated with tools. It is not useful for an addon to redefine any of these recipes, but the knowledge may be useful to a modpack creator.

### Tinker Station Repair

The recipe serializer `tconstruct:tinker_station_repair` allows repairing a tool using materials. It notably handles repairing a tool using the materials of tool parts. In addition, since 1.19.2 this recipe handles repairing tools with no materials using a material defined in the [tool definition](../../tool-definitions#material-hooks).

### Crafting Table Repair Kit

The recipe serializer `tconstruct:crafting_table_repair` allows repairing a tool using repair kits in the crafting table. It notably handles repairing a tool using the materials of tool parts. In addition, since 1.19.2 this recipe handles repairing tools with no materials using a material defined in the [tool definition](../../tool-definitions#material-hooks).

### Part Swapping

The recipe serializer `tconstruct:tinker_station_part_swapping` allows swapping parts on a tool using a matching tool part. The part list for the tool is pulled directly from the [tool definition](../../tool-definitions#material-hooks).

## Specialized Tool Repair
<div class="hatnote">This recipe type no longer exists in current versions of Tinkers' Construct. It is documented here for the sake of people working with older versions.</div>

Before 1.19.2, two additional recipe types existed to define repairing a tool with no tool parts using a material or item. In 1.19.2, this was moved to the [tool definition](../../tool-definitions), causing the standard [tinker station repair](#tinker-station-repair) and [crafting table repair kit](#crafting-table-repair-kit) recipes to handle this functionality, and as a result this recipe type no longer exists.

There are two variants of this recipe: `tconstruct:specialized_station_repair` defines repairing the tool in the tinker station or anvil with the appropiate material items, and `tconstruct:specialized_repair_kit` defines repairing the tool in the crafting table using a repair kit. Both variants have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:specialized_station_repair` or `tconstruct:specialized_repair_kit`.
    * {% include field.html name="tool" type="ingredient" %} Tool being repaired.
    * {% include field.html name="repair_material" type="material ID" %} Material used to repair the tool.
</div>
