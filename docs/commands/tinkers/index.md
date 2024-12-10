---
layout: page
title: Tinkers' Construct Commands
description: Since 1.16.5, Tinkers' Construct adds several commands under the root command /tconstruct. This page lists the usage and syntax of all commands added by Tinkers' Construct.
---
Since 1.16.5, Tinkers' Construct adds several commands under the root command `/tconstruct`. This page lists the usage and syntax of all commands added by Tinkers' Construct.

{% include toc.html %}

## Modifiers

The modifiers command is used to either add or remove a modifier from the player's held tool.

### Add Modifier

The add modifier command adds a modifier to the target entity's held tool.

For the command to succeed, the tool must both be modifiable and able to build with the given modifier (e.g. netherite requires the tool has a diamond). The modifier does not need to be normally applicable to the tool, and no modifier slots are consumed. Note that modifiers added through this may still be removed, such as using the [modifier worktable](/docs/json/recipes/worktable#modifier-removal).

**Syntax:**
```
/tconstruct modifiers <target> add <modifier> [level]
```

**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="\<modifier\>" type="Modifier ID" %} Modifier to add to the tool.
* {% include field.html name="[level]" type="int" %} Number of levels of the modifier to add. If unset, adds 1 level.

### Remove Modifier

The remove modifier command removes a modifier from the target entity's held tool.

For the command to succeed, the tool must both be modifiable and able to build without the given modifier (level). The modifier can only be removed if it was added to the tool using a recipe or the [add modifier](#add-modifier) command, traits cannot be removed. Removing modifiers using this command will not restore modifier slots.

**Syntax:**
```
/tconstruct modifiers <target> remove <modifier> [level]
```
**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="\<modifier\>" type="Modifier ID" %} Modifier to remove from the tool.
* {% include field.html name="[level]" type="int" %} Number of levels of the modifier to remove. If unset, removes all levels.

## Tool Stats

The tool stats command allows directly modifiying a tool's stats. Any changes made through this command will show in the tooltip of the "Stat Override" modifier.

### Bonus Stats

Adds stat bonuses to the tool. These bonuses will apply before the tool's multipliers, meaning the stat adjustment may not be exactly the same as result shown.

**Syntax:**

```
/tconstruct tool_stats <target> bonus <operation> <tool_stat> <value>
```

**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="\<operation\>" type="String" %} Operation to perform. May be one of the following:
    * `add`: adds the passed value to the currently set bonus. Only applicable if the stat type is numeric.
    * `set`: sets the current bonus to the passed value, overriding any bonus set before.
    * Note the two operations are equivalent if there is no bonus for the given stat currently.
* {% include field.html name="\<tool_stat\>" type="tool stat" %} Stat to set, may be any available tool stat.
* {% include field.html name="\<value\>" type="any" %} Stat value. If the stat is numeric, may be any number (even negative). If the stat is non-numeric, format depends on the stat.

### Stat Multipliers

Multiplies tool stats by the given value. Multiplies apply after bonuses.

**Syntax:**

```
/tconstruct tool_stats <target> multiplier <operation> <tool_stat> <value>
```

**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="\<operation\>" type="String" %} Operation to perform. May be one of the following:
    * `multiply`: multiplies the passed value by the currently set bonus.
    * `set`: sets the current multiplier to the passed value, overriding any multiplier set before.
    * Note the two operations are equivalent if there is no multiplier for the given stat currently (effectively a multiplier of 1).
* {% include field.html name="\<tool_stat\>" type="numeric tool stat" %} Stat to set, must be a numeric tool stat.
* {% include field.html name="\<value\>" type="number" %} Multiplier value.

### Reset Stats

Resets bonuses and multipliers applied to the tool from this command. Running without the stat type command is equivalent to running `/tconstruct modifiers <target> remove tconstruct:stat_override`.

**Syntax:**

```
/tconstruct tool_stats <target> reset [tool_stat]
```

**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="[tool_stat]" type="tool stat" %} Stat to set, may be any available tool stat. If unset, resets all stat overrides.

## Modifier Slots

The modifier slots command allows modifying modifier slots available on a tool.

### Add Slots

Adds the given number of modifier slots to the target tool.

**Syntax:**

```
/tconstruct slots <target> add <slot_type> [count]
```

**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="\<slot_type\>" type="slot type" %} Modifier slot type to add.
* {% include field.html name="[count]" type="int" %} Number of slots to add. May be negative provided the tool is left with a non-negative slot count. Defaults to 1 if unset.

