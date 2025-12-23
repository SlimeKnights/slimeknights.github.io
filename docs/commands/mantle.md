---
layout: page
title: Mantle Commands
description: Since 1.16.5, Mantle adds several commands under the root command /mantle. This page lists the usage and syntax of all commands added by Mantle.
---
Since 1.16.5, Mantle adds several commands under the root command `/mantle`. This page lists the usage and syntax of all commands added by Mantle.

{% include toc.html %}

## Mantle Generated Datapack

Many Mantle commands will generate part of a datapack. By default, this is placed in the world folder for datapacks so a simple `/reload` will activate the generated files. However, if [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things) is installed, the datapack will be generated in it's `thingpacks` folder, applying the changes globally.

Note that based on datapack load order, its possible changes in the generated datapack do not override more recently added mods. If this happens, you can correct it using the [`/datapack`](https://minecraft.wiki/w/Commands/datapack) command or by deleting and remaking the pack.

It is encouraged if creating a modpack to move generated files to a datapack named after your modpack, making it easier for the end-user to identify the source of changes for your pack.

## Dump Loot Modifiers

Searches all loaded datapacks for all enabled [global loot modifiers](https://mcforge.readthedocs.io/en/latest/items/globallootmodifiers/) and either logs or saves them.

**Syntax:**
```
/mantle dump_loot_modifiers <action>
```

**Arguments:**

* {% include field.html name="\<action\>" type="string" %} action to perform, may be:
    * `log`: logs the result to the console.
    * `save`: saves the result to a json file in `<gameDirectory>/mantle_data_dump`. The link in the output of save is clickable.

## Harvest Tiers
<div class="hatnote">Since 1.18.1</div>

Prints the contents of the Forge tier sorting registry, optionally dumping the list as A JSON file for reordering tiers.

**Syntax:**
```
/mantle harvets_tiers <action>
```
* {% include field.html name="\<action\>" type="string" %} action to perform, may be:
    * `log`: logs the result to the console as a JSON.
    * `save`: saves the result to a json file in `<gameDirectory>/mantle_data_dump`. The link in the output of save is clickable.
    * `list`: prints the result as a chat message. Includes information about each tier's block tag if present.


If the second argument is `log`, logs the result to the console. If the second argument is `save`, saves them to a json file in `<gameDirectory>/mantle_data_dump`. The link in the output of save is clickable.

## Books

Runs commands related to books. These commands typically use book IDs, which are registered by any mod using Mantle's book API. The following IDs are registered by Tinkers' Construct:

* `tconstruct:materials_and_you`: Materials and You
* `tconstruct:puny_smelting`: Puny Smelting
* `tconstruct:mighty_smelting`: Mighty Smelting
* `tconstruct:tinkers_gadgetry`: Tinkers' Gadgetry
* `tconstruct:fantastic_foundry`: Fantastic Foundry
* `tconstruct:encyclopedia`: Encyclopedia of Tinkering

For the sake of testing book elements, Mantle also registers an internal book ID `mantle:test`, which can only be opened using the `/mantle book_test` command.

### Open Book
<div class="hatnote">Since 1.18.1</div>

Opens the given book. This is equivalent to opening the book by other means such as the book item or a lectern, but does not require obtaining that item.

**Syntax (since 1.18.2):**
```
/mantle book open <id>
```

**Syntax (1.18):**
```
/mantle book_test [id]
```

**Arguments:**

* {% include field.html name="[id]" type="resource location" %} Book ID to open, if unset (in 1.18) opens the book `mantle:test`.

### Export Book Images
<div class="hatnote">Since 1.18.2</div>

Exports all pages of a book as static images in the screenshots folder. Used to generate images for [pages on this website](/docs/books). Export will be located at `screenshots/mantle_book/<domain>/<name>` for a book with ID `<domain>:<name>`.

**Syntax:**
```
/mantle book export_images <id> [scale]
```

**Arguments:**

* {% include field.html name="\<id\>" type="resource location" %} Book ID to export.
* {% include field.html name="[scale]" type="number" %} GUI scale for export. If unset, defaults to 1.

### Clear Book Cache
<div class="hatnote">Since 1.18.2</div>

Clears the book cache, causing the book contents to reload. Book cache is generally cleared when resource packs or datapacks reload, but since the cache is built directly from resource pack files (rather than from loaded contents), this can greatly speed up testing book contents as you only need to modify the book and reload the cache instead of also reloading resource packs.

**Syntax:**
```
/mantle clear_book_cache [id]
```

**Arguments:**

* {% include field.html name="[id]" type="resource location" %} Book ID to clear cache. If unset, clears the cache for all books.

## Tag Preference
<div class="hatnote">Since 1.18.2</div>

Prints the preferred registry entry for the given tag. Typically used for recipe outputs in many recipe types, such as casting recipes.

**Syntax (since 1.20.1):**
```
/mantle tags preference <type> <name>
```

**Syntax (before 1.20):**
```
/mantle tag_preference <type> <name>
```

**Arguments:**

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Tag" %} Tag name, for example `forge:ingots/iron`

## Query Tags

These commands print the contents of tags. For more info about tags, see [the Minecraft Wiki](https://minecraft.wiki/w/Tags).

### View Tag

Prints all values in the given tag to the console.

**Syntax (since 1.20.1):**
```
/mantle tags view <type> <name>
```

**Syntax (before 1.20):**
```
/mantle view_tag <type> <name>
```

**Arguments:**

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Tag" %} Tag name, for example `forge:ingots/iron`

### Tags For

Lists all tags for the given registry entry.

#### ID

Fetches a registry entry by ID and lists all its tags.

**Syntax (since 1.20.1):**
```
/mantle tags for id <type> <name>
```

**Syntax (before 1.20):**
```
/mantle tags_for id <type> <name>
```

**Arguments:**

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Item ID" %} Registry entry name, for example `minecraft:iron_ingot`

#### Held

Lists all tags for the held item.

**Syntax (since 1.20.1):**
```
/mantle tags for held <type>
```

**Syntax (before 1.20):**
```
/mantle tags_for held <type>
```

**Arguments:**

* {% include field.html name="\<type\>" type="string" %} type of object being targeted. May be:
    * `item`: Lists all item tags for the held item
    * `block`: Lists all block tags for the held block
    * `fluid`: Lists all fluid tags for the fluid contained in the held item
    * `enchantment`: Lists all enchantment tags for each enchantment on the held item
    * `potion`: Lists all potion tags for the held potion
    * `entity`: Lists all entity tags for the held spawn egg

#### Targeted

Lists all tags for the targeted object. Note for blocks and fluids, the debug screen lists tags.

**Syntax (since 1.20.1):**
```
/mantle tags for targeted <type>
```

**Syntax (before 1.20):**
```
/mantle tags_for targeted <type>
```

**Arguments:**

* {% include field.html name="\<type\>" type="string" %} type of object being targeted. May be:
    * `entity`: Lists all entity tags for the targeted entity
    * `tile_entity`: Lists all tile entity tags for the targeted block
    * `block` (since 1.20.1): Lists all block tags for the targeted block
    * `fluid` (since 1.20.1): Lists all fluid tags for the targeted fluid block

### Tag Entries

Prints a JSON object containing the combination of a tag from all loaded datapacks.

**Syntax (since 1.20.1):**
```
/mantle tags entries <type> <name> [action]
```

**Syntax (before 1.20):**
```
/mantle dump_tag <type> <name> [action]
```

**Arguments:**

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Tag" %} Tag name, for example `forge:ingots/iron`
* {% include field.html name="[action]" type="string" %} Dump action to take. If unset, defaults to `log`.
    * `log`: writes the tag contents to the log as JSON.
    * `save` (since 1.18.1): saves the tag as a JSON file in the same directory used by [`/mantle dump_all_tags`](#dump-all-tags).
    * `sources` (since 1.19.2): writes the tag contents to the log as a list, including both IDs and the datapack responsible for adding each ID. 

### Dump All Tags

Searches all loaded datapacks for all tag JSON and adds them to `<gameDirectory>/mantle_data_dump`. The file path in the output is clickable to open the folder.

**Syntax (since 1.20.1):**
```
/mantle tags dump [<type>]
```

**Syntax (before 1.20):**
```
/mantle dump_all_tags [<type>]
```

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`. If left out, all types are dumped.


## Modify Tags
<div class="hatnote">Since 1.20.1</div>

These commands modify the contents of tags using the [Mantle generated datapack](#mantle-generated-datapack).

### Add to Tag

Adds an entry to the given tag. Will automatically merge with the existing tag in the datapack, and removes a matching removal entry.

**Syntax:**
```
/mantle tags add <type> <name> <entry>
```

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Tag" %} Tag name, for example `forge:ingots/iron`
* {% include field.html name="\<entry\>" type="Resource or Tag" %} Entry to add, prefixed by `#` for tags. For example, `minecraft:iron_ingot` or `#forge:ingots/tin`

### Remove from Tag

Removes an entry from the given tag. Will automatically merge with the existing tag in the datapack, and removes a matching addition entry. See [the docs](/docs/json/tags/#tag-removal) for more information on tag removal.

**Syntax:**
```
/mantle tags remove <type> <name> <entry>
```

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Tag" %} Tag name, for example `forge:ingots/iron`
* {% include field.html name="\<entry\>" type="Resource or Tag" %} Entry to remove, prefixed by `#` for tags. For example, `minecraft:iron_ingot` or `#forge:ingots/tin`

### Clear Tag

Resets a tag to 0 entries.

**Syntax:**
```
/mantle tags clear <type> <name>
```

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Tag" %} Tag name to clear, for example `forge:ingots/iron`

## Remove
<div class="hatnote">Since 1.20.1</div>
<div class="hatnote" markdown=1>
See also [removing resources](/docs/json/resource-location#removing-resources).
</div>

These commands are used to remove datapack entries using the [Mantle generated datapack](#mantle-generated-datapack) by generating empty (but valid) resources with a higher load order.

### Recipes

The remove recipes command is used to remove anything under the `data/<domain>/recipes` folder by generating a recipe using the `forge:false` condition. Can remove recipes by ID, by result, or by input.

Note removing by input or result may give unexpected results on custom recipe types. Always validate the generated files. If a recipe is removed by accident, you an simply nagivate to the location in the datapack and delete the generated file to restore it.

#### By ID

Generates a JSON to remove a single recipe based on the recipe ID.

**Syntax:**
```
/mantle remove recipes id <recipe>
```

* {% include field.html name="\<recipe\>" type="Resource Location" %} Recipe ID to remove, for example `minecraft:iron_ingot_from_smelting`.

#### By Input

Generate JSON to remove a list of recipes based on inputs. Only works on recipes that expose inputs using `Recipe#getIngredients` (which includes most vanilla types).

**Syntax:**
```
/mantle remove recipes input <recipe_type> <input>
```

* {% include field.html name="\<recipe_type\>" type="Recipe Type ID" %} Recipe type ID filter, for example `minecraft:crafting` or `minecraft:smelting`. Note that the recipe type is not the same as the recipe serializer type.
* {% include field.html name="\<input\>" type="Resource or Tag" %} Recipes with an ingredient matching this input will be removed.

#### By Result

Generate JSON to remove a list of recipes based on the result. Only works on recipes that expose the result using `Recipe#getResultItem` (which includes most vanilla types). Matching both result and input requires the recipe to also expose inputs using `Recipe#getIngredients`.

**Syntax:**
```
/mantle remove recipes result <recipe_type> <result> [<input>]
```

* {% include field.html name="\<recipe_type\>" type="Recipe Type ID" %} Recipe type ID filter, for example `minecraft:crafting` or `minecraft:smelting`. Note that the recipe type is not the same as the recipe serializer type.
* {% include field.html name="\<result\>" type="Resource or Tag" %} Recipes with a result matching this will be removed.
* {% include field.html name="\<input\>" type="Resource or Tag" %} If supplied, recipes with an ingredient matching this input will be removed. If not supplied, recipes are only matched on result.

#### By Preset

Removes recipes based on a JSON preset. Provides more fine-grained matching than the other variants of the command, and is notably used by Tinkers' Construct to provide presets for common goals.

**Syntax:**
```
/mantle remove recipes preset <preset>
```

* {% include field.html name="\<preset\>" type="Resource Location" %} ID of the preset to use.

**Presets:**

The preset with ID `<domain>:<name>` exists under `data/<domain>/mantle/remove_recipes/<name>.json`. This can be useful to define more complex instructions to remove recipes using full item predicate system.

Presets have the following JSON format:
<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root preset object.
  * {% include field.html name="recipe_type" type="Recipe Type ID" %} Recipe type ID filter, for example `minecraft:crafting` or `minecraft:smelting`. Note that the recipe type is not the same as the recipe serializer type.
  * {% include field.html name="recipe_type" type="list" %} List of recipe types to filter, matches recipes with any of the types.
    * {% include field.html name="recipe_type" type="Recipe Type ID" %} Recipe type ID filter.
  * {% include field.html name="result" type="item predicate" %} Recipes with results (`Recipe#getResultItem`) matching this predicate will be removed. If unset, result is ignored.
  * {% include field.html name="input" type="item predicate" %} Recipes with an input (`Recipe#getIngredients`) matching this predicate will be removed. If unset, input is ignored.
</div>

### Biome Modifier

Removes a Forge biome modifier by ID by replacing it with a `forge:none` modifier. Useful to remove generated features from the world such as ores, along with monster spawns for custom monsters.

**Syntax:**
```
/mantle remove biome_modifier <id>
```

* {% include field.html name="\<id\>" type="Biome Modifier ID" %} ID of the biome modifier to remove.

### Structure Set

Removes a structure set by replacing it with a set disabled using a `forge:false` condition. This prevents the structure from generating in world (assuming it is not included in another structure set).

**Syntax:**
```
/mantle remove structure_set <id>
```

* {% include field.html name="\<id\>" type="Structure Set ID" %} ID of the structure set to remove.

## Sources
<div class="hatnote">Since 1.20.1</div>

The sources command is used to list which resource packs or data packs are modifying a given resource.

### Path

Checks sources on a complete path (including file extension). The file `<domain>:<name>` will look for a resource under `<source>/<domain>/<name>`.

**Syntax:**
```
/mantle sources <pack> path <file>
```

* {% include field.html name="\<pack\>" type="String" %} Can be either `assets` to check resource packs, or `data` to check data packs.
* {% include field.html name="\<file\>" type="Resource Location" %} File to check sources, global and including extension.

### Common resource types

In addition to the generic path variant of the command, this command supports many specific useful resources, which will include autocomplete suggestions for resources.

**Syntax:**
```
/mantle sources <pack> <type> <file>
```
* {% include field.html name="\<pack\>" type="String" %} Can be either `assets` to check resource packs, or `data` to check data packs.
* {% include field.html name="\<type\>" type="String" %} Resource type to check. See below for options for both resource and data packs.
* {% include field.html name="\<file\>" type="Resource Location" %} File to check sources, relative to the source folder and excluding extension.


**Resource packs:**

The following types are available using the `assets` source:

* `atlases`: Texture atlases, used to add new sources to the block atlas and alike.
* `blockstates`: Blockstate JSON files, assigning models to blocks.
* `item_models`: Item model JSON files, assigning models to items.

**Data packs:**

* `loot_tables`: Loot table JSONs, used to assign drops to blocks and entities along with chest loot and other gameplay elements.
* `recipes`: Recipe JSONs, used to define crafting recipes for most machines, vanilla and modded.
