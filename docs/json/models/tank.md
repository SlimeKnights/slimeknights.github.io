---
layout: page
title: Tank Model
breadcrumb: Tank
description: The tank model is a model loader from Tinkers' Construct which both allows rendering the fluid in the tank item, and optionally in the tank model as a block.
---
<div class="hatnote" markdown=1>
This page is about the model that statically renders fluids inside. For the JSON to configure fluid locations in block entity renderers, see [Block Fluids](../fluid-cuboids#block-fluids) (since 1.20) or [Fluids Model](../fluids) (between 1.16 and 1.19).
</div>

{{page.description}}

## Tank

The tank model loader is added by Tinkers' Construct to render a static fluid inside a tank item. It can additionally be used to render a static fluid in the block form, either by default (if set in the model) or responding to a config option. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Inventory model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:tank`.
    * *All fields from {% include type.html type="simple block model" %}.*
    * {% include field.html name="gui" type="simple block model" %} Model to render when the block is in the GUI. Typically used to allow backfaces on the original model. If unset, the base model will be used in the GUI.
    * {% include field.html name="fluid" type="fluid cuboid" %} Location to place the fluid in the model.
        * {% include field.html name="increments" type="int" %} Number of different levels of fluid to generate models for. Models are generated dynamically so it will not impact load times, but it may impact performance at runtime.
    * {% include field.html name="render_fluid_in_model" type="boolean" %} If true, the fluid will render in block form regardless of Tinkers' Construct's config setting. If false, the fluid will only render in block form if the Tinkers' Construct experimental "render fluid in models" config is true.
</div>

## Melter
<div class="hatnote" markdown=1>
Main page: [Melter Model](../inventory#melter).
</div>

The melter model loader is added by Tinkers' Construct to combine the [inventory model](../inventory) with the [tank model](#tank) until 1.20. Since 1.20, the items in the melter are controlled using [render item lists](../render-items#render-item-lists), so the melter uses the standard tank model.