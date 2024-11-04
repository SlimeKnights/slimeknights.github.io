---
layout: page
title: Fluid Textures
---
By default in Forge, the textures and color for a fluid are hardcoded in Java, restricting the ability for resource packs to modify fluid appearance (especially if a mod makes heavy usage of tinting a solid colored fluid texture). Since 1.19.2, Mantle defines fluid textures in JSON, allowing more control to resource packs.

Note that this feature does not apply to all fluids, a mod must opt-in to this feature by defining their fluid to use the Mantle fluid texture system in Java.

## Fluid Textures

Fluid texture JSON are defined under `assets/<domain>/mantle/fluid_texture/<name>.json` for the fluid with ID `<domain>:<name>`. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid texture object.
    * {% include field.html name="color" type="argb" %} Color tint to apply to the fluid textures, supports alpha. If unset, defaults to `FFFFFFFF` (that is, no tint).
    * {% include field.html name="still" type="resource location" %} Path to the still texture, applied when the fluid is not moving. Still texture is a standard resolution texture.
    * {% include field.html name="flowing" type="resource location" %} Path to the flowing texture, appplied when the fluid is moving. Flowing texture is a double resolution texture.
    * {% include field.html name="overlay" type="resource location" %} Path to the overlay texture, applied when the fluid is adjacent to a non-opaque block. If unset, uses the still or flowing texture.
    * {% include field.html name="camera" type="resource location" %} Path to the camera texture, applied when an entity is swimming in the fluid. Does not support animations. If unset, no camera overlay is applied.
</div>

All texture paths are relative to `assets/<domain>/textures/`.