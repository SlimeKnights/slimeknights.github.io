---
layout: page
title: Armor Models
description: Since 1.19.2, Tinkers' Construct armors have their textures controlled via JSON. This allows configuring how the model renders its base layer, materials, embellishments, dye, materials, and other modifiers.
---
{{page.description}}

Armor models are located at `assets/<domain>/tinkering/armor_models/<name>.json`, for armor with the ID `<domain>:<name>`. In the base mod, there are three armor models:

* `tconstruct:travelers`: controls all 4 pieces in the travelers gear set.
* `tconstruct:plate`: controls all 4 pieces in the plate armor set.
* `tconstruct:slime`: controls all 4 pieces in the slime suit set. Note for the slimeskull, this model controls the textures for the non-skull part only.

When using [JSON Things](/docs/json/json-things#armor) to add armor using the type `tconstruct:multilayer_armor`, this ID is set by the field `name`.

{% include toc.html %}

## JSON Format

Armor models have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html name="layers" type="list" %} List of layers in the model.
        * {% include field.html type="texture supplier" link="#texture-suppliers" %} An armor texture supplier.
            * {% include field.html name="type" type="resource location" %} Texture supplier ID.
            * *Other fields based on the texture supplier type.*
</div>

## Armor Textures

Armor textures are located from `assets/<domain>/textures/tinker_armor/<name>.png` for the armor texture `<domain>:<name>`. The name of the texture is determined by the [Texture Supplier](#texture-suppliers). There are three different texture types:
* `armor`: texture for helmets, chestplates, and boots.
* `leggings`: texture for leggings. Generally just the torso and leg areas of the texture are rendered.
* `wings`: texture for wings on a chestplate when the wings modifier is applied.

During resource pack loading, if a texture requested by a supplier is not present, it will be declared as empty. Layers with empty textures do not render.

## Texture Suppliers

Texture suppliers determine the texture for a layer of armor based on the armor item properties and the requested texture type. Each texture supplier has the option to either return a texture with a color tint, or return empty indicating the layer will skip rendering.

### Fixed

The fixed texture supplier supplies the same texture every time with an optional tint. If desired, it can also be configured to only show the texture if a given modifier is present. Textures for this supplier are loaded from `assets/<prefix domain>/textures/tinker_armor/<prefix name><texture type><suffix>.png`.

The fixed texture supplier has the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="texture supplier" %} An armor texture supplier.
    * {% include field.html name="type" type="resource location" %} Texture supplier ID. Always `tconstruct:fixed`.
    * {% include field.html name="prefix" type="resource location" %} Prefix to apply to texture names before the texture type. Note there is no separator applied between the prefix and the texture type, one such as `/` or `_` must be provided if desired.
    * {% include field.html name="suffix" type="string" %} Suffix to apply to texture names after the texture type. Like with the prefix, no separator is applied unless included in the suffix.
    * {% include field.html name="color" type="argb" %} Color tint to apply to the texture. If unset, defaults to `"FFFFFFFF"` (no tint).
    * {% include field.html name="modifier" type="Modifier ID" %} If set, the texture will return empty if the passed modifier is not present on the armor. If unset, the texture will only be empty if missing from the resource pack.
</div>

**Example:**

This JSON:
```json
{
  "type": "tconstruct:fixed",
  "modifier": "tconstruct:green",
  "prefix": "tconstruct:example/",
  "suffix": "_gold",
  "color": "00FF00"
}
```
will apply a layer to the armor with textures from `assets/tconstruct/textures/tinker_armor/example/<texture type>_gold.png`, e.g. `assets/tconstruct/textures/tinker_armor/example/armor_gold.png`. The texture will be tinted green, and will only show if it both exists in the resource pack and the armor piece has the modifier `tconstruct:green`.

### Dyed

The dyed texture supplier supplies the same texture every time, with a tint based on a modifier. If the modifier is not present, and no default color is supplied, the supplier will return empty. Textures for this supplier are loaded from `assets/<prefix domain>/textures/tinker_armor/<prefix name><texture type>.png`.