### Set Slots

Sets the remaining slot count on the given tool to the passed argument. Note that unlike the [tool stats](#tool-stats) command, this set operation will take the tool's current slots into account.

**Syntax:**

```
/tconstruct slots <target> set <slot_type> <count>
```

**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="\<slot_type\>" type="slot type" %} Modifier slot type to set.
* {% include field.html name="\<count\>" type="int" %} Number of slots to add. Must be non-negative. Tool will receive the proper number of slots (negative or positive) to match the passed count.

## Materials
<div class="hatnote">Upcoming 1.19.2</div>

The materials command is used to either change materials on a tool or query information about materials.

### Set Material

The set material command sets a material in the target entity's held tool.

For the command to succeed, the tool must both be modifiable and able to build with the given material swapped (e.g. removing rose gold requires a free upgrade slot). The material does not need to be normally applicable to the tool, and will not automatically repair the tool like part swapping.

**Syntax:**
```
/tconstruct materials set <target> <index> <material>
```

**Arguments:**

* {% include field.html name="\<target\>" type="Entity Argument" %} Specifies the target entity, the tool held in their main hand will be modified (if modifiable).
* {% include field.html name="\<index\>" type="int" %} Material index to set.
* {% include field.html name="\<material\>" type="Material Variant" %} Material to set on the tool.

### Material Stats

The material stats command queries stat information for a material. The command always succeeds when querying default stats, and succeeds on material specific stats provided they exist.

**Syntax:**
```
/tconstruct materials stats <stat_type> [material]
```

**Arguments:**

* {% include field.html name="\<stat_type\>" type="Stat Type ID" %} Material stat type to query.
* {% include field.html name="[material]" type="Material ID" %} Material to query. If unset, queries default stats for the stat type.

### Material Traits

The material stats command lists traits for a given material and optional stat type. The command always succeeds.

**Syntax:**
```
/tconstruct materials stats <material> [stat_type]
```

**Arguments:**

* {% include field.html name="\<material\>" type="Material ID" %} Material to query.
* {% include field.html name="[stat_type]" type="Stat Type ID" %} Material stat type to query. If unset, queries default traits for the material.

## Report

The report command generates a table of data about various elements in Tinkers' Construct.

### Modifier Usage

The modifier usage report lists all modifiers along with their usage in both recipes and traits. This command is designed for modpack and datapack makers to identify unused modifiers for usage as tool traits. All modifiers will print information on whether they are used in recipes, or as a material or tool trait.

**Syntax (1.18.2+):**
```
/tconstruct report modifier_usage [filter]
/tconstruct report modifier_usage recipe [slot_type]
```

**Syntax (1.16-1.18):**
```
/tconstruct modifier_usage [filter]
/tconstruct modifier_usage recipe [slot_type]
```

**Arguments:**

* {% include field.html name="[filter]" type="string" %} If set, filters the table to only list modifiers that have the particular usage. Available filters include:
    * `all`: Shows all modifiers (default).
    * `recipe`: Only shows modifiers granted by a [modifier recipe](/docs/json/recipes/modifiers). Supports the additional `[slot_type]` argument.
    * `material_trait`: Shows all modifiers available as a material trait.
    * `tool_trait`: Shows all modifiers available as a tool trait.
    * `unused`: Shows all modifiers used in none of the above contexts. Note that the command does not currently consider modifier traits, so its possible an "unused" modifier is used internally.
* {% include field.html name="[slot_type]" type="slot type" %} If set, filters the table to only list modifiers that have a recipe for the given slot type. In addition to a valid slot type ID, may be set to `slotless` to match modifiers that can be crafted without requiring a slot.

### Modifier Priority
<div class="hatnote">Since 1.18.2</div>

The modifier priority command lists all modifiers along with their listed priority and any modifier hooks they implement.

**Syntax:**
```
/tconstruct report modifier_priority [modifier_hook]
```
**Arguments:**

* {% include field.html name="[modifier_hook]" type="Modifier Hook ID" %} If set, filters the table to only list modifiers that implement the given hook. If unset, all modifiers are listed.

## Generate Part Textures
<div class="hatnote" markdown=1>
Main page: [Generate Part Textures](generate-part-textures)
</div>

Generates part textures for materials in the mod. Useful for modpack makers to ensure all addons have compatability with each other, along with creators of data packs and resource packs to quickly create relevant textures.

Using this command may require additional configuration, see the [dedicated page](generate-part-textures) for details.

{% include_relative _generate-part-textures-syntax.md %}