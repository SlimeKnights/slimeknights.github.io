---
layout: page
title: Molding Recipes
description: This page covers recipes for transforming the item in a Tinkers' Construct casting basin or casting table by using another item on the table.
---
{{page.description}}

Molding recipes are run when a player holding an item interacts with a casting table or casting basin, which will attempt to transform the item in the table or basin as the second items is placed.
In addition, if that recipe is unsuccessful, or the player's hand is empty, a molding recipe with an empty mold will run upon attempting to pick up the item in the table, transforming it upon pickup.

## Molding

Basic molding recipes are primarily used in the creation of sand casts, where placing a tool part or other item shapes a sand cast based on the shape of the held item. In addition, they are used to unify sand cast variants upon pickup.

Molding recipes have two variants: `tconstruct:molding_table` is used when interacting with casting tables, and `tconsturct:molding_basin` is used when interacting with casting basins. Both variants have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:molding_table` or `tconsturct:molding_basin`.
    * {% include field.html name="material" type="ingredient" %} Ingredient matching the item already in the table.
    * {% include field.html name="pattern" type="ingredient" %} Ingredient matching the item held by the player. If unset, this recipe instead runs on item pickup and ignores the held item.
    * {% include field.html name="pattern_consumed" type="boolean" %} If true, the item held by the player is consumed when the recipe is performed. If false (default), the item is placed in the table.
    * {% include field.html name="result" type="item output" %} Item to replace `material` in the table or basin. If `pattern` is unset, this item will replace `material` on pickup.
</div>
