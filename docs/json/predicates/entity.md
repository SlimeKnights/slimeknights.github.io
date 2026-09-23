---
layout: page
title: Entity Predicates
breadcrumb: Entity
description: Entity predicates match living entity instances, allowing matching properties of active entities in the world.
---

{{page.description}}

The following sections discuss supported serializers.

{% include toc.html %}

## Common Predicates

Entity predicates support all [common predicate](..#common-predicates) (including tag predicates).

In 1.18, some uses of entity predicates used a legacy version defined by Tinkers' Construct where all relevant predicates were registered under a domain of `tconstruct` instead of `mantle`.

## Simple Predicates

The following predicates have no extra fields, and are simply defined by their type:

* **`mantle:fire_immune`**: Matches any entity that is immune to fire damage.
* **`mantle:water_sensitive`**: Matches any entity that takes damage from water.
* **`mantle:on_fire`**: Matches any entity that is on fire.
* **`mantle:crouching`**: Matches any entity that is actively sneaking.
* **`mantle:eyes_in_water`**: Matches any entity which has it's head underwater.
* **`mantle:feet_in_water`**: Matches any entity that has it's feet in water.
* **`mantle:raining_at`**: Matches if it's raining and the entity has line of sight to the sky in a biome that supports rain.
* **`tconstruct:airborne`**: Matches any entity that is not on the ground, not on a climbable block, not swimming, and not riding another 

**Since 1.19:**

* **`mantle:on_ground`**: Matches any entity that is currently on the ground.
* **`mantle:underwater`**: Matches any entity that with both it's head and feet underwater.

**Since 1.20:**

* **`mantle:can_freeze`**: Matches any entity that can take cold damage. Generally defined as not wearing leather armor.
* **`mantle:is_freezing`**: Matches any entity that is frozen, like from powder snow.
* **`mantle:sprinting`**: Matches any entity that is actively sprinting.
* **`mantle:blocking`**: Matches any entity that is actively blocking with a shield.
* **`mantle:elytra_flying`**: Matches any entity that is flying with an elytra or an elytra alternative.
entity.
* **`tconstruct:targeting_block`**: Matches any entity currently targeting a block. This requires them to be looking at a block that is within their reach distance. This predicate is somewhat expensive to compute so should not be used in any intensive environments.
* **`tconstruct:full_health`**: Matches any entity that is at full health. That is, their current health is equal to or exceeds their max health.

## Entity Set

{% include_relative _set-predicate.html name="Entity" key="entities" %}

## Has Enchantment
<div class="hatnote">Since 1.19</div>

The "has enchantment" entity predicate matches any entity that is wearing a piece of equipment with the given enchantment. This predicate only considers equipment slots that are normally allowed to contain the given enchantment, meaning armor enchantments will only consider armor slots for instance.

The has enchantment entity predicate has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A entity predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:has_enchantment`.
    * {% include field.html name="enchantment" type="Enchantment ID" %} ID of an enchantment to check for on the entity's equipment.
</div>

## Mob Type

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

## Has Mob Effect
<div class="hatnote">Since 1.20</div>

The has mob effect predicate matches any entity that has the given effect. It the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A entity predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:has_effect`.
    * {% include field.html name="effect" type="Effect ID" %} ID of the mob effect the mob must have.
</div>

## Block At Entity
<div class="hatnote">Since 1.20</div>

The block at feet predicate matches any entity that has the given block at the given location relative to their feet. It the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A entity predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:block_at_entity`.
    * {% include field.html name="offset" type="integer" %} Vertical offset for the block. 0 (default) is inside the entity's feet. -1 is below their feet.
    * {% include field.html name="block_type" type="Effect ID" %} ID of a {% include type.html type="block predicate" %} matching the blocks expected near the entity's feet.
    * *All fields from the block predicate*.
</div>

## Entity Variable
<div class="hatnote">Since 1.20</div>

The entity variable predicate is a [variable predicate](#variable-predicate) that matches using {% include type.html type="entity variable" %}. See that section for more information on the JSON format.