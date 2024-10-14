---
layout: page
title: Material Format
---

<div class="hatnote" markdown=1>
This page is about the JSON required to define a material. For the JSON to make the material craftable, see [Material Recipes](recipes/materials).
</div>
<div class="hatnote" markdown=1>
See also [Stat Types](stat-types) for the formats for different stat types supported by materials.
</div>

Materials require three basic components to define: definition, stats, and traits. The [Material ID](basic-types#resource-location) is determined by the name of each of the files.

{% include toc.html %}

## Definition
<div class="hatnote" markdown=1>
Can datagen using [`AbstractMaterialDataProvider`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/library/data/material/AbstractMaterialDataProvider.java).
</div>

Material definitions cause the material to be available in material lists, such as creative tabs and the books. They also allow the material to be craftable in some recipes, though the majority of recipes are defined [separately](recipes/materials). Definitions are the only part of the main material format that is conditional, other resources such as stats or traits are simply unused if the definition is disabled.

The material definition for `<domain>:<name>` will be located at `data/<domain/tinkering/materials/definition/<name>.json`. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html name="condition" type="condition" %} Condition that must pass for the material to be loaded. If unset, the material is loaded unconditionally.
    * {% include field.html name="craftable" type="boolean" %} If true, this material is allowed to be crafted in the part builder. If false (default), the material may only be crafted by other means.
    * {% include field.html name="tier" type="int" %} Material tier. Used primarily for sorting, but has some other functions. See [tiers](#tiers) for more info.
    * {% include field.html name="sortOrder" type="int" %} Sort order within the tier. See [sort orders](#sort-orders) for common values.
    * {% include field.html name="hidden" type="boolean" %} If true, this material is not shown in the book or as part of material items, though it may still show in crafting blocks. If false (default), the material is shown in all applicable lists.
    * {% include field.html name="redirect" type="list" %} List of conditional redirects. The first redirect from the list that passes will cause the material ID to redirect to another material ID before stats or traits are processed.
        * {% include field.html type="object" %} A redirect object.
            * {% include field.html name="redirect" type="material ID" %} If the condition passes, the material will be redirected to this ID.
            * {% include field.html name="condition" type="condition" %} If this condition passes, the material will be redirect. If unset, the material will redirect unconditionally, useful for renaming or removing a material.
</div>

### Tiers

Tiers can be defined as part of the material definition. In addition to determining sort order, they also define the books that  display the material. While not enforced, the tier is used to determine how the material is gated, along with the general stat level of the material.

| Tier | Book | Vanilla Baseline | Crafting |
| :--- | :--- | :--------------- | :------- |
| 1  | Materials and You | Wood<br>Stone | Materials that require only the part builder to craft. |
| 2  | Puny Smelting     | Iron          | Materials that require melting and casting to create.<br><br>Some Nether or End only part builder materials are in tier 2. |
| 3  | Mighty Smelting   | Diamond       | Materials that require alloys to create.<br><br>Some Nether or End only melting and casting materials are in tier 3. |
| 4 (Blazing Blood) | Fantastic Foundry  | Netherite | Materials that require blazing blood to create. |
| 4 (Soul Forge)    | *Unnamed book*     | Netherite | Materials that require the soul forge to create.<br><br>*Not yet implemented in the mod.* |
| 5  | *Unnamed book*    | Netherite+    | Materials in this tier represent the pinacle of the material list, requiring combining several crafting methods and using end exclusive components.<br><br>*Not yet implemented in the mod.* |

### Sort orders

While not required, materials typically follow some conventions for their sorting:

| Group | Sort Order | Description |
| :---- | :--------- | :---------- |
| General  |   0 | Materials with a melee/harvest type of general. |
| Harvest  |   1 | Materials with a melee/harvest type of harvest. |
| Melee    |   2 | Materials with a melee/harvest type of melee. |
| Special  |   3 | Materials with a melee/harvest type of special. |
| Ranged   |   4 | Materials that are ranged exclusive. |
| Compat   |   5 | Materials that are only added if a common metal is added. |
| Nether   | +10 | Materials that require nether access. Add to a previous category. |
| End      | +15 | Materials that require end access. Add to a previous category. |
| Binding  |  20 | Materials that are binding or bowstring only. |
| Crafting |  25 | Materials that are just used for crafting. |

## Stats
<div class="hatnote" markdown=1>
Can datagen using [`AbstractMaterialStatsDataProvider`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/library/data/material/AbstractMaterialStatsDataProvider.java).
</div>

Material stats have two functions. The first is the obvious function, it sets the stats when using the material for that stat type. The second function is making a material available to any material items or tool parts that use that stat type.

The material stats for `<domain>:<name>` will be located at `data/<domain/tinkering/materials/stats/<name>.json`. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html name="stats" type="object" %} Object containing all stats. Keys in this object are [stat type IDs](stat-types), while the values have a format based on the type.
        * {% include field.html name="\<domain\>:\<name\>" type="object" %} Defines the stats for the type `<domain>:<name>`. Format is defined by the [stat type](stat-types).
        * {% include field.html name="\<domain\>:\<name\>" type="null" %} Removes the stats for the type `<domain>:<name>`.
</div>

### Merging

Material stats support merging across different data packs on the level of the stat types. This means both that an addon can provide new stats for an existing material type, and a modpack can modify specific stat values for a material without needing to override the rest.

**Example:**

The following material stats exists in the first data pack:
```json
{
    "stats": {
        "example:type1": { "field_a": 1, "field_b": 2 }
        "example:type2": { "field_c": 3 }
    }
}
```
along with the following material stats in the second data pack:
```json
{
    "stats": {
        "example:type_1": { "field_b": 4 }
        "example:type_2": null,
        "example:type_3": {}
    }
}
```
Together, they are equivalent to the following material stats defined in a single pack:
```json
{
    "stats": {
        "example:type1": { "field_a": 1, "field_b": 4 }
        "example:type3": {}
    }
}
```

## Traits

<div class="hatnote" markdown=1>
Can datagen using [`AbstractMaterialTraitDataProvider`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/library/data/material/AbstractMaterialTraitDataProvider.java).
</div>

Material traits defines the traits associated with a material. There are two methods to define traits: default and per stat. Additionally (since 1.18.2), traits can be assigned either to a stat type or a stat group within per stats. The materials final traits will be the first one present between the stat group, stat type, then the default traits.

The material traits for `<domain>:<name>` will be located at `data/<domain/tinkering/materials/traits/<name>.json`. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The root object.
    * {% include field.html name="default" type="list" %} List of traits to add by default (that is, if the stat type has no per stat list).
        * {% include field.html type="object" %} A modifier entry.
            * {% include field.html name="name" type="modifier ID" %} Modifier to apply.
            * {% include field.html name="level" type="int" %} Modifier level to apply. If unset, defaults to 1.
    * {% include field.html name="perStat" type="object" %} Object containing all stats. Keys in this object are [stat type IDs](stat-types), while the values have a format based on the type.
        * {% include field.html name="\<domain\>:\<name\>" type="list" %} Defines the traits for the type `<domain>:<name>`.
            * {% include field.html type="object" %} A modifier entry.
                * {% include field.html name="name" type="modifier ID" %} Modifier to apply.
                * {% include field.html name="level" type="int" %} Modifier level to apply. If unset, defaults to 1.
        * {% include field.html name="\<domain\>:\<name\>" type="null" %} Removes the traits for the type `<domain>:<name>`, causing that type to default.
</div>

### Merging

Material traits support merging across different data packs. The `default` field will pull from the top loaded pack where `default` is defined, meaning an addon can add traits specific to its stat type without worrying about the default changing. `perStat` will also pull from the top loaded pack where the type is defined, with the additional behavior that if the stat is set to `null` it will remove the list from all lower packs. Lists will not merge across data packs, there is no way to add a new trait to an existing default or per stat list without redefining the list.

**Example:**

The following material traits exists in the first data pack:
```json
{
    "default": [{ "name": "example:modifier_0"}],
    "perStat": {
        "example:type1": [{ "name": "example:modifier_1" }],
        "example:type2": [{ "name": "example:modifier_2" }],
        "example:type3": [{ "name": "example:modifier_3" }]
    }
}
```
along with the following material traits in the second data pack:
```json
{
    "perStat": {
        "example:type2": null,
        "example:type3": [{ "name": "example:modifier_5" }],
        "example:type4": [{ "name": "example:modifier_4" }]
    }
}
```
Together, they are equivalent to the following material traits defined in a single pack:
```json
{
    "default": [{ "name": "example:modifier_0"}],
    "perStat": {
        "example:type1": [{ "name": "example:modifier_1" }],
        "example:type3": [{ "name": "example:modifier_5" }],
        "example:type4": [{ "name": "example:modifier_4" }]
    }
}
```