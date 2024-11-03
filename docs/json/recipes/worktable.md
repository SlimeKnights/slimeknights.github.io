---
layout: page
title: Worktable Recipes
---
This page covers the format for all modifier worktable recipes. Modifier worktable recipes take a tool, 1-2 input items, and a selection of a modifier to apply a modification to a tool; typically modifying a modifier. In addition, each recipe has a title and a description used for display in the worktable and in JEI.

Modifier worktable recipes tend to be highly specialized, as a result the recipe formats are mostly useful for changing the inputs to a recipe. Defining new custom behavior typically requires writing additional Java.

{% include toc.html %}

## Modifier Set

The modifier set worktable recipe creates a recipe that adds a modifier to or removes a modifier from a set in the tool's persistent data. It is notably used for invisible ink and selecting whether a dual interaction modifier works on left or right click on staffs.

Modifier set recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:modifier_set_worktable`.
    * {% include field.html name="tools" type="ingredient" %} Ingredient matching tools that may receive this modification. Typically should be a tag or a combination of tags. If unset, defaults to the item tag `tconstruct:modifiable`.
    * {% include field.html name="inputs" type="list" %} List of ingredients required to apply this recipe. Order does not matter. No current table supports a size larger than 2.
        * {% include field.html type="sized ingredient" %} A single sized ingredient to match.
    * {% include field.html name="modifier_predicate" type="Modifier Predicate" %} Predicate matching modifiers to apply. If unset, matches any modifier.
    * {% include field.html name="allow_traits" type="boolean" %} Predicate matching modifiers that may be added or removed from the set.
    * {% include field.html name="data_key" type="resource location" %} Resource location representing a list of modifiers in the tool's persistent data. Functionality of a given key is provided in code; by default the following keys exist:
        * **`tconstruct:invisible_modifiers`**: Modifiers which skip rendering in the tool model.
        * **`tconstruct:attack_modifiers`**: Interaction modifiers which trigger on left click instead of right click.
    * {% include field.html name="add_to_set" type="boolean" %} If true, the selected modifier will be added to the set indicated by `data_key`. If false, the selected modifier will be removed from the set.
</div>

Modifiers buttons shown in the modifier set worktable recipe will be based on modifiers matching `modifier_predicate` which are also present on the tool. If `add_to_set` is `true`, the modifiers must not be in the set on the current tool, while if `add_to_set` is `false`, the modifiers must be in the current set.

`data_key` and `add_to_set` are used to determine the title and description of the recipe as follows:

* If `add_to_set` is `true`, the title will be `recipe.<data_key_domain>.<data_key_name>.adding.title` and the description `recipe.<data_key_domain>.<data_key_name>.adding.description`.
* If `add_to_set` is `false`, the title will be `recipe.<data_key_domain>.<data_key_name>.removing.title` and the description `recipe.<data_key_domain>.<data_key_name>.removing.description`.

## Modifier Removal

The modifier removal worktable recipe is used to remove a modifier from a tool, restoring the relevant modifier slots as defined by [modifier salvage recipes](../modifiers#modifier-salvage). This recipe has two different variants, `tconstruct:remove_modifier` which simply removes the modifier, and `tconstruct:extract_modifier` which also gives the player a modifier crystal containing the removed modifier. For more details on modifier crystals, see [modifier recipes](../modifiers).

Modifier removal and modifier extraction recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:remove_modifier` or `tconstruct:extract_modifier`.
    * {% include field.html name="name" type="string" %} Name of this recipe. If unset, defaults to `modifiers`.
    * {% include field.html name="tools" type="sized ingredient" %} Sized ingredient matching tools that may receive this modification, with the size representing the minimum stack size. Typically should be a tag or a combination of tags. If unset, defaults to the item tag `tconstruct:modifiable`.
    * {% include field.html name="inputs" type="list" %} List of ingredients required to apply this recipe. Order does not matter. No current table supports a size larger than 2.
        * {% include field.html type="sized ingredient" %} A single sized ingredient to match.
    * {% include field.html name="modifier_predicate" type="Modifier Predicate" %} Predicate matching modifiers that may be removed. If unset, matches any modifier.
    * {% include field.html name="leftovers" type="list" %} List of item stacks to return after applying this recipe. Used to return "containers" for items from `inputs`.
        * {% include field.html type="item stack" %} An item stack to return, supports count and NBT, but may not be empty.
</div>

For `tconstruct:remove_modifier`, the title of the recipe will be translated from `recipe.tconstruct.remove_modifier.<name>`. 
For `tconstruct:extract_modifier`, the title of the recipe will be translated from `recipe.tconstruct.extract_modifier.<name>`.
In either case, the description is not determined by the recipe configuration.

## Enchantment Converting

The enchantment converting recipe is used to extract enchantments from either enchanted tools or enchanted books to produce modifier crystals. Unlike most other worktable recipes, the tool slot is filled with an enchanted book or tool instead of a modifiable item. For more details on modifier crystals, see [modifier recipes](../modifiers).

Enchantment converting recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:enchantment_converting`.
    * {% include field.html name="name" type="string" %} Name of this recipe. The title of this recipe will be translated from `recipe.tconstruct.extract_modifier.<name>`.
    * {% include field.html name="inputs" type="list" %} List of ingredients required to apply this recipe. Order does not matter. No current table supports a size larger than 2.
        * {% include field.html type="sized ingredient" %} A single sized ingredient to match.
    * {% include field.html name="modifier_predicate" type="Modifier Predicate" %} Predicate matching modifiers that may be extracted using this recipe. If unset, matches any modifier.
    * {% include field.html name="match_book" type="boolean" %} If true, matches enchanted books. If false, matches enchanted tools.
    * {% include field.html name="return_unenchanted" type="boolean" %}
        * If true, the tool or book minus the selected modifier is returned after performing this recipe. In addition, only a single level of the modifier is extracted.
        * If false, the tool or book is consumed. All levels of the selected modifier are extracted, scaling the cost of the recipe based on its level.
</div>

## Modifier Sorting

The modifier sorting worktable recipe allows changing the order of modifiers on a tool. This serves two purposes: changing the order modifier visuals apply in the tool model, and changing the precedence of two modifiers with the same priority.

The modifier sorting recipe has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:modifier_sorting`.
    * {% include field.html name="inputs" type="list" %} List of ingredients required to apply this recipe. Order does not matter. No current table supports a size larger than 2.
        * {% include field.html type="sized ingredient" %} A single sized ingredient to match.
</div>

The modifier sorting recipe always applies to all modifiers on the tool, and uses the same title and description regardless of the recipe configuration.