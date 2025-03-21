---
layout: page
title: NBT Key Model
breadcrumb: NBT Key
description: The NBT Key Model is a model loader from Mantle that allows an item to swap its texture based on the value of a specific NBT key. Unlike the vanilla override, this maps named values to textures instead of requiring numeric indices.
---

{{page.description}}

## NBT Key

The NBT key model maps textures to values for a specific NBT string key. It is notably used by Tinkers' Consturct for the creative slot item, which doubles as the way modifier slot icons are loaded. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} NBT Key Model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `mantle:nbt_key`.
    * {% include field.html name="textures" type="object" %} Mapping from texture name to resource location texture. This behaves in the same was as standard vanilla textures, but is highlighted here as the texture key mapping is different.
        * {% include field.html name="\<key\>" type="resource location" %} If the item stack contains string `<key>` under the NBT key referenced by `nbt_key`, this texture will be used.
    * {% include field.html name="nbt_key" type="string" %} Key in item stack NBT that will determine the texture used. Key will be read as a string and map to a texture in the textures array.
    * {% include field.html name="extra_textures_key" type="resource location" %} Location within the Mantle extra textures map for mods to register additional textures for this model without modifying this JSON. If unset, this system is unused for this model.
</div>

Mods can register additional textures to this model using `NBTKeyModel#registerExtraTexture(ResourceLocation key, String textureName, ResourceLocation texture)`.