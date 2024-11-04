---
layout: page
title: Modifier Icons
---
Modifier icons is a JSON file added in 1.18.2 used to assign icons to [modifiers](../modifiers). The primary use of the icon is modifier display in JEI.

Any modifier which lacks an icon will be rendered using a default book icon, which is tinted based on the [modifiers text color](../colors#usages).

## Icon Format

Icons are defined in resource packs `assets/<domain>/tinkering/modifier_icons.json`. The domain `<domain>` has no impact on the behavior of the JSON, it is simply used to allow multiple mods to define a color list without conflicting (as before 1.19.4 Forge did not allow multiple mods to define a resource at the same location in resource packs).

The modifier icons JSON has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Modifier icons object.
    * {% include field.html name="\<modifier\>" type="resource location" %} Assigns the modifier with ID `<modifier>` to the given texture.
    * {% include field.html name="\<modifier\>" type="list" %} Assigns the modifier with ID `<modifier>` to the given list of textures. They will all be rendered in order, useful for reusing parts of an icon.
        * {% include field.html type="resource location" %} A single texture for `<modifier>`.
</div>

All modifier textures are relative to `assets/<domain>/textures/` and should not contain the `.png` extension.