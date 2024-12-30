---
layout: page
title: Render Items
description: Render items describe the location of items rendered on block entities from Tinkers' Construct. This page describes both the format for fluid cuboids along with common usages of them in Mantle and Tinkers' Construct.
---

{{page.description}}

{% include toc.html %}

## Format

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid cuboid object.
    * {% include field.html name="center" type="vector" %} Location of the center of the item. If unset, defaults to `<0,0,0>`.
    * {% include field.html name="size" type="float" %} Size of the item in pixels. If set to 0, item will not render.
    * {% include field.html name="x" type="int" %} Rotation to apply to the item along the X axis, applied before Y rotation. Must be 0/90/180/270. If unset, defaults to 0.
    * {% include field.html name="y" type="int" %} Rotation to apply to the item along the Y axis, applied after X rotation. Must be 0/90/180/270. If unset, defaults to 0.
    * {% include field.html name="transform" type="resource location" %} Selects which item transforms are used to render this item, based on the types seen in [model display](https://minecraft.wiki/w/Model#Item_models). The following options are available with vanilla and Tinkers' Construct:
        * `none`: Applies no transform. Default value.
        * `fixed`: Applies item frame transformations, which notably makes blocks much smaller.
        * `ground`: Applies transforms used for items on the ground.
        * `gui`: Applies transformations used for items .
        * `head`: Applies transforms used when worn on an entity's head.
        * `firstperson_lefthand`: Applies transforms used when held in the left hand in first person. Rarely useful in models.
        * `firstperson_righthand`: Applies transforms used when held in the right hand in first person. Rarely useful in models.
        * `thirdperson_lefthand`: Applies transforms used when held in the left hand in third person. Rarely useful in models.
        * `thirdperson_righthand`: Applies transforms used when held in the right hand in third person. Rarely useful in models.
        * `tconstruct:table`: Applies transforms used when on any type of table from Tinkers' Construct. Typically the same as `none`.
        * `tconstruct:melter`: Applies transforms used when  placed inside the melter. Typically the same as `none` but notably makes Tinkers' Construct tools use their small model.
        * `tconstruct:casting_table`: Applies transforms used when on the casting table. Typically the same as `fixed` but notably makes Tinkers' Construct tools use their small model.
        * `tconstruct:casting_basin`: Applies transforms used when in a casting basin. Typically the same as `none` but notably makes Tinkers' Construct tools use their small model.
</div>

## Render Item Lists
<div class="hatnote" markdown=1>
For the format used from 1.16 to 1.19, see [Inventory Model](../inventory).
</div>

Render item lists are used since 1.20 to define the location of items within a block entity renderer in Tinkers' Construct or Ceramics. Render item lists are defined under`assets/<domain>/mantle/model/render_items/<name>.json` for the block or template named `<domain>:<name>`. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A render item list object.
    * {% include field.html name="parent" type="resource location" %} If set, loads properties from the render item list at the specified location for any properties not set in this JSON.
    * {% include field.html name="items" type="list" %} List of items to display.
        * {% include field.html type="render item" %} An item to render. Index in the list corresponds to the index in the block's inventory.
</div>