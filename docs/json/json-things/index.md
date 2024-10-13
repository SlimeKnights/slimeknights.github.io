---
layout: page
title: Json Things
---
<div class="hatnote" markdown=1>
  This page covers information for 1.19.2+. For 1.18.2, see [Json Things 1.18](1.18).
</div>

While we aim to make as much of our mods configurable and extendable through data packs and resource packs, there are some areas of the game that simply cannot be data driven at this time. Addons written in Java can of course access these features through code, but that is more difficult for modpacks and developers with less coding experience.

[Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things) offers a good middle ground for developers wishing to add registry content such as items, blocks and fluids using an interface very similar to data packs and resource packs called "thing packs", allowing very extensive mods to be written without writing any Java code. For a demonstration of its potential, see [Tinkers' JSON Things](https://www.curseforge.com/minecraft/mc-mods/tinkers-things-json), an official addon to Tinkers' Construct written purely using JSON files.

Json Things provides most of the components you need to create a Tinkers' Construct addon, though a few components, notably the item classes required to register tools, required custom compatibility. This page documents that compatibility.

## Prerequisites

Tinkers' Construct items and blocks added through Json Things follow the same base format as the items added in Json Things. Make sure to read the basics of items and blocks on the Json Things documentation:

* [Json Things Item Definitions][item-definitions]
* [Json Things Block Definitions][block-definitions]

## Material Items
<div class="hatnote" markdown=1>
  Folder: `things/<domain>/item/`.
</div>

Material items are items that have a variant based on materials. While the NBT for these items is handled primarily through recipes and the textures through models, these item classes ensure the proper tooltips are shown and that creative tabs and JEI show all variants.

### Tool Part

Tool parts are essential for creating new tools; the majority of tool recipes require certain interfaces to be present on any items used.

The format of the tool part item type is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="resource location" name="type" %} Item type ID, must be `tconstruct:tool_part`.
    * {% include field.html type="Stat Type ID" name="stat_type" %} Supported stat type. This will determine available material variants, along with how the part contributes stats and traits to the tool.
    * *Any other fields supported in [item definitions][item-definitions].*
</div>

### Repair Kit

Repair kits allow repairing a tool both in the Tinkers' Station or Anvil, and in a standard crafting table.
Most addons will not need to add custom repair kits, but they serve as a nice example "tool part" and may be useful to a modpack wishing for more granular on the go repair.

The format of the repair kit item type is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="resource location" name="type" %} Item type ID, must be `tconstruct:repair_kit`.
    * {% include field.html type="number" name="repair_amount" %} Amount this repair kit will repair. 1.0 makes it equivelent to a single "common unit" of the material, for instance an ingot or a wood plank. Note that this does not determine the cost of the repair kit, that is controlled through recipes.
    * *Any other fields supported in [item definitions][item-definitions].*
</div>

## Tool Items
<div class="hatnote" markdown=1>
  Folder: `things/<domain>/item/`.
</div>

While the majority of tool behavior is defined as part of tool definitions in data packs, the internal tool logic must still be registered as an item of the appropriate type to ensure all modifiers can properly function. There is also a small amount of tool behavior tied to the item type, though that may change in future updates as more content is migrated to data packs.

### Standard Tool

The majority of tools (melee weapons, harvest tools, shields, staffs) are added using this item type, with the differing behaviors caused by tool definitions, starting modifiers, and item tags.

The format of the tool item type is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="resource location" name="type" %} Item type ID, must be `tconstruct:tool`.
    * {% include field.html type="boolean" name="break_blocks_in_creative" %} If true (default), this tool can break blocks in creative mode. Weapons that are primarily for combat (notably swords) will set this to false.
    * {% include field.html type="integer" name="max_stack_size" %} Maximum stack size of the tool, default 64. This is a standard Json Things property which nearly all tools will want to set to 1; however some tools such as daggers have a higher stack size for modifier crafting incentives.
    * *Any other fields supported in [item definitions][item-definitions].*
</div>

### Bow

This item type represents a modifiable bow, with behavior similar to longbows. Bows support firing arrows on releasing right click. They only support left click interaction modifiers by default (instead of all interaction modifier hooks). They fully support melee attacks and block harvest if added to the proper tags.

The format of the bow item type is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="resource location" name="type" %} Item type ID, must be `tconstruct:bow`.
    * {% include field.html type="integer" name="max_stack_size" %} Maximum stack size of the tool, default 64. This is a standard Json Things property which nearly all tools will want to set to 1; however some tools such as daggers have a higher stack size for modifier crafting incentives.
    * *Any other fields supported in [item definitions][item-definitions].*
</div>

### Crossbow

This item type represents a modifiable crossbow. Crossbows support firing arrows and fireworks by charging to load then firing on a second click. They only support left click interaction modifiers by default (instead of all interaction modifier hooks). They fully support melee attacks and block harvest if added to the proper tags.

