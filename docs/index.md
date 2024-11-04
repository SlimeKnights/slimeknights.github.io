---
layout: page
title: Documentation
permalink: /docs/
redirect_from:
  - /docs/commands/
  - /docs/json/
---

Index page for all documentation currently covered on this site.

Unless stated otherwise, all documentation pages are applicable to all versions of the mod since 1.16.5. Version specific information will be noted as applicable, or if its significant will be split out into a separate page.

{% include toc.html %}

## Commands
* [**Mantle Commands**](commands/mantle): Documentation for all commands added by Mantle.

## JSON Format

The following pages cover pages on general JSON formats, which may be used in data packs, resource packs, or thing packs:

* [**Basic Types**](json/basic-types): Common types of fields that occur in various JSON formats.
* [**Conditions**](json/conditions): Format for JSON condition types added by SlimeKnights mods.
* [**Ingredients**](json/ingredients): JSON object representing the input to a recipe, which is able to list all matching entries.
* [**Predicates**](json/predicates): JSON object representing a condition on a part of a JSON component. Unlike ingredients, predicates do not display all matching entries.
* [**Json Things support**](json/json-things) ([1.18](json/json-things/1.18)): Documentation for all block and item types that Tinkers' Construct adds to Json Things' "Thing Packs".

### Data Packs

The following pages are specific to data pack formats:

* [**Recipe Format**](json/recipes): Index page for pages on different recipe formats.

#### Tinkers' Construct

The following pages cover data pack concepts specific to in Tinkers' Construct:

* [**Fluid Effects**](json/fluid-effects) ([1.18](json/fluid-effects/1.18)): Documentation for defining effects of fluids in various fluid effect modifiers.
* [**Material Format**](json/materials): Documentation for defining materials.
* [**Material Stat Types**](json/stat-types) ([1.16-1.18](json/stat-types/1.18)): List of all stat types available to materials.
* [**Modifiers**](json/modifiers) ([Serializers](json/modifiers/serializers)): Documentation for adding custom modifiers via JSON.
* [**Modifier Slot Types**](json/slot-types): Documentation for modifier slot types.
* [**Station Slot Layouts**](json/slot-layouts): JSON defining the arrangement of slots in the tinker station or tinker's anvil, used for in game documentation about how to craft tools.
* [**Tool Definitions**](json/tool-definitions) ([1.16-1.18](json/tool-definitions/1.18)): Format for tool definitions, which define the properties of a tool item.
* [**Tool Stats**](json/tool-stats): Documentation for all tool stats usable by tools.

### Resource Packs

* [**Armor Models**](json/armor-models): Documentation for the model format for modifiable armor from Tinkers' Construct.
* [**Fluid Textures**](json/fluid-textures): JSON format for defining the textures of fluids for Mantle mods.
* [**Fluid Tooltips**](json/fluid-tooltips): JSON format for defining fluid unit lists for tooltips.

## Other Documentation

* [**Online Books**](books): Links to online versions of many books from SlimeKnights mods.
* [**Mantle GitHub Wiki**](https://github.com/SlimeKnights/Mantle/wiki): Documentation specific to Mantle, the library mod used by SlimeKnights' mods. Will eventually be migrated to this website.
* [**Tinkers' Construct GitHub Wiki**](https://github.com/SlimeKnights/TinkersConstruct/wiki): Documentation for Tinkers' Construct content, along with general FAQs. Will eventually be migrated to this website.