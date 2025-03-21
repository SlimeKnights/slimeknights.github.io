---
layout: page
title: Fluid Container Model
breadcrumb: Fluid Container
description: The fluid container model is a set of loaders added by Tinkers' Construct and by Forge for dynamically rendering the fluid in a container on the model texture.
---

{{page.description}}

{% include toc.html %}

## Forge Dynamic Fluid Container

The Forge dynamic fluid container model is a loader added by Forge which dynamically fills in a fluid texture. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Dynamic Fluid Container Model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `forge:fluid_container`.
    * {% include field.html name="textures" type="object" %} Textures used by this model.
        * {% include field.html name="base" type="resource location" %} Texture rendered below the fluid.
        * {% include field.html name="fluid" type="resource location" %} Fluid mask texture. Fluid will be drawn in the model where non-transparent textures are in the mask. Only used when the fluid is not empty.
        * {% include field.html name="cover" type="resource location" %} Texture rendered above the fluid.
        * {% include field.html name="particle" type="resource location" %} Texture used for generating particles from this model. If unset, will default to the current fluid texture, followed by the base, followed by the cover.
    * {% include field.html name="fluid" type="Fluid ID" %} If set, this model will always render the listed fluid. If unset, the fluid will be fetched from the item's fluid handler capability, or left out if empty.
    * {% include field.html name="flip_gas" type="boolean" %} If true, this model will be rotated 180 degrees if the fluid is marked lighter than air. Defaults to false, meaning the model is never flipped.
    * {% include field.html name="cover_is_mask" type="boolean" %} If true (default), the cover texture is a mask determining which pixels from the base texture to draw. If false, the cover texture contains the pixels to draw.
    * {% include field.html name="apply_fluid_luminosity" type="boolean" %} If true (default), the fluid on the texture will render at a minimum light level of the fluid's light level. If false, the fluid will be rendered at the same light level as the rest of the item.
</div>

When working with dynamic fluids, this model will only consider the fluid, meaning the fluid texture cannot change based on fluid NBT. In addition, in order to render fluid colors, this model requires the item to register an item colors handler (which is fluid NBT sensitive).

## Tinkers' Construct Fluid Container

The Tinkers' Construct fluid container model is a reimplementation of the Forge fluid container model, taking advantage of our knowledge of how dynamic models works to provide a more functional and more efficient fluid container model at the cost of a few barely used features. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Fluid Container Model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:fluid_container`.
    * {% include field.html name="textures" type="object" %} Textures used by this model.
        * {% include field.html name="base" type="resource location" %} Texture rendered below the fluid.
        * {% include field.html name="fluid" type="resource location" %} Fluid mask texture. Fluid will be drawn in the model where non-transparent textures are in the mask. Only used when the fluid is not empty.
        * {% include field.html name="particle" type="resource location" %} Texture used for generating particles from this model. If unset, will default to the current fluid texture, followed by the base.
    * {% include field.html name="fluid" type="Fluid ID" %} If set, this model will always render the listed fluid. If unset, the fluid will be fetched from the item's fluid handler capability, or left out if empty.
    * {% include field.html name="fluid" type="object" %} If set, this model will always render the listed fluid. Setting this field to an object allows specifying fluid NBT for the renderer.
        * {% include field.html name="name" type="Fluid ID" %} Name of the fluid to render.
        * {% include field.html name="nbt" type="nbt" %} NBT to use for the rendered fluid.
    * {% include field.html name="flip_gas" type="boolean" %} If true, this model will be rotated 180 degrees if the fluid is marked lighter than air. Defaults to false, meaning the model is never flipped.
</div>

Compared to the Forge fluid container model, this model has the following differences:

* The fluid texture supports changing dynamically with respect to fluid NBT. This is notably useful when not setting a specific fluid.
* The fluid tint is baked into the model rather than requiring item colors. This is notably more efficient at the cost of disallowing animated fluid tints.
* The fluid luminosity is always applied instead of being optional. This was mostly for simplicity and consistency with our other fluid models.
* Fluid covers are not supported. This was mostly done as the Forge model covers were terribly inefficient, combined with the fact they are only useful when you wish the cover to be transparent (as you can simply make the fluid mask smaller to render more of the base texture).