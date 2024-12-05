---
layout: page
title: Mantle Commands
description: Since 1.16.5, Mantle adds several commands under the root command /mantle. This page lists the usage and syntax of all commands added by Mantle.
---
Since 1.16.5, Mantle adds several commands under the root command `/mantle`. This page lists the usage and syntax of all commands added by Mantle.

{% include toc.html %}

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

**Syntax (1.18-1.19):**
```
/mantle book_test [id]
```

**Syntax (1.20):**
```
/mantle book open <id>
```

**Arguments:**

* {% include field.html name="[id]" type="resource location" %} Book ID to open, if unset (before 1.20) opens the book `mantle:test`.

### Export Book Images
<div class="hatnote">Upcoming 1.18.2, upcoming 1.19.2</div>

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

**Syntax:**
```
/mantle tag_preference <type> <name>
```

**Arguments:**

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Tag" %} Tag name, for example `forge:ingots/iron`
  
## Tags

These commands print the contents of tags. For more info about tags, see [the Minecraft Wiki](https://minecraft.wiki/w/Tags).

### View Tag

Prints all values in the given tag to the console.

**Syntax:**
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

**Syntax:**
```
/mantle tags_for id <type> <name>
```

**Arguments:**

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`
* {% include field.html name="\<name\>" type="Item ID" %} Registry entry name, for example `minecraft:iron_ingot`

#### Held

Lists all tags for the held item.

**Syntax:**
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

**Syntax:**
```
/mantle tags_for targeted <type>
```

**Arguments:**

* {% include field.html name="\<type\>" type="string" %} type of object being targeted. May be:
    * `entity`: Lists all entity tags for the targeted entity
    * `tile_entity`: Lists all tile entity tags for the targeted block

### Dump Tag

Prints a JSON object containing the combination of a tag from all loaded datapacks.

**Syntax:**
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

**Syntax:**
```
/mantle dump_all_tags [<type>]
```

* {% include field.html name="\<type\>" type="Registry ID" %} Tag registry ID, for example `minecraft:item` or `minecraft:potion`. If left out, all types are dumped.
