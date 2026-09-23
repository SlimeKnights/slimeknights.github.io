---
layout: page
title: Predicates
description: Predicates are a JSON element defined by Mantle used in many different JSON formats to represent a condition that must be matched by a piece of the JSON format. Unlike ingredients, predicates are not required to list their full contents for display in recipe viewers, though they may be used indirectly to construct displays.
---
<div class="hatnote" markdown=1>
This page is about conditions that cannot list values. For conditions that list values, see [ingredients](../ingredients).
</div>

Predicates are used in many different JSON formats to represent a condition that must be matched by a piece of the JSON format. Unlike [ingredients](../ingredients), predicates are not required to list their full contents for display in recipe viewers, though they may be used indirectly to construct displays.

Predicates are defined in Mantle, and support many different vanilla registries. In addition, mods such as Tinkers' Construct define additional predicate types.
The following predicate types are available in Mantle:

* [**Block**](block): Matches block state values and properties.
* [**Item**](item): Matches items without item stack data.
* [**Fluid**](fluid): Matches fluids without fluid stack data.
* [**Entity**](entity): Matches entities including their current properties.
* [**Damage**](damage): Matches damage source instances, which determine the cause of damage.

Additionally, Tinkers' Construct adds the following predicate types:

* [**Material**](material): Matches material variants and their properties.
* [**Modifier**](modifier): Modifiers and their properties.
* [**Tool**](tool): Matches tool instances and their current properties.

{% include toc.html %}

## Format

A predicate may be defined either in compact format or in object format.

In object format, a predicate is defined as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} The predicate serializer ID.
    * *Any other fields specific to the predicate serializer*.
</div>

If a predicate has no additional fields, or all the additional fields are using the default value, it may be defined compactly using just a string containing the predicate serializer ID as follows:

<div class="treeview" markdown=1>
* {% include field.html type="resource location" %} The predicate serializer ID.
</div>

## Common Predicates

All predicates support the predicate serializers defined in the following subsections. Whenever a predicate references another predicate serializer, any predicate serializer for the given type may be used. 

### Any

The any predicate matches everything. It has a predicate type ID of `mantle:any` and no additional fields.

### Inverted

The inverted predicate matches anything not matched by the nested predicate. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:inverted`.
    * {% include field.html name="inverted_type" type="resource location" %} The predicate serializer ID to invert. If that predicate would return true, the inverted predicate returns false.
    * *Any other fields specific to the inverted predicate serializer*.
</div>

### And

The "and predicate" matches if all of the nested predicates match. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:and`.
    * {% include field.html name="predicates" type="list" %} List of predicates, all must match for the "and predicate" to match.
        * {% include field.html type="predicate" %} A predicate object. May be any predicate serializer for the desired predicate type.
</div>

### Or

The "or predicate" matches if any of the nested predicates match. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:or`.
    * {% include field.html name="predicates" type="list" %} List of predicates, if any match the "or predicate" will match.
        * {% include field.html type="predicate" %} A predicate object. May be any predicate serializer for the desired predicate type.
</div>

### Tag

Some predicate types, most notably those defined from vanilla registries, support tag predicates. The tag predicate will match if the input is in the given tag. Unlike other common predicate serializers, not every predicate type supports tag predicates.

Tag predicates have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:tag`.
    * {% include field.html name="tag" type="Tag" %} ID of a tag in the registry associated with the predicate type.
</div>

## Variable Predicate
<div class="hatnote">Since 1.20</div>

Some predicate types can leverage the Tinkers' Construct {% include type.html type="variable" %} system to check if a value from the world is within the given range. Supporting predicates have the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Typically `tconstruct:variable_range`.
    * {% include field.html name="variable" type="variable" %} Variable to fetch.
    * {% include field.html name="min" type="float" %} Minimum value. If unset, defaults to negative infinity (effectively any).
    * {% include field.html name="max" type="float" %} Maximum value. If unset, defaults to positive infinity (effectively any).
    * {% include field.html name="interval" type="string" %} Specifies the type of interval to match. Options are:
        * `closed` (default): `min` and `max` are both inside the range and will match.
        * `open`: `min` and `max` are both outside the range and will not match.
        * `left_open`: `max` will match but `min` will not match.
        * `right_open`: `min` will match but `max` will not match.
</div>