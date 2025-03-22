---
layout: page
title: Adding a Tool Part to Tinkers' Construct
description: This page covers all related elements for adding a new tool part or material item to Tinkers' Construct. In addition, it covers the details for adding a new cast item to the mod, which are often relevant alongside tool parts.
---
<div class="hatnote" markdown=1>
This page is about how to add a new tool part. For adding a usage to the tool part, see [Adding a Tool](../tool).
</div>

{{page.description}}

Adding a tool part or material item requires registering a new item. This requires either a Java mod, or [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things) to register the appropriate items. Details on each will be provided in the appropriate subsections. If you are creating a Java addon, all resources listed below can be generated using our datagen setup; the best examples of this are in Tinkers' Construct itself.

{% include toc.html %}

## Items

Tool part items must be registered either in Java or using [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things).

### Java

To add a tool part using Java, the easiest way is creating a new instance of [`ToolPartItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/part/ToolPartItem.java). If the item has material variants but does not use a standard material stat type, [`MaterialItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/part/MaterialItem.java) may be more appropriate.

Casts for tool parts typically make use of [`PartCastItem`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/main/java/slimeknights/tconstruct/library/tools/part/PartCastItem.java) which will show the part cost in the tooltip automatically. If the cast is not associated with a specific tool part, any standard `Item` instance will do.

### Thing Packs
<div class="hatnote" markdown=1>
See also: [Json Things Items](https://github.com/gigaherz/JsonThings/blob/1.20.1/documentation/formats/Items.md)
</div>

Items registered using Json Things are located in `things/<domain>/item/<name>.json` for the item `<domain>:<name>` in a [Thing Pack](/docs/json/resource-location#thing-packs).

#### Material Items
To add a new tool part using a thing pack, you can make use of the [`tconstruct:tool_part`](/docs/json/json-things/#tool-part) item type. For an example, see [shield plating](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/shield_plating.json) from Tinkers' Things.

Repair kits are the only non-tool part material item that can be added through Json Things, by using the [`tconstruct:repair_kit`](/docs/json/json-things/#repair-kit) item type. For an example, see [large repair kits](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/large_repair_kit.json) from Tinkers' Things.

#### Casts

A cast item for a non-tool part can just be registered as a standard `plain` item in Json Things. If the cast corresponds to a tool part, you can use the [`tconstruct:part_cast`](/docs/json/json-things/#tool-part-cast) item type. For an example, see [shield plating gold cast](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/large_repair_kit_gold_cast.json) from Tinkers' Things.

Typically, you will want to add three different cast items: one for gold casts, one for sand casts, and one for red sand casts. The difference in behavior between the two cast types is recipe controlled.

## Resource Packs

[Resource packs](/docs/json/resource-location#resource-packs) are used to define the textures and locationization for your tool part and casts.

### Models

All material items are defined using the [`tconstruct:material`](/docs/json/models/material/#tool-parts) model loader. Within that model, the main important properties are the texture, and the offset (if the texture is shared with a tool). For an example, see [shield plating](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/models/item/shield_plating.json) from Tinkers' Things.

Casts typically use a standard `item/generated` model; details about that model can be found on the [Minecraft Wiki](https://minecraft.wiki/w/Model#Item_models). For an example, see [shield plating gold cast](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/models/item/shield_plating_gold_cast.json) from Tinkers' Things.

### Pattern

Typically, you will want to define a {% include type.html type="pattern" %} for crafting your tool part in the part builder. By convention, the pattern follows the same name as the part item. For the pattern `<domain>:<name>`, it is necessary to define a texture under `assets/<domain>/textures/gui/tinker_pattern/<name>/.png`. For an example, see [shield plating](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/textures/gui/tinker_pattern/shield_plating.png) from Tinkers' Things.

### Localization

Both material items and casts require no special translation keys for localization under `assets/<domain>/lang/en_us.json` and other languages. They simply need to define the standard `item.<domain>.<name>` for the item registered under `<domain>:<name>`.

The localization for the pattern `<domain>:<name>` uses the translation key `<domain>:<name>`.

For an example of localization, see [shield plating](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/lang/en_us.json#L88-L93) from Tinkers' Things.

## Data Packs

[Data packs](/docs/json/resource-location#data-packs) are used to define all behavior related to the new tool part, notably crafting recipes.

### Tags

Material items should be added to the following item tags:

* `tconstruct:parts`: Makes the tool part show properly in JEI, and allows it in part chests. For an example, see [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tconstruct/tags/items/parts.json).

For casts, several tags are required:

* `tconstruct:casts/gold`: Tag the gold cast so it melts into molten gold.
* `tconstruct:casts/sand`: Tag the gold cast so it recycles into sand or glass.
* `tconstruct:casts/red_sand`: Tag the gold cast so it recycles into red sand or glass.
* `tconstruct:casts/multi_use`: Grouping tag for multi-use casts, not currently used but may be used in the future.
* `tconstruct:casts/single_use`: Grouping tag for single-use casts, not currently used but may be used in the future.

By convention, its also a good idea to create local tags for each part for multi-use cast (contains the gold cast) and single-use cast (contains both sand types), as it simplifies recipe creation.

For examples, see Tinkers' Things [`tconstruct:casts/`](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/data/tconstruct/tags/items/casts) and [`tinkers_things:casts/`](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/data/tinkers_things/tags/items/casts).

### Recipes

In order to craft your tool part, you typically want the following recipes:

* [Part Builder](/docs/json/recipes/parts/#part-builder): Allows crafting your part in the part builder. Uses the pattern defined in the resource pack.
* [Part Casting](/docs/json/recipes/parts/#part-casting): Allows casting your part in either a casting table or casting basin. Typically will want two recipes here, one for the multi-use casts and one for the single-use casts.
* [Composite Casting](/docs/json/recipes/parts/#composite-casting): Allows casting your part by pouring molten metals on the correct material of the part. This allows crafting things such as nahuatl.

Note you are not required to add all 3, but leaving one out leads to a non-standard tool part which may make some materials uncraftable.

To create the part casts, you typically want the following recipes:

* [Item Casting](/docs/json/recipes/casting/#item-casting): Used to create the gold cast from the tool part and molten gold.
* [Molding](/docs/json/recipes/molding/#molding): Used to create each sand cast from the tool part and a blank sand cast.
* [Part Builder Item](/docs/json/recipes/part-builder/#items): Used to create each sand cast in the part builder from either a blank sand cast or a sand block.

The most contained example of crafting tool parts is the [large repair kit](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/data/tinkers_things/recipes/large_repair_kit) from Tinkers' Things.