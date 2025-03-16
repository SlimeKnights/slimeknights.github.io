---
layout: page
title: Resource Locations
description: This page summarizes the basics of resource locations, and how they can be used to add and modify resources in Minecraft.
---

{{page.description}}

{% include toc.html %}

## Format

When specified in JSON, a resource location shows up as a string in the format `<domain>:<name>`, where `<domain>` typically represents a mod or datapack ID, and `<name>` is the specific name for this object. Valid characters are any lowercase letter, any number, `-`, `_`, and `/`. A single `:` is allowed between the domain and name.

## Notable variants

While many spots in JSON will simply reference "resource locations", there are some notable variants of resource locations that add additional behavior, described in the following sections.

### Registry IDs

A common application of resource locations is an ID of a value in a registry. Unlike regular resource locations, registry IDs are often validated against the registry contents to ensure a matching ID exists.

### Tag Name
<div class="hatnote" markdown=1>
See also [the Minecraft Wiki article on tags](https://minecraft.wiki/w/Tags)
</div>

Another common application of resource locations is an ID of a tag for a registry. Tags typically exist under `data/<domain>/tags/<registry name>/<name>.json`, though material and modifier tags exist under `data/<domain>/tinkering/tags/<materials|modifiers>/<name>.json`.

For JSON tag fields, if the requested tag does not exist the behavior is the same as if the tag is empty.

### Pattern

Another application of resource locations is patterns, which are used as part of the part builder. When defining a pattern `<domain>:<name>`, it will be translated with the tooltip from `pattern.<domain>.<name>`, and will be rendered with an icon from `assets/<domain>/textures/gui/tinker_pattern/<name>.png`. For instance, the pattern `tconstruct:ingot` uses the tooltip `pattern.tconstruct.ingot` and the texture `assets/tconstruct/textures/gui/tinker_pattern/ingot.png`.

## Packs

Resource locations are often used to define the locations of resources (hence the name). The resource location `<domain>:<name>` for a given resource type will refer to a file under `<root>/<domain>/<folder>/<name>.<extension>`, where:

* `<root>` refers to the root folder for the pack type:
    * `assets` is used for [resource packs](#resource-packs).
    * `data` is used for [data packs](#data-packs).
    * `things` is used for [thing packs](#thing-packs).
* `<folder>` refers to the folder for that type of resource. For instance, [tool definitions](../tool-definition) exist in the folder `tinkering/tool_definitions`.
* `<extension>` refers to the file extension for the resource type. Most commonly it is `json`, though resource packs notably use a lot of `png` files.

In order for resources from a pack to be considered, the pack must have a [`pack.mcmeta`](https://minecraft.wiki/w/Pack.mcmeta) and be placed in the proper folder for the pack type.

### Resource packs
<div class="hatnote" markdown=1>
See also: [Minecraft Wiki on Resource Packs](https://minecraft.wiki/w/Resource_pack)
</div>

Resource packs are used to add and modify client resources under the `assets` directory. They are typically loaded from `.minecraft/resourcepacks`.

Since resource packs modify client resources, they cannot directly impact gameplay. These resources exist under the `assets` directory. Every client has the ability to have a different set of resource packs enabled, meaning the server cannot rely on behavior defined in a resource pack.

Resource packs are loaded on game launch, meaning resources must be loaded without knowledge of any world specific configuration such as [data pack](#data-packs) contents. However, they do have access to most content defined in code, such as the block or item registries.

Notable resource pack contents include languages, textures, and block and item models.

### Data packs
<div class="hatnote" markdown=1>
See also: [Minecraft Wiki on Data Packs](https://minecraft.wiki/w/Data_pack)
</div>

Data packs are used to add and modify server resources under the `data` directory. They are typically loaded from `.minecraft/saves/<world>/datapacks` and are per world, however many global data pack loader mods exist to load a pack for all new worlds. You can also globally load a data pack by packaging it as a [low code mod](/docs/guides/lowcode-mod).

Since data packs contain server resources, they can control gameplay but are unable to directly interact with certain visual elements such as textures or translations. When a client joins a server, any relevant data pack contents are automatically synced to the client.

Data packs are loaded on world load, meaning they cannot directly add new registry contents without significant changes to Mojang's code. This also means that [resource packs](#resource-packs) cannot know the full list of any data pack contents.

Notable data pack contents include recipes, loot tables, and world generators.

### Thing packs
<div class="hatnote" markdown=1>
See also: [Json Things Documentation](https://github.com/gigaherz/JsonThings/blob/master/documentation/Introduction.md)
</div>

Thing packs are a feature added by [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things) which allow adding certain game elements which need to be created before world load (thus cannot be in [data packs](#data-packs) and affect gameplay (thus cannot be in [resource packs](#resource-packs)). New thing pack contents are added under `things`, though Json Things also loads every thing pack as both a resource pack (reading `assets`) and a data pack (reading `data`). Thing packs are placed under `.minecraft/thingpacks`.

The `things` from thing packs are loaded on game launch, and unlike both resource packs and data packs do not support reloading without restarting the game.

Examples of features that can be added through thing packs are blocks, items, fluids, and creative mode tabs.

### Mod resources

Mod `.jar` files will automatically be loaded as both a [resource pack](#resource-packs) (through their `assets` folder) and a [data pack](#data-packs) (through their `data` folder). This means that you can identify the resources of either type provided by any mod simply by opening the jar (which can be done through programs such as 7Zip or by renaming it to a `.zip` file). Mod jars are typically placed under `.minecraft/mods`.

If Json Things is installed, each mod also has the ability to add [thing pack](#thing-packs) contents to the jar. Typically there is no reason to do this in Java mods; however, [low code mod](/docs/guides/lowcode-mod) can use this to create full mods without writing any Java code.

### Overriding resources

If two [resource packs](#resource-packs), [data packs](#data-packs), or [thing packs](#thing-packs) add a resource with the same path, then the top level pack resource will be used. This means you can easily override resources in a mod pack by simply adding a resource pack or data pack with a copy of the file you wish to change.
The file must be placed at the same path relative to the root as it was in the original mod for the override to be detected, including matching the domain from the original resource. If the domain or name is wrong, it may be interpreted as a new resource. If the folder is wrong, it may be ignored or cause errors as its loaded as the wrong resource type.

Some resource types instead of overriding will instead merge, meaning elements from all packs with that resource will get combined. A notable example of this is tags. Check the documentation for the specific resource type to determine how it merges.

### Adding new resources

Any new resources placed under the correct folders (including the root and domain folders) will create new resources of the appropriate type, with any errors in the format getting logged in the game log.

When creating new content, it is always advised to use a custom domain for your content over that of an existing mod such as `minecraft`, `tconstruct` or `tinkers_things`. This minimizes potential for conflict and ensures tooltips in game can properly attribute your content to your pack. As an example, if you are making a modpack called "Skyblock Adventure", you might wish to use a resource domain of `skyblock_adventure` for any new content.

### Removing resources

The most reliable way to remove resources is making use of [`pack.mcmeta`](https://minecraft.wiki/w/Pack.mcmeta), which allows excluding resources from lower level packs using the `filter` property. Specific resource types can often be removed using alternative approaches.

A common approach for removing `.json` files is replacing the contents with `{}`. Note that this does not work for every resource type; check the log to see if it generates errors before committing to this approach.

#### Removing recipes

Forge allows removing recipes by creating a recipe JSON at the correct location with the following contents:

```json
{ "conditions": [{ "type": "forge:false" }]}
```
This takes advantage of Forge's conditions, which allow a recipe to be conditionally enabled. To be specific, it uses the `forge:false` condition, which always fails.

To remove the recipe `<domain>:<name>`, you simply create the resource under `data/<domain>/recipes/<name>.json`.