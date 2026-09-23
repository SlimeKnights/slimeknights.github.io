---
layout: page
title: Predicates
description: Predicates are a JSON element defined by Mantle used in many different JSON formats to represent a condition that must be matched by a piece of the JSON format. Unlike ingredients, predicates are not required to list their full contents for display in recipe viewers, though they may be used indirectly to construct displays.
---
<div class="hatnote" markdown=1>
This page is about conditions that cannot list 
</div>

Predicates are used in many different JSON formats to represent a condition that must be matched by a piece of the JSON format. Unlike [ingredients](../ingredients), predicates are not required to list their full contents for display in recipe viewers, though they may be used indirectly to construct displays.

Predicates are defined in Mantle, and support many different vanilla registries. In addition, mods such as Tinkers' Construct define additional predicate types.

{% include toc.html %}

## Format

A predicate may be defined either in compact format or in object format.

In object format, a predicate is defined as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} The predicate serializer ID.
    * *Any other fields specific to the predicate serializer*.
</div>

If a predicate has no additional fields, or all the additional fields are using the default value, it may be defined compactly using just a string containing the predicate serializer ID as follows:

<div class="treeview" markdown=1>
* {% include field.html type="resource location" %} The predicate serializer ID.
</div>

## Common Predicates

All predicates support the predicate serializers defined in the following subsections. Whenever a predicate references another predicate serializer, any predicate serializer for the given type may be used. 

### Any

The any predicate matches everything. It has a predicate type ID of `mantle:any` and no additional fields.

### Inverted

The inverted predicate matches anything not matched by the nested predicate. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:inverted`.
    * {% include field.html name="inverted_type" type="resource location" %} The predicate serializer ID to invert. If that predicate would return true, the inverted predicate returns false.
    * *Any other fields specific to the inverted predicate serializer*.
</div>

### And

The "and predicate" matches if all of the nested predicates match. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:and`.
    * {% include field.html name="predicates" type="list" %} List of predicates, all must match for the "and predicate" to match.
        * {% include field.html type="predicate" %} A predicate object. May be any predicate serializer for the desired predicate type.
</div>

### Or

The "or predicate" matches if any of the nested predicates match. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:or`.
    * {% include field.html name="predicates" type="list" %} List of predicates, if any match the "or predicate" will match.
        * {% include field.html type="predicate" %} A predicate object. May be any predicate serializer for the desired predicate type.
</div>

### Tag

Some predicate types, most notably those defined from vanilla registries, support tag predicates. The tag predicate will match if the input is in the given tag. Unlike other common predicate serializers, not every predicate type supports tag predicates.

Tag predicates have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:tag`.
    * {% include field.html name="tag" type="Tag" %} ID of a tag in the registry associated with the predicate type.
</div>

## Variable Predicate
<div class="hatnote">Since 1.20</div>

Some predicate types can leverage the Tinkers' Construct {% include type.html type="variable" %} system to check if a value from the world is within the given range. Supporting predicates have the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A predicate object.
    * {% include field.html name="type" type="resource location" %} Typically `tconstruct:variable_range`.
    * {% include field.html name="variable" type="variable" %} Variable to fetch.
    * {% include field.html name="min" type="float" %} Minimum value. If unset, defaults to negative infinity (effectively any).
    * {% include field.html name="max" type="float" %} Maximum value. If unset, defaults to positive infinity (effectively any).
    * {% include field.html name="interval" type="string" %} Specifies the type of interval to match. Options are:
        * `closed` (default): `min` and `max` are both inside the range and will match.
        * `open`: `min` and `max` are both outside the range and will not match.
        * `left_open`: `max` will match but `min` will not match.
        * `right_open`: `min` will match but `max` will not match.
</div>


## Block Predicates

