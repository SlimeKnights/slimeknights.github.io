---
layout: page
title: Severing Recipes
---
Severing recipes are used to define additional drops for mobs when using the severing modifier.

For any given recipe, the chance of the item dropping is 5% plus 1% per level of looting. That chance is then multiplied by the level of the severing modifier.
An entity may have multiple matching severing recipes, in which case the chance is resolved independently for each recipe.

{% include toc.html %}

## Severing

The basic severing recipe defines an additional drop from the severing modifier for an entity. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:severing`.
    * {% include field.html name="entity" type="entity ingredient" %} Ingredient determining which entities have a chance of this additional drop.
    * {% include field.html name="result" type="item output" %} Additional result to drop.
</div>

## Ageable Severing

Ageagble severing allows defining a different drop for an adult version and a baby version of a farm animal. Most often, its used to prevent a drop when a baby is killed. This recipe has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:ageable_severing`.
    * {% include field.html name="entity" type="entity ingredient" %} Ingredient determining which entities have a chance of this additional drop.
    * {% include field.html name="adult_result" type="item output" %} Additional result to drop if the mob is an adult.
    * {% include field.html name="child_result" type="item output" %} Additional result to drop if the mob is a child. If unset, the mob will drop nothing when a child.
</div>

## Special Severing

Some mobs have special severing recipes that define specific drops based on the mob properties. These recipes are hardcoded to the particular entity type and drops list, as discussed in the following subsections.

### Player Beheading

The severing recipe `tconstruct:player_beheading` matches entities of type `minecraft:player`. It drops `minecraft:player_head` with the skin set to the skin of the player killed.

### Mooshroom Demushrooming

The severing recipe `tconstruct:mooshroom_demushrooming` matches entities of type `minecraft:mooshroom`. It will drop 5 `minecraft:red_mushroom` if the mooshroom is red, or 5 `minecraft:brown_mushroom` if the mooshroom is brown. If the mooshroom is a baby, nothing will drop.

### Sheep Shearing

The severing recipe `tconstruct:sheep_shearing` matches entities of type `minecraft:sheep`. It will drop 2 wool, with color matching the sheep's wool. If the sheep is a baby, nothing will drop.

### Snow Golem Beheading

The severing recipe `tconstruct:snow_golem_beheading` matches entities of type `minecraft:snow_golem`. It will drop `minecraft:carved_pumpkin` if the snow golem has a pumpkin, or `minecraft:snow_block` if the snow golem lacks a pumpkin.
