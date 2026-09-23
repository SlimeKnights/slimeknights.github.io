---
layout: page
title: Material Predicates
breadcrumb: Material
description: Material predicates are a predicate type added by Tinkers' Construct, matching material variant IDs and material properties.
---

Since 1.20.1, material predicates are a predicate type added by Tinkers' Construct, matching {% include type.html type="material variant" %} IDs and material properties.

The following sections discuss supported serializers.

{% include toc.html %}

## Compact

In standard usages of material predicates, a {% include type.html type="resource location" %} without an object is treated as the ID of a material predicate type, useful for any of the [simple predicates](#simple-predicates) with no extra fields.

Some contexts support compact material predicates, which change the compact representation to a {% include type.html type="material variant" %}. If there is no variant (e.g. `tconstruct:iron`), it will match as an [ID](#id). If there is a variant (e.g. `tconstruct:slimewood#greenheart`), it will match as a single [Variant](#variant). If the variant is set to `#default` (e.g. `tconstruct:whitestone#default`), then it will match only that ID with no variant set as [Variant](#variant).

## Common Predicates

Material predicates support all [common predicate](..#common-predicates) serializers, which match directly on material IDs (ignoring variants).

## Simple Predicates

The following predicates have no extra fields, and are simply defined by their type:

* `tconstruct:castasble`: Matches any materials with a casting fluid.
* `tconstruct:composite`: Matches any materials with a composite fluid and base material.
* `tconstruct:craftable`: Matches any materials that are craftable in the part builder.
* `tconstruct:not_hidden`: Matches any materials that are not marked as hidden.
* `tconstruct:registered`: Matches any materials that exist in the material registry.

## ID

Matches a set of material IDs, ignoring variants. See [Variant](#variant) if you need to match variants. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:id`.
    * {% include field.html name="id" type="material" %} Material ID to match.
    * {% include field.html name="id" type="list" %} Set of Material IDs, matches if the ID is any in the set.
      * {% include field.html type="material" %} A Material ID to match.
</div>

## Variant

Matches a set of material IDs, ignoring variants. See [ID](#id) if you need to ignore variants. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:variant`.
    * {% include field.html name="id" type="material variant" %} Material Variant ID to match.
    * {% include field.html name="id" type="list" %} Set of Material Variant IDs, matches if the ID is any in the set.
      * {% include field.html type="material variant" %} A Material Variant ID to match.
</div>

Note that since this matches on variants, if the tested ID is variantless it will only match if you include the variantless ID in the set.

## Has Stat Type

The has stat type predicate matches materials that have stats for the given type. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:stat_type`.
    * {% include field.html name="stat_type" type="stat type" %} Stat Type to check.
</div>

## Has Part

The has part predicate matches materials that support being used to craft a specific part. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_part`.
    * {% include field.html name="part" type="item ID" %} Tool part item to check. Expected to be an instance of `IMaterialItem`.
</div>

## Tier

The material tier predicate matches materials with tiers in the given range. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tier`.
    * {% include field.html name="tier" type="int range" %} Range of tiers to match. Tiers are expected to be at minimum 0.
</div>