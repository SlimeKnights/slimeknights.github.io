---
layout: page
title: Material Stat Types
---
<div class="hatnote" markdown=1>
This page is about the stat type format since 1.19.2. For the format from 1.16 to 1.18.2, see [Stat Types 1.16-1.18](1.18).
</div>

Both [material stats](../materials#stats) and [materials traits](../materials#traits) make use of stat types as part of their definition. Stat types are often represented by a stat type ID, which takes the form of a standard [resource location](../basic-types#resource-location). The following stat types exist natively in Tinkers' Construct. Most stat types exist within a group, which can be used to simply adding traits to a specific type of tool.

Many stat types are repairable, meaning that a matching material can be used to repair the tool. During repair, the durability stat of the first matching repairable stat type determines the amount repaired.

{% include toc.html %}

## Melee/Harvest

Melee/harvest stats refer to stats for melee weapons and harvest tools. The group has a stat type ID of `tconstruct:melee_harvest`, which applies default traits to all types in the group.

### Head
<div class="hatnote" markdown=1>
Can datagen using [`HeadMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/HeadMaterialStats.java).
</div>

Head stats are repairable, and define the primary stats for all melee and harvest tools. This stat type is used for parts such as pickaxe heads and sword blades. Head stats apply all values additively, canceling the default stat value. Scaling will directly multiply the values for the given head.

Head stats have stat type ID `tconstruct:head` and the following format:

<div class="treeview" markdown=1>
* {% include field.html name="tconstruct:head" type="object" %} The stats object.
    * {% include field.html name="durability" type="int" %} Durability of the tool. 
    * {% include field.html name="melee_attack" type="float" %} Damage the tool will deal when used as a melee weapon, in half hearts. If unset, defaults to 1.
    * {% include field.html name="mining_speed" type="float" %} Mining speed when the tool is used to break blocks. See [the Minecraft Wiki](https://minecraft.wiki/w/Breaking#Speed) for an explanation of the values. If unset, defaults to 1.
    * {% include field.html name="mining_tier" type="mining tier" %} Determines the list of blocks where the tool is considered "effective". If unset, defaults to `minecraft:wood`. For a list of valid values, see [mining tiers](/docs/json/tool-stats#mining-tier).

</div>

### Handle
<div class="hatnote" markdown=1>
Can datagen using [`HandleMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/HandleMaterialStats.java).
</div>

Handle stats define multipliers for various stats on melee and harvest tools. This type is used for parts such as tool handles and tough handles. Handle stats apply using the "percent formula", meaning all stats are summed, then the tool's stat is multiplied by the sum plus 1 (e.g. if two handles add a stat of 0.25 and 0.1, the resulting multiplier is 1.35). Scaling the stat will directly multiply the value, and the stats can be negative to reduce the stat.

Handle stats have stat type ID `tconstruct:handle` and the following format:

<div class="treeview" markdown=1>
* {% include field.html name="tconstruct:handle" type="object" %} The stats object.
    * {% include field.html name="durability" type="float" %} Percent bonus to durability. If unset, defaults to 0. 
    * {% include field.html name="mining_speed" type="float" %} Percent bonus to the tool's mining speed. If unset, defaults to 0. 
    * {% include field.html name="melee_damage" type="float" %} Percent bonus to the tool's damage when used as a melee weapon. If unset, defaults to 0. 
    * {% include field.html name="melee_speed" type="float" %} Percent bonus to the tool's attack speed when used as a melee weapon. If unset, defaults to 0. 
</div>

### Binding
<div class="hatnote" markdown=1>
Can datagen using [`StatlessMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/StatlessMaterialStats.java).
</div>

The binding stat type has no stats, simply applying their trait. Defining this type on a material is required to allow it to craft bindings. Binding stats have stat type ID `tconstruct:binding`, defined as an empty object.

## Ranged

Ranged stats refer to stats for ranged tools such as longbows or crossbows. The group has a stat type ID of `tconstruct:ranged`, which applies default traits to all types in the group.

### Limb
<div class="hatnote" markdown=1>
Can datagen using [`LimbMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/LimbMaterialStats.java).
</div>

Limb stats are repariable, and define the primary stats for ranged weapons such as longbows or crossbows. Limb stats apply all values additively, with durability canceling the default stat value. Scaling will directly multiply the values for the given limb.

Limb stats have stat type ID `tconstruct:limb` and the following format:

<div class="treeview" markdown=1>
* {% include field.html name="tconstruct:limb" type="object" %} The stats object.
    * {% include field.html name="durability" type="int" %} Durability of the tool. 
    * {% include field.html name="draw_speed" type="float" %} Draw speed of the tool. Higher values means the tool takes shorter to charge up or pull back.
    * {% include field.html name="velocity" type="float" %} Velocity of the projectile. Determines not just speed, but also acts as a multiplier on arrow damage.
    * {% include field.html name="accuracy" type="float" %} Accuracy bonus for projectiles fired by this weapon. Determines how the projectile drifts from the crosshair.
</div>

### Grip
<div class="hatnote" markdown=1>
Can datagen using [`GripMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/GripMaterialStats.java).
</div>

Grip stats define bonus for ranged weapons such as longbows or crossbows. Each stat in the grip scales differently.

Grip stats have stat type ID `tconstruct:grip` and the following format:

<div class="treeview" markdown=1>
* {% include field.html name="tconstruct:grip" type="object" %} The stats object.
    * {% include field.html name="durability" type="float" %} Percent bonus to durability. If unset, defaults to 0.
    * {% include field.html name="accuracy" type="float" %} Accuracy bonus for projectiles fired by this weapon. Determines how the projectile drifts from the crosshair.
    * {% include field.html name="melee_damage" type="float" %} Damage the tool will deal when used as a melee weapon, in half hearts. If unset, defaults to 0.
</div>

### Bowstring
<div class="hatnote" markdown=1>
Can datagen using [`StatlessMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/StatlessMaterialStats.java).
</div>

The bowstring stat type has no stats, simply applying their trait. Defining this type on a material is required to allow it to craft bowstrings. Binding stats have stat type ID `tconstruct:bowstring`, defined as an empty object.

## Armor

Armor stats refer to stats for plate armor and plate shields. The group has a stat type ID of `tconstruct:armor`, which applies default traits to all types in the group.

### Plating
<div class="hatnote" markdown=1>
Can datagen using [`PlatingMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/PlatingMaterialStats.java).
</div>

Plating refers to a set of 5 repairable stat types that all have the same format. Generally, a tool will have just 1 of these 5 stat types. Plating stats apply all values additively, canceling the default stat value. Scaling will directly multiply the values for the given head.

Plating stats have the following format:
<div class="treeview" markdown=1>
* {% include field.html name="tconstruct:plating_\<type\>" type="object" %} The stats object.
    * {% include field.html name="durability" type="int" %} Durability of the tool. Generally, will be set to a durability factor which is multiplied by each piece's durability multiplier.
    * {% include field.html name="armor" type="float" %} Armor value of the part. If unset, defaults to 0. Not supported on `tconstruct:plating_shield`.
    * {% include field.html name="toughness" type="float" %} Toughness value of the part. Generally the same value across all pieces. If unset, defaults to 0.
    * {% include field.html name="knockback_resistance" type="float" %} Knockback resistance of the part. Generally the same value across all pieces. If unset, defaults to 0.
</div>

The following 5 plating stat types exist:
* **`tconstruct:plating_helmet`:** Stat type for helmet plating. Generally has a durability multiplier of 11 and a max armor value of 2.
* **`tconstruct:plating_chestplate`:** Stat type for chest plating. Generally has a durability multiplier of 16 and a max armor value of 7.
* **`tconstruct:plating_leggings`:** Stat type for leg plating. Generally has a durability multiplier of 15 and a max armor value of 5.
* **`tconstruct:plating_boot`:** Stat type for boot plating. Generally has a durability multiplier of 13 and a max armor value of 2.
* **`tconstruct:plating_shield`:** Stat type for shield plating. Generally has a durability multiplier of 18 and does not support armor values.

The max armor values are to avoid armor exceeding 20 when considering the diamond modifier adding +1 armor.

### Maille
<div class="hatnote" markdown=1>
Can datagen using [`StatlessMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/StatlessMaterialStats.java).
</div>

The maille stat type has no stats, simply applying their trait. Defining this type on a material is required to allow it to craft maille. Maille stats have stat type ID `tconstruct:maille`, defined as an empty object.

## Repair Kit
<div class="hatnote" markdown=1>
Can datagen using [`StatlessMaterialStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/StatlessMaterialStats.java).
</div>

The repair kit stat type has no stats, and has no effect when used on a material for traits. Defining this stat type on a material will allow it to craft repair kits, though note that repair kits are craftable if the material has any repairable stats. Repair kit stats have stat type ID `tconstruct:repair_kit`, defined as an empty object.

The primary use is for specialized tools to allow repairing with materials that are not typically a repair part, such as repairing traveler's gear with leather.

## Skull
<div class="hatnote" markdown=1>
Can datagen using [`SkullStats`](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/src/main/java/slimeknights/tconstruct/tools/stats/SkullStats.java).
</div>

The skull stat type is a repairable stat type used to define stats and traits for slimeskull variants. Unlike other stat types, there are no skull "tool parts", rather the recipe for slime skulls uses mob heads directly. As a result, many of the materials associated with skull stats may seem random since they are just chosen for the sake of a repair material. If a tool somehow managed to get multiple skull stat types, the values are added with respect to the scale.

Limb stats have stat type ID `tconstruct:skull` and the following format:

<div class="treeview" markdown=1>
* {% include field.html name="tconstruct:skull" type="object" %} The stats object.
    * {% include field.html name="durability" type="int" %} Durability of the tool. 
    * {% include field.html name="armor" type="int" %} Armor value of the skull. Generally should not exceed 2 to prevent armor values from going over 20.
</div>