The format of the crossbow item type is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="resource location" name="type" %} Item type ID, must be `tconstruct:crossbow`.
    * {% include field.html type="boolean" name="allow_fireworks" %} If true, this crossbow may use fireworks as ammo. If false, it is limited to only standard arrows.
    * {% include field.html type="integer" name="max_stack_size" %} Maximum stack size of the tool, default 64. This is a standard Json Things property which nearly all tools will want to set to 1; however some tools such as daggers have a higher stack size for modifier crafting incentives.
    * *Any other fields supported in [item definitions][item-definitions].*
</div>

### Armor

Armor behaves notably different from tools. They notably do not fire many modifier hooks when holding the item, instead firing their hooks when the armor is worn in the correct slot. The majority of the armor's behavior including stats is defined through the tool definition in data packs.

There are two different armor item types, `tconstruct:basic_armor` uses two textures for the armor, `assets/<domain>/textures/models/armor/<name>_layer_2` for leggings and `assets/<domain>/textures/models/armor/<name>_layer_1` for all other pieces. `tconstruct:multilayer_armor` supports Tinkers' Construct's armor model system to allow making layers vary with material textures or be conditioned on the presence of a modifier; see [Armor Models](/docs/json/armor-models).

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="resource location" name="type" %} Item type ID, may be `tconstruct:basic_armor` or `tconstruct:multilayer_armor`.
    * {% include field.html type="resource location" name="name" %} Name of this armor set, typically the item name without the slot (e.g. `tconstruct:plate` for `tconstruct:plate_helmet`). Used to determine armor textures or [Armor Models](/docs/json/armor-models).
    * {% include field.html type="Sound Event ID" name="equip_sound" %} Sound to play when equipping the armor. If unset, defaults to `minecraft:item.armor.equip_generic`.
    * {% include field.html type="string" name="slot" %} Slot where this armor piece is worn. May be `helmet`, `chestplate`, `leggings`, or `boots`.
    * *Any other fields supported in [item definitions][item-definitions] except `max_stack_size`, which is always 1.*
</div>


## Other Items
<div class="hatnote" markdown=1>
  Folder: `things/<domain>/item/`.
</div>

These item types do not fit into any of the above categories.

### Tool Part Cast

Any item is valid as a cast, and casts like ingot or nugget casts can just use the standard `plain` type provided by Json Things. The tool part cast item type simply adds an additional tooltip to the cast showing the material cost for the cast, which is fetched from the relevant recipe in the data pack.

The format of the tool part cast item type is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="resource location" name="type" %} Item type ID, must be `tconstruct:part_cast`.
    * {% include field.html type="Item ID" name="part" %} ID of the part item associated with this cast. Will be used to find the cost from the relevant recipe.
    * *Any other fields supported in [item definitions][item-definitions].*
</div>


## Fluid Blocks
<div class="hatnote" markdown=1>
  Folder: `things/<domain>/fluid/`.
</div>

Tinkers' Construct defines two fluid block definitions for implementing fluid blocks with interactions similar to those provided by Tinkers' Construct. While you can define these blocks directly in a block definition, its typically easier to define it as part of the fluid JSON definition instead, which is what is described here.

### Burning Liquid

Fluid block for a hot liquid that damages submerged entities and lights them on fire. The format of the burning liquid block type within a fluid definition:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="object" name="block" %} The root block object, defining this makes the fluid have a block form.
        * {% include field.html type="resource location" name="type" %} Block type ID, must be `tconstruct:burning_liquid`.
        * {% include field.html type="integer" name="burn_time" %} Time in seconds that an entity will burn after leaving this liquid block.
        * {% include field.html type="number" name="damage" %} Fire damage in half hearts that an entity will take per second while submerged in this fluid.
        * *Any other fields supported in [block definitions][block-definitions].*
    * *Any other fields supported in [fluid definitions][fluid-definitions].*
</div>

### Mob Effect Liquid

Fluid block for a liquid that applies a mob effect to any submerged entities. The format of the mob effect liquid block type within a fluid definition:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html type="object" name="block" %} The root block object, defining this makes the fluid have a block form.
        * {% include field.html type="resource location" name="type" %} Block type ID, must be `tconstruct:mob_effect_liquid`.
        * {% include field.html type="Mob Effect ID" name="effect" %} Mob effect ID of the effect to apply while submerged.
        * {% include field.html type="integer" name="effect_level" %} Level of the effect to apply, starting from 1.
        * {% include field.html type="integer" name="burn_time" %} Time in seconds that the effect will last. Mostly affects the time the effect lasts after leaving the fluid, but some effects such as regeneration apply their effect at specific times so you may experience no effect while submerged based on the time provided.
        * {% include field.html type="number" name="damage" %} Fire damage in half hearts that an entity will take per second while submerged in this fluid.
        * *Any other fields supported in [block definitions][block-definitions].*
    * *Any other fields supported in [fluid definitions][fluid-definitions].*
</div>

[item-definitions]: https://github.com/gigaherz/JsonThings/blob/1.19.2/documentation/formats/Items.md
[block-definitions]: https://github.com/gigaherz/JsonThings/blob/1.19.2/documentation/formats/Blocks.md
[fluid-definitions]: https://github.com/gigaherz/JsonThings/blob/1.19.2/documentation/formats/Fluids.md