---
layout: page
title: Tags
description: This page summarizes Minecraft tags, which are a merged resource across data packs that allow different mods to apply behaviors to blocks, items, and alike. This page summarizes their definition, Forge extensions, common conventions, and how they are used in Tinkers' Construct.
---
<div class="hatnote" markdown=1>
See also: [the Minecraft Wiki article on tags](https://minecraft.wiki/w/Tags)
</div>
<div class="hatnote" markdown=1>
See also: [TinkerTags.java](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/common/TinkerTags.java) for the latest list of Tinkers' Construct tags
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
{% include_relative _tags/_block-material.html %}

Additionally, mods define many convention shape tags, such as:

* `dusts/`: Represents 1 powdered unit of material, typically ingots. Often produced as a result of ore multiplication.
* `plates/`: Represents 1 unit of a material pressed flat, typically metal.
* `gears/`: Typically worth 4 ingots of the respective resource, though many gears also have some core with varying costs.
* `rods/`: Represents 1/2 of a unit of the material. Best example is sticks (`rods/wooden`), though some mods use this for metal rods worth half an ingot.

### Tinkers' Tags

#### Texture variants

{% include_relative _tags/_block-texture-variants.html %}

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

## Block Tags

Block tags are located under `data/<domain>/tags/blocks/`.

### Material Tags

Block tags use the same material conventions as [item tags](#material-tags), though have fewer notable shapes. Typically, any item tags that contain block items will have a matching block tag.

Some shapes of vanilla resources includes:

{% include_relative _tags/_block-material.html %}

### Tinkers' Tags

#### General

* `tconstruct:transparent_overlay`: Blocks in this tag have a transparent block overlay rendered when the player is inside the block. Used for soul glass and its variants.
* `tconstruct:platform_connections`: Blocks in this tag will cause the platform block to generate a solid face, used for placing levers and alike on the sides of platforms.

#### Slime Spawning

* `tconstruct:slime_spawn/sky`: Skyslimes may spawn on these blocks in the overworld.
* `tconstruct:slime_spawn/earth`: Vanilla green slimes may spawn on these blocks in the overworld outside their normal spawn conditions.
* `tconstruct:slime_spawn/ender`: Enderslimes may spawn on these blocks in the end.

#### World

* `tconstruct:enderbark/logs_can_grow_through`: Blocks enderbark logs can replace on sapling growth.
* `tconstruct:enderbark/roots_can_grow_through`: Blocks enderbark roots can replace on sapling growth.
* `tconstruct:slimy_fungus_can_grow_through`: Blocks any of the types of slimy fungus can replace on growth.

#### Texture variants

Block texture variant tags exist mostly to mirror the item tags; they are not directly used outside of datagen.

{% include_relative _tags/_block-texture-variants.html %}

#### Multiblock

* `tconstruct:heater_controllers`: Blocks that pull fuel from a heater when placed above. Used to mark the heater as in a structure.
* `tconstruct:fuel_tanks`: Blocks that provide fuel to the melter and alloyer.
* `tconstruct:alloyer_tanks`: Blocks that may be used as a side tank for the alloyer.
* `tconstruct:structure_air`: Blocks that are treated as air inside the smeltery or foundry.

**Smeltery**

* `tconstruct:smeltery`: Blocks that are a valid part of the smeltery multiblock. Generally blocks are not added to this tag directly, rather one of the sub tags is used.
* `tconstruct:smeltery/tanks`: Blocks that provide liquid fuel to the smeltery.
* `tconstruct:smeltery/floor`: Blocks that are valid in smeltery floors.
* `tconstruct:smeltery/wall`: Blocks that are valid in smeltery walls.

**Foundry**

* `tconstruct:foundry`: Blocks that are a valid part of the foundry multiblock. Generally blocks are not added to this tag directly, rather one of the sub tags is used.
* `tconstruct:foundry/tanks`: Blocks that provide liquid fuel to the foundry.
* `tconstruct:foundry/floor`: Blocks that are valid in foundry floors.
* `tconstruct:foundry/wall`: Blocks that are valid in foundry walls.

#### Mineable

* `tconstruct:mineable/mattock`: Blocks that the mattock is effective on. By default contains all shovel blocks and many axe blocks.
* `tconstruct:mineable/pickadze`: Blocks that the mattock is effective on. By default contains all shovel and pickaxe blocks.
* `tconstruct:mineable/hand_axe`: Blocks that the hand axe is effective on. Contains any vanilla axe blocks plus some additional blocks.
* `tconstruct:mineable/scythe`: Blocks that scythe and kama is effective on. Contains blocks mineable with shears, hoes, and many plant blocks.
* `tconstruct:mineable/sword`: Blocks that the sword is effective on. Contains all vanilla sword blocks plus a few extra.
* `tconstruct:mineable/shears`: Blocks that shears are effective on. Mirrors the list hardcoded into the vanilla shears.
* `tconstruct:mineable/shears`: Blocks that the dagger is effective on. Contains any sword blocks plus any hoe blocks.
* `tconstruct:mineable/melting_blacklist`: Blocks that the melting pan cannot mine. Used mainly to prevent loss of fluid from tanks.
* `tconstruct:unreplacable_by_liquid`: Blocks that cannot be broken by the water fluid effect despite being replacable by liquid. Mirrors a hardcoded vanilla list.

#### Modifiers

* `tconstruct:chrysophilite_ores`: Blocks in this tag support dropping extra gold when mined using the chrysophilite modifier.
* `tconstruct:tree_log`: Blocks that are logs in a tree variant, for the lumber axe to chop. Automatically contains all `minecraft:logs`.

**Harvestable**

* `tconstruct:harvestable`: Blocks that support right click harvest. Generally blocks are only added to this tag directly if you plan to use our right click harvest event, otherwise use a nested tag.
* `tconstruct:harvestable/crops`: Blocks that behave like wheat or carrots, growing until max age then dropping produce plus seeds. The seeds must be in [`tconstruct:seeds`](#modifiers) for this to function.
* `tconstruct:harvestable/interact`: Blocks that are harvested when right clicking, like berry bushes.
* `tconstruct:harvestable/stackable`: Blocks that are harvested by breaking all but the lowest block, such as cactus or sugur cane.

## Fluid Tags

Block tags are located under `data/<domain>/tags/fluids/`.

### Tinkers' Tags

* `tconstruct:hide_in_creative_tanks`: Fluids in this tag will not be shown as a tank or copper can variant in creative or JEI.

#### Fluid Tooltip Tags

Tinkers' Construct adds many tags for common [fluid tooltips](../fluid-tooltips):

{% include_relative _tags/_fluid-tooltips.html %}

## Entity Type Tags

Entity type tags are located under `data/<domain>/tags/entity_types/`.

### Tinkers' Tags

* `tconstruct:small_armor`: Entities in this tag have their helmet armor value multiplied by 4, as they don't have other armor slots. Automatically populated by entries from `tconstruct:slimes`.
* `tconstruct:piggybackpack_blacklist`: Entities in this tag cannot be picked up by a piggybackpack. Non-mob entities are automatically blacklisted

#### Smeltery

* `tconstruct:melting/show_in_default`: Entities in this tag will show in the fallback melting recipe despite being in the mob category `MISC`.
* `tconstruct:melting/hide_in_default`: Entities in this tag will not melt, despite normally being meltable.
* `tconstruct:illagers`: Entities in this tag melt into emeralds (but less than villagers). They take damage from killager due to their mob category.

#### Modifiers

* `tconstruct:bacon_producer`: Entities in this tag may drop bacon when killed by a pig iron tool.
* `tconstruct:creepers`: Entities in this tag may will take extra damage from bane of SSSS and other creeper related modifiers.
* `tconstruct:villagers`: Entities in this tag melt into emeralds and take extra damage from killager.
* `tconstruct:rare_mobs`: Entities in this tag have double changes of drops from severing.
* `tconstruct:reflecting/blacklist`: Projectiles in this tag cannot be reflected by the reflecting modifier.
* `tconstruct:reflecting/preserve_owner`: Projectiles in this tag will not change their owner when reflected. Prevents issues with fishing bobbers notably.

## Block Entity Type Tags

Block entity type tags are located under `data/<domain>/tags/block_entity_type/`.

### Tinkers' Tags

* `tconstruct:side_inventories`: Since 1.20.1, block entities in this tag may be used as a side chest for the crafting station, part builder, and alike.
* `tconstruct:crafting_station_blacklist`: Until 1.19.2, block entities in this tag may not be used as a side chest for the crafting station, part builder, and alike. 1.20.1 replaced this with a whitelist.

## Damage Type Tags
<div class="hatnote">Since 1.20.1</div>

Damage type tags are located under `data/<domain>/tags/damage_type/`.

### Tinkers' Tags

* `tconstruct:protection/melee`: Damage types in this tag are reduced by melee protection.
* `tconstruct:protection/projectile`: Damage types in this tag are reduced by projectile protection. Automatically populated from the `minecraft:is_projectile` tag.
* `tconstruct:protection/fire`: Damage types in this tag are reduced by fire protection. Automatically populated from the `minecraft:is_fire` tag.
* `tconstruct:protection/blast`: Damage types in this tag are reduced by blast protection. Automatically populated from the `minecraft:is_explosion` tag.
* `tconstruct:protection/magic`: Damage types in this tag are reduced by magic protection. Automatically populated from the `minecraft:witch_resistant_to` tag.
* `tconstruct:protection/fall`: Damage types in this tag are reduced by feather falling. Automatically populated from the `minecraft:is_fall` tag.

## Menu Type Tags

Menu type tags are located under `data/<domain>/tags/menu/`.

### Tinkers' Tags

* `tconstruct:tool_inventory_replacements`: Menus in this tag support closing when right clicking a tool with an inventory. Should contain any tags like the vanilla inventory.

## Modifier Tags

Modifier tags are a custom tag type added by Tinkers' Construct to tag [modifiers](../modifiers). They are located under `data/<domain>/tinkering/tags/modifiers/`.

### Tinkers' Tags

* `tconstruct:gems`: Tier upgrades in this tag may randomly be applied to skyslime armor.
* `tconstruct:slime_defense`: Modifiers in this tag may be applied to skyslime armor, costing a defense slot.
* `tconstruct:block_while_charging`: Modifiers in this tag will handle the blocking modifier as they charge up.
* `tconstruct:overslime_friend`: Modifiers in this tag will prevent the overslime debuff from lacking any slimy modifiers.
* `tconstruct:aoe_interaction`: Modifiers in this tag will make their tool show AOE wireframes on non-effective blocks. Used by interaction modifiers to show their interaction area.
* `c:hidden_from_recipe_viewers`: Modifiers that should not show in JEI.

#### Modifier Worktable

* `tconstruct:invisible_ink_blacklist`: Modifiers in this tag cannot be hidden by invisible ink.
* `tconstruct:extract_blacklist/tools`: Modifiers in this tag cannot be extracted using modifier crystals.
* `tconstruct:extract_blacklist/slotless`: Modifiers in this tag cannot be extracted as a slotless modifier using modifier crystals.
* `tconstruct:dual_interaction`: Modifiers in this tag can be used on both left and right click, and which can be toggled using the modifier worktable on applicable tools.

#### Book

These tags control where a modifier shows in the books. A modifier may be in multiple tags, which will give it multiple pages.

{% include_relative _tags/_book-modifiers.html name="Upgrades" %}

{% include_relative _tags/_book-modifiers.html name="Abilities" %}

**Defense**

* `tconstruct:defense`: Grouping tag for all modifiers typically applied as defense.
* `tconstruct:defense/protection`: Defense modifiers that increase protection directly.
* `tconstruct:defense/special`: Defense modifiers that increase defense in ways other than protection.

**Slotless**

* `tconstruct:slotless`: Grouping tag for all modifiers typically applied as slotless.
* `tconstruct:defense/general`: Slotless modifiers that do not grant bonus modifier slots.
* `tconstruct:defense/bonus`: Slotless modifiers that grant bonus modifier slots.

## Material Tags

Material tags are a custom tag type added by Tinkers' Construct to tag [materials](../materials). They are located under `data/<domain>/tinkering/tags/materials/`.

### Tinkers' Tags

* `tconstruct:nether`: Materials available from purely nether items. Used in a future planned book.