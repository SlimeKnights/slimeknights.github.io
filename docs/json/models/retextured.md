---
layout: page
title: Retextured Models
breadcrumb: Retextured
description: The retextured model is a model loader added by Mantle that allows supported blocks to dynamically change a portion of their texture.
---

{{page.description}}

{% include toc.html %}

## Retextured

The retextured model loader is a model loader from Mantle that allows blocks with dynamic textures to dynamically change their texture. This model loader only functions on supported blocks, such as the tables from Tinkers' Construct or the bookshelves from Inspirations. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Retextured model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `mantle:retextured`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="retextured" type="string" %} Name of the texture from `textures` to retexture.
    * {% include field.html name="retextured" type="list" %} List of names to retexture.
        * {% include field.html type="string" %} A name from `textures` to retexture.
</div>

## Fluid Texture

The fluid texture model loader is an extension of the [retextured model](#retextured) from Tinkers' Construct which also retextures a set of textures based on the fluid provided by the block. Its notably used by the smeltery controller, foundry controller, drains, and ducts to change the displayed fluid. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Retextured model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:retextured`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="fluids" type="list" %} List of fluids to retexture using the block's fluid
        * {% include field.html name="retextured" type="string" %} A name from `textures` to retexture.
    * {% include field.html name="retextured" type="list" %} List of names to retexture.using the blocks texture.
        * {% include field.html name="retextured" type="string" %} A name from `textures` to retexture.
</div>

## Table
<div class="hatnote" markdown=1>
Main page: [Table Model](../inventory#table).
</div>

The table model loader existed in Tinkers' Construct between 1.16 and 1.19, combining the retextured model with the [inventory model](../inventory). For 1.20 onwards, the tables in Tinkers' just use the standard [retextured model](#retextured) and specify item locations using [render item lists](../render-items#render-item-lists).