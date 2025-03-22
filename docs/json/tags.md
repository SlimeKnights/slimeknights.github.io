---
layout: page
title: Tags
description: This page summarizes Minecraft tags, which are a merged resource across data packs that allow different mods to apply behaviors to blocks, items, and alike. This page summarizes their definition, Forge extensions, common conventions, and how they are used in Tinkers' Construct.
---
<div class="hatnote" markdown=1>
See also [the Minecraft Wiki article on tags](https://minecraft.wiki/w/Tags)
</div>

{{page.description}}

{% include toc.html %}

## Tag Format
<div class="hatnote" markdown=1>
See also: [Mantle Tags Command](/docs/commands/mantle#tags)
</div>

The folder for tags varies based on the associated registry; tags typically exist under `data/<domain>/tags/<registry name>/<name>.json`, though material and modifier tags exist under `data/<domain>/tinkering/tags/<materials|modifiers>/<name>.json`.

Within the folder, tags have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Tag root object.
    * {% include field.html name="replace" type="boolean" %} If true, this tag definition will replace all lower data packs. If false (default), this tag will merge with lower packs. Generally mods should not set `replace` to `true`, though modpacks may do so to reliably entries.
    * {% include field.html name="values" type="list" %} List of entries to add to the tag.
        * {% include field.html type="Registry ID" %} A registry entry to add to the tag.
        * {% include field.html type="tag name" %} A tag entry to add to the tag. Must be prefixed by `#` or it will be interpreted as a registry entry.
        * {% include field.html type="object" %} An entry with additional options.
            * {% include field.html name="id" type="resource location" %} Either a registry entry, or a `#` prefixed tag name.
            * {% include field.html name="required" type="boolean" %} If true (default), generates an error if the entry is missing. If false, the missing entry will be ignored; useful for optional compat.
    * {% include field.html name="values" type="list" %} List of entries to remove from the tag. Will only remove entries directly defined in the tag values from another pack. For example, a registry ID entry will not remove a the ID if it was added via another tag.
        * {% include field.html type="resource ID" %} A registry entry to remove from the tag.
        * {% include field.html type="tag name" %} A tag entry to remove from the tag. Must be prefixed by `#` or it will be interpreted as a registry entry.
        * {% include field.html type="object" %} An entry with additional options.
            * {% include field.html name="id" type="resource location" %} Either a registry entry, or a `#` prefixed tag name.
            * {% include field.html name="required" type="boolean" %} If true (default), generates an error if the entry is missing. If false, the missing entry will be ignored; useful for optional compat.
</div>

To reiterate, removing entries will only remove matching entries from the values of another data pack. To remove entries added via nested tags, take advantage of `replace` and the [Mantle Tags Command](/docs/commands/mantle#tags).

## Tag Name

Many JSON formats will make use of tag names as a way to reference a list of values from a registry. Tag names are a standard [resource location]{../resource-location) in most contexts, with the registry type inferred by context in the JSON. Some select contexts will prefix them with `#` to distinguish them from registry IDs, though in most cases the field name distinguishes registry entries from tags. For JSON tag fields, if the requested tag does not exist the behavior is the same as if the tag is empty.

By convention, mods should only use the `minecraft` domain for adding entries to [vanilla tags](https://minecraft.wiki/w/Tag#List_of_tag_types). Up until 1.20.1, the `forge` domain is commonly used by mods for tagging common resources shared by mods. Since 1.20.2, the `c` domain is instead used for common tags.

## Item Tags
<div class="hatnote" markdown=1>
See also: [Mod Material Usage](https://docs.google.com/spreadsheets/d/1m9R4WtC5HVwBC_Bd0sjCrKmaf6e3F13Cq8kvbms9HVA/edit?usp=sharing), listing common tag IDs.
</div>

Item tags are located under `data/<domain>/tags/items/`.

### Material Tags

By convention, tag names for item tags (notably metals) often follow the format of `<common>:<shape>/<material>`, where `<shape>` is some resource shape and `<material>` references an ore or alloy in that shape. For instance, `forge:ingots/iron` contains iron in the shape of ingot under the 1.20.1 common standard. Many such shapes impose expectations on the items in the tag.

Some shapes of vanilla resources includes:

* `ingots/`: Standard unit for most mod metals.
* `gems/`: Represents any gem-like resources, such as diamond or quartz.
* `storage_blocks/`: For metals, represents 9 ingots of the resource. For non-metals, it is less standard, sometimes representing 4 units.
* `nuggets/`: Represents 1/9 of an ingot.
* `raw_materials/`: Represents a raw ore item worth 1 ingot, e.g. "raw iron". Ore multiplication such as the smeltery may produce more than an ingot.
* `ores/`: represents an ore block. The value of the ore block is determined by its presence in one of the following common tags. The `ore_rates/` tags do not have material variants, instead relying in intersections to determine ore values.
    * `ore_rates/singular`: Represents a standard ore block, like iron or diamond. Tinkers considers metal ore blocks in this tag to be worth 2 raw ore.
    * `ore_rates/dense`: Represents an ore block that drops many items, such as copper or redstone. Tinkers considers metal ore blocks in this tag to be worth 6 raw ore.
    * `ore_rates/sparse`: Represents an ore block dropping less than a standard unit, such as nether gold ore. Tinkers considers metal ore blocks in this tag to be worth 1 raw ore.
* `storage_blocks/raw_`: storage block materials prefixed by `raw_` represents a block of raw ore items, typically 9 of them.

Additionally, mods define many convention shape tags, such as:

* `dusts/`: Represents 1 powdered unit of material, typically ingots. Often produced as a result of ore multiplication.
* `plates/`: Represents 1 unit of a material pressed flat, typically metal.
* `gears/`: Typically worth 4 ingots of the respective resource, though many gears also have some core with varying costs.
* `rods/`: Represents 1/2 of a unit of the material. Best example is sticks (`rods/wooden`), though some mods use this for metal rods worth half an ingot.

### Tinkers' Tags

Tinkers' Construct makes use of many item tags to assign behavior and recipes. For a full list, it is best to check out [TinkerTags.java](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/common/TinkerTags.java) in an IDE or open the mod jar. Below are some tags with notable behaviors:

#### Texture variants

* `tconstruct:planklike`: Wood blocks in this tag are valid options for the part builder and tinker station. Typically includes wood planks.
* `tconstruct:workstation_rock`: Stone blocks in this tag are valid options for crafting the modifier workstation. Typically includes smooth forms of stone.
* `tconstruct:anvil_metal`: Resource blocks in this tag are valid options for crafting the Tinkers' Anvil. Typically includes metal alloys.

#### Tool building

* `tconstruct:patterns`: Items in this tag may be placed in the pattern slot of the part builder.
* `tconstruct:patterns/default`: Items in this tag are included in the default pattern list for part builder recipes.
* `tconstruct:patterns/reusable`: Items in this tag are not consumed when used as the pattern in a part builder recipe. Notably includes all entries from `tconstruct:casts/gold`.

#### Tool parts

* `tconstruct:chest_parts`: Items in this tag may be placed in a part chest. Automatically includes all entries from `tconstruct:tool_parts`.
* `tconstruct:tool_parts`: Items in this tag will be processed in JEI as having material variants, and will also show in some extra places in the books.

#### Smeltery

* `tconstruct:casts`: Items in this tag may be placed in a cast chest.
* `tconstruct:casts/empty/table`: Items in this tag are treated as empty in the casting table. Used notably by the scorched casting table.
* `tconstruct:casts/empty/basin`: Items in this tag are treated as empty in the casting basin. Used notably by the scorched casting basin.
* `tconstruct:duct_containers`: Items in this tag may be placed in the duct slot to set the filter.
* `tconstruct:structure_debug/smeltery`: Holding items in this tag will cause additional block outlines to show for invalid smeltery structures.
* `tconstruct:structure_debug/foundry`: Holding items in this tag will cause additional block outlines to show for invalid foundry structures.
* `tconstruct:structure_debug/general`: This tag is added to both `tconstruct:structure_debug/smeltery` and `tconstruct:structure_debug/foundry`.

#### Modifiers

* `tconstruct:autosmelt_blacklist`: Items in this tag will not be smelted by the autosmelt modifier.
* `tconstruct:seeds`: In order for the harvest modifier to replant, it must find an item in this tag among the drops. Contains all entries from `forge:seeds` by default, but also crops that are their own seed like carrots or potatoes.
* `tconstruct:stoneshields`: Items from this tag may be consumed by the stoneshield modifier for temporary durability.
* `tconstruct:fireballs`: Items from this tag may be consumed by the firebreath modifier to shoot a fireball.
* `tconstruct:inventory_blacklist`: Items in this tag may not be placed in any tool inventory.
* `tconstruct:chrysophilite_ores`: If any item in this tag is in the block drops, the chrysophilite modifier will not add extra drops (for silk touch protection).

#### Tools

**General:**

* `tconstruct:modifiable`: Items must be in this tag to have any modifier hooks called on them. Tools in most sub tags will get automatically added to this tag.
* `tconstruct:modifiable/bonus_slots`: Items in this tag may receive modifiers such as writable, draconic, and rebalanced. Its possible to manually add recipes to get those modifiers on items not in this tag, but the tag is the most convenient method.
* `tconstruct:modifiable/durability`: Items in this tag have durability. This shows the durability bar and stats, allows them to be repaired, and allows access to some durability related modifiers.
* `tconstruct:modifiable/multipart`: Items in this tag have material parts. Used to apply variants in JEI, along with to cancel out of some hooks quickly, though most usages will check the tool definition instead.
* `tconstruct:modifiable/aoe`: Items in this tag may receive the expanded modifier to boost their area. Note it is still up to the modifier to check for expanded and to expand.
* `tconstruct:modifiable/unsalvagable`: Items in this tag do not support the standard salvage recipes to recycle in the part builder. They may still have a salvage recipe applied manually.

**Tool Groups**

* `tconstruct:modifiable/small`: Tools in this tag are considered "small tools", typically crafted from 2-3 tool parts making them available in the tinker station. They will show in puny smelting and the encyclopedia in the appropriate categories.
* `tconstruct:modifiable/broad`: Tools in this tag are considered "large tools", typically crafted from 4-5 tool parts in the anvil. They will show in mighty smelting and the encyclopedia in the appropriate categories. In addition, broad tools have different stat debuffs applied with dual wielding.
* `tconstruct:modifiable/special`: Non-standard tools that do not fit with small or broad. Notably includes slime staffs and unusual tools such as Tinkers' Things's knapsack.
* `tconstruct:modifiable/ancient`: Represents uncraftable tools that are obtained through loot with a fixed material list. Receives extra slots from rebalanced.
* `tconstruct:modifiable/wandering_trader`: Tools in this tag may be traded by the wandering trader.

**Interaction**

* `tconstruct:modifiable/interactable`: Tools in this tag support interaction modifiers through some means. Automatically populated by all nested tags.
* `tconstruct:modifiable/interactable/right`: Tools in this tag support interaction modifiers through right click. This is the only set of interaction modifiers that supports charging behavior (e.g. bows).
* `tconstruct:modifiable/interactable/left`: Tools in this tag support interaction modifiers through left click, replacing attack. Typically includes bows and shields.
* `tconstruct:modifiable/interactable/dual`: Tools in this tag support interaction modifiers through both left and right click. Typically includes staffs.
* `tconstruct:modifiable/interactable/armor`: Armor in this tag can perform interaction modifiers on right clicking with an empty hand. Typically includes chestplates.
* `tconstruct:modifiable/held`: Tools in this tag are held in either hand when used. Automatically populated by left and right interaction tags plus the held armor tag.
* `tconstruct:modifiable/held`: Tools in this tag are held in either hand when used. Automatically populated by left and right interaction tags plus the held armor tag.

**Melee**

* `tconstruct:modifiable/melee`: Tools in this tag are used to perform melee attacks.
* `tconstruct:modifiable/melee/primary`: Tools in this tag receive no durability penalty when used as a melee weapon.
* `tconstruct:modifiable/melee/weapon`: Tools in this tag are held when performing melee attacks. This adds attack speed support, which notably is not allowed for chestplates. Automatically populated by melee primary.
* `tconstruct:modifiable/melee/unarmed`: Armor in this tag will boost melee damage of attacking with an empty hand. Automatically includes chestplates but can be emptied to disable this mechanic.
* `tconstruct:modifiable/melee/sword`: This tag allows the tool to receive sweeping edge, which is a sword exclusive modifier.
* `tconstruct:modifiable/melee/parry`: This tag contains daggers to prevent them from receiving the blocking modifier, as they have the parry modifier instead. May be useful for other similar tools that natively have dual wielding.

**Harvest**

* `tconstruct:modifiable/harvest`: Tools in this tag may be used to break blocks.
* `tconstruct:modifiable/harvest/primary`: Tools in this tag receive no durability penalty when used to break blocks.
* `tconstruct:modifiable/harvest/stone`: Tools in this tag can mine stone blocks, allowing them to receive the blasting modifier.

**Ranged**

* `tconstruct:modifiable/ranged`: Items in this tag can receive ranged modifiers, and support ranged stats like drawspeed and velocity.
* `tconstruct:modifiable/ranged/bows`: Items in this tag can shoot arrows. Grants the tool modifiers such as quiver and crystalshot.
* `tconstruct:modifiable/ranged/longbows`: Items in this tag can receive the power modifier and other bow modifiers that are disallowed on crossbows.
* `tconstruct:modifiable/ranged/crossbows`: Items in this tag can receive the quick charge modifier, and other crossbow exclusives.
* `tconstruct:modifiable/staffs`: Items in this tag are considered a staff, which require having modifiers applied to receive behavior. They are automatically marked as ranged, and may also receive both power and quick charge, plus a few staff exclusive abilities.

**Armor**

* `tconstruct:modifiable/armor`: Items in this tag are considered armor, giving them access to many armor modifiers. This tag is populated by many nested tags.
* `tconstruct:modifiable/armor/helmets`: Armor worn in the head slot.
* `tconstruct:modifiable/armor/chestplates`: Armor worn in the chest slot.
* `tconstruct:modifiable/armor/leggings`: Armor worn in the pants slot.
* `tconstruct:modifiable/armor/boots`: Armor worn in the feet slot.
* `tconstruct:modifiable/shields`: Items that block natively and should receive shield modifiers. Note that tools can block without being in this tag.
* `tconstruct:modifiable/armor/worn`: Armor that is worn on the body. Automatically includes helmets, chestplates, leggings, and boots.
* `tconstruct:modifiable/armor/held`: Armor that is held in either hand. Automatically includes shields.
* `tconstruct:modifiable/armor/golden`: Armor in this tag may receive the golden modifier.

**Armor in Books**

* `tconstruct:modifiable/book_armor`: Any armor items in this tag will show in the encyclopedia. Automatically populated by the other armor tags. Order of entries matters for this and all nested tags.
* `tconstruct:modifiable/book_armor/materials_and_you`: Armor items in this tag show in materials and you.
* `tconstruct:modifiable/book_armor/puny_smelting`: Armor items in this tag show in puny smelting.
* `tconstruct:modifiable/book_armor/mighty_smelting`: Armor items in this tag show in mighty smelting.
* `tconstruct:modifiable/book_armor/fantastic_foundry`: Armor items in this tag show in fantastic foundry.
* `tconstruct:modifiable/book_armor/tinkers_gadgetry`: Armor items in this tag show in tinkers' gadgetry.

**Cosmetic**

These tags control recipes related to cosmetics, though the behavior of the cosmetics requires implementation in the tool's model.

* `tconstruct:modifiable/dyeable`: Items in this tag can receive the dyed modifier.
* `tconstruct:modifiable/embellishment/wood`: Items in this tag can receive wood embellishments.
* `tconstruct:modifiable/embellishment/slime`: Items in this tag can receive slime embellishments.
* `tconstruct:modifiable/armor/trim`: Items in this tag can receive the armor trim modifier.