The dyed texture supplier has the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="texture supplier" %} An armor texture supplier.
    * {% include field.html name="type" type="resource location" %} Texture supplier ID. Always `tconstruct:dyed`.
    * {% include field.html name="prefix" type="resource location" %} Prefix to apply to texture names before the texture type. Note there is no separator applied between the prefix and the texture type, one such as `/` or `_` must be provided if desired.
    * {% include field.html name="modifier" type="Modifier ID" %} Modifier supplying the color, typically is `tconstruct:dyed`.
    * {% include field.html name="default_color" type="rgb" %} Color tint to apply to the texture if the modifier is absent. If unset, the supplier will return an empty texture when the modifier is absent.
</div>

### Material

The material texture suppliers applies both textures and colors based on a material, similarly to [material models](/docs/json/material-models). Textures are loaded from `assets/<prefix domain>/textures/tinker_armor/<prefix name><texture type><suffix>.png` where `<suffix>` is one of:

* Material: `_<material domain>_<material name>` if a material is present and the material texture exists.
* Fallback: `_<fallback name>` if a material is present, the material texture does not exist, and the fallback exists. When the fallback is used, its tinted the material's fallback color.
* Empty: for the base texture. Used if a material is not present (with no tint), or if a material is present and lacks both a material color and a fallback color, where it will be tinted the material's fallback color.

There are two different material texture suppliers, which change how the material texture is determined.

#### Tool Material

The tool material texture supplier determines its material based on the tool material list, which is the same list used in item models. This texture supplier is used by plate armor to make the materials work. The tool material texture supplier has the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="texture supplier" %} An armor texture supplier.
    * {% include field.html name="type" type="resource location" %} Texture supplier ID. Always `tconstruct:material`.
    * {% include field.html name="prefix" type="resource location" %} Prefix to apply to texture names before the texture type. Note there is no separator applied between the prefix and the texture type, one such as `/` or `_` must be provided if desired.
    * {% include field.html name="index" type="integer" %} Index of the material to use, corresponds to the order of tool parts used to create the armor in the tool definition.
</div>


#### Modifier Material

The tool material texture supplier determines its material based on the tools persistent data, which is used by modifiers such as embellishments. The tool material texture supplier has the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="texture supplier" %} An armor texture supplier.
    * {% include field.html name="type" type="resource location" %} Texture supplier ID. Always `tconstruct:persistent_data`.
    * {% include field.html name="prefix" type="resource location" %} Prefix to apply to texture names before the texture type. Note there is no separator applied between the prefix and the texture type, one such as `/` or `_` must be provided if desired.
    * {% include field.html name="material_key" type="resource location" %} Persistent data key containing the material. Typically `tconstruct:embellishment`.
</div>

### First Present

The first present supplier will run multiple texture suppliers from `options` and return the first non-empty texture found. It is notably used by travelers gear to swap out the base texture for the golden texture when the golden modifier is applied.

<div class="treeview" markdown=1>
* {% include field.html type="texture supplier" %} An armor texture supplier.
    * {% include field.html name="type" type="resource location" %} Texture supplier ID. Always `tconstruct:first_present`.
    * {% include field.html name="options" type="list" %} List of texture suppliers.
        * {% include field.html type="texture supplier" link="#texture-suppliers" %} An armor texture supplier.
            * {% include field.html name="type" type="resource location" %} Texture supplier ID.
            * *Other fields based on the texture supplier type.*
</div>

**Example:**

This JSON:
```json
{
  "type": "tconstruct:first_present",
  "options": [
    {
      "type": "tconstruct:fixed",
      "modifier": "tconstruct:golden",
      "prefix": "tconstruct:travelers/golden_"
    },
    {
      "type": "tconstruct:fixed",
      "prefix": "tconstruct:travelers/base_"
    }
  ]
}
```
will apply `assets/tconstruct/textures/tinker_armor/travelers/golden_<texture type>.png` if the `tconstruct:golden` modifier is present (as the [fixed texture supplier](#fixed) returns empty if the modifier is not present). If the modifier is not present, it will fallback to `assets/tconstruct/textures/tinker_armor/travelers/base_<texture type>.png`.