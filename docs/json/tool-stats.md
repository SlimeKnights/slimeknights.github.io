---
layout: page
title: Tool Stats
description: Tool stats are a registry in Tinkers' Construct used by tool definitions and modifiers to define the behavior of tools.
---
<div class="hatnote" markdown=1>
This page is about tool stats supported by Tinkers' Construct. For the combination of stats used to define material stats, see [Stat Types](../stat-types).
</div>

Tool stats are a registry in Tinkers' Construct used by [tool definitions](../tool-definitions) and [modifiers](../modifiers) to define the behavior of tools.
Tool stats behavior is defined in Java, however they can be used in many contexts in JSON through their [Tool Stat ID](../basic-types#resource-location) in the format of `<domain>:<name>`.

{% include toc.html %}

## Numeric Tool Stats

The majority of tool stats are numeric tool stats, typically expressed as a float value. Numeric tool stats work similarly to [attributes](https://minecraft.wiki/w/Attribute), containing a minimum and maximum value, along with a default value if not set through other means. Most numeric tool stats are conditioned on a particular item tag, if the tool lacks the tag then any sources of the tool stat will be ignored.

The following subsections detail numeric stats available in Tinkers' Construst by default. 

### Durability

Durability stats are applicable to any tool in the tag `tconstruct:modifiable/durability`. The following durability stats are present:

* **`tconstruct:durability`** (minimum 1, default 1): Maximum durability of the tool. If a tool's damage exceeds the durability stat, the tool is considered broken.
* **`tconstruct:overslime`** (minimum 0, default 50): Since 1.19.2, the maximum overslime allowed on the tool is expressed as a stat. Overslime acts as a second durability bar on tools, with many modifiers either restoring overslime or increasing it's cap.

### Melee

Melee stats are used when using a tool as a melee weapon. The following melee stats are available:

* **`tconstruct:attack_damage`** (range 0-2048, default 0): Damage bonus from this weapon towards melee attacks. Will be added to the entity's attack damage attribute for both combat and display, notably meaning players always have +1 attack damage over the stat. Only applicable to tools in the tag `tconstruct:modifiable/melee` (which notably includes chestplates for unarmed attack damage boosts).
* **`tconstruct:attack_speed`** (range 0-1024, default 1): Determines how quickly a tool may attack at full power after attacking; tools typically reach full power in `1 / attack_speed` seconds. Will replace the entity's attack speed attribute, since the default attack speed for most entities is 4.0. Only applicable to tools in the tag `tconstruct:modifiable/melee/weapon` (which notably excludes chestplates, they always have 4.0 attack speed).

### Harvest

Harvest stats are used when a tool is breaking blocks. They are applicable to any tool in the tag `tconstruct:modifiable/harvest`. The following numeric harvest stats are available:

* **`tconstruct:mining_speed`** (range 0.1-2048, default 1): Speed at which the tool breaks the block. See [the Minecraft Wiki](https://minecraft.wiki/w/Breaking#Speed) for more information.

In addition, tools have the [mining tier](#mining-tier) stat, which is a non-numeric tool stat.

### Armor

Armor stats are used when a tool is worn as armor, or when shields are held. They are applicable to any tool in the tag `tconstruct:modifiable/armor`. The following armor stats are available:

* **`tconstruct:armor`** (range 0-30, default 0): Base armor value of the armor piece. Displayed directly in the armor bar above the hotbar. See [the Minecraft Wiki](https://minecraft.wiki/w/Armor#Armor_points) for more information.
* **`tconstruct:armor_toughness`** (range 0-20, default 0): Normally, high damage attacks ignore a portion of armor. Toughness makes the armor value more effective against high damage attacks. See [the Minecraft Wiki](https://minecraft.wiki/w/Armor#Armor_toughness) for more information.
* **`tconstruct:knockback_resistance`** (range 0-1, default 0): Percentage of knockback ignored when wearing this armor piece.

### Shield

In addition to [armor stats](#armor), shields have several additional stats that are applicable to any tool in the `tconstruct:modifiable/held` tag. These stats also notably are used on non-shields that receive the blocking modifier. The following shields stats are available:

* **`tconstruct:block_amount`** (range 0-2048, default 5): Determines the amount incoming damage is reduced by when blocking with this shield.
* **`tconstruct:block_angle`** (range 0-180, default 120): Determines the range of angles protected when blocking with this shield. An angle of 0 represents an attack source in the center of the screen, while an angle of 180 represents an attack source up to 90 degrees to either side, which is the behavior of shields in vanilla. Attacks at angles greater than 90 to either side are unblockable by shields.

### Ranged

Ranged stats are used by bows and crossbows to determine the time it takes to charge, plus the properties of the arrow. In addition, some modifiers such as spitting or sling modifiers use range stats to determine the modifier behavior. Range stats are applicable to any tool in the `tconstruct:modifiable/ranged` tag. The following ranged stats are available:

* **`tconstruct:draw_speed`** (range 0-1024, default 1): Determines how long it takes the tool to fully charge up to full power; tools typically reach full power in `1 / draw_speed` seconds.
* **`tconstruct:velocity`** (range 0-1024, default 1): Velocity is a multiplier on the speed of projectiles fired by this tool. For arrows, damage is determined by speed, making velocity act as a damage multiplier.
* **`tconstruct:accuracy`** (range 0.1-10, default 0.75): Determines how much fired projectiles stray from the crosshair target. Vanilla bows have an accuracy of 0.75, the default value. At 1.0, the projectile will always hit the target of the crosshair, barring the effects of gravity.
* **`tconstruct:projectile_damage`** (range 0-1024, default 2): Determines the power of the fired projectile. For arrows, this directly translates to the arrow damage. Spitting uses it to determine the amount of fluid in the fired projectile, while sling modifiers use power as an additional multiplier on the distance the entity is slung.

### Other

The following stats do not directly fit in any of the above categories:

* **`tconstruct:tank_capacity`** (minimum 0, default 0): Capacity of the primary tank on the tool, expressed as a tool stat since 1.19.2. Used by the standard tank handler to determine how much fluid the tool can hold. Note that tools can have multiple tanks which may use other methods to determine capacity, though this is non-standard.

## Mining Tier

Mining tier is a string tool stat with the tool stat ID of `tconstruct:harvest_tier`. Like other [harvest](#harvest) stats, it supports any tool in the `tconstruct:modifiable/harvest` tag.

The mining tier stat supports any value from Forge's tier sorting registry, which by default contains the following values:

* `minecraft:wood`: equivalent to mining with a wooden tool.
* `minecraft:gold`: equivalent to mining with a golden tool. Note vanilla makes no distinction between this tier and wood, but mods may add blocks that require gold (notably seared blocks from Tinkers' Construct).
* `minecraft:stone`: equivalent to mining with a stone tool.
* `minecraft:iron`: equivalent to mining with a iron tool.
* `minecraft:diamond`: equivalent to mining with a diamond tool.
* `minecraft:netherite`: equivalent to mining with a netherite tool. Note vanilla makes no distinction between this tier and diamond, but mods may add blocks that require netherite.
* *For a full list of tiers and their pack defined order, use the [`/mantle harvest_tiers`](/docs/commands/mantle#harvest-tiers) command.*

If a tool has multiple mining tier stats, the greater mining tier is chosen, as determined by Forge's tier sorting registry.

### Custom Tiers

It is not possible with purely data packs to add new harvest tiers. One option is to repurpose an unused harvest tier for your design; if you install any mods that add new non-Tinkers tools, odds are they give you a new harvest tier to use. The [`/mantle harvest_tiers`](/docs/commands/mantle#harvest-tiers) command will list them; any that specify a tag can be repurposed provided you do not care about any vanilla style tools using it.

A more flexible approach is to take advantage of [Thing Packs](../resource-location#thing-packs) to add new [Item Tiers](https://github.com/gigaherz/JsonThings/blob/master/documentation/formats/ItemTiers.md), which can then be used in Tinkers. To accomplish this, place a JSON under `things/<domain>/item_tier/<name>.json` for the harvest tier `<domain>:<name>`. This JSON has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The item tier JSON.
    * {% include field.html type="block tag" name="tag" %} Tag listing blocks that this new tier can mine.
    * {% include field.html type="list" name="sort_after" %} List of harvest tiers considered lower than this new tier. e.g. iron could specify `minecraft:stone`.
        * {% include field.html type="harvest tier" %} A harvest tier considered lower than this new tier.
    * {% include field.html type="list" name="sort_before" %} List of harvest tiers considered higher than this new tier. e.g. iron could specify `minecraft:diamond`.
    * *The following fields are required for the item tier to be valid, but are ignored by Tinkers' Construct.*
    * {% include field.html type="integer" name="uses" %} Must be greater than 0.
    * {% include field.html type="float" name="speed" %} Must be greater than 0.
    * {% include field.html type="float" name="attack_damage_bonus" %} Must be greater than or equal to 0.
    * {% include field.html type="integer" name="enchantment_value" %} Must be greater than or equal to 0.
    * {% include field.html type="ingredient" name="repair_ingredient" %} Must be a valid ingredient.
</div>

For an example custom item tier, see [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/things/tinkers_things/item_tier/hematite.json).