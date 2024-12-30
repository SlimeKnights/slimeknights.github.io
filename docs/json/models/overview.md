---
layout: page
title: Overview of Models
description: This page describes the basics of models. Forge allows mods to extend the vanilla model format by adding custom model loaders which can have dynamic behavior. These loaders will replace certain but not all elements of the vanilla model format.
---

{{page.description}}

{% include toc.html %}

## Model loaders

Forge allows mods to register custom model loaders, which are specified in JSON using the `loader` field. These loaders will typically ignore the default `elements` field in the JSON, and are free to either use or ignore the `textures` field. However, most model formats defined in Mantle and Tinkers' Construct reimplement the standard model format making the behavior close to vanilla.

Model loaders generally do not change the behavior of of `ambientocclusion`,`gui_light`, `display`, or `overrides` from the [vanilla model format](https://minecraft.wiki/w/Model).

## Simple Block Model

Simple block model is a utility in Mantle that allows our custom models to process element data from the `parent`, along with parse `elements` from the current model more easily. In other words, it makes the core of the model behave identically to a vanilla model, causing all behavior to just be added on top.

Simple block models provide the following fields in JSON:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The simple block model.
    * {% include field.html name="parent" type="resource location" %} If set, will load elements and textures from the given parent if they are not in the current model.
    * {% include field.html name="elements" type="list" %} List of elements to use. If unset, will load elements from the parent.
        * {% include field.html type="object" %} An element object.
            * {% include field.html name="from" type="vector" %} Start of the element in pixels. A full cube would start at `[0, 0, 0]`.
            * {% include field.html name="to" type="vector" %} End of the element in pixels. A full cube would end at `[16, 16, 16]`.
            * {% include field.html name="rotation" type="object" %} Rotates the element on the given axis and origin. If unset, does not rotate.
                * {% include field.html name="origin" type="vector" %} Center of the rotation.
                * {% include field.html name="axis" type="string" %} Specifies the direction of rotation. May be `x`, `y`, or `z`.
                * {% include field.html name="angle" type="float" %} Rotation angle in degrees, must be -45, -22.5, 0, 22.5, or 45.
                * {% include field.html name="rescale" type="boolean" %} If true, the model faces will be rescaled after rotation to fit across the full block.
            * {% include field.html name="shade" type="boolean" %} If true (default), shadows are rendered.
            * {% include field.html name="faces" type="object" %} Map of face {% include type.html type="direction" %} to face data.
            * {% include field.html name="\<direction\>" type="object" %} A single face. Key is one of six {% include type.html type="direction" %} values.
                * {% include field.html name="cullface" type="direction" %} If a solid block is placed this direction from the model, this face will not render. If unset, the face never culls.
                * {% include field.html name="tintindex" type="boolean" %} Color index from the block color getter to fetch to dynamically color the face. If unset, face will not be dynamically tinted.
                * {% include field.html name="texture" type="boolean" %} Name of a texture from `textures` to use on this face.
                * {% include field.html name="uv" type="array" %} Array of UV values in the order `[ minU, minV, maxU, maxV ]`. Values typically range from 0 to 16, where 0 is the top left corner. 
                * {% include field.html name="forge_data" type="forge face data" version="since 1.20" %} Additional settings for this element from Forge. Overrides the element forge data.
                * {% include field.html name="emissivity" type="integer" version="until 1.19" %} Minimum light level for the face between 0 and 15. Defaults to 0.
            * {% include field.html name="forge_data" type="forge face data" version="since 1.20" %} Additional settings for this element from Forge. Will be overridden by values from the face.
</div>

Vector coordinates and UV coordinates are in pixel values (that is, 1/16 of a block).

## Forge Face Data

Since 1.20, Forge allows defining custom data on both a model element and an element face. The data has the following format:

<div class="treeview" markdown=1>
* {% include field.html name="forge_data" type="object" version="since 1.20" %} Defines additional data from Forge. If unset, behaves the same way as an empty object.
    * {% include field.html name="color" type="argb" %} Color to tint the element/face. Defaults to `FFFFFFFF` (white, that is no tint).
    * {% include field.html name="block_light" type="int" %} Minimum block light level for the element/face between 0 and 15. Defaults to 0.
    * {% include field.html name="sky_light" type="int" %} Minimum sky light level for the element/face between 0 and 15. Defaults to 0.
    * {% include field.html name="ambient_occlusion" type="boolean" %} Allows overriding `ambientocclusion` for a specific block element/face.
    * {% include field.html name="calcuate_normals" type="boolean" %} If true, manually calculates the normals for this element/face instead of inheriting facing normals like vanilla. Defaults to false.
</div>

## Colored Block Model

Many model formats from Mantle and Tinkers' Construct support additional data to change the color of a model face. This is implemented both in utilities made available to other model loaders, and through the `mantle:colored_block` loader registered by Mantle. Colored block models add the following to the [simple block model]
(#simple-block-model) format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The colored block model.
    * *All fields from {% include type.html type="simple block model" %}*.
    * {% include field.html name="colors" type="list" %} Array of additional data for each element in the block model.
        * {% include field.html type="object" %} A color data entry. Index of the entry corresponds to an index in `elements`. If an element has no index in this array it gets the default behavior for all fields.
            * {% include field.html name="color" type="argb" %} Color to tint the element/face. Defaults to `FFFFFFFF` (white, that is no tint).
            * {% include field.html name="luminosity" type="int" %} Minimum light level for the element between 0 and 15. Defaults to 0.
            * {% include field.html name="uvlock" type="argb" %} If set, overrides the UV lock setting from the block state JSON for this element.
</div>

Note that due to Forge implementing many similar features to this in 1.20, there is a good chance the model loader for colored block models is removed in a later version.