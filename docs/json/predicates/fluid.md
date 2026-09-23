---
layout: page
title: Fluid Predicates
breadcrumb: Fluid
description: Fluid predicates match fluid values without any fluid stack data in JSON.
---

Since 1.20, fluid predicates match fluid values (notably not {% include type.html type="fluid stack" %}, meaning no count or NBT). They are used in some contexts where fluids are present but not fluid stacks, preventing usage of standard {% include type.html type="fluid ingredient" %}. 

The following sections discuss supported serializers.

{% include toc.html %}

## Common Predicates

Fluid predicates support all [common predicate](..#common-predicates) (including tag predicates).

## Simple Predicates

The following predicates have no extra fields, and are simply defined by their type:

* **`mantle:is_source`**: Matches the "source" form of fluids, but not the "flowing" form.
* **`mantle:has_bucket`**: Matches fluids that have a bucket form.
* **`mantle:lighter_than_air`**: Matches fluids with a negative density, suggesting they should flow upwards.
* **`tconstruct:fuel`**: Matches fluids that function as a smeltery fuel.

## Fluid Set

{% include_relative _set-predicate.html name="Fluid" %}

## Fluid Type

The fluid type predicate matches any fluid with the given fluid type. Fluid types are a Forge feature that contain shared properties between the source and flowing forms of a fluid. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A fluid predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:fluid_type`.
    * {% include field.html name="fluid_types" type="list" %} List of fluid types to match. Will be true if the fluid has any type in the list.
        * {% include field.html type="Fluid Type ID" %} A single fluid type to match.
</div>