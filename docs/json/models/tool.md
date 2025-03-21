---
layout: page
title: Tool Model
breadcrumb: Tool
description: This page describes the format for tool models, which assign the materials to part textures in the tool.
---
<div class="hatnote" markdown=1>
This page is about the JSON the rendering for a tool. For the behavior of a tool, see [Tool Definitions](../../tool-definitions).
</div>

{{page.description}}

{% include toc.html %}

## Tool

Tool models are used to list parts for a tool and how they match up to each material on the tool. In addition, they define the location to search for modifier models, and allow making the tool appear extra large in hand. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Connected Model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:tool`.
</div>

{% include construction.html type="section" %}

## Overrides

Tool models make use of a bunch of custom item overrides to define behaviors such as brokeness, blocking, and charging up the tool. These overrides are added in the same format as vanilla item models.

{% include construction.html type="section" %}