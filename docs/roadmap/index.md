---
layout: page
title: Roadmap
description: This page covers information on future plans for Tinkers' Construct 3. Note that just because a feature is on this list does not mean its guaranteed to be included; roadmap features tend to get many design iterations before getting added to the mod.
---
<div class="hatnote" markdown=1>
For the specific changes coming in the next update, see [Changelog Draft](https://github.com/SlimeKnights/TinkersConstruct/wiki/Changelog-Draft).
</div>
<div class="hatnote" markdown=1>
See also: [Design Documents](../design) - may contain details on future plans that fall under an existing feature.
</div>

{{page.description}}

{% include toc.html %}

## Next Actions

1.20.1 is in public Beta. We plan to continue adding features from the roadmap for the next couple of updates, then decide whether to add larger features or focus on another port.

1.19.2 and 1.18.2 are both considered stable. We plan at least 1 more release for each version, but its to be determined how many bug fixes make it to each which are not already coded.

## Multiblock

### Inverted Channels

* Slimesteel and Cinderslime can make channels and faucets.
* They work identically to seared/scorched channels/faucet except for one small difference: downwards pouring is replaced with upwards pouring.

### Casting Tank

* Crafted from copper and seared stone.
* Has two item slots, an input and an output. Can insert into the input and extract from the output via automation such as hoppers.
* Can only insert items if the output slot and input slots are both empty.
* When inserting, will attempt to transfer fluid between the tank and the item. 
    * If successful, the resulting item is placed in the output slot.
    * If unsuccessful, the original item is placed in the input slot.
    * Upon any change to the fluid contents, the transfer is tried again.
* Useful to automatically fill or empty buckets/copper cans.

### Tinker Tank

* Crafted from gold and scorched stone.
* Tank has a single slot that can hold an item with a fluid handler.
* Any interactions to the tank will interact with the item's fluid handler, essentially proxying it.
* Useful to automatically fill or empty variable sized tanks or tools.

### Smeltery interface

* Allows accessing the UI fluid tank
* Comparator signal for tank level
* On pulse, switches fluid order (bottom to top? Top to bottom?)

### Sublimery

The sublimery is currently targeted for release near the [Soul Forge](#soul-forge) build, as we do not believe its current design can stand on its own without the system it was designed to fuel.

* Upside-down smeltery unlocked at the beginning of the end.
* Created using slimestone (slime on end stone) and slimesteel/king's slime/queen's slime (undecided).
* Third variant of the multiblock melting structure, after the smeltery and foundry.
* Will support melting entities into gaseous experience instead of transitional entity melting.
* Will likely not support alloying (smeltery exclusive) or byproducts (foundry exclusive).
* Will likely have the same ore output rate as smelteries, though it will be configurable in case a modpack wishes it to be higher.

### Soul Oven

The soul oven is a reimagining of the high oven from [Tinkers' Steelworks](https://www.curseforge.com/minecraft/mc-mods/tinkers-steelworks). The oven will have many similar core mechanics, including:

* Instead of being heated using liquid fuels, it will use specific solid fuels. The choice of fuel may impact the melting result.
* The oven won't immediately heat up, rather it heats up over time. Once heated, it can easily reach temperatures and speeds higher than lava or blazing blood.
* The oven has several additional slots for "additives". These will work on a similar system to the part builder or [soul forge](#soul-forge) to map items into "materials" for changing the melting result.

We are still considering how this design best fits into the mod, and into the design of the [soul forge](#soul-forge).

### Soul Forge
<div class="hatnote" markdown=1>
Main page: [Soul Forge](soul-forge).
</div>

The soul forge is a planned multiblock for late game tool, modifier, and material crafting. The soul forge at earliest will come in 1.20, though 1.21 or later is more likely. For more information, see [Soul Forge](soul-forge).

### Fluid Cannon

* Special tank that shoots a fluid projectile when powered by redstone.
* Has 3 variants:
  * Overworld: crafted from copper + seared stone. Power 1.
  * Nether: crafted from cobalt + scorched stone. Power 2.
  * End: crafted from ardite and shaluth, and from slimestone and soulstone. One has high power, the other high range and accuracy.

## Tools

### Slimeshields

* The missing shield type
* Lean into the bouncy aspect of slime with knockback and bouncing?

### Ranged

We wish to add at least 1 or 2 more variants of ranged weapons. Below are a few potential ideas:

* **Sling**: Can fire throwable objects such as snowballs or potions. Potentially can fire metal nuggets as well.
* **Flail**: Fires a projectile that must be reeled in to fire again, sorta like a weaponized fishing rod. Will damage both on throwing and returning.
* **Spear**: Tinker tool implementing trident like behavior. Works both as a melee weapon and a ranged weapon when thrown.
* **Boomerangs**: Replacement for shurikens, essentially just a spear that has returning.

### Projectiles

Considering bringing back projectiles with tool materials:

* Projectiles will contain typically 2 materials, but will not support modifiers from recipes.
* Crafting will produce a stack of projectiles instead of just 1. Durability will not be ammo.
* May support modifications after the fact, such as tipping with a potion or filling with a fluid.

Variants:

* **Shuriken**: Throwable projectile item with 2 head traits.
* **Arrow**: Launched in bows, with a head trait and a handle trait.

### Materials

Several new material tiers are planned:

* **Tier 4F**: Tier 4 materials requiring the [Soul Forge](#soul-forge) instead of advanced alloying.
* **Tier 4E**: Tier 4 materials requiring early end access.
* **Tier 5**: Ultimate materials requiring combining severlal methods of material crafting.

### Slimesuit Slimy 2.0

**More Slime:**

* Instead of making the slimesuit from enderslime, make it from any slime type
* Use the soul forge to craft it.
* Each slime has different effects! Like clay for armor!

**More Materials:**

* All parts will work like slimeskulls, having multiple bases!
* Chestplates use bones to boost melee effects, or elytra for flight.
* Leggings and boots do other neat stuff, will write more on it here later.

### Modifiers

**Mending**

* Consumes experience fluid from the tools tank to repair the tool
* Replaces mending moss
* May end up being a trait of one of the tier 4 or 5 materials

**Some modifier with a cool name**

* Consumes experience orbs to fill the tool's tank with XP
* Pairs well with mendings, hint hint
* You may also wish to pair some tanks with mending, goal is for mending to take fewer slots than unbreakable but more than overslime

**Throwing**

* Shiny is obsessed with this modifier
* Will be cool, but will never live up to Shiny's expectations
* Ideally will have different effects based on the tool

**Dual Harvesting**

* Like dual wielding, but for harvest
* Will let you harvest blocks with the tool in the offhand in some way. May just clone the 1.12 logic, may require you to hold right click.
* May just allow without charging anything, if not may be an upgrade.

**Charge attack**

* Way to upgrade broad tools by granting them a special ability on holding right click

**Quick ability**

* Way to upgrade small tools by granting them a non-combat ability on pressing right click

**Backstep**

* Recreation of the rapier right click move from 1.12.

## Worldgen

### Ichor Islands

* Ichor slimes?
* Ichor slime islands?
* Would all be on the ceiling
* Geodes may partially replace this, not sure.

### Teantium Ore

New end exclusive ore used in the soul forge. See the [Soul Forge](soul-forge#teantium-ore) for more information.

## API

### Global tool definitions

We want to add a system to allow addons to modify existing tool definitions using the [tool module](/docs/json/tool-definitions#tool-modules) system. This would allow adding any merging behavior from tool defintions to either a specific tool or a tool tag, such as a new trait or a new tool action.

It may be worth making tool definitions directly have merging behavior. This might be redundant to the global tool defintions, so the better of the two designs may be better alone.

### Modifier JSON merging

We want a system in place that will allow addons to add new behavior to existing JSON modifiers. This would work similarly to the existing modifier module system, simply adding additional modules that will get merged in later.

### Recipe Controlled Tool Parts

We are considering moving the definition of tool parts to the tool recipe JSON. This would allow better control over part swapping behavior, along with allowing multiple recipes for a single tool and addons adding recipes for an existing tools without overriding resources.

### Migrate Away From Tool Loot Hook

We keep reconsidering whether the tool loot hook is worth having compared to modifiers just directly adding global loot modifiers.