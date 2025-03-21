---
layout: page
title: Documentation
permalink: /docs/
description: Index page for all documentation currently covered on this site. Includes documentation on current and future mod plans, online versions of in game books, data pack and resource pack formats, along with knowledge for addon developers.
---

{{page.description}}

Unless stated otherwise, all documentation pages are applicable to all versions of the mod since 1.16.5. Version specific information will be noted as applicable, or if its significant will be split out into a separate page.

{% include toc.html %}

## Gameplay

* [**Tinkers' Construct 3 Overview**](gameplay/tinkers-construct-3): Gives a player focused overview of Tinkers' Construct 3, which is the mod since Minecraft 1.16.
* [**Tinkers' Construct 2 Overview**](gameplay/tinkers-construct-2): Gives a player focused overview of Tinkers' Construct 2, which is the mod from Minecraft 1.8 to 1.12.
* [**Online Books**](books): Links to online versions of many books from SlimeKnights mods.
* [**What's New?**](whats-new): Covers all major changes made to Tinkers' Construct 3 compared to Tinkers' Construct 2.
    * [**Roadmap**](roadmap): Discusses various future plans for our mods, along with current work.
    * [**Removed Features**](removed): Covers features from older versions of Tinkers' Construct that were removed in the latest versions, along with some reasoning or alternatives.
* [**Design Docs**](design): Developer docs used to organize, balance, and plan out content in the mod.

## Guides

* [**Gradle Setup**](guides/gradle): Describes how to add Tinkers' Construct to a development workspace in Gradle.
* [**Low Code Mod**](guides/lowcode-mod): Describes how to create a low code mod, which allows making mods and Tinkers' Construct addons without writing any Java.
* [**Adding a Material**](guides/material): Describes how to add a material to Tinkers' Construct in an addon or datapack.
* [**Texture Generators**](guides/texture-generators): Details how to use the material texture generators provided by Tinkers' Construct.
* [**Persistent Inventory Crafting Blocks**](guides/persistent-inventory): Details how to handle the crafting station in mods wanting to do weird things in their crafting recipes (like player access which is *not* available in vanilla without hacks).

## Commands
* [**Mantle Commands**](commands/mantle): Documentation for all commands added by Mantle.
* [**Tinkers' Construct Commands**](commands/tinkers): Documentation for all commands added by Tinkers' Construct.
* [**Discord Commands**](commands/discord): Documentation for commands on our discord server. Cannot be run inside Minecraft, simply are informational commands.

## JSON Format

The following pages cover pages on general JSON formats, which may be used in data packs, resource packs, or thing packs:

* [**Basic Types**](json/basic-types): Common types of fields that occur in various JSON formats.
* [**Resource Locations**](json/resource-location): Covers the common resource location format, along with how to use it to locate and modify resources in resource packs and data packs.
* [**Conditions**](json/conditions): Format for JSON condition types added by SlimeKnights mods.
* [**Ingredients**](json/ingredients): JSON object representing the input to a recipe, which is able to list all matching entries.
* [**Predicates**](json/predicates): JSON object representing a condition on a part of a JSON component. Unlike ingredients, predicates do not display all matching entries.
* [**Results**](json/results): Common result field types, occuring primarily in recipes.
* [**Json Things support**](json/json-things) ([1.18](json/json-things/1.18)): Documentation for all block and item types that Tinkers' Construct adds to Json Things' "Thing Packs".

### Data Packs

The following pages are specific to data pack formats:

* [**Fluid Transfer**](json/fluid-transfer): JSON format for the Mantle system that allows interacting with fluids in items outside of Forge capabilities.
* [**Loot Injectors**](json/loot-injectors): JSON format for adding new entries to a loot table without needing to override the loot table JSON.
* [**Recipe Format**](json/recipes): Index page for pages on different recipe formats.

#### Tinkers' Construct

The following pages cover data pack concepts specific to in Tinkers' Construct:

* [**Fluid Effects**](json/fluid-effects) ([1.18](json/fluid-effects/1.18)): Documentation for defining effects of fluids in various fluid effect modifiers.
* [**Materials**](json/materials): Documentation for defining materials.
* [**Material Stat Types**](json/stat-types) ([1.16-1.18](json/stat-types/1.18)): List of all stat types available to materials.
* [**Modifiers**](json/modifiers) ([Serializers](json/modifiers/serializers)): Documentation for adding custom modifiers via JSON.
* [**Modifier Slot Types**](json/slot-types): Documentation for modifier slot types.
* [**Station Slot Layouts**](json/slot-layouts): JSON defining the arrangement of slots in the tinker station or tinker's anvil, used for in game documentation about how to craft tools.
* [**Tool Definitions**](json/tool-definitions) ([1.16-1.18](json/tool-definitions/1.18)): Format for tool definitions, which define the properties of a tool item.
* [**Tool Stats**](json/tool-stats): Documentation for all tool stats usable by tools.

### Resource Packs

* [**Models**](json/models): Documentation for the custom model loaders added by SlimeKnights mods. Applicable anywhere [vanilla models](https://minecraft.wiki/w/Model) are used.

#### Mantle

* [**Fluid Textures**](json/fluid-textures): JSON format for defining the textures of fluids for Mantle mods.
* [**Fluid Tooltips**](json/fluid-tooltips): JSON format for defining fluid unit lists for tooltips.
* [**Resource Colors**](json/colors): Documentation for Mantle's resource color system, primarily used for tooltip text colors.

#### Tinkers' Construct

* [**Armor Models**](json/armor-models): Documentation for the model format for modifiable armor from Tinkers' Construct.
* [**Modifier Icons**](json/modifier-icons): Documentation for assigning icons to modifiers (used notably in JEI).

## Other Documentation

* [**Mantle GitHub Wiki**](https://github.com/SlimeKnights/Mantle/wiki): Documentation specific to Mantle, the library mod used by SlimeKnights' mods. Will eventually be migrated to this website.
* [**Tinkers' Construct GitHub Wiki**](https://github.com/SlimeKnights/TinkersConstruct/wiki): Documentation for Tinkers' Construct content, along with general FAQs. Will eventually be migrated to this website.
* [**Unofficial Alternatives**](https://docs.google.com/spreadsheets/d/1gOxPm37wu8Y9vVewNYv8JAxfkPQmkUfvnSjsk_sMiBo/edit?usp=sharing): Mods similar to Tinkers' Construct on various Minecraft platforms.