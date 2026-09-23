---
layout: page
title: Modifier Predicates
breadcrumb: Modifier
description: Modifier predicates are a predicate type added by Tinkers' Construct, matching modifier IDs and modifier properties.
---

Modifier predicates are a predicate type added by Tinkers' Construct, matching {% include type.html type="modifier" %} IDs and modifier properties.

The following sections discuss supported serializers.

{% include toc.html %}

## Common Predicates

They support all [common predicate](#common-predicates) serializers, though tag predicates are registered with a `type` of `tconstruct:tag` instead of `mantle:tag` until 1.21. Additional modifier predicate serializers are discussed in the following sections.

In 1.18, all [common predicate](#common-predicates) were registered under a domain of `tconstruct` instead of `mantle`.

## Single Modifier

The single modifier predicate matches the given modifier by ID. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A modifier predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:single`.
    * {% include field.html name="modifier" type="modifier ID" %} Modifier ID to match.
</div>

## Slot Type

The slot type modifier predicate matches modifiers that have a recipe costing the given [slot type](/docs/json/recipes/modifiers/#slot-types). It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A modifier predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:slot_type`.
    * {% include field.html name="slot" type="Slot Type" %} Modifier must have a recipe charging the given slot type to match. If unset or `null`, matches modifiers that have a recipe charging no slots (slotless).
</div>