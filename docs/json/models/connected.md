---
layout: page
title: Connected Model
breadcrumb: Connected
description: The Connected Model is a model loader from Mantle that allows a block to dynamically change it textures based on a neighboring block of the same kind. This acts as a form of low tech connected textures mapping.
---
<div class="hatnote" markdown=1>
See also: [CTM Overrides](https://github.com/Chisel-Team/ConnectedTexturesMod/wiki/CTM-Overrides-in-Models) from [ConnectedTexturesMod](https://www.curseforge.com/minecraft/mc-mods/ctm) for the variant used by Chisel Team.
</div>
<div class="hatnote" markdown=1>
See also: [Connected Textures](https://github.com/Soaryn/XyCraftTracker/wiki/Connected-Textures) from [XyCraft](https://www.curseforge.com/minecraft/mc-mods/xycraft), which offers a more flexible model based connected model.
</div>

{{page.description}}

## Connected Model

The NBT key model maps textures to values for a specific NBT string key. It is notably used by Tinkers' Consturct for the creative slot item, which doubles as the way modifier slot icons are loaded. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Connected Model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `mantle:connected`.
    * *All fields from {% include type.html type="colored block model" %}.*
    * {% include field.html name="connection" type="object" %} Contains data about how to apply connections.
        * {% include field.html name="textures" type="object" %} Mapping from texture name to the type of connection applied to that texture. Texture names match up to the `textures` object in the root model.
            * {% include field.html name="\<name\>" type="string" %} Sets the texture `<name>` to use the listed connection type. See [connection types](#connection-types) for options. Based on the type, additional textures will be loaded. 
        * {% include field.html name="sides" type="list" %} Set of directions to check when considering connections. Can be used to simplify connection lookups. If unset, defaults to all 6 directions.
            * {% include field.html  type="direction" %} A single direction to check for connections. Consider that while a texture connects in 2 dimensions (4 directions), the overall block may connect in 3 dimensions (6 directions); consider all faces a texture may be used.
        * {% include field.html name="predicate" type="string" %} Determines the predicate for when a block in a given direction matches. If unset, defaults to `block`. The following options are available in Mantle by default, though more predicates may be added:
            * `block`: matches if the block is identical.
            * `pane`: matches if the block is identical, and either both are center only or neither are center only.
</div>

## Connection Types

Mantle maintains a registry of connection types under `ConnectedModelRegistry` allowing mods to register additional types beyond those natively provided. By default, Mantle provides the types listed in the following subsections, though mods can register additional types.

The type will specify a set of suffixes to the texture `<name>` to load. For example, if the model specifies that the texture name `all` is `tconstruct:block/clear_glass`, and the type looks for the suffix `/ud`, then the texture used is `tconstruct:block/clear_glass/ud`.

Note that Mantle only supports connected textures based on the 4 cardinal directions from the face; it is not possible through this model to consider diagonal connections nor connect "behind" or "in front of" the face.

### Top

Top connection is the simplest form of connection. It registers one texture suffix, `/bottom`, which is used if the block detects another block of the same type directly above it. If the block does not have a block above it, the root texture is used.

### Horizontal

The horizontal connection allows the texture to connect to blocks to the left or right of the face. It registers the following suffixes:

* No suffix: texture used when a matching block is on neither the left nor right.
* `/left`: texture used when a matching block is on the left, but not the right.
* `/right`: texture used when a matching block is on the right, but not the left.
* `/middle`: texture used when a matching block is on both the left and the right.

### Vertical

The vertical connection allows the texture to connect to blocks above or below the face. It registers the following suffixes:

* No suffix: texture used when a matching block is neither above or below the block.
* `/top`: texture used when a matching block is above, but not below.
* `/bottom`: texture used when a matching block below, but not above.
* `/middle`: texture used when a matching block is both above and below.

### Cornerless Full

The cornerless full connection type connects in the 4 cardinal directions, producing 16 total possible textures.

This produces nearly full connected textures, though notably does not include "corner" connections, meaning either inside corners will appear to be missing a small section, or there will be extra pixels on the corners of large open sections. 

The following table specifies the 16 texture suffixes and when they are used.

<table class="connected-table">
    <thead><tr>
        <th>Suffix</th>
        <th>Above</th>
        <th>Below</th>
        <th>Left</th>
        <th>Right</th>
    </tr></thead>
    <tbody>
        {% include_relative _connected_row.html %}
        {% include_relative _connected_row.html suffix="u"    %}
        {% include_relative _connected_row.html suffix="d"    %}
        {% include_relative _connected_row.html suffix="l"    %}
        {% include_relative _connected_row.html suffix="r"    %}
        {% include_relative _connected_row.html suffix="ud"   %}
        {% include_relative _connected_row.html suffix="ul"   %}
        {% include_relative _connected_row.html suffix="ur"   %}
        {% include_relative _connected_row.html suffix="dl"   %}
        {% include_relative _connected_row.html suffix="dr"   %}
        {% include_relative _connected_row.html suffix="lr"   %}
        {% include_relative _connected_row.html suffix="udl"  %}
        {% include_relative _connected_row.html suffix="udr"  %}
        {% include_relative _connected_row.html suffix="ulr"  %}
        {% include_relative _connected_row.html suffix="dlr"  %}
        {% include_relative _connected_row.html suffix="udlr" %}
    </tbody>
</table>

## Texture Overrides

By default, a texture suffix will simply be added to the texture path. However, it is possible to directly specify the texture for a particular variant by adding another texture to the `textures` object using the suffix, replacing `/` with `_`. For example, consider the following textures object:

```json
{
  "loader": "mantle:connected",
  "parent": "block/cube_all",
  "textures": {
    "all": "tconstruct:block/clear_glass",
    "all_udlr": "tconstruct:block/invisible",
  },
  "connection": {
    "textures": { "all": "cornerless_full" }
  }
}
```

If using the `cornerless_full` connection type, the suffix `/udlr` will use `all_udlr`, resolving to `tconstruct:block/invisible` instead of the typical `tconstruct:block/clear_glass/udlr`. Another suffix such as `/ul` will resolve as normal as `tconstruct:block/clear_glass/ul` since its not listed in the textures object.

## Multipart

Due to a [Forge bug](https://github.com/MinecraftForge/MinecraftForge/pull/6841), this model does not work on blocks using the multipart model without special support. This can be done on the mod side using `IMultipartConnectedBlock`. Any models that do not use multipart should work as expected. Within Tinkers Construct, the following multipart blocks were given special support to work with a connected model:

* Clear Glass Pane
* Stained Clear Glass Pane (all 16 colors)
* Seared Glass Pane (all variants)
* Scorched Glass Pane (all variants)
* Soul Glass Pane