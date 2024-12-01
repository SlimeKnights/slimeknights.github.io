---
layout: page
title: Part Builder Recipes
description: This page covers all recipe formats for crafting items in the Tinkers' Construct part builder.
---
{{page.description}}

{% include toc.html %}

## Items

The item part builder recipe type allows crafting an item in the part builder. This type is notably used to craft stone plating (the items used to craft plating casts), and to craft sand casts in the part builder.

Item part builder recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Recipe serializer ID, always `tconstruct:item_part_builder`.
    * {% include field.html name="pattern" type="pattern" %} Pattern button that must be selected to craft this part. Typically matches the name of the result tool part.
    * {% include field.html name="pattern_item" type="ingredient" %} Item required in the pattern slot to craft this part. If unset, defaults to an ingredient matching the item tag `tconstruct:patterns/default`.
    * {% include field.html name="material" type="material variant" %} Material required to craft this item. If unset, the material slot must be empty (used in sand cast creation).
    * {% include field.html name="cost" type="integer" %} Cost of this part. Will be used to scale the input item cost. If unset, defaults to 0, which is only valid if `material` is also unset.
    * {% include field.html name="result" type="item output" %} The result of this recipe.
</div>

## Tool Parts

The tool part builder recipe is used to craft tool parts with material variants in the part builder. The format for this recipe is described under [Part Recipes](../parts#part-builder).

## Tool Recycling

The tool recycling recipe allows breaking a tool into parts in the part builder, selecting the pattern corresponding to the desired part to preserve. The format for this recipe is described under [Tool Recipes](../tools#tool-recycling).