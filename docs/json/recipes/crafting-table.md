---
layout: page
title: Crafting Table Recipes
---
<div class="hatnote" markdown=1>
This page is about the format for custom crafting table recipes added by SlimeKnights mods. For the format of vanilla crafting table recipes, see [the Minecraft Wiki on recipes](https://minecraft.wiki/w/Recipe).
</div>

This page covers the format for custom crafting table recipes added by SlimeKnights mods. 

{% include toc.html %}

## Shaped Retextured

The shaped retextured recipe from Mantle defines a shaped crafting table recipe where the output has it's texture set based on one of the inputs. This is notably used in Tinkers' Construct to texture the legs of tables and the metal of the anvil, along with in Inspirations to texture bookshelves and enlightened bushes.

Shaped retextured recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:crafting_shaped_retextured`.
    {%- comment -%}
    1.20 stuff
    * {% include field.html name="category" type="string" %} Recipe book category for this recipe, may be `equipment`, `building`, `redstone`, or `misc` (default).
    * {% include field.html name="show_notification" type="boolean" %} If true (default), a notification will be shown when unlocking this recipe.
    {% endcomment %}
    * {% include field.html name="group" type="string" %} If set, this recipe will be grouped in the recipe book with other recipes that have the same `group`.
    * {% include field.html name="pattern" type="list" %} A list of strings representing the shaped pattern in the crafting table for this recipe.
        * {% include field.html type="string" %} A single row in the shaped pattern. Each character represents an input, matching a character from `key`.
    * {% include field.html name="key" type="object" %} A mapping from single character keys to the corresponding ingredients for `pattern`. 
        * {% include field.html name="\<character\>" type="ingredient" %} Ingredient corresponding to the character `<character>` in `pattern`.
    * {% include field.html name="result" type="item stack" %} Resulting item stack for this recipe.
    * {% include field.html name="texture" type="ingredient" %} Ingredient determining the texture to apply to the output. Typically should match a single entry in `key`, if it matches multiple behavior may be unpredictable.
    * {% include field.html name="match_all" type="boolean" %}
        * If true, all inputs matching `texture` must be the same item. If any mismatch, the output will be created with no texture (effectively using the default from it's block model).
        * If false (default), the first input matching `texture` is used as the texture, regardless of if the rest match.
</div>

## Shaped Fallback

The shaped fallback recipe from Mantle used to create a fallback recipe that fails to match if any recipes from the list of alternatives match. This recipe can be used when a block has multiple variants for vanilla blocks, but a default recipe is desired for non-vanilla blocks of the same type.

The shaped fallback recipe has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:crafting_shaped_fallback`.
    {%- comment -%}
    1.20 stuff
    * {% include field.html name="category" type="string" %} Recipe book category for this recipe, may be `equipment`, `building`, `redstone`, or `misc` (default).
    * {% include field.html name="show_notification" type="boolean" %} If true (default), a notification will be shown when unlocking this recipe.
    {% endcomment %}
    * {% include field.html name="group" type="string" %} If set, this recipe will be grouped in the recipe book with other recipes that have the same `group`.
    * {% include field.html name="pattern" type="list" %} A list of strings representing the shaped pattern in the crafting table for this recipe.
        * {% include field.html type="string" %} A single row in the shaped pattern. Each character represents an input, matching a character from `key`.
    * {% include field.html name="key" type="object" %} A mapping from single character keys to the corresponding ingredients for `pattern`. 
        * {% include field.html name="\<character\>" type="ingredient" %} Ingredient corresponding to the character `<character>` in `pattern`.
    * {% include field.html name="result" type="item stack" %} Resulting item stack for this recipe.
    * {% include field.html name="alternatives" type="list" %} List of alternative recipes IDs. If any of them match the input, this recipe will not match.
        * {% include field.html type="resource location" %} An alternative recipe ID. Must be the ID of either a `minecraft:crafting_shaped` or `minecraft:crafting_shapeless` recipe.
</div>

## Tool Repair

Tinkers' Construct adds several custom recipes related to tool repairing, which are covered more in depth on the relevant page.

* **`tconstruct:crafting_table_repair`**: Defines repairing modifiable tools using repair kits in the crafting table. See [tool recipes](../tools#crafting-table-repair-kit) for more information.
* **`tconstruct:specialized_repair_kit`**: Recipe format from before 1.19.2 for repairing tools without materials using repair kits in the crafting table. See [tool recipes](../tools#specialized-tool-repair) for more information.
* **`tconstruct:crafting_modifier_repair`**: Defines repairing a tool with a specific modifier in the crafting table using a standard ingredient. See [modifier repair recipes](../modifier-repair#item-repair) for more information.
* **`tconstruct:crafting_modifier_material_repair`**: Defines repairing a tool with a specific modifier in the crafting table using a repair kit with a specific material. See [modifier repair recipes](../modifier-repair#material-repair) for more information.