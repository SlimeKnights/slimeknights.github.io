---
layout: page
title: Modifier Recipes
---
<div class="hatnote" markdown=1>
This page is about the recipes used to apply modifiers to tools. For the recipes implementing repair based modifiers, see [Modifier Repair Recipes](../modifier-repair). For the recipes implementing the severing modifier, see [Severing Recipes](../severing).
</div>

Modifier recipes are used to apply modifiers to tools. Unless otherwise stated, the inputs in the modifier recipe may be applied in any order.

{% include toc.html %}

## Common Components

Modifier recipes share certain common components, which are discussed more in depth here.

### Slot Types

Tools support many different modifier slot types. By default, the following slot types are available:

* `upgrades`: Common modifier slot for low cost modifier recipes. Tools have many upgrade slots and can receive many more.
* `abilities`: Rare modifier slot for high cost or high impact modifiers. Tools have few ability slots and adding more is expensive.
* `defense`: Uncommon modifier slots available on most forms of armor. While armor tends to have more defense slots than ability slots, there is only 1 way to gain an additional defense slot.

Beyond the default types, modpacks can freely define additional slot types, provided they also define a way to obtain the slots on tools using modifiers or tool starting slots.

### Slot Count

A slot count object represents a slot requirement or reward on a modifier recipe. Typically, it has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="Slot Count" link="#slot-count" %} Slot count object.
    * {% include field.html name="\<slot\>" type="integer" %} Number of slots of the [slot type](#slot-types) `<slot>`.
</div>

For example, `{ "upgrades": 3 }` represents a slot count of 3 upgrades. In most cases, a slot count may only have 1 type of slot specified, and leaving the object out represents no slots.

### Level Ranges

Many modifier recipes support level ranges, which validate the minimum and maximum levels allowed by the recipe. This level is validated after applying the modifier recipe (that is, the current level plus 1). Level ranges typically default the minimum to 1 if unset. For more information on the level range format, see [Integer Ranges](/docs/json/basic-types#integer-range).

For example, if the level range has a minimum of 2 and a maximum of 5, then the recipe requires the tool has at least 1 level of the modifier to apply, and may not increase the level above 5.

## Basic Modifiers

Basic modifier recipes are the most common way to apply modifiers. They define a recipe combining a list of supported tools with a list of unique inputs to apply a modifier.

Basic modifier recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:modifier`.
    * {% include field.html name="tools" type="ingredient" %} Ingredient matching tools that may receive this modifier. Typically should be a tag or a combination of tags.
    * {% include field.html name="max_tool_size" type="integer" %} Maximum number of tools that can receive this modifier at once. Used by stackable tools such as daggers to allow applying a modifier to fewer tools at once. If unset, defaults to 16.
    * {% include field.html name="inputs" type="list" %} List of sized ingredients for the requirements to apply this recipe. All items must be present with the minimum stack size to apply.
        * {% include field.html type="sized ingredient" %} A single sized ingredient.
    * {% include field.html name="slots" type="Slot Count" link="#slot-count" %} Modifier slots required to apply this recipe, will be removed when applied, or produce a validation error if the tool has too few slots. If unset, no slots are required.
        * {% include field.html name="\<slot\>" type="integer" %} Number of slots required of the [slot type](#slot-types) `<slot>`. Only one slot type may be specified.
    * {% include field.html name="result" type="Modifier ID" %} Modifier applied by this recipe. In addition to other validations, the tool will be validated after applying this modifier to check modifier requirements.
    * {% include field.html name="level" type="int range" %} The resulting tool's level of `result` must be within this range after applying the recipe, see [level ranges](#level-ranges). If unset, any level is allowed.
    * {% include field.html name="check_trait_level" type="boolean" %} If true, `level` will consider the trait level on the tool, useful for preventing wasting resources on some abilities that also appear as traits. Defaults to false, which ignores the trait level.
    * {% include field.html name="allow_crystal" type="boolean" %} If true (default), this modifier recipe may be applied using a modifier crystal, ignoring the standard inputs. Unusual modifier recipes will often set this to false to special case crystals.
</div>

## Incremental Modifiers

Incremental modifier recipes support adding a partial level of the modifier instead of requiring a full level to be added at once. Partial levels of modifiers cause the modifier effect to be scaled, though note not every effect supports scaling; some may simply round down to the nearest level.

Incremental modifier recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:incremental_modifier`.
    * {% include field.html name="tools" type="ingredient" %} Ingredient matching tools that may receive this modifier. Typically should be a tag or a combination of tags.
    * {% include field.html name="max_tool_size" type="integer" %} Maximum number of tools that can receive this modifier at once. Used by stackable tools such as daggers to allow applying a modifier to fewer tools at once. If unset, defaults to 16.
    * {% include field.html name="input" type="ingredient" %} Item used to apply this modifier.
    * {% include field.html name="needed_per_level" type="integer" %} Number of items needed for a full level of this modifier.
    * {% include field.html name="amount_per_item" type="integer" %} Amount this recipe counts towards `needed_per_level`. Used to allow multiple recipes to apply the same modifier at different values, for instance redstone may count as 1 while redstone blocks count as 9. If unset, defaults to 1.
    * {% include field.html name="leftover" type="item output" %} Item to return if the tool needs less than `amount_per_item` to reach `needed_per_level`. Stack size will be scaled based on the extra amount. If unset, then no leftover is returned. Unused if `amount_per_item` is 1.
    * {% include field.html name="slots" type="Slot Count" link="#slot-count" %} Modifier slots required to apply this recipe, will be removed when applied, or produce a validation error if the tool has too few slots. If unset, no slots are required. Ignored on tools that already contain this modifier.
        * {% include field.html name="\<slot\>" type="integer" %} Number of slots required of the [slot type](#slot-types) `<slot>`. Only one slot type may be specified.
    * {% include field.html name="result" type="Modifier ID" %} Modifier applied by this recipe. In addition to other validations, the tool will be validated after applying this modifier to check modifier requirements.
    * {% include field.html name="level" type="int range" %} The resulting tool's level of `result` must be within this range after applying the recipe, see [level ranges](#level-ranges). If unset, any level is allowed.
    * {% include field.html name="check_trait_level" type="boolean" %} If true, `level` will consider the trait level on the tool, useful for preventing wasting resources on some abilities that also appear as traits. Defaults to false, which ignores the trait level.
    * {% include field.html name="allow_crystal" type="boolean" %} If true (default), this modifier recipe may be applied using a modifier crystal, ignoring the standard inputs. Unusual modifier recipes will often set this to false to special case crystals.
</div>

## Swappable Modifiers

Swappable modifier recipes allow a single modifier to have multiple variants applied with different recipes. If a modifier is already present on a tool and a different variant recipe is applied, the variant is changed and no modifier slots are consumed. This recipe is notably used for the rebalanced modifier, along with the crystalshot variants.

Swappable modifier recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:swappable_modifier`.
    * {% include field.html name="tools" type="ingredient" %} Ingredient matching tools that may receive this modifier. Typically should be a tag or a combination of tags.
    * {% include field.html name="max_tool_size" type="integer" %} Maximum number of tools that can receive this modifier at once. Used by stackable tools such as daggers to allow applying a modifier to fewer tools at once. If unset, defaults to 16.
    * {% include field.html name="inputs" type="list" %} List of sized ingredients for the requirements to apply this recipe. All items must be present with the minimum stack size to apply.
        * {% include field.html type="sized ingredient" %} A single sized ingredient.
    * {% include field.html name="slots" type="Slot Count" link="#slot-count" %} Modifier slots required to apply this recipe, will be removed when applied, or produce a valuation error if the tool has too few slots. If unset, no slots are required.
        * {% include field.html name="\<slot\>" type="integer" %} Number of slots required of the [slot type](#slot-types) `<slot>`. Only one slot type may be specified.
    * {% include field.html name="result" type="object" %} Result object.
        * {% include field.html name="name" type="Modifier ID" %} Modifier applied by this recipe. In addition to other validations, the tool will be validated after applying this modifier to check modifier requirements.
        * {% include field.html name="value" type="string" %} Modifier variant applied by this recipe. In the recipe serializer, any value is allowed, though based on the modifier there may be restrictions on useful values.
    * {% include field.html name="variant_formatter" type="resource location" %} Determines how the modifier variant is displayed in recipe viewers such as JEI. The following options exist by default:
        * **`tconstruct:default`**: Displays the variant using the translation key `modifier.<result_domain>.<result_name>.<value>`. Default since 1.19.2.
        * **`tconstruct:material`**: Treats the variant as a [material variant](../../materials#variants), formatting it using the material's display name.
        * **`tconstruct:none`**: Displays the variant as an untranslated string. Only available in 1.18.2, where it is the default value (to prevent breaking old recipes).
    * {% include field.html name="allow_crystal" type="boolean" %} If true (default), this modifier recipe may be applied using a modifier crystal, ignoring the standard inputs. For swappable modifiers, typically all variants except at most one should set this to false to prevent conflicts.
</div>

## Multilevel Modifiers

Multilevel modifier recipes allow a modifier to have different slot requirements each level without changing the input list. It is also commonly used to allow modifier crystals to function in recipes with different inputs on each level.

Multilevel modifier recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:multilevel_modifier`.
    * {% include field.html name="tools" type="ingredient" %} Ingredient matching tools that may receive this modifier. Typically should be a tag or a combination of tags.
    * {% include field.html name="max_tool_size" type="integer" %} Maximum number of tools that can receive this modifier at once. Used by stackable tools such as daggers to allow applying a modifier to fewer tools at once. If unset, defaults to 16.
    * {% include field.html name="inputs" type="list" %} List of sized ingredients for the requirements to apply this recipe. All items must be present with the minimum stack size to apply. If unset, this recipe will only work with modifier crystals, and will not be displayed in JEI.
        * {% include field.html type="sized ingredient" %} A single sized ingredient.
    * {% include field.html name="result" type="Modifier ID" %} Modifier applied by this recipe. In addition to other validations, the tool will be validated after applying this modifier to check modifier requirements.
    * {% include field.html name="levels" type="list" %} List of slot requirements for each level range. Any levels outside the ranges listed are not supported for this recipe and will produce a validation error.
        * {% include field.html type="object" %} A level entry object. Determines for a given level range the slot requirement.
            * {% include field.html name="level" type="int range" %} If the resulting tool's level of `result` is within this range after applying the recipe, this entry applies. See [level ranges](#level-ranges).
            * {% include field.html name="slots" type="Slot Count" link="#slot-count" %} Modifier slots required to apply this recipe for this level range, will be removed when applied, or produce a validation error if the tool has too few slots. If unset, no slots are required for this level range.
                * {% include field.html name="\<slot\>" type="integer" %} Number of slots required of the [slot type](#slot-types) `<slot>`. Only one slot type may be specified.
    * {% include field.html name="check_trait_level" type="boolean" %} If true, `levels` will consider the trait level on the tool, useful for preventing wasting resources on some abilities that also appear as traits. Defaults to false, which ignores the trait level.
    * {% include field.html name="allow_crystal" type="boolean" %} If true (default), this modifier recipe may be applied using a modifier crystal, ignoring the standard inputs. Unusual modifier recipes will often set this to false to special case crystals.
</div>

## Modifier Salvage

Modifier salvage recipes are used to define the modifier slots returned after removing a modifier using the [modifier worktable](../worktable). When adding recipes through datagen, you can automatically datagen a salvage recipe from the builders for any of the above formats.

Modifier salvage recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:modifier_salvage`.
    * {% include field.html name="tools" type="ingredient" %} Ingredient matching tools that may produce this salvage. Typically should be a tag or a combination of tags.
    * {% include field.html name="max_tool_size" type="integer" %} Unused, leftover from an older version of modifier salvage.
    * {% include field.html name="modifier" type="Modifier ID" %} Modifier removed to apply this salvage.
    * {% include field.html name="level" type="int range" %} The initial tool's level of `modifier` must be within this range for this salvage to apply, see [level ranges](#level-ranges). If unset, any level will apply this salvage.
    * {% include field.html name="slots" type="Slot Count" link="#slot-count" %} Modifier slots returned when removing this modifier.
        * {% include field.html name="\<slot\>" type="integer" %} Number of slots returned of the [slot type](#slot-types) `<slot>`. Only one slot type may be specified.
</div>


## Specialized Recipes

These modifier recipes are used to apply modifiers with specialized behavior.

### Overslime

The overslime modifier recipe is used to apply the overslime modifier and increase the amount of overslime. This modifier essentially acts as a second durability bar on tool, making this recipe type effectively repairing the tool's overslime. This recipe will be applicable to any tool that supports durability based modifiers.

Overslime modifier recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:overslime_modifier`.
    * {% include field.html name="ingredient" type="ingredient" %} Item used to apply this recipe. Typically a slimeball variant.
    * {% include field.html name="restore_amount" type="integer" %} Amount of overslime restored by this recipe.
</div>

### Armor Dyeing

The armor dyeing modifier recipe is used to apply the dyed modifier. Typically, its not useful to add another copy of this recipe, as Tinkers' Construct already adds this modifier to any tools in the item tag `tconstruct:modifiable/dyeable` (meaning its easier to just add your tool to the item tag).

The armor dyeing recipe has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:armor_dyeing_modifier`.
    * {% include field.html name="tools" type="ingredient" %} Ingredient matching tools that may receive this modifier. Typically should be a tag or a combination of tags.
</div>

### Creative Slot

The creative slot modifier recipe `tconstruct:creative_slot_modifier` is used to apply the creative slot modifier. This recipe will dynamically support adding in any registered modifier [slot type](#slot-types) with no limit. It is designed for testing in creative mode, and will likely be made creative only in the future due to abuse in modpacks.

If you are a modpack maker, do not give players creative modifiers, they are meant for creative mode. Use [basic modifier recipes](#basic-modifiers) to add a new recipe for a new modifier slot you can properly limit.