---
layout: page
title: Tool Predicates
breadcrumb: Tool
description: Tool predicates are a predicate type added by Tinkers' Construct, matching tool instances either during building or that are fully built.
---

Tool predicates are a predicate type added by Tinkers' Construct, matching tool instances. There are two variants of tool predicates: tool stack predicates, which are used in most contexts, and tool context predicates, which are used during tool building when tools have more limited data (notably lacking access to tool durability).

The following sections discuss supported serializers.

{% include toc.html %}

## Fallback Predicates

Tool predicates support fallback behavior; if a predicate serializer ID does not exist in the tool stack registry, it will fallback to a tool context predicate serializer with that ID. If a predicate serializer ID does not exist in the tool context predicate registry, it will fallback to the [item predicate](..#item-predicates) registry.

This allows both types of predicate support all [common predicate](..#common-predicates) serializers, along with item tag predicates matching the tool item.

## Simple Predicates

Tool context predicates support the following serializers which have no extra fields:

* **`tconstruct:has_upgrades`**: Matches any tools which have at least 1 modifier added via recipes.

Tool stack predicates support the following serializers which have no extra fields:

* **`tconstruct:not_broken`**: Matches tools which are not broken.

## Tool Context Predicates

The following predicates are supported in modules using tool context predicates.

### Has Modifier

The has modifier tool context predicate matches tools that contain the given modifier. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_modifier`.
    * {% include field.html name="modifier" type="Modifier Predicate" %} Predicate matching the modifier expected on the tool.
    * {% include field.html name="level" type="int range" %} Range of expected levels of the modifier on the tool. Minimum level is 0, indicating the tool lacks the given modifier. If unset, defaults to 1 or more, indicating the tool has the modifier at any level.
    * {% include field.html name="check" type="string" %} Modifier list to check, may be one of the following:
        * **`upgrades`**: Checks the list of modifiers applied using recipes.
        * **`all`**: Checks the full list of modifiers on the tool, which includes modifiers from recipes and traits.
</div>

### Has Material

The has material tool context predicate matches tools that contain the given material. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_material`.
    * {% include field.html name="material" type="Material Variant" %} Material variant expected on the tool.
    * {% include field.html name="index" type="integer" %} Index expected to contain the tool material. If unset, will check the entire material list.
</div>

### Has Stat Type

The has stat type tool context predicate matches tools that require a particular [stat type](/docs/json/stat-types) for one of their tool parts. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_stat_type`.
    * {% include field.html name="stat_type" type="Stat Type ID" %} Stat type that must be used by the tool.
    * {% include field.html name="material" type="Material Variant" %} If set, the stat type must contain the passed material variant.
    * {% include field.html name="index" type="integer" %} Index expected to contain the tool material. If unset, will check the entire material list.
</div>

### Has Persistent Key
<div class="hatnote">Since 1.20</div>
<div class="hatnote" markdown=1>
See also: [Has Volatile Key](#has-volatile-key)
</div>

The has persistent key tool context predicate matches tools that have the given key set in their persistent data in NBT. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_persistent_key`.
    * {% include field.html name="key" type="Resource Location" %} Key to check for in data.
</div>

### Has Hook
<div class="hatnote">Since 1.20</div>

The has hool tool context predicate matches tools that expose the given {% include type.html type="tool hook" %} in any of their modules in their [tool definition](../tool-definitions). It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_hook`.
    * {% include field.html name="hook" type="tool hook" %} Hook to check for on the [tool definition](../tool-definitions).
</div>


## Tool Stack Predicates

The following predicates are supported in modules using tool stack or tool context predicates.

### Stat in Range

The stat in range tool stack predicate matches tools that have a given numeric tool stat with a value within the passed range. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:stat_in_range`.
    * {% include field.html name="stat" type="Tool Stat" %} Numeric tool stat to match.
    * {% include field.html name="min" type="float" %} Minimum allowed value. If unset, there is no minimum.
    * {% include field.html name="max" type="float" %} Maximum allowed value. If unset, there is no maximum.
</div>

### Stat in Set

The stat in set tool stack predicate matches tools that have a given tool stat within the set of values. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:stat_in_set`.
    * {% include field.html name="stat" type="Tool Stat" %} Tool stat to match.
    * {% include field.html name="values" type="list" %} List of allowed values for the stat.
        * {% include field.html type="any" %} Allowed stat value. JSON type varies based on the tool stat.
</div>

### Has Volatile Key
<div class="hatnote">Since 1.20</div>
<div class="hatnote" markdown=1>
See also: [Has Persistent Key](#has-persistent-key)
</div>

The has volatile key tool stack predicate matches tools that have the given key set in their volatile data in NBT. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_volatile_key`.
    * {% include field.html name="key" type="Resource Location" %} Key to check for in data.
</div>

### Tool Action
<div class="hatnote">Since 1.20</div>

The has tool action tool stack predicate matches tools that can perform the given tool action. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tool_action`.
    * {% include field.html name="action" type="Tool Action" %} Tool action to check.
</div>

### Tool Variable
<div class="hatnote">Since 1.20</div>

The tool variable predicate is a tool stacks [variable predicate](..#variable-predicate) that matches using {% include type.html type="tool variable" %}. See that section for more information on the JSON format.
