---
layout: page
title: Material Render Info
description: This page covers the JSON format for defining material textures in resource packs in Tinkers' Construct 3. Material render info does not define a material, simply the textures for the material.
---
<div class="hatnote" markdown=1>
This page is about the JSON required to define the textures for a material. For the JSON to make a material obtainable, see [Materials](../materials).
</div>

{{page.description}}

{% include toc.html %}

## JSON Format

Material render info is defined under `assets/<domain>/tinkering/materials/`. For a material ID `<domain>:<name>`, the render info will be located at `assets/<domain>/tinkering/materials/<name>.json`. For a material variant `<domain>:<name>#<variant>`, the render info will be located at `assets/<domain>/tinkering/materials/<name>/<variant>.json`.

In 1.16, material render info for the material ID `<domain>:<name>` is instead located under `assets/<domain>/models/tool_materials/<name>.json`. Material variants did not exist in 1.16.

Material render info has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Root render info object.
    * {% include field.html name="texture" type="resource location" %} Unique texture name for the material. If unset, uses the material ID (if not a variant), otherwise uses the texture `<domain>:<name>_<variant>` for the variant ID `<domain>:<name>#<variant>`. Since 1.20.1, may be set to `null` (not `"null"`) to skip loading a default texture.
    * {% include field.html name="skipUniqueTexture" type="boolean" %} If true, the material will not load a unique texture, instead just tinting a fallback texture. Used primarily for debug materials. Since 1.20.1, this field is deprecated in favor of setting `texture` to `null`.
    * {% include field.html name="fallbacks" type="list" %} List of fallback names to use if the unique material texture is missing.
        * {% include field.html type="string" %} A fallback name. If missing will continue to the next fallback, or the base texture.
    * {% include field.html name="color" type="argb" %} Color to tint the selected fallback texture. Only used if the unique texture is missing.
    * {% include field.html name="luminosity" type="int" %} Minimum light level when rendering the material. The larger of `luminosity` and the world light level for the tool will be used as the rendered light. If unset, defaults to 0 (no minimum luminosity).
    * {% include field.html name="generator" type="object" %} Additional data used by the [generate part textures command][generate-command] for this material. If unset (default), the material will be skiped by the command.
        * {% include field.html name="transformer" type="object" link="#sprite-transformers" %} The sprite transformer used to create sprites for this material.
            * {% include field.html name="type" type="resource location" %} Sprite transformer ID, see [sprite transformers](#sprite-transformers).
            * *Other fields defined by the sprite transformer.*
        * {% include field.html name="supported_stats" type="list" %} List of supported stat types for this material. Before 1.20.1, this field was named `supportedStats`.
            * {% include field.html type="stat type" %} A stat type supported by this material. Any sprites with matching type will be generated in this material.
        * {% include field.html name="ignore_material_stats" type="boolean" %} Before 1.20.1, this field was named `ignoreMaterialStats`.
            * If `true`, running the [generate part textures command][generate-command] will ignore [material stats](/docs/json/materials#stats), using just `supportedStats`.
            * If `false` (default), when running the [generate part textures command][generate-command] this render info will be treated as supporting all stats defined in the [material stats](/docs/json/materials#stats) in addition to `supportedStats`. Ensures addons making an existing material support new types still get textures.
</div>

## Grey Values

Most transformers work on the concept of mapping greyscale values to palette color values or sprites. If a pixel is not grey (that is, the red, green, and blue values are not equal), the grey value is selected based on the maximum of the color's red, green, and blue values, and any color values lower than the grey value will be reduced based on the difference. In any case, the alpha value from the original sprite gets merged with the transformer alpha value.

While not required, most palettes use the following set of values:
* `0`: Typically mapped directly to 0.
* `63`: darker regions of the border.
* `102`: brighter regions of the border.
* `140`: dark regions of the part.
* `178`: neutral regions of the part.
* `216`: bright regions of the part.
* `255`: part highlights.

Most part textures created in the base mod limit to these 6 colors, meaning a palette with just these 6 will require no interpolation to select colors.
        
## Sprite Transformers

Sprite transformers define how a material will transform the base texture in the [generate part textures command][generate-command]. Tinkers' Construct provides severla sprite tranformers by default, and addons may provide additonal transformers.

### Recolor Sprite

The recolor sprite transformer applies a [color mapping](#color-mappings) to each pixel of the original sprite independently. Most materials use this transformer. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Root sprite transformer object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:recolor_sprite`.
    * {% include field.html name="color_mapping" type="object" link="#color-mappings" %} The color mapping to apply for this generator.
        * {% include field.html name="type" type="resource location" %} Color mapping ID, see [color mappings](#color-mappings).
        * *Other fields defined by the color mapping.*
</div>

### Grey to Sprite

The grey to sprite transformer will use the [grey value](#grey-values) of each pixel to select either a sprite or a color to transform the pixel. This transformer is used to create the dynamic patterns in the queen's slime textures.

When mapping to a sprite, the color value for a given (x,y) pixel coordinate will be based on the matching (x,y) coordinates in the selected sprite. If a pixel is found that does not match any of the grey values in the palette, colors from the two nearest grey values will be interpolated to select the final color.

The grey to sprite transformer has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Root sprite transformer object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:grey_to_sprite`.
    * {% include field.html name="palette" type="list" %} List of mappings from each grey value to each color or sprite. Must be sorted in ascending order by grey values.
        * {% include field.html type="object" %} A palette entry.
            * {% include field.html name="grey" type="int" %} Grey value for the palette entry, see [grey values](#grey-values) for more info.
            * {% include field.html name="path" type="resource location" %} Path to the sprite to use for this grey value, relative to `assets/<domain>/textures/`. If unset, no sprite is used.
            * {% include field.html name="color" type="argb" %} Color value to use for this grey. If unset, defaults to `FFFFFFFF` (fully opaque white). If set alongside `path`, will tint the sprite the given color.
</div>

### Animated Grey to Sprite
<div class="hatnote">Since 1.19.2</div>
<div class="hatnote">Due to a bug, this transformer is not currently registered for use in resource packs.</div>

The animated grey to sprite transformer is an extension of the [grey to sprite](#grey-to-sprite) transformer for the sake of outputting an animated texture. It is notably used by the blazewood material to produce changing wood textures.

This transformer creates a number of frames, which are then filled using different frames from the passed sprites. If the desired number of frames mismatches the number of frames in a sprite, textures will be selected using a modulo operation. Note that some textures do not support animation, in which case the behavior of this transformer will be identical to grey to sprite](#grey-to-sprite).

The animated grey to sprite transformer has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Root sprite transformer object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:animated_sprite`.
    * {% include field.html name="meta" type="resource location" %} Path to the sprite metadata for animation properties, relative to `assets/<domain>/textures/` and without the `.png.mcmeta`. Typically will be the meta for one of the sprites used, but may be different when combining animations.
    * {% include field.html name="frames" type="int" %} Number of frames desired for the output. Should be greater than 1.
    * {% include field.html name="palette" type="list" %} List of mappings from each grey value to each color or sprite. Must be sorted in ascending order by grey values.
        * {% include field.html type="object" %} A palette entry.
            * {% include field.html name="grey" type="int" %} Grey value for the palette entry, see [grey values](#grey-values) for more info.
            * {% include field.html name="path" type="resource location" %} Path to the sprite to use for this grey value, relative to `assets/<domain>/textures/`. If unset, no sprite is used.
            * {% include field.html name="color" type="argb" %} Color value to use for this grey. If unset, defaults to `FFFFFFFF` (fully opaque white). If set alongside `path`, will tint the sprite the given color.
</div>

### Offsetting Transformer
<div class="hatnote">Since 1.19.2</div>

The offsetting transformer will offset the passed texture, optionally applying another transformer to it. It is generally not useful for material textures, but is registered as its used by another data generator.

The offsetting transformer has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Root sprite transformer object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:offsetting`.
    * {% include field.html name="base" type="object" %} If set, this transformer will be applied to the texture before offsetting it.
        * {% include field.html name="type" type="resource location" %} Sprite transformer ID, see [sprite transformers](#sprite-transformers).
        * *Other fields defined by the sprite transformer.*
    * {% include field.html name="x" type="int" %} Number of pixels in the X direction to offset (positive means right). If unset defaults to 0.
    * {% include field.html name="y" type="int" %} Number of pixels in the Y direction to offset (positive means down). If unset defaults to 0.
</div>

## Color Mappings

Tinkers' Construct provides one color mapping by default, though addons can provide additional color mappings.

### Grey to Color

The grey to color mapping will map colors from a [grey value](#grey-values) to a given color. This is the most commonly used color mapping among tool materials. If a pixel has a grey value that does not match any from the palette, the colors from two nearest grey values will be interpolated to produce the color.

The grey to color mapping has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Root color mapping object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:grey_to_color`.
    * {% include field.html name="palette" type="list" %} List of mappings from each grey value to each color. Must be sorted in ascending order by grey values.
        * {% include field.html type="object" %} A palette entry.
            * {% include field.html name="grey" type="int" %} Grey value for the palette entry, see [grey values](#grey-values) for more info.
            * {% include field.html name="color" type="argb" %} Color value to use for this grey.
</div>


[generate-command]: /docs/commands/tinkers/generate-part-textures