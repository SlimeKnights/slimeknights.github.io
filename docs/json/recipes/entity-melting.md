---
layout: page
title: Entity Melting Recipes
description: This page covers the format for entity melting recipes, which are used by the smeltery, foundry, and melting modifier to melt entities into fluids in Tinkers' Construct since 1.16.
---
<div class="hatnote" markdown=1>
This page is about the format for entity melting recipes. For item melting recipes, see [Item Melting Recipes](../item-melting).
</div>

{{page.description}}
In the smeltery and foundry, these recipes run every second with entities in the structure, damaging the entity and producing the amount of fluid listed, while the melting modifier triggers after damaging an entity using a weapon with the modifier.

The output fluid amount is the maximum fluid produced per operation, however if the entity takes less health than the damage listed in the recipe, the output fluid will be scaled down based on the damage dealt. The output amount is never scaled up, meaning the melting modifier may not produce the maximum amount of fluid for an entity's max health.

## Entity Melting

Entity melting recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:entity_melting`.
    * {% include field.html name="entity" type="entity ingredient" %} Entity to melt.
    * {% include field.html name="result" type="fluid output" %} Melting result, will be produced every operation.
    * {% include field.html name="damage" type="integer" %} Damage dealt to the entity per operation. If the entity takes less damage, `result` will be scaled linearly. If unset, defaults to 2.
</div>


## Default

If an entity lacks a recipe, it will still be meltable into the default fluid. Currently, the fluid produced by default from entity melting is not configurable.
In 1.19.2, the default recipe will melt the entity into 50mb of liquid soul, taking 2 damage each operation. In 1.16-1.18, the default recipe will melt the entity into 50mb of blood, taking 2 damage.

It is possible to configure which entities fallback to default.
Any living entities may be melted by default, however if an entity is tagged as `tconstruct:melting/hide_in_default` it will become unmeltable, taking no damage from the smeltery or foundry.
JEI will show all entities that are not in the mob category "misc" that lack a recipe, though additional entities can be shown in the default recipe by adding them to the entity tag  `tconstruct:melting/show_in_default`.

