---
layout: page
title: Tool Model
breadcrumb: Tool
description: This page describes the format for tool models, which assign the materials to part textures in the tool.
---
<div class="hatnote" markdown=1>
This page is about the JSON the rendering for a tool. For the behavior of a tool, see [Tool Definitions](../../tool-definitions).
</div>

{{page.description}}

{% include toc.html %}

## Tool

Tool models are used to list parts for a tool and how they match up to each material on the tool. In addition, they define the location to search for textures for [modifier models](../modifier#modifier-models), which are used to render recipe modifiers on the tool. Finally, this model supports making the tool appear extra large in hand by defining an additional set of 32x textures.

Tool models have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Connected Model JSON.
    * {% include field.html name="loader" type="resource location" %} Always `tconstruct:tool`.
    * {% include field.html name="textures" type="object" %} Mapping of texture name to texture value in the tool.
        * {% include field.html name="\<name\>" type="resource location" %} Texture for the part `<name>` on small 16x tools.
        * {% include field.html name="large_\<name\>" type="resource location" %} Texture for the 32x part `<name>` on large tools. Unused if `large` is `false`.
    * {% include field.html name="parts" type="list" %} List of textures to render in the tool. If unset, defaults to a single non-material part named `tool`. Until 1.18.2, the default part set `broken` to `broken`.
        * {% include field.html type="object" %} A single part object. Parts will layer in the order in the parts list.
            * {% include field.html name="name" type="string" %} Part name. Corresponds to a texture in `textures`.
            * {% include field.html name="index" type="integer" %} Material index on the tool for the part. If unset, part will not have material variants.
            * {% include field.html name="broken" type="string" version="until 1.18.2" %} If set, uses this name from `textures` when the tool is broken instead of `name`. 1.19+ uses [Overrides](#overrides) to handle broken tools instead.
    * {% include field.html name="large" type="boolean" %} If true, tool will render in hand using a 32x texture with the same pixel density as small tools. Causes parts to use the `large_` prefix on their name.
    * {% include field.html name="large_offset" type="list" %} If set, the model will be offset by the set number of pixels in large tools. Allows holding the tool notably higher or lower without complex math computing displays.
        * {% include field.html type="integer" %} First value in the list is the X offset, where negative is left and positive is right.
        * {% include field.html type="integer" %} Second value in the list is the Y offset, where negative is up and positive is down.
    * {% include field.html name="modifier_roots" type="list" %} If `large` is `false`, used to specify a list of texture prefixes to search for [modifier textures](../modifiers#modifier-models). Will try each prefix in order until a texture is found for the modifier.
        * {% include field.html type="resource location" %} A modifier prefix.
    * {% include field.html name="modifier_roots" type="object" %} If `large` is `true`, used to specify a list of texture prefixes for both the large and small tool variants to search for [modifier textures](../modifiers#modifier-models). Will try each prefix in order until a texture is found for the modifier.
        * {% include field.html name="small" type="resource location" %} Modifier roots for the small 16x tool variant.
            * {% include field.html type="resource location" %} A modifier prefix.
        * {% include field.html name="large" type="resource location" %} Modifier roots for the large 32x tool variant.
            * {% include field.html type="resource location" %} A modifier prefix.
    * {% include field.html name="first_modifiers" type="list" %} List of modifiers to render on the tool before any other modifiers are rendered. Any modifiers not in this list are rendered in [priority](../../modifiers#priority) order. Order determines the order these modifiers render on the tool.
        * {% include field.html type="modifier ID" %} Modifier name to render before other modifiers when present.
        * {% include field.html type="object" %} First modifier object, allowing forcing a modifier to render even if not present.
            * {% include field.html name="name" type="modifier ID" %} Modifier name to render before other modifiers.
            * {% include field.html name="forced" type="boolean" %} If true, the modifier will always render even if not present on the tool's recipe modifiers; useful for tank display. If false (default), the modifier will only render if present in the tool's modifier list. Useful for forcing a tool trait to render.
</div>

## Overrides

Tool models make use of a bunch of custom item overrides to define behaviors such as brokeness, blocking, and charging up the tool. These overrides are added in the same format as vanilla item models.

The following overrides are added to all tools and armor:

* `tconstruct:broken`: Since 1.19, this property is set to `1` when the tool is broken, and `0` otherwise. Used to change tool textures when broken in a far more stable way than the vanilla durability property.

The following overrides are added to all held tools, though not to bows and crossbows on 1.18:

* `tconstruct:charging`: If `1`, the tool is currently being charged, e.g. a bow is being drawn back or a modifier is charging up before use. If `2`, the tool is currently blocking like a shield.
* `tconstruct:charge`: Value between 0 and 1 indicating how much the tool is charged. If `tconstruct:charging` is `2`, the tool is both blocking and being charged up; used by some modifier combinations.

The following properties are added to crossbows:

* `tconstruct:ammo`: Set to `2` when the crossbow is loaded with fireworks. Set to `1` when the crossbow is loaded with an arrow.

In 1.18.2, the following properties are added to bows and crossbows instead of `tconstruct:charging` and `tconstruct:charge`:
* `tconstruct:pulling`: Same behavior as `tconstruct:charging` on bows.
* `tconstruct:pull`: Same behavior as `tconstruct:charge` on bows.