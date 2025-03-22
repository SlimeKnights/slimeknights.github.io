---
layout: page
title: Fallback Model Loader
breadcrumb: Fallback
description: The fallback model loader allows a block or item to select between different models based on the mods that are loaded. Unlike other Mantle models, this is just a loader, and typically will load another model format.
---

{{page.description}}

## Fallback

The fallback model loader allows selecting between different model loaders on the basis of loaded mods. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Fallback JSON.
    * {% include field.html name="loader" type="resource location" %} Always `mantle:fallback`.
    * {% include field.html name="models" type="list" %} List of model loaders to try.
        * {% include field.html type="object" %} A single model in the list.
            * {% include field.html name="loader" type="resource location" %} Loader to use for this model option. If unset, uses the vanilla block model loader.
            * {% include field.html name="fallback_mod_id" type="string" %} Mod that must be loaded to use this model option. If unset, defaults to the namespace of the loader, or unconditional if no loader is set.
            * *All fields from the model loader.*
</div>


### Example

The following JSON produces a [connected model](../connected) if Tinkers' Construct is loaded, and a vanilla model otherwise. Note that if fallback_mod_id was not specified, the dependency for the first model would be Mantle.

```json
{
  "loader": "mantle:fallback",
  "models": [
    {
      "fallback_mod_id": "tconstruct",
      "loader": "mantle:connected",
      "parent": "block/cube_all",
      "textures": {
        "all": "block/glass"
      },
      "connection": {
        "textures": { "all": "cornerless_full" }
      }
    },
    {
      "parent": "block/cube_all",
      "textures": {
        "all": "block/glass"
      }
    }
  ]
}
```