---
layout: page
title: Adding a Tool to Tinkers' Construct
description: This page covers all related elements for adding a new tool to Tinkers' Construct.
---
<div class="hatnote" markdown=1>
See also: [Creating a Low Code Mod](../lowcode-mod)
</div>

{{page.description}}

Adding a tool requires registering a new item. This requires either a Java mod, or [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things) to register the appropriate items. Details on each will be provided in the appropriate subsections. If you are creating a Java addon, all resources listed below can be generated using our datagen setup; the best examples of this are in Tinkers' Construct itself.

Often, when creating new tools it is desirable to also create a new tool part. Details on how to do that is covered on [Adding a Tool Part](../tool-part).

{% include toc.html %}

## Items

Tool items must be registered either in Java or using [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things).

### Java

Items registered using Java have a lot of flexibility, as you are free to implement the `IModifiable` interface on any item class. For most addons however, one of the standard item classes should be sufficient:

* [`ModifiableItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/item/ModifiableItem.java): handles most tool types, including melee weapons, harvest tools, staffs, and shields.
* [`ModifiableBowItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/item/ranged/ModifiableBowItem.java): Implements a standard bow that draws back and releases arrows.
* [`ModifiableCrossbowItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/item/ranged/ModifiableCrossbowItem.java): Implements a bow which holds the arrow after charging and fires on an additional click.
* [`ModifiableArmorItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/item/armor/ModifiableArmorItem.java): Implements a standard armor piece using a single layered texture. Ideal for simple armor sets without any materials or modifiers that altar their appearance.
* [`MultilayerArmorItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/item/armor/MultilayerArmorItem.java): Implements an armor piece using our [armor model](/docs/json/armor-models) system. Allows adding material textures and extra modifier based textures, such as golden or dyed.

Outside of custom implementations, the item class has minimal code as the majority of behavior is added through [data packs](#data-packs).

### Thing Packs
<div class="hatnote" markdown=1>
See also: [Json Things Items](https://github.com/gigaherz/JsonThings/blob/1.20.1/documentation/formats/Items.md)
</div>

Items registered using Json Things are located in `things/<domain>/item/<name>.json` for the item `<domain>:<name>` in a [Thing Pack](/docs/json/resource-location#thing-packs). The following item types are available for adding new tools:

* [**Standard Tool**](/docs/json/json-things/#standard-tool): handles most tool types, including melee weapons, harvest tools, staffs, and shields. For an example, see [the halberd](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/halberd.json) from Tinkers' Things.
* [**Bow**](/docs/json/json-things/#bow): The bow type is used for implementing a standard bow that draws back and releases arrows. For an example, see [the shortbow](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/shortbow.json) from Tinkers' Things.
* [**Crossbow**](/docs/json/json-things/#crossbow): the crossbow type is for implementing a bow which holds the arrow after charging and fires on an additional click. For an example, see [the blowpipe](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/blowpipe.json) from Tinkers' Things.
* [**Armor**](/docs/json/json-things/#armor): Armor has two different types based on whether you wish to use [armor models](/docs/json/armor-models) or a single texture with no materials or modifiers. The same type will be used for all 4 armor pieces, just specifying the slot in the definition. For an example, see [makeshift helmet](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/makeshift_helmet.json) from Tinkers' Things.

Tools tend to be pretty simple in Thing Packs as the majority of the behavior is added through [data packs](#data-packs).

## Data packs

[Data packs](/docs/json/resource-location#data-packs) are used to define behavior, recipes, and in game documentation.

### Tool Definitions

The majority of behavior for a tool is defined by its [tool definition](/docs/json/tool-definitions). This includes starting stats, starting modifier slots, tool traits, whether it uses tool parts, and more. The tool definition page has a full list of behaviors you can apply to your tool.

Tinkers' Things has many examples of [different tool definitions](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/data/tinkers_things/tinkering/tool_definitions), with some highlights including:

* [**Chisel**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/tool_definitions/chisel.json): Simple mining tool with no materials. Demonstrates repairing non-material tools, tool stats, tool traits, starting modifier slots, and harvest modules.
* [**Halberd**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/tool_definitions/halberd.json): Melee weapon with multiple tool parts. Demonstrates a tool part based tool with additional base stats and stat multipliers.
* [**Shortbow**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/tool_definitions/shortbow.json): Additional tool part example as a ranged weapon. The primary difference from the halverd is the choice of tool parts, which applies ranged stats instead of melee stats.
* [**Laminar Shield**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/tool_definitions/laminar_shield.json): Example shield, with the blocking ability and left click interaction.
* [**Amethyst Staff**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/tool_definitions/amethyst_staff.json): Example staff item with dual left and right click interaction, this one reusing some ranged material stats to improve the staff.
* [**Knapsack**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/tool_definitions/sack.json): Non-standard tool item which simply uses the inventory modifiers and no other stats to create a bag.

### Item Tags

While the majority of tool behavior is added though tool definitions, item tags add important functionality to a tool, including support for different tool stats and their recipes. For a list of relevant item tags, check out [tool tags](/docs/json/tags#tools). For some examples of item tags, check out [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/data/tconstruct/tags/items/modifiable).

### Recipes
<div class="hatnote" markdown=1>
See also: [Recipe Format](/docs/json/recipes)
</div>

In order to make tools craftable, its necessary to give it a recipe. For tools with no materials, you can simply use any existing recipe type, including crafting table. As an example, the chisel from Tinkers' Things uses a [shaped crafting table recipe](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/recipes/chisel/crafting.json).

For tools with materials, you have three options for crafting:

* [**Tool Building**](/docs/json/recipes/tools/#tool-building): Defines crafting the tool in the tinker station or tinker's anvil. The availability of the recipe in the tinker station is based on the number of inputs. For an example, see the [amethyst staff](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/recipes/amethyst_staff.json) from Tinkers' Things.
* [**Tool Casting**](/docs/json/recipes/tools/#tool-casting): Defines crafting the tool in the casting table from a single tool part and castable materials. Limits material options, but can add variety to tool crafting. For an example, see the [laminar shield](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/recipes/laminar/shield.json) from Tinkers' Things.
* For tools with just 1 material, you could manually set the NBT and use another recipe type. For instance, slimeskulls use the casting table by manually setting the NBT on the output. This approach does not scale well to multiple materials on the item.

For tools crafted in the tinker station or tinker's anvil, it is advised to also add a [station slot layout](/docs/json/slot-layouts) to add a button for players to craft your tool. This button is purely documentation, it has no impact on the recipes. Note you can use a single layout for multiple tool recipes, such as is done for plate armor in the base mod. See the [amethyst staff](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/station_layouts/amethyst_staff.json) and [laminar armor](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/station_layouts/laminar_armor.json) from Tinkers' Things for example slot layouts.

## Resource packs

[Resource packs](/docs/json/resource-location#resource-packs) are used to define tool visuals, including textures and translations.

### Models

For the tool item to display properly, it is necessary to create a [tool model](/docs/json/models/tool/#tool) under `assets/<domain>/models/item`. This model handles both tools with and without materials, and notably handles modifier textures. The textures required will vary based on the model definition.

For some example tool models from Tinkers' Things, see:

* [**Chisel**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/models/item/chisel.json): Example tool model with no materials.
* [**Halberd**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/models/item/halberd.json): Example tool model with materials.

Note for most tool models, it is necessary to create multiple model JSONs for different [item overrides](/docs/json/models/tool/#overrides). At minimum you typically want a broken model, though held tools also tend to want at minimum a blocking variant.

#### Armor Models

When defining an armor item using the multilayer armor item, it is necessary to define an [armor model](/docs/json/armor-models). For examples of armor models from Tinkers' Things, see:

* [**Makeshift**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/tinkering/armor_models/makeshift.json): Armor model with no materials, but supports embellishments and the golden modifier.
* [**Laminar**](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/tinkering/armor_models/laminar.json): Armor model with 3 materials.

{% include_relative _material-textures.html %}

### Localization

The tool item with ID `<domain>:<name>` uses the following translation keys in `assets/<domain>/lang/en_us.json` and other languages:
* `item.<domain>.<name>`: display name of the tool.
* `item.<domain>.<name>.description`: Conventional translation key of the tool in the tinker station and tinker's anvil. Unneeded if the tool has no slot layout.

### Book

In order for your tool to show in the book, it is first necessary to verify you added it to the proper book [tool tags](/docs/json/tags#tools). Based on the tag you choose, you will need to create a JSON in the appropriate location under `assets/tconstruct/book/`.

We currently do not have documentation on the book format, so your best reference is copying and modifying an example page.

#### Tools

Based on the item tag you choose for your tool, it will have a page in the encyclopedia, plus one of materials and you, mighty smelting, and tinker's gadgetry:

* **`tconstruct:modifiable/small`**: Tool will have a page under `assets/tconstruct/book/materials_and_you/en_us/tools/<domain>_<name>.json` and `assets/tconstruct/book/encyclopedia/en_us/tools/small/<domain>_<name>.json`
* **`tconstruct:modifiable/broad`**: Tool will have a page under `assets/tconstruct/book/mighty_smelting/en_us/tools/<domain>_<name>.json` and `assets/tconstruct/book/encyclopedia/en_us/tools/broad/<domain>_<name>.json`
* **`tconstruct:modifiable/special`**: Tool will have a page under `assets/tconstruct/book/tinkers_gadgetry/en_us/staffs/<domain>_<name>.json` and `assets/tconstruct/book/encyclopedia/en_us/tools/staff/<domain>_<name>.json`
* **`tconstruct:modifiable/ancient`**: Tool will have a page under `assets/tconstruct/book/tinkers_gadgetry/en_us/ancient/<domain>_<name>.json` and `assets/tconstruct/book/encyclopedia/en_us/tools/ancient/<domain>_<name>.json`

#### Armor

The armor item `<domain>:<name>` in any armor tag will have a JSON under `assets/tconstruct/book/encyclopedia/en_us/armor/<domain>_<name>.json`. In addition, you will need a non-encyclopedia page under `assets/tconstruct/book/<book>/en_us/armor/<domain>_<name>.json` for armor items in the tag `tconstruct:modifiable/book_armor/<book>`.

For example pages from Tinkers' Things, see:

* [**Encyclopedia**](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/encyclopedia/en_us/armor): all armor from the addon.
* [**Materials and You**](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/materials_and_you/en_us/armor): makeshift armor in the [Materials and You](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tconstruct/tags/items/modifiable/book_armor/materials_and_you.json) tag.
* [**Mighty Smelting**](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/mighty_smelting/en_us/armor): laminar armor in the [Mighty Smelting](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tconstruct/tags/items/modifiable/book_armor/mighty_smelting.json) tag.

#### Examples

For examples from Tinkers' Things, see:

* **Encyclopedia**: All [tools](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/encyclopedia/en_us/tools) and [armor](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/encyclopedia/en_us/armor).
* **Materials and You**: [Small tools](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/materials_and_you/en_us/tools) and [makeshift armor](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/materials_and_you/en_us/armor).
* **Mighty Smelting**: [Broad tools](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/mighty_smelting/en_us/tools) and [laminar armor](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/mighty_smelting/en_us/armor).
* **Tinker's Gadgetry**: [Special tools](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tconstruct/book/tinkers_gadgetry/en_us/staffs).

Tinkers' Things does not currently have an ancient tool example.