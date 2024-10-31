---
layout: page
title: Item Melting Recipes
---
<div class="hatnote" markdown=1>
This page is about the format for item melting recipes. For entity melting recipes, see [Entity Melting Recipes](../entity-melting).
</div>

This page covers the format for item melting recipes, which are used by the melter, smeltery, foundry, and melting modifier to melt items into fluids.

{% include toc.html %}

## Item Melting

Item melting recipes define melting an ordinary item into a fluid.

{% include construction.html type="section" %}

## Damageable Melting

Damageable melting recipes define melting an item with durability into a fluid. The amount of fluid scales based on the current durability of the item.

{% include construction.html type="section" %}

## Ore Melting

Ore melting recipes define melting an ore into a fluid. The result fluid is scaled based on whether the ore is melted in the melter, smeltery, foundry, or using the melting modifier.

{% include construction.html type="section" %}

## Part Melting

The part melting recipe defines melting a tool part into fluid based on the material of the part. This format is covered under [Material Recipes](../materials#melting).