Block predicates match block state values. They support all [common predicate](#common-predicates) serializers (including tag predicates), along with the following serializers which have no extra fields:

* **`mantle:requires_tool`**: Matches any block which requires mining with the correct tool to drop items from it's loot table.
* **`mantle:blocks_motion`** (since 1.20): Matches any block which prevents an entity from moving through it.
* **`mantle:can_be_replaced`** (since 1.20): Matches any block which is replaced upon placing a block.
* **`tconstruct:bush`** (since 1.20): Matches any block which extends `BushBlock`.
* **`tconstruct:can_melt`** (since 1.19): Matches any block which has a melting recipe.
* **`tconstruct:can_be_replaced`** (since 1.20): Matches any block which is replaced upon placing a block.

In addition, the following sections discuss serializers with additional fields.

In 1.18, some uses of block predicates used a version defined by Tinkers' Construct where all [common predicate](#common-predicates) along with the `required_tool` predicate were registered under a domain of `tconstruct` instead of `mantle`.

### Block Set

{% include_relative _set-predicate.html name="Block" %}

In 1.18, some uses of the block predicate used a version defined by Tinkers' Construct. For those block predicates, the block set predicate had a `type` of `tconstruct:set`.

### Block Properties

The block properties predicate matches a given block state on a list of block properties. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A block predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:block_properties`.
    * {% include field.html name="block" type="Block ID" %} Block to match. All block properties must come from the passed block.
    * {% include field.html name="properties" type="object" %} Map of property name to expected value. Matching behavior varies based on the type of the values:
        * {% include field.html name="\<name\>" type="string" %} Property will exactly match when `<name>` is the given string value.
        * {% include field.html name="\<name\>" type="list" %} Property will match if `<name>` is any value within the list.
            * {% include field.html type="string" %} Option for `<name>`.
        * {% include field.html name="\<name\>" type="object" %} Property will match if `<name>` is within the passed range of values.
            * {% include field.html name="min" type="string" %} Minimum value for `<name>`. If unset, property matches with no minimum value.
            * {% include field.html name="max" type="string" %} Maximum value for `<name>`. If unset, property matches with no maximum value.
</div>

### Harvest Tier

The harvest tier block predicate matches any blocks which can be harvested using the given harvest tier. It has the following fields:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A block predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:harvest_tier`.
    * {% include field.html name="tier" type="Tier ID" %} Harvest tier to match.
</div>

### Block Variable
<div class="hatnote">Since 1.20</div>

The block variable predicate is a [variable predicate](#variable-predicate) that matches using {% include type.html type="block variable" %}. See that section for more information on the JSON format.


## Item Predicates

Item predicates match item values (notably not {% include type.html type="item stack" %}, meaning no count or NBT). They are used in some contexts where items are present but not item stacks, preventing usage of a standard {% include type.html type="item ingredient" %}. Item predicates support all [common predicate](#common-predicates) (including tag predicates), along with the following serializers which have no extra fields:

* **`mantle:has_container`** (since 1.20): Matches any item that has a container item.
* **`mantle:may_have_transfer`** (since 1.20): Matches any item which has a registered fluid transfer recipe. Note it may still lack a transfer due to its NBT.
* **`tconstruct:arrow`** (since 1.19): Matches any item that extends `ArrowItem`.
* **`tconstruct:bucket`** (since 1.20): Matches any item that extends `BucketItem`.
* **`tconstruct:map`** (since 1.20): Matches any item that extends `MapItem`.
* **`tconstruct:can_melt`** (since 1.19): Matches any item that has a melting recipe.
* **`tconstruct:castable`** (since 1.20): Matches any item that has a casting recipe.

In addition, the following sections discuss serializers with additional fields.

### Item Set

{% include_relative _set-predicate.html name="Item" %}


## Fluid Predicates
<div class="hatnote">Since 1.20</div>

Fluid predicates match fluid values (notably not {% include type.html type="fluid stack" %}, meaning no count or NBT). They are used in some contexts where fluids are present but not fluid stacks, preventing usage of standard {% include type.html type="fluid ingredient" %}. Fluid predicates support all [common predicate](#common-predicates) (including tag predicates), along with the following serializers which have no extra fields:

* **`mantle:is_source`**: Matches the "source" form of fluids, but not the "flowing" form.
* **`mantle:has_bucket`**: Matches fluids that have a bucket form.
* **`mantle:lighter_than_air`**: Matches fluids with a negative density, suggesting they should flow upwards.
* **`tconstruct:fuel`**: Matches fluids that function as a smeltery fuel.

In addition, the following sections discuss serializers with additional fields.

### Fluid Set

{% include_relative _set-predicate.html name="Fluid" %}

### Fluid Type

The fluid type predicate matches any fluid with the given fluid type. Fluid types are a Forge feature that contain shared properties between the source and flowing forms of a fluid. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A fluid predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:fluid_type`.
    * {% include field.html name="fluid_types" type="list" %} List of fluid types to match. Will be true if the fluid has any type in the list.
        * {% include field.html type="Fluid Type ID" %} A single fluid type to match.
</div>


## Entity Predicates

Entity predicates match living entity instances, allowing matching properties of active entities in the world. They support all [common predicate](#common-predicates) serializers (including tag predicates), along with the following serializers which have no extra fields:

* **`mantle:fire_immune`**: Matches any entity that is immune to fire damage.
* **`mantle:can_freeze`** (since 1.20): Matches any entity that can take cold damage. Generally defined as not wearing leather armor.
* **`mantle:water_sensitive`**: Matches any entity that takes damage from water.
* **`mantle:on_fire`**: Matches any entity that is on fire.
* **`mantle:is_freezing`** (since 1.20): Matches any entity that is frozen, like from powder snow.
* **`mantle:on_ground`**: Matches any entity that is currently on the ground.
* **`mantle:crouching`**: Matches any entity that is actively sneaking.
* **`mantle:sprinting`** (since 1.20): Matches any entity that is actively sprinting.
* **`mantle:blocking`** (since 1.20): Matches any entity that is actively blocking with a shield.
* **`mantle:elytra_flying`** (since 1.20): Matches any entity that is flying with an elytra or an elytra alternative.
* **`mantle:eyes_in_water`**: Matches any entity which has it's head underwater.
* **`mantle:feet_in_water`**: Matches any entity that has it's feet in water.
* **`mantle:underwater`**: Matches any entity that with both it's head and feet underwater.
* **`mantle:raining_at`**: Matches if it's raining and the entity has line of sight to the sky in a biome that supports rain.
* **`tconstruct:airborne`**: Matches any entity that is not on the ground, not on a climbable block, not swimming, and not riding another entity.
* **`tconstruct:targeting_block`** (since 1.20): Matches any entity currently targeting a block. This requires them to be looking at a block that is within their reach distance. This predicate is somewhat expensive to compute so should not be used in any intensive environments.
* **`tconstruct:full_health`** (since 1.20): Matches any entity that is at full health. That is, their current health is equal to or exceeds their max health.

In addition, the following sections discuss entity predicate serializers with additional fields.

In 1.18, some uses of entity predicates used a legacy version defined by Tinkers' Construct where all relevant predicates were registered under a domain of `tconstruct` instead of `mantle`. In addition, `mantle:on_ground`, `mantle:underwater`, and `mantle:has_enchantment` are not available.

### Entity Set

{% include_relative _set-predicate.html name="Entity" key="entities" %}

### Has Enchantment
<div class="hatnote">Since 1.19</div>

The "has enchantment" entity predicate matches any entity that is wearing a piece of equipment with the given enchantment. This predicate only considers equipment slots that are normally allowed to contain the given enchantment, meaning armor enchantments will only consider armor slots for instance.

The has enchantment entity predicate has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A entity predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:has_enchantment`.
    * {% include field.html name="enchantment" type="Enchantment ID" %} ID of an enchantment to check for on the entity's equipment.
</div>

### Mob Type

The mob type entity predicate matches any entity with an entity type belonging to the given mob type. 

The has enchantment entity predicate has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A entity predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:has_enchantment`.
    * {% include field.html name="mobs" type="resource location" %} ID of the mob type to check. By default, the following options are available:
        * **`minecraft:arthropod`**: Any entities that are considered "arthropod", notably used by the bane of arthropods enchantment.
        * **`minecraft:illager`**: Any entities that are considered "illagers", used for alliances among illager mobs.
        * **`minecraft:undead`**: Entities that are considered "undead", taking damage from healing potions and the smite enchantment, plus healing from harming potions.
        * **`minecraft:water`**: Any entities that typically live underwater.
        * **`minecraft:undefined`**: Any entities that don't belong to another type.
</div>

### Has Mob Effect
<div class="hatnote">Since 1.20</div>

The has mob effect predicate matches any entity that has the given effect. It the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A entity predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:has_effect`.
    * {% include field.html name="effect" type="Effect ID" %} ID of the mob effect the mob must have.
</div>

### Block At Entity
<div class="hatnote">Since 1.20</div>

The block at feet predicate matches any entity that has the given block at the given location relative to their feet. It the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A entity predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:block_at_entity`.
    * {% include field.html name="offset" type="integer" %} Vertical offset for the block. 0 (default) is inside the entity's feet. -1 is below their feet.
    * {% include field.html name="block_type" type="Effect ID" %} ID of a {% include type.html type="block predicate" %} matching the blocks expected near the entity's feet.
    * *All fields from the block predicate*.
</div>

### Entity Variable
<div class="hatnote">Since 1.20</div>

The entity variable predicate is a [variable predicate](#variable-predicate) that matches using {% include type.html type="entity variable" %}. See that section for more information on the JSON format.


## Damage Predicates

Damage predicates match damage source instances, allowing matching based on the cause of damage. They support all [common predicate](#common-predicates) serializers, though notably only support tag predicates in 1.20 and onwards. In addition, they support the following serializers which have no extra fields:

* **`mantle:can_protect`**: Matches damage that is blocked by protection enchantments, specifically damage that does not bypass magic, enchantments, or invulnerability.
* **`mantle:is_indirect`**: Matches damage where the causing entity (e.g. a player or mob) is not the same as the direct entity (if it matches, typically a projectile). Note this will not match if both entities are `null`.
* **`mantle:has_entity`**: Matches damage sources that have an entity set.
* **`tconstruct:direct`** (since 1.20): Matches damage sources that have an entity, are not indirect, and are not thorns.

In addition, until 1.19.2 the following serializers with no extra fields exist. They were removed in 1.20 due to damage source reworks.

* **`mantle:bypass_armor`**: Matches damage that is not reduced by armor, such as starving, fall damage, fire, and magic.
* **`mantle:bypass_enchantments`**: Matches damage that bypasses protection enchantments, such as the warden's "sonic boom" attack.
* **`mantle:bypass_magic`**: Matches damage that bypasses magical protections such as protection enchantments or the resistance effect. Notably includes starving damage.
* **`mantle:bypass_invulnerable`**: Matches damage that hurts players in creative, such as void damage.
* **`mantle:damage_helmet`**: Matches damage that causes helmet durability loss, such as falling blocks.
* **`mantle:explosion`**: Matches damage caused by explosions, such as TNT or end crystals.
* **`mantle:fall`**: Matches damage caused by falling, including stalagmites.
* **`mantle:fire`**: Matches damage caused by fire or lava.
* **`mantle:magic`**: Matches damage caused by magic such as potions.
* **`mantle:projectile`**: Matches damage caused by projectiles, such as arrows.
* **`mantle:melee`**: Matches damage that is caused by a melee attack. Unlike other predicates, "melee damage" is not a vanilla concept, so it uses the following heuristics:
    * If the damage is caused by a projectile, it is not melee damage.
    * If the damage is caused by an entity, it is melee damage provided it is it not caused by thorns.
    * If the damage is not caused by an entity, it is melee damage if it does not bypass armor, it is not fire, it is not magic, and it is not an explosion.

In addition, the following sections discuss damage predicate serializers with additional fields.

### Attacker

The attacker damage predicate matches damage sources with an attacker matching the specified [entity predicate](#entity-predicate). It fails to match if the source is not caused by a living entity. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A damage predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:attacker`.
    * {% include field.html name="entity_type" type="resource location" %} An [entity predicate](#entity-predicate) serializer ID matching the attacker.
    * *All relevant fields from the entity predicate serializer*.
    * {% include field.html name="which" type="resource location" version="since 1.20" %} Selects which entity to check. Options:
         * `causing`: Checks the entity who initiated the action, typically a player or mob.
         * `direct`: Checks the entity that directly inflicted the damage. If not a player, will be a mob
</div>

### Message

The message damage predicate matches a specific damage source based on the damage source message field. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A damage predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:message`.
    * {% include field.html name="message" type="string" %} Damage source message ID to match. Message IDs are listed on [the Minecraft Wiki](https://minecraft.wiki/w/Commands/damage#Damage_types), and typically match the translation key for the death message without the prefix `death.attack.` or suffix `.player`.
</div>

## Material Predicates
<div class="hatnote">Since 1.20.1</div>

Material predicates are a predicate type added by Tinkers' Construct, matching material variants. They support all [common predicate](#common-predicates) serializers, which match directly on material IDs (ignoring variants). In addition, they support the following predicates with no extra fields:

* `tconstruct:castasble`: Matches any materials with a casting fluid.
* `tconstruct:composite`: Matches any materials with a composite fluid and base material.
* `tconstruct:craftable`: Matches any materials that are craftable in the part builder.
* `tconstruct:not_hidden`: Matches any materials that are not marked as hidden.
* `tconstruct:registered`: Matches any materials that exist in the material registry.

Additional material predicate serializers are discussed in the following sections.

### Compact

In standard usages of material predicates, a {% include type.html type="resource location" %} without an object is treated as the ID of a material predicate type, useful for any of the above predicates with no extra fields.

Some contexts support compact material predicates, which change the compact representation to a {% include type.html type="material variant" %}. If there is no variant (e.g. `tconstruct:iron`), it will match as an [ID](#id). If there is a variant (e.g. `tconstruct:slimewood#greenheart`), it will match as a single [Variant](#variant). If the variant is set to `#default` (e.g. `tconstruct:whitestone#default`), then it will match only that ID with no variant set as [Variant](#variant).

### ID

Matches a set of material IDs, ignoring variants. See [Variant](#variant) if you need to match variants. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:id`.
    * {% include field.html name="id" type="material" %} Material ID to match.
    * {% include field.html name="id" type="list" %} Set of Material IDs, matches if the ID is any in the set.
      * {% include field.html type="material" %} A Material ID to match.
</div>

### Variant

Matches a set of material IDs, ignoring variants. See [ID](#id) if you need to ignore variants. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:variant`.
    * {% include field.html name="id" type="material variant" %} Material Variant ID to match.
    * {% include field.html name="id" type="list" %} Set of Material Variant IDs, matches if the ID is any in the set.
      * {% include field.html type="material variant" %} A Material Variant ID to match.
</div>

Note that since this matches on variants, if the tested ID is variantless it will only match if you include the variantless ID in the set.

### Has Stat Type

The has stat type predicate matches materials that have stats for the given type. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:stat_type`.
    * {% include field.html name="stat_type" type="stat type" %} Stat Type to check.
</div>

### Has Part

The has part predicate matches materials that support being used to craft a specific part. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_part`.
    * {% include field.html name="part" type="item ID" %} Tool part item to check. Expected to be an instance of `IMaterialItem`.
</div>

### Tier

The material tier predicate matches materials with tiers in the given range. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A material predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tier`.
    * {% include field.html name="tier" type="int range" %} Range of tiers to match. Tiers are expected to be at minimum 0.
</div>


## Modifier Predicates

Modifier predicates are a predicate type added by Tinkers' Construct, matching modifiers. They support all [common predicate](#common-predicates) serializers, though tag predicates are registered with a `type` of `tconstruct:tag` instead of `mantle:tag` until 1.21. Additional modifier predicate serializers are discussed in the following sections.

In 1.18, all [common predicate](#common-predicates) were registered under a domain of `tconstruct` instead of `mantle`.

### Single Modifier

The single modifier predicate matches the given modifier by ID. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A modifier predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:single`.
    * {% include field.html name="modifier" type="modifier ID" %} Modifier ID to match.
</div>

### Slot Type

The slot type modifier predicate matches modifiers that have a recipe costing the given [slot type](/docs/json/recipes/modifiers/#slot-types). It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A modifier predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:slot_type`.
    * {% include field.html name="slot" type="Slot Type" %} Modifier must have a recipe charging the given slot type to match. If unset or `null`, matches modifiers that have a recipe charging no slots (slotless).
</div>

## Tool Predicates

Tool predicates are a predicate type added by Tinkers' Construct, matching tool instances. There are two variants of tool predicates: tool stack predicates, which are used in most contexts, and tool context predicates, which are used during tool building when tools have more limited data (notably lacking access to tool durability). Both types of predicate support all [common predicate](#common-predicates) serializers, along with item tag predicates matching the tool item.

Tool predicates support fallback behavior; if a predicate serializer ID does not exist in the tool stack registry, it will fallback to a tool context predicate serializer with that ID. If a predicate serializer ID does not exist in the tool context predicate registry, it will fallback to the [item predicate](#item-predicates) registry.

Tool context predicates support the following serializers which have no extra fields:

* **`tconstruct:has_upgrades`**: Matches any tools which have at least 1 modifier added via recipes.

Tool stack predicates support the following serializers which have no extra fields:

* **`tconstruct:not_broken`**: Matches tools which are not broken.

In addition, the following sections discuss tool predicate serializers with additional fields.

### Has Modifier

The has modifier tool context predicate matches tools that contain the given modifier. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_modifier`.
    * {% include field.html name="modifier" type="Modifier Predicate" %} Predicate matching the modifier expected on the tool.
    * {% include field.html name="level" type="int range" %} Range of expected levels of the modifier on the tool. Minimum level is 0, indicating the tool lacks the given modifier. If unset, defaults to 1 or more, indicating the tool has the modifier at any level.
    * {% include field.html name="check" type="string" %} Modifier list to check, may be one of the following:
        * **`upgrades`**: Checks the list of modifiers applied using recipes.
        * **`all`**: Checks the full list of modifiers on the tool, which includes modifiers from recipes and traits.
</div>

### Has Material

The has material tool context predicate matches tools that contain the given material. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_material`.
    * {% include field.html name="material" type="Material Variant" %} Material variant expected on the tool.
    * {% include field.html name="index" type="integer" %} Index expected to contain the tool material. If unset, will check the entire material list.
</div>

### Has Stat Type

The has stat type tool context predicate matches tools that require a particular [stat type](/docs/json/stat-types) for one of their tool parts. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_stat_type`.
    * {% include field.html name="stat_type" type="Stat Type ID" %} Stat type that must be used by the tool.
    * {% include field.html name="material" type="Material Variant" %} If set, the stat type must contain the passed material variant.
    * {% include field.html name="index" type="integer" %} Index expected to contain the tool material. If unset, will check the entire material list.
</div>

### Has Persistent Key
<div class="hatnote">Since 1.20</div>
<div class="hatnote" markdown=1>
See also: [Has Volatile Key](#has-volatile-key)
</div>

The has persistent key tool context predicate matches tools that have the given key set in their persistent data in NBT. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_persistent_key`.
    * {% include field.html name="key" type="Resource Location" %} Key to check for in data.
</div>

### Has Hook
<div class="hatnote">Since 1.20</div>

The has hool tool context predicate matches tools that expose the given {% include type.html type="tool hook" %} in any of their modules in their [tool definition](../tool-definitions). It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool context predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_hook`.
    * {% include field.html name="hook" type="tool hook" %} Hook to check for on the [tool definition](../tool-definitions).
</div>

### Stat in Range

The stat in range tool stack predicate matches tools that have a given numeric tool stat with a value within the passed range. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:stat_in_range`.
    * {% include field.html name="stat" type="Tool Stat" %} Numeric tool stat to match.
    * {% include field.html name="min" type="float" %} Minimum allowed value. If unset, there is no minimum.
    * {% include field.html name="max" type="float" %} Maximum allowed value. If unset, there is no maximum.
</div>

### Stat in Set

The stat in set tool stack predicate matches tools that have a given tool stat within the set of values. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:stat_in_set`.
    * {% include field.html name="stat" type="Tool Stat" %} Tool stat to match.
    * {% include field.html name="values" type="list" %} List of allowed values for the stat.
        * {% include field.html type="any" %} Allowed stat value. JSON type varies based on the tool stat.
</div>

### Has Volatile Key
<div class="hatnote">Since 1.20</div>
<div class="hatnote" markdown=1>
See also: [Has Persistent Key](#has-persistent-key)
</div>

The has volatile key tool stack predicate matches tools that have the given key set in their volatile data in NBT. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:has_volatile_key`.
    * {% include field.html name="key" type="Resource Location" %} Key to check for in data.
</div>

### Tool Action
<div class="hatnote">Since 1.20</div>

The has tool action tool stack predicate matches tools that can perform the given tool action. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A tool stack predicate object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tool_action`.
    * {% include field.html name="action" type="Tool Action" %} Tool action to check.
</div>

### Tool Variable
<div class="hatnote">Since 1.20</div>

The tool variable predicate is a tool stacks [variable predicate](#variable-predicate) that matches using {% include type.html type="tool variable" %}. See that section for more information on the JSON format.
