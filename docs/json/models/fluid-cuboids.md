---
layout: page
title: Fluid Cuboid
description: Fluid cuboids are a JSON object used in many different loaders in Mantle and Tinkers' Construct to specify the location of fluids in models or renderers. This page describes both the format for fluid cuboids along with common usages of them in Mantle and Tinkers' Construct.
---
<div class="hatnote" markdown=1>
See also: [Tank Model](../tank).
</div>

{{page.description}}

{% include toc.html %}

## Format

A fluid cuboid is defined in JSON as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid cuboid object.
    * {% include field.html name="from" type="vector" %} Start location of the cuboid.
    * {% include field.html name="to" type="vector" %} End location of the cuboid.
    * {% include field.html name="faces" type="object" %} Map of face {% include type.html type="direction" %} to face data. If unset, equivelent to setting all 6 directions to an empty object.
        * {% include field.html name="\<direction\>" type="object" %} A single fluid face. Key is one of six {% include type.html type="direction" %} values.
            * {% include field.html name="rotation" type="int" %} Texture rotation in degrees, must be 0, 90, 180, or 270. If unset, defaults to 0.
            * {% include field.html name="flowing" type="boolean" %} If true, uses the flowing fluid texture, which animates flow towards the texture bottom. If false (default), uses the still fluid texture.
</div>

Vector coordinates are in pixel values (that is, 1/16 of a block).

## Block Fluids
<div class="hatnote" markdown=1>
For the format used from 1.16 to 1.19, see [Fluids Model](../fluids).
</div>

Block fluids are JSON files used since 1.20 to specify the location for fluids to render in a block fluid renderer. The block fluid located at `assets/<domain>/mantle/model/block_fluids/<name>.json` corresponds to the {% include type.html type="block ID" %} `<domain>:<name>`. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A block fluid JSON.
    * {% include field.html name="variants" type="object" %} Object containing a map from variant to fluids. Each key `<variant>` is a {% include type.html type="block state variant" %} representing the block state properties that receive these fluids.
        * {% include field.html name="\<variant\>" type="string" %} Path to a [template](#block-fluids-template) containing the fluid cuboids for this variant.
        * {% include field.html name="\<variant\>" type="fluid cuboid" %} Sets states matching the variant to contain a single fluid cuboid.
        * {% include field.html name="\<variant\>" type="list" %} Sets states matching the variant to contain a list of fluid cuboid.
            * {% include field.html type="fluid cuboid" %} A fluid cuboid in the list.
</div>

### Block Fluids Template

Often, a set of fluid cuboids is the same for several different blocks or block states. In such cases, it is useful to create a template containing that information and reference it from the block state variant.

Templates are located in `assets/<domain>/mantle/model/block_fluids/<name>.json` for the template named `<domain>:<name>`. This directory is the same as the directory for block fluids, meaning its important that a template never be stored at the ID of a block. By convention, templates are placed in `assets/<domain>/mantle/model/block_fluids/templates/` to avoid this problem (which makes the ID `<domain>:templates/<name>`).

Block fluid templates have either of the following formats:

<div class="treeview" markdown=1>
* {% include field.html type="fluid cuboid" %} A JSON object represents a template containing a single fluid cuboid.
* {% include field.html type="list" %} A JSON list represents a template containing a list of fluid cuboids.
    * {% include field.html type="fluid cuboid" %} A fluid cuboid in the list.
</div>

## Faucet Fluids

Faucet fluids are a JSON format defined in Mantle and used by Tinkers' Construct and Ceramics to determine how to render the pouring animation in a block. The faucet fluid for the {% include type.html type="block ID" %} `<domain>:<name>` is located in `assets/<domain>/mantle/model/faucet_fluid/<name>.json` (from 1.20 onwards) or in `assets/<domain>/models/faucet_fluid/<name>.json` (from 1.16 to 1.19). They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A block fluid JSON.
    * {% include field.html name="variants" type="object" %} Object containing a map from variant to fluids. Each key `<variant>` is a {% include type.html type="block state variant" %} representing the block state properties that receive these fluids.
        * {% include field.html name="\<variant\>" type="string" version="since 1.20" %} Path to a [template](#faucet-fluid-template) containing the data for this variant.
        * {% include field.html name="\<variant\>" type="object" link="#faucet-fluid-template" %} Faucet fluid data specified inline. Follows the same format as [templates](#faucet-fluid-template).
</div>

### Default Faucet Fluid

The faucet fluid with location `mantle:_default` is treated as a [template](#faucet-fluid-template), used both as the default if a block has no faucet fluid data defined and allows simplifying the syntax to create faucet fluids.

### Faucet Fluid Template

Faucet fluid data is specified in the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A faucet fluid object.
    * {% include field.html name="side" type="fluid cuboid" %} Fluid cuboid to render when a faucet is facing sideways.
    * {% include field.html name="side" type="list" %} List of fluid cuboids to render when a faucet is facing sideways.
        * {% include field.html type="fluid cuboid" %} A fluid cuboid in the list.
    * {% include field.html name="center" type="fluid cuboid" %} Fluid cuboid to render when a faucet is facing downwards.
    * {% include field.html name="center" type="list" %} List of fluid cuboids to render when a faucet is facing downwards.
        * {% include field.html type="fluid cuboid" %} A fluid cuboid in the list.
    * {% include field.html name="continue" type="boolean" %} If true, the fluid "passes through" the block and should also render in the block below. Defaults to false.
</div>
In addition, for any usages of templates other than the default faucet fluid, the following fields exist:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A faucet fluid object.
    * {% include field.html name="side" type="float" %} Sets the side fluid to a copy of the default fluid with the specified lower bound in pixels.
    * {% include field.html name="center" type="float" %} Sets the center fluid to a copy of the default fluid with the specified lower bound in pixels.
    * {% include field.html name="bottom" type="float" %} Sets both the side and center fluids to a copy of the default fluids with the specified lower bound in pixels, assuming its not already set.
</div>

Since 1.20, templates may be defined under are located in `assets/<domain>/mantle/model/faucet_fluid/<name>.json` for the template named `<domain>:<name>`. This directory is the same as the directory for faucet fluids, meaning its important that a template never be stored at the ID of a block. By convention, templates other than the default are placed in `assets/<domain>/mantle/model/block_fluids/templates/` to avoid this problem (which makes the ID `<domain>:templates/<name>`).

## Channel Fluids
<div class="hatnote" markdown=1>
For the format used from 1.16 to 1.19, see [Channel Model](../fluids#channel).
</div>

Channel fluids are used since 1.20 to define the location of fluids within a casting channel in Tinkers' Construct or Ceramics. Channel fluids are defined under`assets/<domain>/mantle/model/channel_fluids/<name>.json` for the block or template named `<domain>:<name>`. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A channel fluid object.
    * {% include field.html name="parent" type="resource location" %} If set, loads properties from the channel fluid template at the specified location for any properties not set in this JSON.
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