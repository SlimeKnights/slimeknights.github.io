---
layout: page
title: Roadmap
description: This page covers information on future plans for Tinkers' Construct 3. Note that just because a feature is on this list does not mean its guaranteed to be included; roadmap features tend to get many design iterations before getting added to the mod.
---
<div class="hatnote" markdown=1>
See also: [Design Documents](../design) - may contain details on future plans that fall under an existing feature.
</div>

{{page.description}}

{% include toc.html %}

## Next Actions

<div class="hatnote" markdown=1>
See also [#5281](https://github.com/SlimeKnights/TinkersConstruct/issues/5281).
</div>

1.19.2 is currently considered stable. It is undecided on how many future features will target 1.19.2 as opposed to a future version. 1.20.1 is our next version target, though as always there is no timeline.

1.18.2 will continue to receive support for now, though baring any significant issues being reported another release is unlikely.

## Multiblock

### Slimemetal Casting

Slimesteel and King's Slime will be usable to make late game fluid mechanics.

#### King's Slime

* New tier 3 material alloyed from gold, ichor, and scorched stone.
* Trait boosts damage/velocity/protection provided the tool has its overslime bar non-empty.
* Requires ichor being added as a fluid, now that plans for it are more settled.

#### Inverted Channels

* Slimesteel and King's Slime can make channels and faucets.
* They work identically to seared/scorched channels/faucet except for one small difference: downwards pouring is replaced with upwards pouring.

#### Casting Tank

* Crafted from slimesteel.
* This tank has a slot that accepts an item via automation such as hoppers.
* Tank will immediately fill/empty the item if possible, or wait to empty if the tank is full/unable to accept the fluid.
* After interacting with the item, its moved to the "output slot" so it won't interact again. Automation can then extract it and insert a new item.
* Useful to automatically fill or empty buckets/copper cans.

#### Tinker Tank

* Crafted from King's Slime.
* Tank has a single slot that can hold an item with a fluid handler.
* Any interactions to the tank will interact with the item's fluid handler, essentially proxying it.
* Useful to automatically fill or empty variable sized tanks or tools.

### Smeltery interface

* Allows accessing the UI fluid tank
* Comparator signal for tank level
* On pulse, switches fluid order (bottom to top? Top to bottom?)

### Sublimery

The sublimery is currently targeted for an early 1.20 build, likely before the first stable 1.20 release.

* Upside-down smeltery unlocked at the beginning of the end.
* Created using slimestone (slime on end stone) and slimesteel/king's slime/queen's slime (undecided).
* Third variant of the multiblock melting structure, after the smeltery and foundry.
* Will support melting entities into gaseous experience instead of transitional entity melting.
* Will likely not support alloying (smeltery exclusive) or byproducts (foundry exclusive).
* Will likely have the same ore output rate as smelteries, though it will be configurable in case a modpack wishes it to be higher.

### Soul Forge
<div class="hatnote" markdown=1>
Main page: [Soul Forge](soul-forge).
</div>

The soul forge is a planned multiblock for late game tool, modifier, and material crafting. The soul forge at earliest will come in 1.20, though 1.21 or later is more likely. For more information, see [Soul Forge](soul-forge).

### Fluid Cannon

Special tank that shoots a fluid projectile when powered by redstone.

## Tools

### Tool Part Tweaks

* Round Plate becomes an Adze Head
* Add new tool part: plate binding, meant for large tools to have a binding.
* Idea still under consideration.

### Slimeshields

* The missing shield type
* Lean into the bouncy aspect of slime with knockback and bouncing?

### Ranged

We wish to add at least 1 or 2 more variants of ranged weapons. Below are a few potential ideas:

* **Sling**: Can fire throwable objects such as snowballs or potions. Potentially can fire metal nuggets as well.
* **Flail**: Fires a projectile that must be reeled in to fire again, sorta like a weaponized fishing rod. Will damage both on throwing and returning.
* **Spear**: Tinker tool implementing trident like behavior. Works both as a melee weapon and a ranged weapon when thrown.
* **Boomerangs**: Replacement for shurikens, essentially just a spear that has returning.

### Ancient Tools
<div class="hatnote" markdown=1>
Main page: [Ancient Tools](ancient-tools).
</div>

Ancient tools are being considered for 1.19 or 1.20. They are strong tools that are found as loot instead of crafted, starting with random material variants that cannot be changed, but also the ability to be modified like regular tools.

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

### Fluid Effect Rework

* Add a fluid effect that breaks blocks, add it to several key fluids for ranged mining.
* Likely want to use said effect for water breaking plants too.
* Redesign fluid effects other fluids to be more logical and cohesive.

## Worldgen

### Ichor Islands

* Ichor slimes?
* Ichor slime islands?
* Would all be on the ceiling
* Geodes may partially replace this, not sure.

### Teantium Ore

New end exclusive ore used in the soul forge. See the [Soul Forge](soul-forge#teantium-ore) for more information.