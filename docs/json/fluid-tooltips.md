---
layout: page
title: Fluid Tooltips
---
By default, Forge has no concept of fluid tooltips in UIs, leaving the implementation up to mods. Since 1.18.2, Mantle provides an implementation of fluid tooltips, which notably includes displaying fluid in custom units instead of in direct millibucket values.

{% include toc.html %}

## Unit Lists

Fluid unit lists are defined in resource packs under `assets/<domain>/mantle/fluid_effects/<name>.json`. In most cases, the location `<domain>:<name>` has no impact on behavior apart from resource pack overrides. However, some contexts make use of a [named unit list](#named-unit-lists) for defining special behavior, such as the units for an empty tank.

Fluid unit JSON has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid tooltip object.
    * {% include field.html name="redirect" type="resource location" %} If set, this unit list will be redirected to the unit list with the given ID, and the rest of the JSON is ignored. Only useful for [named unit list](#named-unit-lists).
    * {% include field.html name="tag" type="Fluid Tag" %} Fluid tag determining fluids receiving these units in the tooltip. May be left out on [named unit list](#named-unit-lists).
    * {% include field.html name="units" type="list" %} List of units for display. Expected to be sorted from largest to smallest amount.
        * {% include field.html type="object" %} An fluid unit.
            * {% include field.html name="key" type="string" %} Translation key for this unit. Will be passed the amount as a format argument.
            * {% include field.html name="needed" type="integer" %} Size of this unit.
</div>

## Named Unit Lists

The following named unit lists exist in Mantle or Tinkers' Construct:

* **`mantle:fallback`**: Defines the default fluid unit list for any fluid with no unit list. See [default units](#default-units).
* **`tconstruct:alloyer`**: Defines the unit list for the capacity of the alloyer.
* **`tconstruct:melter`**: Defines the unit list for the capacity of the melter.
* **`tconstruct:smeltery`**: Defines the unit list for the capacity of the smeltery.
* **`tconstruct:foundry`**: Defines the unit list for the capacity of the foundry.

### Default Units

Any fluid that does not have a unit list defined will use the default units, defined under the ID `mantle:fallback`. The default unit list is defined as follows:

```json
{
    "units": [
        { "key": "gui.mantle.fluid.kilobucket", "needed": 1000000 },
        { "key": "gui.mantle.fluid.bucket",     "needed": 1000 }
    ]
}
```
This defines two units: kilobuckets at 1000000mb, and buckets at 1000mb. The remainder will fallback the default milibuckets.

## Unit Tags

Since fluid units are defined on a tag basis, this means often you can use an existing tag to assign tooltips instead of defining a new tooltip JSON. The following fluid tags are defined by Tinkers' Construct as general use unit lists:

* **`tconstruct:tooltips/metal`**: Tooltips for metal blocks, with 810mb blocks, 90mb ingots, and 10mb nuggets.
* **`tconstruct:tooltips/gem_large`**: Tooltips for diamond-like gems, with 900mb blocks, 100mb gems, and 25mb "shards" (quarter gems).
* **`tconstruct:tooltips/gem_small`**: Tooltips for quartz-like gems, with 400mb blocks, 100mb gems, and 25mb "shards" (quarter gems).
* **`tconstruct:tooltips/clay`**: Tooltips for clay, with 1000mb blocks and 250mb bricks.
* **`tconstruct:tooltips/slime`**: Tooltips for slime, with 2250mb blocks and 250mb slimeballs.
* **`tconstruct:tooltips/glass`**: Tooltips for glass, with 1000mb blocks and 250mb panes.
* **`tconstruct:tooltips/soup`**: Tooltips for soup, with 250mb bowls.