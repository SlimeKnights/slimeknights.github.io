---
layout: page
title: Adding a Material to Tinkers' Construct
description: This page covers all related elements for adding a new material to Tinkers' Construct.
---

{{page.description}}

Adding a material requires defining a material ID in the format `<domain>:<name>`, where `<domain>` is a name uniquely representing your mod or modpack, and `<name>` is a unique ID within the domain. Note that `<domain>` should *never* be `tconstruct` or `tinkers_things` for new materials, create an ID unique to your mod or modpack to prevent conflicts.

If you are creating a Java addon, all resources listed below can be generated using our datagen setup; the best examples of this are in Tinkers' Construct itself. If you are making a modpack or low code mod, we recommend using [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things); it both serves as a global datapack loader for modpacks, and lets low code mods register new items for the material.

{% include toc.html %}

## Data Packs

Data packs are used to define all gameplay behavior related to a material, including stats, traits, recipes, and behavior on fluids.

### Materials

Materials require 3 different JSON located under `data/<domain>/tinkering/materials/`. Click the links for details on the JSON format for each JSON.

* [`definition/`](/docs/json/materials#definition): The material definition enables the material to appear in books and JEI. In addition, definitions support conditions allowing a material to be conditionally disabled.
* [`stats/`](/docs/json/materials#stats): Material stats define the stats a material gives a tool when used in tools. In addition, materials only appear on tool parts if the material stats defines the matching [stat type](/docs/json/stat-types/). For information on how we balanced our material stats, see [the design docs](/docs/design/#materials).
* [`traits/`](/docs/json/materials#traits): Material traits define the modifiers added to a tool using the given material. Modifiers can be assigned either for a specific stat type, or as a default for any types with no specific list.

For examples of these files, see [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/data/tinkers_things/tinkering/materials), which adds 3 materials:

* Hematite: a castable alloy material used for melee/harvest and armor plating.
* Veinline: a composite material used as a binding and a bowstring.
* Silky Cloth: a part builder material used as armor maille.

### Recipes

Simply defining a material will not make it craftable. Instead, one or more recipes must be added under `data/<domain>/recipes/` defining ways the material may be crafted (or recycled). Common recipes include:

* [Material Items](/docs/json/recipes/materials/#items): Defines an item as usable for repairing the tool. Additionally, if the materials definition allows, this item may be used in the part builder to create the material.
* [Casting and Composite](/docs/json/recipes/materials/#casting-and-composite): Defines the amount of fluid needed to cast this fluid. Can either set a base material to make this a composite material, or leave the base out to create this material using casts.
* [Melting](/docs/json/recipes/materials/#melting): Defines the amount of fluid this material melts into. Not required, but its typically desired to allow recycling of tool parts.

In addition to material specific recipes, you may wish to add recipes to craft the fluid associated with your material:

* [Alloying](/docs/json/recipes/alloying/): Recipe for combining multiple fluids into your material's fluid.
* [Melting](/docs/json/recipes/item-melting/#item-melting): Recipe for melting an item to produce your material's fluid.
* [Casting](/docs/json/recipes/casting/#item-casting): Recipes for casting your fluid to create the associated repair item.

Note that casting, composite, and melting all require creating a fluid associated with your material. This fluid can be an existing fluid, but more often you will wish to add a new one. In addition, while not required it is often desired to add new items associated with the material. See [Thing Packs](#thing-packs) for references on how to add blocks, items, and fluids using Json Things for low code mods or datapacks.

**Example recipes:**
* [Silky Cloth](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/recipes/silky_cloth_material.json): minimal material example with just a material recipe for the part builder. Uses an existing item.
* [Hematite](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/data/tinkers_things/recipes/hematite): recipe examples for hematite and veinline. Includes some material adjacent recipes, such as alloying hematite, casting hematite blocks and items, and crafting the block from the item.

### Fluid Effects
<div class="hatnote" markdown=1>
Main page: [Fluid Effects](/json/fluid-effects)
</div>

If your material includes a custom fluid, you will likely want to add a fluid effect. For an example, see [molten hematite from Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/data/tinkers_things/tinkering/fluid_effects/molten_hematite.json).

## Resource Packs

Resource packs are used to define all cosmetic appearances of materials, including textures, colors, and localizations.

### Render Info
<div class="hatnote" markdown=1>
Main page: [Material Render Info](/docs/json/material-render-info/)
</div>

Material render info are located under `assets/<domain>/tinkering/materials/` and define the following:

* Name of the unique texture for a material.
* Tint color to use if the unique texture is missing.
* List of fallback names to tint using the color if the unique texture is missing. If all fallbacks are missing, the base texture will be tinted.
* Minimum light level for a material.
* Information for the [part generator command](/docs/commands/tinkers/generate-part-textures/) to generate unique textures.

In addition to creating a render info under `assets/<domain>/tinkering/materials/<name>.json`, you may also create any number of additional render infos under `assets/<domain>/tinkering/materials/<name>/<variant>.json` to define textures for {% include type.html name="material variants" type="material variant" %}.

For example render infos, see [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/tree/1.20/src/assets/tinkers_things/tinkering/materials).

### Localization

The material `<domain>:<name>` uses the following localization keys in `assets/<domain>/lang/en_us.json` and other languages:

* `material.<domain>.<name>`: Display name of the material.
* `material.<domain>.<name>.flavor`: Flavor text to show in non-encyclopedia book pages.
* `material.<domain>.<name>.encyclopedia`: Description of the material's trait(s) to show in the encyclopedia under melee/harvest materials.
* `material.<domain>.<name>.armor`: Description of the material's trait(s) to show in the encyclopedia under armor materials. If unset, uses the melee/harvest description.
* `material.<domain>.<name>.ranged`: Description of the material's trait(s) to show in the encyclopedia under ranged materials. If unset, uses the melee/harvest description.

If you define a new {% include type.html type="mining tier" %} `<domain>:<name>`, it uses the key `stat.tconstruct.harvest_tier.<domain>.<name>` for the localization. If you add new items or fluids, they may need additional localization.

**Examples:**

* [Materials](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/lang/en_us.json#L94-L102)
* [Hematite items and fluids](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/lang/en_us.json#L66-L74)
* [Hematite mining tier](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/lang/en_us.json#L68)

### Colors
<div class="hatnote" markdown=1>
Main page: [Resource Colors](/docs/json/resource-colors/)
</div>

The material `<domain>:<name>` use the following resource color keys:

* `material.<domain>.<name>`: Defines the default color for the material.
* `material.<domain>.<name>.<variant>`: Defines the color for a specific variant. If unset, uses the default material color.

In addition, if you define a new {% include type.html type="mining tier" %} `<domain>:<name>`, it uses the key `harvest_tier.<domain>.<name>` for the color.

For example colors, see [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/assets/tinkers_things/mantle/colors.json#L20-L25).

### Fluid Tooltips
<div class="hatnote" markdown=1>
Main page: [Fluid Tooltips](/docs/json/fluid-tooltips/)
</div>

If adding a new fluid, you will typically want to either register a custom fluid tooltip JSON or add your fluid to the [appropriate tooltip tag](/docs/json/fluid-tooltips/#unit-tags).

For an example fluid tooltip JSON, see [Tinkers' Construct metals](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/src/generated/resources/assets/tconstruct/mantle/fluid_tooltips/metals.json).

## Thing Packs
<div class="hatnote" markdown=1>
See also: [Json Things Support](/docs/json/json-things)
</div> 

[Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things) is a mod for Minecraft that allows adding new content to the game using JSON placed under `things/<domain>`. This allows adding content types which normally require registration in Java, providing a way to register that content in low code mods and modpacks. While there are [many options](https://github.com/gigaherz/JsonThings/blob/master/documentation/Introduction.md) of things you may register, the following are directly relevant to Tinkers' Construct materials:

* [Items](https://github.com/gigaherz/JsonThings/blob/master/documentation/formats/Items.md): While you can use an existing item, its often desired to create new items for a material, such as ingots or nuggets.
* [Blocks](https://github.com/gigaherz/JsonThings/blob/master/documentation/formats/Blocks.md): While not required, its often desired to add a decorative storage block for your material's item form.
* [Fluids](https://github.com/gigaherz/JsonThings/blob/master/documentation/formats/Fluids.md): If you wish to create your material using casting or compositing, a new fluid is required.
* [Creative Tabs](https://github.com/gigaherz/JsonThings/blob/master/documentation/formats/CreativeModeTabs.md): If your addon or modpack adds a large number of items, you may wish to add your own creative tab. IF you only add a small number of items, you can always add your items to Tinkers' Construct or vanilla creative tabs. Items must be in a tab to show up in JEI.
* [Item Tiers](https://github.com/gigaherz/JsonThings/blob/master/documentation/formats/ItemTiers.md): If you wish to give your material a custom {% include type.html type="mining tier" %}, you will need to define an item tier. Most of the properties will be unused by Tinkers', apart from `sort_after`, `sort_before`, and `tag`. In most cases its better to use one of the existing tiers.

**Examples:**

* [Creative Mode Tab](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/creative_mode_tab/tinkers_things.json): Creates a unique tab for all contents from Tinkers' Things.
* *Hematite*
    * [Item](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item/hematite.json): Item form of hematite, used for repairing hematite tools.
    * [Block](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/block/hematite_block.json): Storage block for the hematite item. Used for mass repair of hematite tools.
    * [Fluid](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/fluid/molten_hematite.json): Fluid form of hematite, used to cast tool parts and composite veinline.
    * [Harvest Tier](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item_tier/hematite.json): adds a new harvest tier for the hematite material between diamond and netherite.