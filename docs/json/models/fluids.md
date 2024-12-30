---
layout: page
title: Fluids Model
breadcrumb: Fluids
description: The fluids model is a model loader added by Mantle that sets the position of fluids in the block entity renderer.
---
<div class="hatnote" markdown=1>
This page is about the model for configuring the block entity renderer between 1.16 and 1.19. For the 1.20 JSON, see [Block Fluids](../fluid-cuboids#block-fluids) (since 1.20). For the model to statically render a fluid, see [Tank Model](../tank).
</div>

{{page.description}}

## Fluids

The fluid model loader was used by Mantle between 1.16 and 1.19 to list the location of fluids to render in the block entity. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Inventory model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `mantle:fluids`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="fluids" type="fluid cuboid" %} Single fluid to render in the block entity.
    * {% include field.html name="fluids" type="list" %} List of fluids to render in the block entity.
        * {% include field.html type="fluid cuboid" %} A fluid cuboid in the list.
</div>

## Channel
<div class="hatnote" markdown=1>
For the format used since 1.20, see [Channel Fluids](../fluid-cuboids#channel-fluids)
</div>

The channel model loader was used by Tinkers' Construct between 1.16 and 1.19 to list multiple fluid regions for rendering the channel block. To function, it must be used by the first model in the multipart list for the channel. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Inventory model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:channel`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="down" type="fluid cuboid" %} Fluid cuboid to when the channel is pouring down.
    * {% include field.html name="center" type="object" %} Fluid to render in the center of the channel.
        * {% include field.html name="still" type="fluid cuboid" %} Fluid to render when the center is not moving.
        * {% include field.html name="still" type="fluid cuboid" %} Fluid to render when the center is moving. Will be rotated the proper direction.
    * {% include field.html name="side" type="object" %} Fluid to render on each of the four sides of the channel.
        * {% include field.html name="still" type="fluid cuboid" %} Fluid to render when the side is still.
        * {% include field.html name="edge" type="fluid cuboid" %} Fluid to render when there is no fluid entering or exiting that side.
        * {% include field.html name="in" type="fluid cuboid" %} Fluid to render when fluid is pouring in from that side.
        * {% include field.html name="out" type="fluid cuboid" %} Fluid to render when  fluid is pouring out from that side.
</div>

## Casting
<div class="hatnote" markdown=1>
Main page: [Casting Model](../inventory#casting).
</div>

The casting model loader was used Tinkers' Construct between 1.16 and 1.19 to combine the [inventory model](../inventory#inventory) with the [fluid model](#fluids) between 1.16 and 1.19. Since 1.20, the casting model was replaced with a combination of [block fluids](../fluid-cuboids#block-fluids) and [render item lists](../render-items#render-item-lists).