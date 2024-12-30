---
layout: page
title: Inventory Models
breadcrumb: Inventory
description: This page covers the format used for configuring the location of items in Mantle inventory block entity renderers between 1.16 and 1.19. This format populated the data using custom model loaders, which was then fetched at runtime by the block entity renderer.
---
<div class="hatnote" markdown=1>
This page is about the format for configuring block entity renderers from 1.16 to 1.19. For the format used since 1.20, see [Render Item Lists](../render-items#render-item-lists).
</div>

{{page.description}}

{% include toc.html %}

## Inventory

The inventory model loader is added by Mantle, and is the default way to add item locations to a block entity renderer for supporting block entity renderers. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Inventory model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `mantle:inventory`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="items" type="list" %} List of items to display.
        * {% include field.html type="render item" %} An item to render. Index in the list corresponds to the index in the block's inventory.
</div>

## Table

The table model loader is added by Tinkers' Construct to combine the [inventory model](#inventory) with the [retextured model](../retextured). It is notably supported by the crafting station, tinker station, part builder, modifier worktable, and tinkers anvil. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Inventory model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:table`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="retextured" type="string" %} Name of the texture from `textures` to retexture.
    * {% include field.html name="retextured" type="list" %} List of names to retexture.
        * {% include field.html name="retextured" type="string" %} A name from `textures` to retexture.
    * {% include field.html name="items" type="list" %} List of items to display.
        * {% include field.html type="render item" %} An item to render. Index in the list corresponds to the index in the block's inventory.
</div>

## Melter

The melter model loader is added by Tinkers' Construct to combine the [inventory model](#inventory) with the [tank model](../tank). It is notably supported by the melter, hence its name. The melter model does not support rendering fluid in the model by default, only when the config option is enabled. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Inventory model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:melter`.
    * *All fields from {% include type.html type="simple block model" %}.*
    * {% include field.html name="gui" type="simple block model" %} Model to render when the block is in the GUI. Typically used to allow backfaces on the original model. If unset, the base model will be used in the GUI.
    * {% include field.html name="fluid" type="fluid cuboid" %} Location to place the fluid in the model.
        * {% include field.html name="increments" type="int" %} Number of different levels of fluid to generate models for. Models are generated dynamically so it will not impact load times, but it may impact performance at runtime.
    * {% include field.html name="items" type="list" %} List of items to display.
        * {% include field.html type="render item" %} An item to render. Index in the list corresponds to the index in the block's inventory.
</div>

## Casting

The casting model loader is added by Tinkers' Construct to combine the [inventory model](#inventory) with the [fluid model](../fluids). It is notably supported by the casting table and basin, hence its name. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Inventory model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:casting`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="fluid" type="fluid cuboid" %} Location to place the fluid in the model.
    * {% include field.html name="items" type="list" %} List of items to display. Only the first 2 values are used.
        * {% include field.html type="render item" %} An item to render. Index in the list corresponds to the index in the block's inventory.
</div>

