---
layout: page
title: Block Predicates
breadcrumb: Block
description: Block predicates match block state values and properties in JSON.
---

{{page.description}}

The following sections discuss supported serializers.

{% include toc.html %}

## Common Predicates

Block predicates support all [common predicate](..#common-predicates) serializers (including tag predicates).

In 1.18, some uses of block predicates used a version defined by Tinkers' Construct where all [common predicate](..#common-predicates) along with the `required_tool` predicate were registered under a domain of `tconstruct` instead of `mantle`.

## Simple Predicates

The following predicates have no extra fields, and are simply defined by their type:

* **`mantle:requires_tool`**: Matches any block which requires mining with the correct tool to drop items from it's loot table.

**Since 1.19**:

* **`tconstruct:can_melt`**: Matches any block which has a melting recipe.

**Since 1.20**:

* **`mantle:blocks_motion`**: Matches any block which prevents an entity from moving through it.
* **`mantle:can_be_replaced`**: Matches any block which is replaced upon placing a block.
* **`tconstruct:bush`**: Matches any block which extends `BushBlock`.
* **`tconstruct:can_be_replaced`**: Matches any block which is replaced upon placing a block.

## Block Set

{% include_relative _set-predicate.html name="Block" %}

In 1.18, some uses of the block predicate used a version defined by Tinkers' Construct. For those block predicates, the block set predicate had a `type` of `tconstruct:set`.

## Block Properties

The block properties predicate matches a given block state on a list of block properties. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A block predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:block_properties`.
    * {% include field.html name="block" type="Block ID" %} Block to match. All block properties must come from the passed block.
    * {% include field.html name="properties" type="object" %} Map of property name to expected value. Matching behavior varies based on the type of the values:
        * {% include field.html name="\<name\>" type="string" %} Property will exactly match when `<name>` is the given string value.
        * {% include field.html name="\<name\>" type="list" %} Property will match if `<name>` is any value within the list.
            * {% include field.html type="string" %} Option for `<name>`.
        * {% include field.html name="\<name\>" type="object" %} Property will match if `<name>` is within the passed range of values.
            * {% include field.html name="min" type="string" %} Minimum value for `<name>`. If unset, property matches with no minimum value.
            * {% include field.html name="max" type="string" %} Maximum value for `<name>`. If unset, property matches with no maximum value.
</div>

## Harvest Tier

The harvest tier block predicate matches any blocks which can be harvested using the given harvest tier. It has the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A block predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:harvest_tier`.
    * {% include field.html name="tier" type="Tier ID" %} Harvest tier to match.
</div>

## Block Variable
<div class="hatnote">Since 1.20</div>

The block variable predicate is a [variable predicate](..#variable-predicate) that matches using {% include type.html type="block variable" %}. See that section for more information on the JSON format.