---
layout: page
title: Fluid Effects
description: Fluid effects are a system added to Tinkers' Construct in 1.19.2 used to define the behavior of fluids when used in fluid effect modifiers such as spilling, spitting, and wetting.
---
<div class="hatnote" markdown=1>
This page is about the fluid effect format since 1.19.2. For the format from 1.16 to 1.18.2, see [Spilling Effects](1.18).
</div>

{{page.description}}

{% include toc.html %}

## Effect Lists

Fluid effect JSON are defined under `data/<domain>/tinkering/fluid_effects/<name>.json`, though the location `<domain>:<name>` has no impact on behavior apart from data pack overrides.
Fluid effect JSON has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid effect list object.
    * {% include field.html name="conditions" type="list" %} List of conditions that must pass for this fluid effect list to be loaded. If unset, the effect list is always loaded.
        * {% include field.html type="condition" %} A single condition that must pass.
    * {% include field.html name="fluid" type="fluid ingredient" %} Fluid ingredient determining fluids receiving these effects. Ingredient amount determines the amount of fluid required to apply the effects, with the effects scaling if too little fluid.
    * {% include field.html name="block_effects" type="list" %} List of effects to apply when this fluid is applied to a block. Notably applies from spitting projectiles or splashing.
        * {% include field.html type="object" %} A [block fluid effect](#block-effects).
            * {% include field.html name="type" type="resource location" %} [Block effect ID](#block-effects).
            * *Any additional fields defined by the block effect*.
    * {% include field.html name="entity_effects" type="list" %} List of effects to apply when this fluid is applied to an entity. All forms of fluid effect modifiers make use of entity effects.
        * {% include field.html type="object" %} An [entity fluid effect](#entity-effects).
            * {% include field.html name="type" type="resource location" %} [Entity effect ID](#entity-effects).
            * *Any additional fields defined by the entity effect*.
</div>

Fluid effects have a level, which is typically determined by the modifier level. This level acts as a multiplier on the amount of fluid consumed, as defined by `fluid`. If too little fluid exists in the tool, the effect will be scaled down, though not every effect supports scaling. Some modifiers will consume less fluid if the effect does not scale, while others will consume the fluid but perform no additional effect.

## Block Effects

Block effects are applied when a fluid hits a block. The follow sections describe specific block fluid effects.

### Conditional Block Effect

The conditional block effect applies a block effect conditioned on the fluid hitting a block matching the block predicate. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Block effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:conditional`.
    * {% include field.html name="block" type="block predicate" %} Block predicate determining when to apply the effect.
    * {% include field.html name="effect" type="Block Effect" link="#block-effects" %} Effect to apply if the condition matches.
</div>

### Place Block

The place block effect places a block at the location the fluid hits. The block is placed as if it were placed by the player when possible. This effect requires a full level of fluid to place a block, and never consumes more than 1 level. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Block effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:place_block`.
    * {% include field.html name="block" type="Block ID" %} Block to place.
</div>

### Mob Effect Cloud

The mob effect cloud block effect places an area effect cloud on the block where the fluid hits (similar to a lingering potion). This effect scales the effect duration based on the level, consuming the relevant fluid. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Block effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:mob_effect_cloud`.
    * {% include field.html name="effects" type="list" %} List of effects to apply.
        * {% include field.html type="object" %} An effect to apply.
            * {% include field.html name="effect" type="Mob Effect ID" %} Mob effect to apply.
            * {% include field.html name="time" type="integer" %} Duration of the effect in ticks.
            * {% include field.html name="level" type="integer" %} Level of the effect to apply. If unset, defaults to 1.
            * {% include field.html name="curative_items" type="list" %} List of items which may cure the effect, using Forge's curative item system. If unset, the effect is cured by it's default curative items. If an empty list, nothing will cure the effect.
                * {% include field.html type="Item ID" %} An item which may cure this effect.
</div>

### Potion Cloud

The potion cloud block effect places an area effect cloud on the block where the fluid hits (similar to a lingering potion) with effects based on the fluid's NBT. This effect will only produce useful effects if the fluid's NBT format matches the NBT format of the potion item. This effect scales the effect duration based on the level, consuming the relevant fluid. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Block effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:potion_cloud`.
    * {% include field.html name="scale" type="float" %} Scaling factor to apply to the effect. 1.0 represents the same strength as drinking a potion.
    * {% include field.html name="nbt" type="object" %} Expected NBT for the fluid, represented as a JSON object. If unset, no additional conditions are placed on the fluid NBT.
    * {% include field.html name="nbt" type="string" %} Expected NBT for the fluid, represented as a string. If unset, no additional conditions are placed on the fluid NBT.
</div>

## Entity Effects

Entity effects are applied when a fluid hits an entity. The follow sections describe specific entity fluid effects.

### Conditional Entity Effect

The conditional entity effect applies an entity effect conditioned on the fluid hitting an entity matching the entity predicate. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:conditional`.
    * {% include field.html name="target" type="entity predicate" %} Entity predicate determining when to apply the effect.
    * {% include field.html name="effect" type="Entity Effect" link="#entity-effects" %} Effect to apply if the condition matches.
</div>

### Extinguish

The extinguish entity effect removes fire from the target if they are on fire. This effect requires a full level of fluid to apply, and never consumes more than 1 level. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:extinguish`.
</div>

### Teleport

The teleport entity effect randomly teleports the target. It requires a full level of fluid to apply, and never consumes more than 1 level. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:teleport`.
</div>

### Cure Effects

The cure effects entity effect cures mob effects on the target using the given curative item. A typical curative item is milk, though mods may define other useful curative items. This effect requires a full level of fluid to apply, and never consumes more than 1 level. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:cure_effects`.
    * {% include field.html name="item" type="item stack" %} Curative item to apply.
</div>

### Remove Effect

The remove effect entity effect removes a mob effect from the target. This effect requires a full level of fluid to apply, and never consumes more than 1 level. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:remove_effect`.
    * {% include field.html name="effect" type="Mob Effect ID" %} Effect to remove.
</div>

### Mob Effect

The mob effect entity effect applies a mob effect to the target. The duration of the effect is scaled based on the fluid amount, consuming any relevant fluid. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:mob_effect`.
    * {% include field.html name="effect" type="Mob Effect ID" %} Mob effect to apply.
    * {% include field.html name="time" type="integer" %} Duration of the effect in ticks.
    * {% include field.html name="level" type="integer" %} Level of the effect to apply. If unset, defaults to 1.
    * {% include field.html name="curative_items" type="list" %} List of items which may cure the effect, using Forge's curative item system. If unset, the effect is cured by it's default curative items. If an empty list, nothing will cure the effect.
        * {% include field.html type="Item ID" %} An item which may cure this effect.
    * {% include field.html name="action" type="string" %} Determines how the effect scales if the entity already has the effect. The following options are available:
        * **`add`**: The duration of the effect is increased if the existing level matches `level`.
        * **`set`**: The duration of the effect is set to `time`, consuming fluid based on the duration increase.
</div>

### Potion

The potion entity effect applies effects to the target effects based on the fluid's NBT. This effect will only produce useful effects if the fluid's NBT format matches the NBT format of the potion item. This effect scales the effect duration based on the level, consuming fluid based on the added duration. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:potion`.
    * {% include field.html name="scale" type="float" %} Scaling factor to apply to the effect. 1.0 represents the same strength as drinking a potion.
    * {% include field.html name="nbt" type="object" %} Expected NBT for the fluid, represented as a JSON object. If unset, no additional conditions are placed on the fluid NBT.
    * {% include field.html name="nbt" type="string" %} Expected NBT for the fluid, represented as a string. If unset, no additional conditions are placed on the fluid NBT.
</div>

### Damage

The damage entity effect damages the target, either with projectile damage if used in a projectile context or direct damage otherwise. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:damage`.
    * {% include field.html name="damage" type="float" %} Damage to deal.
    * {% include field.html name="modifier" type="list" %} List of modifiers to apply to the damage. If unset, applies no modifiers.
        * {% include field.html type="resource location" %} Modifier to apply. The following options are available by default:
            * **`tconstruct:fire`**: Makes the damage count as fire damage.
            * **`tconstruct:explosion`**: Makes the damage count as explosion damage.
            * **`tconstruct:magic`**: Makes the damage count as magic damage.
            * **`tconstruct:fall`**: Makes the damage count as fall damage.
            * **`tconstruct:no_aggro`**: Prevents aggrovating the target of the damage.
            * **`tconstruct:bypass_armor`**: Makes the damage bypass armor values.
            * **`tconstruct:bypass_enchantments`**: Makes the damage bypass protection enchantments.
            * **`tconstruct:bypass_magic`**: Makes the damage bypass potion effects such as resistance and protection enchantments.
</div>

### Restore Hunger

The restore hunger entity effect gives the target hunger and saturation. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:restore_hunger`.
    * {% include field.html name="hunger" type="int" %} Amount of hunger to restore.
    * {% include field.html name="saturation" type="float" %} Amount of saturation to restore.
    * {% include field.html name="can_always_eat" type="boolean" %} If true, this effect will always apply. If false, this effect will only apply if the target is hungry, consuming no fluid if they are not hungry.
    * {% include field.html name="represenative_item" type="item output" %} Food item equivalent to drinking this fluid. Used for compatibility with the diet mod so the proper types of nutrition are restored. If unset, skips the compatibility call.
</div>

### Fire

The fire entity effect lights the target on fire. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:fire`.
    * {% include field.html name="time" type="integer" %} Duration of the effect in seconds.
    * {% include field.html name="action" type="string" %} Determines how the effect scales if the entity already is on fire. The following options are available:
        * **`add`**: The fire duration is increased by `time`.
        * **`set`**: The fire duration is set to `time`, consuming fluid based on the duration increase.
</div>

### Freeze

The freeze entity effect makes the target freeze, applying similar behavior to standing in powdered snow. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:freeze`.
    * {% include field.html name="time" type="integer" %} Duration of the effect in ticks. Will be added to the minimum ticks required to freeze.
    * {% include field.html name="action" type="string" %} Determines how the effect scales if the entity already is on fire. The following options are available:
        * **`add`**: The fire duration is increased by `time`.
        * **`set`**: The fire duration is set to `time`, consuming fluid based on the duration increase.
</div>

### Award Stat

The award stat entity effect awards a stat to the target. It is used notably to change insomnia levels with some fluids. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:award_stat`.
    * {% include field.html name="stat" type="Custom Stat ID" %} Stat to apply.
    * {% include field.html name="amount" type="integer" %} Stat amount to reward, will be scaled by the fluid level. May be negative.
</div>

### Add Breath

The add breath entity effect increases or decreases the target's air supply. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:add_breath`.
    * {% include field.html name="amount" type="integer" %} Breath to add to the target, will be scaled by the fluid level. May be negative.
</div>

### Calcified

The calcified fluid effect implements behavior for several modifiers that apply boosts when drinking milk. Notably, it applies resistance if the entity is wearing a helmet with the strong bones modifier. In addition, it applies the calcified effect if the entity is wearing any equipment that uses that effect. The duration of the effect is scaled based on the fluid amount. It has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} Entity effect object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:calcified`.
</div>