---
layout: page
title: Damage Predicates
breadcrumb: Damage
description: Damage predicates match damage source instances, allowing matching based on the cause of damage.
---

{{page.description}}

The following sections discuss supported serializers.

{% include toc.html %}

## Common Predicates

Damage source predicates support all [common predicate](..#common-predicates) serializers, though notably only support tag predicates in 1.20 and onwards.

## Simple Predicates

The following predicates have no extra fields, and are simply defined by their type:

* **`mantle:can_protect`**: Matches damage that is blocked by protection enchantments, specifically damage that does not bypass magic, enchantments, or invulnerability.
* **`mantle:is_indirect`**: Matches damage where the causing entity (e.g. a player or mob) is not the same as the direct entity (if it matches, typically a projectile). Note this will not match if both entities are `null`.
* **`mantle:has_entity`**: Matches damage sources that have an entity set.
* **`tconstruct:direct`** (since 1.20): Matches damage sources that have an entity, are not indirect, and are not thorns.

### Legacy

1.20 changed how damage sources worked, migrating a lot of damage source properties to damage type tags. Until 1.19.2, the following predicates existed to check the properties before they were tags:

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

## Attacker

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

## Message

The message damage predicate matches a specific damage source based on the damage source message field. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} A damage predicate object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:message`.
    * {% include field.html name="message" type="string" %} Damage source message ID to match. Message IDs are listed on [the Minecraft Wiki](https://minecraft.wiki/w/Commands/damage#Damage_types), and typically match the translation key for the death message without the prefix `death.attack.` or suffix `.player`.
</div>