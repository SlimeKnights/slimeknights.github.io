---
layout: page
title: Material Recipes
description: In order for a Tinkers' Construct material to be craftable and repairable, its necessary to define one or more recipes. This page documents the recipe format for working with materials using the part builder, casting, and melting.
---

<div class="hatnote" markdown=1>
This page is about the JSON to make a material craftable. For the JSON to define the material, see [Material Format](../../materials). For the JSON to craft tool parts and other material items, see [Part Recipes](../parts).
</div>

{{page.description}}

{% include toc.html %}

## Items

The material item recipe associates an item with a material. This association allows using the item to repair tools if the material is on a [repairable part](../../stat-types). In addition, if the material is marked as craftable in it's [material definition](../../materials#definition), this recipe allows using that item to craft the material in the [part builder](../parts#part-builder).

A given item can only be associated with one material, otherwise there may be conflicts when crafting or repairing. Similarly, if the item is used by itself in a [modifier recipe](../modifiers), it may conflict with being used as a material item.

Material item recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Recipe serializer ID, always `tconstruct:material`.
    * {% include field.html name="group" type="string" %} Recipe group for the recipe book, currently unused.
    * {% include field.html name="ingredient" type="ingredient" %} Items to associate with the material.
    * {% include field.html name="value" type="integer" %} Value associated with this recipe, in comparison to the material's base unit. For example, a block of metal would have a value of 9 compared to the base unit of ingots. If unset, defaults to 1.
    * {% include field.html name="needed" type="integer" %} Denominator of the value associated with this recipe, allows an item to represent a fraction of the base unit. For example, a nugget would have a `value` of 1 with `needed` set to 9 to indicate it represents 1/9 of the base unit of ingot. If unset, defaults to 1.
    * {% include field.html name="material" type="material variant" %} Material variant produced by this recipe. Note that when repairing, just the material ID is matched; the variant is ignored.
    * {% include field.html name="leftover" type="item output" %} Leftover item stack (supporting count) produced when only part of `value` is required for a recipe. If unset, defaults to an empty item stack. Unused if `value` is 1.
</div>

## Casting and Composite

The material fluid recipe is used to define a fluid needed for [casting a material](../parts#part-casting). This recipe is also used to define the fluid for [composite casting a material](../parts#composite-casting) from a fluid on another material.

Material casting recipes have the folllowing format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Recipe serializer ID, always `tconstruct:material_fluid`.
    * {% include field.html name="fluid" type="fluid ingredient" %} Fluid used to cast this material. Amount will be scaled based on the part cost.
    * {% include field.html name="temperature" type="integer" %} Fluid temperature. Used to determine how long it takes the part to cool after casting.
    * {% include field.html name="output" type="material variant" %} Material variant produced by this recipe.
    * {% include field.html name="input" type="material variant" %} If set, this recipe defines composite castng using `input` as a base. If unset, this recipe defines standard part casting using a cast as the base.
</div>

## Melting

Material melting recipes allow melting tool parts into the appropriate fluid in a smeltery, melter, or foundry. The cost for melting is determined through lookup on the [part casting recipe](../parts#part-casting).

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Recipe serializer ID, always `tconstruct:material_melting`.
    * {% include field.html name="input" type="material variant" %} Material melted by this recipe.
    * {% include field.html name="temperature" type="integer" %} Fluid temperature. Used to determine how long it takes the part to melt, and allows gating the recipe using the fuel temperature.
    * {% include field.html name="result" type="fluid stack" %} Result fluid for melting this material. Size will be scaled based on the part cost. May not be empty, and ignores NBT.
</div>
