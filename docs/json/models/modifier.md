---
layout: page
title: Modifier Model
breadcrumb: Modifier
description: Modifier models are used to define how modifiers render on tools and in the JEI ingredient list.
---
<div class="hatnote" markdown=1>
This page is about the resource pack definition for modifiers. For the data pack definition, see [Modifiers](../../modifiers).
</div>

Modifier models are used to define how [modifiers](../../modifiers) render on tools and in the JEI ingredient list.

For both files, the domain `<domain>` has no impact on the behavior of the JSON, it is simply used to allow multiple mods to define a color list without conflicting (as before 1.19.4 Forge did not allow multiple mods to define a resource at the same location in resource packs).

{% include toc.html %}

## Modifier Icons
<div class="hatnote">Since 1.18.2</div>

Modifier icons is a JSON file used to assign icons to modifiers. IT is located at `assets/<domain>/tinkering/modifier_icons.json`.

The primary use of the icon is modifier display in JEI. Any modifier which lacks an icon will be rendered using a default book icon, which is tinted based on the [modifiers text color](../colors#usages). Modifier icons are defined in resource packs `assets/<domain>/tinkering/modifier_icons.json`.

The modifier icons JSON has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Modifier icons object.
    * {% include field.html name="\<modifier\>" type="resource location" %} Assigns the modifier with ID `<modifier>` to the given texture.
    * {% include field.html name="\<modifier\>" type="list" %} Assigns the modifier with ID `<modifier>` to the given list of textures. They will all be rendered in order, useful for reusing parts of an icon.
        * {% include field.html type="resource location" %} A single texture for `<modifier>`.
</div>

All modifier textures are relative to `assets/<domain>/textures/` and should not contain the `.png` extension.

## Modifier Models

The modifier tool texture JSON defines how modifiers render on tools. It is located at `assets/<domain>/tinkering/modifiers.json`. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Modifier models object.
    * {% include field.html name="\<modifier\>" type="resource location" %} Assigns the modifier with ID `<modifier>` to the given model with no configuration.
    * {% include field.html name="\<modifier\>" type="object" %} Assigns the modifier with ID `<modifier>` to the specified model with configuration.
        * {% include field.html name="type" type="resource location" %} Modifier model type.
        * *Any additional fields defined by the modifier model type*.
    * {% include field.html name="\<modifier\>" type="null" %} Setting a modifier to null removes the model from the listed modifier. Useful to save resources by disabling an unused modifier.
</div>

A modifier model will select 1 or more textures from the tool based on its modifier roots, the modifier ID, and an optional texture suffix. For a given root `<root_domain>:<root_name>`, modifier `<modifier_domain>:<modifier_name>`, and suffix `<suffix>`, the full texture path will be `<root_domain>:<root_name><modifier_domain>_<modifier_name><suffix>`. For example, pickaxes use the root of `tconstruct:item/tool/pickaxe/modifiers/`, meaning the modifier `tconstruct:diamond` with no suffix would load its texture from `tconstruct:item/tool/pickaxe/modifiers/tconstruct_diamond`.

Typically, modifier models will have one or more texture dependencies; if missing then the model will be skipped for that tool.

The following subsections describe different modifier model options.

### Normal

The normal modifier model is used to most common modifiers as a simple texture. It has ID `tconstruct:normal`. This modifier will render the texture with no suffix on the tool. If the texture does not exist, the model will be disabled.

The normal model has the following configuration:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Modifier model object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:normal`.
    * {% include field.html name="color" type="argb" %} Tints the texture based on the specified color. If unset, applies no tint.
    * {% include field.html name="luminosity" type="integer" %} Sets the minimum light level for the modifier texture, making it potentially appear lighter than the tool.
</div>

### Dyed

The dyed modifier model has ID `tconstruct:dyed` with no configuration. This modifier will render the texture with no suffix on the tool, tinted based on the color in persistent data under the modifier ID. If the texture does not exist, the model will be disabled.

This model is notably used by the dyed modifier to tint some parts of the tool. It is often applied as a [first modifier](../tool#tool) so it appears as though the original tool texture was tinted.

### Material

The material modifier model has ID `tconstruct:material` with no configuration. This modifier will fetch texture suffixes based on [material render info](../material#material-render-info), following the same convention as [material models](../material#tool-parts). The material is fetched from persistent data under the modifier ID. If the texture does not exist, the model will be disabled.

This model is notably used by the embellishment modifier to apply material textures to some parts of the tool. It is often applied as a [first modifier](../tool#tool) so it appears as though the original tool received the material.

### Fluid

The fluid modifier model is used to render fluids as part of the tool model. It has ID `tconstruct:fluid` with no configuration. The modifier will fetch the following suffixes:

* No suffix: base texture to always apply. If absent, model will only render the fluid.
* `_full`: fluid mask determining where to render the fluid, where any non-transparent pixels determine where fluid quads are rendered.

The model will be skipped if both the base texture and `_full` are absent. The option to render with no `_full` is provided so a tool can render without fluid despite the modifier using fluid on other tools.

### Tank

The tank modifier model is an extension of the fluid modifier model to render full and partially filled fluids differently. It has ID `tconstruct:tank` with no configuration. The modifier will fetch the following suffixes:

* No suffix: base texture to always apply. If absent, model will only render the fluid.
* `_partial`: fluid mask determining where to render the fluid when the tank has fluid but is not full. If unset, then no texture will be rendered when not full.
* `_full`: fluid mask determining where to render the fluid when the tank is full. If unset, then `_partial` will be used.

The model will be skipped if all three textures are absent.

### Overslime

The overslime modifier model renders the texture only if the tool's overslime level is above 0. It has ID `tconstruct:overslime` with no configuration. This modifier will render the texture with no suffix on the tool. If the texture does not exist, the model will be disabled.

### Trim

The trim modifier model will render a trim texture over over the tool, pulling from the textures used for vanilla armor. It has ID `tconstruct:trim` with no configuration and no dependent textures to render.