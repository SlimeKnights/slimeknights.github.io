---
layout: page
title: Loot Injectors
description: Loot injectors are a JSON format added by Mantle in 1.19.2 which allow adding new entries to a loot table without modifying the original table JSON. This provides better mod comparability with other mods doing the same sorts of modifications. 
---
{{page.description}}

## Injector Format

Fluid texture JSON are defined under `data/<domain>/mantle/loot_injectors/<name>.json`, though the name `<name>` is arbitrary. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The loot injector object.
    * {% include field.html name="conditions" type="list" %} List of conditions that must pass for this injector to be loaded, following the Forge recipe condition format. If unset, the injector will always load.
        * {% include field.html name="condition" type="condition" %} Condition that must pass for the injector to be loaded.
    * {% include field.html name="name" type="resource location" %} Full path to the loot table to modify, relative to `data/<domain>/loot_tables/` and excluding the `.json` extension.
    * {% include field.html name="pools" type="list" %} List of pools to modify.
        * {% include field.html type="object" %} A loot pool object.
            * {% include field.html name="name" type="string" %} Name of the pool, per the Forge specification.
                * Loot pools added by mods should have the name specified in JSON.
                * For tables that don't specify names, the first pool is named `main`.
                * Every following pool that does not specify a name is named `pool#` where `#` is the pool index (starting from 0 if you include `main`). For example, the second pool in a loot table is named `pool1`.
            * {% include field.html name="entries" type="list" %} Array of loot entries.
                * {% include field.html type="loot entry" %} A loot entry, following [the vanilla format](https://minecraft.wiki/w/Loot_table#Entry).
</div>

While the loot injector `<domain>:<name>` must be unique, if another injector is placed at the same name it will override based on datapack order. Overriding a loot injector with an empty JSON will cause it to be skipped, allowing for conveiently removing injectors.

Multiple injectors with the same loot table name will be merged, applying the pools from each of them.