---
layout: page
title: Tool Definitions
---
<div class="hatnote" markdown=1>
This page is about the JSON defining a tool properties since 1.19.2. For the format from 1.16 to 1.18.2, see [Tool Definitions 1.16-1.18](1.18). For the recipes defining tool crafting, see [Tool Recipes](../recipes/tools).
</div>

Tool definitions are used to assign behaviors to a tool. Tool definitions are located under `data/<domain>/tinkering/tool_definitions/<name>.json` for the [tool definition ID](/docs/basic-types#resource-location) `<domain>:<name>`.

{% include toc.html %}

## Format

A tool definition has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root tool definition object.
    * {% include field.html name="modules" type="list" %} List of tool modules on the tool.
        * {% include field.html type="object" %} A single tool module.
            * {% include field.html name="type" type="resource location" %} The tool module type.
            * {% include field.html name="hooks" type="list" %} List of [tool hook IDs](#tool-hooks) defining when this module is used. If unset, will use the default list of hooks defined by the tool module type.
                * {% include field.html type="resource location" %} A [tool hook ID](#tool-hooks). The tool module type must support the given hook.
            * *Any other fields defined by the tool module type*.
</div>

## Tool Hooks

Tools hooks are entry points in code that call various behaviors defined as part of the tool. For most tool hooks, its possible for multiple tool modules to define that hook, in which case the behavior of those modules will be merged. All tool modules define a default list of tool hooks, so its typically not necessary to consider hooks when writing a tool definition. However, as mentioned in [format](#format), it is possible to override the default list of hooks for a module.

The following tool hooks are available by default:

### Behavior Hooks

* **`tconstruct:tool_stats`**: Hook defining the stats for a tool. Used for base tool stats, tool stat multipliers, and material stats. If this hook is implemented by multiple tool modules, they are all applied in order.
* **`tconstruct:volatile_data`**: Hook allowing a module to add data to the tool's volatile data. Used notably for starting modifier slots, along with select behaviors defined as a boolean in volatile data. If this hook is implemented by multiple tool modules, they are all applied in order.
* **`tconstruct:tool_actions`**: Hook defining Forge tool actions that can be performed by this tool. If this hook is implemented by multiple tool modules, any tool module stating an action is supported will mean its supported.
* **`tconstruct:tool_traits`**: Hook defining the traits on a tool based on it's construction. Handles both default tool traits and material traits. If this hook is implemented by multiple tool modules, they are all applied in order.
* **`tconstruct:rebalanced_trait`**: Hook defining additional traits added the rebalanced modifier applies its trait variant. Supports any modules that support `tconstruct:tool_traits`. If this hook is implemented by multiple tool modules, they are all applied in order.

### Material Hooks

* **`tconstruct:tool_materials`**: Hook for getting the list of [material stat type](../stat-types) requirements for the given tool. Used primarily for display and building example tools, along with as part of the [tool casting recipe](../recipes/tools#tool-casting). This hook cannot be merged.
* **`tconstruct:tool_parts`**: Hook for getting the list of tool parts used for creating the given tool. Notably used for [tool building recipes](../recipes/tools#tool-building) and [part swapping](../recipes/tools#part-swapping) alongside display. This hook cannot be merged.
* **`tconstruct:missing_materials`**: Hook called when a tool is missing material NBT to generate a list of materials; typically called when taking a tool from the creative menu or the `/give` command. This hook cannot be merged.
* **`tconstruct:material_repair`**: Hook defining repairing the tool using a tool material. Used both in the tinker station or tinker's anvil for [material item repair](../recipes/tools#tinker-station-repair), and in the crafting table with [repair kits](../recipes/tools#crafting-table-repair-kit). If this hook is implemented by multiple tool modules, the one that repairs the largest amount for the given material is used.

### Mining Hooks

* **`tconstruct:is_effective`**: Hook defining the list of blocks a tool can effectively mine. Used by all harvest tools to select their primary tag. This hook cannot be merged.
* **`tconstruct:mining_tier`**: Hook allowing modifying the mining tier of a tool after [stats](../tool-stats#mining-tier) apply. Used notably to limit the maximum harvest tier of a tool. If this hook is implemented by multiple modules, they are all applied in order.
* **`tconstruct:mining_speed`**: Hook allowing modifying the mining speed against a particular block beyond the default behavior of using the [mining speed stat](../tool-stats#harvest) when effective. Used mainly to boost mining speed against blocks that are "ineffective", such as in the mattock. If this hook is implemented by multiple tool modules, they are all applied in order.
* **`tconstruct:aoe_iterator`**: Hook defining the additional blocks that may be mined when mining an effective block. Used by AOE tools such as sledge hammers or excavators to define different shapes for their range. This hook cannot be merged.

### Weapon Hooks

* **`tconstruct:after_melee_hit`**: Hook defining additional behaviors to run after successfully damaging an entity. Used notably by AOE weapons to damage additional targets. If this hook is implemented by multiple tool modules,they all are applied in order.

### Interaction Hooks

* **`tconstruct:interaction`**: Hook defining whether a given interaction modifier is allowed to run on the tool. Used to control whether interaction modifiers run on "attack" or "interact" for tools that support multiple methods of interaction, or to ensure only blocking runs on "interact" on shields. This hook cannot be merged.

## Tool Modules

The following subsections describe the JSON format for all tool modules that exist by default in Tinkers' Construct.

### Behavior Modules

Behaivor modules define core tool behaviors.

#### Set Stats

The set stats module is used to set the base stats for a tool. In addition, its used by tools with no tool materials to set the general stats. This module by default implements the hook `tconstruct:tool_stats`, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:base_stats`.
    * {% include field.html name="stats" type="object" %} Mapping from [tool stat IDs](../tool-stats) to the value to set for that stat.
        * {% include field.html name="\<tool_stat\>" type="any" %} Sets the value for `<tool_stat>` to the given value. JSON type is determined by the stat.
</div>

Stats from this module are applied using the "update" method, meaning for numeric stats they are summed with the default value of the stat ignored.

#### Multiply Stats

The multiply stats module is used to set the stat multipliers for a tool, which multiply stats from all sources including both modifiers and conditional stats. This module by default implements the hook `tconstruct:tool_stats`, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:multiply_stats`.
    * {% include field.html name="multipliers" type="object" %} Mapping from [numeric tool stat IDs](../tool-stats#numeric-tool-stats) to the multiplier value.
        * {% include field.html name="\<tool_stat\>" type="number" %} Sets the multiplier for `<tool_stat>` to the given value.
</div>

#### Tool Actions

The tool actions module is used to add tool actions which can be performed by this tool. This is typically used to define actions related to a tool's core behaviors such as blocks it can mine, as behaviors such as tilling are handled by modifiers. This module by default implements the hook `tconstruct:tool_actions`, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tool_actions`.
    * {% include field.html name="tool_actions" type="list" %} Set of tool actions which may be performed by this tool.
        * {% include field.html type="Tool Action" %} A tool action which may be performed by this tool.
</div>

#### Tool Traits

The tool traits module is used to define unconditional traits on a tool, such as cleavers starting with severing. This module by default implements the hook `tconstruct:tool_traits`, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:traits`.
    * {% include field.html name="traits" type="list" %} List of starting tool traits.
        * {% include field.html type="object" %} A tool trait.
            * {% include field.html name="name" type="Modifier ID" %} Modifier to apply as a trait.
            * {% include field.html name="level" type="integer" %} Level of the modifier to apply. If unset, defaults to 1.
</div>

### Material Modules

Material modules define behavior related to tool materials.

#### Part Stats

The parts stats module defines all behavior related to tool materials for a tool.

This module by default implements the `tconstruct:tool_stats`, `tconstruct:tool_traits`, `tconstruct:tool_materials`, `tconstruct:tool_parts`, and `tconstruct:material_repair` hooks. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:part_stats`.
    * {% include field.html name="parts" type="list" %} List of tool parts for each material index. Order determines the order of materials in all relevant contexts.
        * {% include field.html type="item ID" %} Compact format to specify a tool part item for the index. Item must implement `IToolPart`.
        * {% include field.html type="object" %} Object format to specify a tool part item.
            * {% include field.html name="item" type="item ID" %} Tool part item for the index, must implement `IToolPart`.
            * {% include field.html name="scale" type="float" %} Scaling value for the [material stat type](../stat-type) from this part.
    * {% include field.html name="primary_part" type="integer" %} Index of the tool part to use for traits for the `tconstruct:rebalanced_trait` hook. Defaults to 0, setting to -1 will provide no rebalanced trait.
</div>

#### Material Stats

The material stats module defines all behavior related to tool materials for a tool except tool parts, used for unconventional tools that are crafted by other means. For conventional tools, its typically better to use [part stats](#part-stats).

This module by default implements the `tconstruct:tool_stats`, `tconstruct:tool_traits`, `tconstruct:tool_materials`, and `tconstruct:material_repair` hooks. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:material_stats`.
    * {% include field.html name="stat_types" type="list" %} List of stat types for each material index. Order determines the order of materials in all relevant contexts.
        * {% include field.html type="Stat Type ID" %} Compact format to specify a stat type for the index.
        * {% include field.html type="object" %} Object format to specify a stat type.
            * {% include field.html name="stat" type="stat type ID" %} Stat type for the index. 
            * {% include field.html name="scale" type="float" %} Scaling value for the stat type.
    * {% include field.html name="primary_part" type="integer" %} Index of the stat type to use for traits for the `tconstruct:rebalanced_trait` hook. Defaults to 0, setting to -1 will provide no rebalanced trait.
</div>

#### Tool Parts

The tool parts module is used to specify the list of tool parts for a tool separately from the [part stats module](#part-stats). It is designed to be used alongside the [material stats module](#material-stats) to allow part swapping on some but not all materials in a tool.

This module by default implements the `tconstruct:tool_parts` hook, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tool_parts`.
    * {% include field.html name="parts" type="list" %} List of tool parts for each material index. May be shorter than the list of stats defined by the [material stats module](#material-stats), but should not be longer.
        * {% include field.html type="item ID" %} Tool part item for the given index. Item must implement `IToolPart`.
</div>

#### Material Traits

The material traits module is a module used internally by the [part stats](#part-stats) and [material stats](#material-stats) modules to implement the `tconstruct:rebalanced_trait` hook. IT is provided separately in case an addon wishes to create something similar to rebalanced traits; in most cases its better to use one of the above modules to handle material traits.

When used directly, the material traits module implements the `tconstruct:tool_traits` hook by default, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:material_traits`.
    * {% include field.html name="material_index" type="integer" %} Index of the material to use for the traits list.
    * {% include field.html name="stat_type" type="stat type ID" %} Stat type determining which trait list is fetched for the relevant material.
</div>

#### Material Repair

The material repair module defines repairing a tool using a material that is not part of it's material list. It is primarily used for tools with no materials such as traveler's gear, but may be used on a tool with materials to define a material that always can repair the tool.

The material repair module implements the `tconstruct:material_repair` hook by default, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:material_repair`.
    * {% include field.html name="material" type="material ID" %} Material used to repair this tool.
    * {% include field.html name="durability" type="integer" %} Amount of durability restored when repairing with this material. May not be set alongside `stat_type`.
    * {% include field.html name="stat_type" type="stat type ID" %} Stat type used to lookup the repair durability when repairing with this material. May not be set alongside `durability`.
</div>

#### Default Materials

The default materials module defines a list of materials to use by default if a tool has no materials. This module implements the `tconstruct:missing_materials` hook, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:material_repair`.
    * {% include field.html name="materials" type="list" %} List of material providers. Should be the same length as the material list in the above modules.
        * {% include field.html type="random material" %} Material provider for the given index. Uses the stat type from the relevant index.
</div>

### Mining Modules

Mining modules implement behaviors related to using the tool to break blocks.

#### Is Effective

The is effective module makes a tool effective against the listed block types. It by default implements the `tconstruct:is_effective` hook, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:is_effective`.
    * {% include field.html name="ignore_tier" type="boolean" %} If true, ignores the required [mining tier](../tool-stats#mining-tier) to mine the block in deciding whether the tool is effective. If false (default), the tool is only effective if the mining tier is high enough to break the block.
    * {% include field.html name="predicate_type" type="resource location" %} [Block predicate](../predicates#block-predicates) serializer ID determining the list of blocks this tool is effective on.
    * *Any other fields defined by the block predicate serializer*.
</div>

#### Mining Speed Modifier

The mining speed modifier module multiplies the mining speed on matching blocks. It is used for special interactions between certain tool types and blocks, either making the tool faster on certain effective blocks, or mine ineffective blocks at a speed above not using a tool.

The mining speed modifier implements the `tconstruct:mining_speed` hook by default, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:mining_speed_modifier`.
    * {% include field.html name="modifier" type="float" %} Multiplier to mining speed for any blocks matching the block predicate.
    * {% include field.html name="predicate_type" type="resource location" %} [Block predicate](../predicates#block-predicates) serializer ID determining the list of blocks to modify.
    * *Any other fields defined by the block predicate serializer*.
</div>

#### One Click Break

The one click break module makes the tool fast enough to break blocks matching the predicate in one click, without being fast enough to [instantly break](https://minecraft.wiki/w/Breaking#Instant_breaking) the block. It is used by a potentially upcoming tool which is designed for carefully deconstructing smeltery blocks.

The one click break implements the `tconstruct:mining_speed` hook by default, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:one_click_break`.
    * {% include field.html name="predicate_type" type="resource location" %} [Block predicate](../predicates#block-predicates) serializer ID determining the list of blocks to modify.
    * *Any other fields defined by the block predicate serializer*.
</div>

#### Max Harvest Tier

The max harvest tier module limits the maximum harvest tier for a tool to the given tier. It is used by the pickadze to restrict the list of blocks it can harvest compared to a pickaxe or a mattock.

The max harvest tier module implements the `tconstruct:mining_tier` hook by default, and has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:max_tier`.
    * {% include field.html name="tier" type="harvest tier" %} Maximum harvest tier allowed on this tool. Uses the Forge tier sorting registry to decide which tier is smaller.
</div>

### Weapon Modules

Weapon modules implement behaviors related to using the tool as a weapon. All current weapon modules by default implement the `tconstruct:after_melee_hit` hook.

#### Particle Weapon Attack

The particle weapon attack module defines a particle to display whenever attacking with this weapon while fully charged. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:melee_particle`.
    * {% include field.html name="particle" type="particle ID" %} Particle to display on fully charged attacks. Must be a `SimpleParticleType`.
</div>

#### Circle Weapon Attack

The circle weapon attack defines an AOE attack centered on the target when the weapon is fully charged. All targets will be targeted by a full attack, meaning modifiers will apply to each target separately but more durability is consumed.

The circle weapon attack has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:circle_melee`.
    * {% include field.html name="diameter" type="float" %} Range from the original target to also hit with the attack, defaults to 0. The expander level will add to this range.
</div>

#### Sweep Weapon Attack

The sweep weapon attack grants a tool a sweeping attack, similar to the vanilla sword's sweep attack. The attack AOE is centered on the attacker, and all targets are dealt damage based damage dealt to the main target scaled by the level of sweeping edge. Modifiers are not applied to additional target, and conditional damage such a smite only considers the primary target.

The sweep weapon attack has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:sweep_melee`.
    * {% include field.html name="range" type="float" %} Range from the attacker to perform the sweep attack, defaults to 0. The expander level will be added to this range.
</div>

### Interaction Modules

Interaction modules implement behaviors related to interaction modifiers using the tool. All interaction modules by default implement the `tconstruct:interaction` hook.

#### Dual Interaction

The dual interaction module implements the `tconstruct:interaction` hook for a tool that can interact on both "attack" (left click) and "interact" (right click). By default, all interaction modifiers will run on "interact" with this hook, but any modifiers defined in the tool's persistent data set `tconstruct:attack_modifiers` will trigger on attack instead. Modifiers are added to that set using the [modifier set recipe](../recipes/worktable#modifier-set).

The dual interaction module has a type of `tconstruct:dual_option_interaction`, and no additional fields.

#### Preference Set Interaction

The preference set interaction module implements the `tconstruct:interaction` hook for a tool that can interact on both "attack" (left click) and "interact" (right click). This module defines a set of modifiers which interact on one source, and all modifiers outside that set interact on the other source. It is notably used on shields, which set "interact" to the blocking modifier, and run all other interaction modifiers on left click.

The preference set interaction module has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:preference_set_interaction`.
    * {% include field.html name="preferred_modifiers" type="modifier predicate" %} Predicate matching modifiers to put on `preferred_source`. Any modifiers that don't match the predicate will interact on the other source.
    * {% include field.html name="preferred_source" type="string" %} Interaction source to use for `preferred_modifiers`. May be `right_click` (for interact) or `left_click` (for attack).
</div>

### AOE Modules

AOE modules implement different shapes of AOE iterators on tools and how they expand when the expander modifier is applied. All AOE modules by default implement `tconstruct:aoe_iterator`.

In addition to being defined as tool modules, all AOE modules are registered to a separate registry of AOE iterators, used in the [conditional AOE iterator module](#conditional-aoe-iterator).

#### Box AOE Iterator

The box AOE iterator defines tool AOE in a cube, with the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:box_aoe`.
    * {% include field.html name="bonus" type="object" %} Box size expansion applied when the tool has no expanders.
        * {% include field.html name="width" type="integer" %} Base box width radius, defaults to 0.
        * {% include field.html name="height" type="integer" %} Base box height radius, defaults to 0.
        * {% include field.html name="depth" type="integer" %} Base box depth, defaults to 0.
    * {% include field.html name="expansions" type="list" %} List of expansions to apply at each level. If the level exceeds the list size, will cycle through the list again. For example, if the list size is 2 and the level is 3, the first expansion is applied twice and the second once.
        * {% include field.html type="object" %} Box size expansion for a level.
            * {% include field.html name="width" type="integer" %} Level box width radius, defaults to 0.
            * {% include field.html name="height" type="integer" %} Level box height radius, defaults to 0.
            * {% include field.html name="depth" type="integer" %} Level box depth, defaults to 0.
    * {% include field.html name="expansion_direction" type="resource location" %} Determines how `width`, `height`, and `depth` are oriented with respect to the player's position and targeted block. By default, the following options exist:
        * **`tconstruct:side_hit`**: Orients based on the targeted block face. `width` is to the left/right of the target, `height` is above/below the target, and `depth` back behind the target.
        * **`tconstruct:pitch`**: Orients based on the direction the player is facing. `width` is to the left/right of the player view, `height` is above/below the player view, and `depth` back behind the player view.
        * **`tconstruct:height`**: Orients height to the Y axis, `width` to the left/right of the side hit, and `depth` behind the target. When targeting the top or bottom of a  block, `width` orients to the left/right of the player view, and `depth` behind the player view.

#### Circle AOE Iterator

The circle AOE iterator defines tool AOE in a radius around the targeted block, with the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:circle_aoe`.
    * {% include field.html name="diameter" type="string" %} Base diameter, summed with the expander value for the total size.
    * {% include field.html name="3D" type="boolean" %} If true, AOE area will be a 3D half sphere. If false (default), will be a circle.
</div>

#### Tree AOE Iterator

The tree AOE iterator defines tool AOE that targets all matching logs in a tree. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tree_aoe`.
    * {% include field.html name="width_bonus" type="integer" %} Bonus width radius applied at level 0, defaults to 0. Every other level starting with the first increases width by 1.
    * {% include field.html name="depth_bonus" type="integer" %} Bonus depth applied at level 0, defaults to 0. Every other level starting with the second increases depth by 1.
</div>

#### Veining AOE Iterator

The veining AOE iterator defines tool AOE that targets all matching connected blocks up to a given recursion depth. 

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:vein_aoe`.
    * {% include field.html name="max_distance" type="integer" %} Maximum distance from the targeted block through matching blocks to include, defaults to 0. Summed with the expander level.
</div>

#### Conditional AOE Iterator

The conditional AOE iterator nests two AOE iterators, using the first if the targeted block matches the given predicate, or the fallback if it does not match the predicate. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool module object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:conditional_aoe`.
    * {% include field.html name="condition" type="block predicate" %} Block condition to check.
    * {% include field.html name="if_true" type="AOE Iterator" link="#aoe-modules" %} Iterator to run if `condition` matches the targeted block.
    * {% include field.html name="if_false" type="AOE Iterator" link="#aoe-modules" %} Iterator to run if `condition` does not match the targeted block.
</div>
