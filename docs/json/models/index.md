---
layout: page
title: Models
description: This page serves as an index for many different types of custom model loaders added by various SlimeKnights mods.
---
<div class="hatnote" markdown=1>
See also: [the Minecraft Wiki on models](https://minecraft.wiki/w/Model).
</div>

{{page.description}}

Item models are defined in `assets/<domain>/model/item/<name>.json`, where `<domain>:<name>` is the item's ID. Block models are typically defined under `assets/<domain>/model/block/`, though the names are arbitrary (as long as its properly referenced from the block state).

## Common

* [**Overview**](overview): Overview of common elements of the model format.
* [**Fluid Cuboids**](fluid-cuboids): JSON format for positions of fluids in block entity renderers.
* [**Render Items**](render-items): JSON format for positions of items in block entity renderers.

## Mantle

The following pages cover custom model formats defined in Mantle:

* [**Connected**](connected): Model with textures that change if the neighbor is the same block type.
* [**Retextured**](retextured): Model that dynamically changes it's texture based on it's NBT.
* [**NBT Key**](nbt-key): Item model that dynamically changes it's texture based on it's NBT.
* [**Fallback**](fallback): Model loader which can conditionally redirect to a different loader based on whether a mod is loaded.

## Tinkers' Construct

* [**Fluid Container**](fluid-container): Extension of Forge's fluid container model which bakes the fluid color into the model rather than using an item color handler. Additionally, it supports fluid NBT for the texture and colors.
* [**Fluid Texture**](retextured#fluid-texture): Retextured model variant that additionally includes a fluid texture.
* [**Tank**](tank): Model defining a fluid location for a tank. Based on config, can statically render the fluid instead of using the block entity renderer. Additionally, it can optionally replace the model shown in the GUI variant.

### Tools

* [**Material**](material): Model for a material item such as a tool part, dynamically changing the texture based on the material.
* [**Modifier**](modifier): JSON for defining modifier textures on tool models.
* [**Tool**](tool): Model for a tool, handling tool part materials and modifier display.

## Data Models

The following models existed simply to parse and store data used by block entity renderers. As of 1.20, these models have been removed in favor of [block fluids](fluid-cuboids#block-fluids) and [render items lists](render-items#render-item-lists) having dedicated JSON formats.

* [**Fluids**](fluids): Model format defining the location of fluids, used for various types of tanks.
    * [**Channel**](fluids#channel): Model defining the locations of fluids on each side of the casting channel.
* [**Inventory**](inventory): Model format defining the location of items rendered on the model.
    * [**Table**](inventory#table): Retextured model that additionally defines a list of items to display.
    * [**Melter**](inventory#melter): Extension of the tank model that additionally defines a list of items to display.
    * [**Casting**](inventory#casting): Model defining both a list of items and a fluid location for casting tables and basins.
