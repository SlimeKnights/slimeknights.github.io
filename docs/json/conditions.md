---
layout: page
title: Conditions
---

Forge defines the ability for many different JSON to be conditionally loaded. This includes most notably recipes, along with many Tinkers' Construct serializers as well.

{% include toc.html %}

## JSON Format

Conditions have the following basic format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A condition object.
    * {% include field.html name="type" type="resource location" %} The condition serializer ID.
    * *Other fields based on the condition serializer ID.*
</div>

Often, conditions are defined in arrays. When defined as such, if any condition in the array fails to parse, later conditions are not even deserialized, allowing conditioning on a mod ID before using a condition defined by that mod.

## Condition types
<div class="hatnote" markdown=1>
For condition types defined by Forge, see [the Forge docs](https://docs.minecraftforge.net/en/latest/resources/server/conditional/#conditions).
</div>

{% include construction.html type="section" %}