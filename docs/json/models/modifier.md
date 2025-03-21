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

## Tool Textures

The modifier tool texture JSON defines how modifiers render on tools. It is located at `assets/<domain>/tinkering/modifiers.json`. 

{% include construction.html type="section" %}

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