---
layout: page
title: Modifier Serializers
description: This page describes the legacy format for defining modifiers in datapacks, which was added in Tinkers' Construct 1.18 and replaced in 1.19 with the module system.
---
<div class="hatnote" markdown=1>
This page is about defining modifiers using modifier serializers. For the modern modifier module system used since 1.19, see [Modifiers](..).
</div>
{% include legacy.html %}

{{page.description}}
Modifiers in Tinkers' Construct can be defined either in code or in data packs. When defined in data packs, they are located under `data/<domain>/tinkering/modifiers/<name>.json` for the modifier with [Modifier ID](../basic-types#resource-location) `<domain>:<name>`.

{% include construction.html %}