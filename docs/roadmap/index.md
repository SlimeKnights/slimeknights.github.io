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

## Next Tasks

We just finished a new 1.20.1 update for Tinkers' adding quite a few roadmap items and improved JEI integration. Additionally, we finished HTML books on the website.

Next project is focusing efforts on 1.21 ports. This is starting with some cleanup of deprecated code on non-publishing branches, which will later become the 1.21 branches.

1.19.2 and 1.18.2 are both considered stable. We plan at least 1 more bugfix release for each version, but its to be determined how many bug fixes make it to each which are not already coded.

## 1.21 Changes

This section contains various tweaks to tools that came up during the design or discussion of the Throwback update, but felt too large to make in 1.20. They will most likely happen in the first 1.21 release, though these features are subject to change.

### Smeltery

#### Smeltery Tank Cleanup

* Instead of fuel and ingot tanks, just have tanks and gauges.
* Smeltery will have 4000mb tank volume.
* Foundry will have the ingot tank volume.
* Endery is undecided, but will likely lean towards 4000mb.
* This is largely as the two sizes are a lot less distinct since the ingot volume rework in 1.18.

#### Scorched Faucet Tweaks

* To better distinguish scorched from seared, planned to make it opaque as a more efficient on rendering pipe.
* Pair with obsidian gauges to see your fluid if needed.
* Not fully sold on this idea, may ditch after further considering 1.21 plans.

### Tools

#### Sword Guard and Stat Averaging

* Swords and cleavers will get a new tool part, sword guards, which replaces one of their handles.
    * Sword guards are a new part type, though they are similar to shield plating.
    * Materails will come from shield cores and shield plating options, using their traits.
* From there, many tools will get some stat adjustments with a focus on reducing tool part stat averaging. In most cases, we will just add up heads directly.
* Broad tool multipliers may get reduced a bit as a result. In particular, broad weapon durability is way higher than you need other than on scythes.

#### Better Slime Staffs

* Slimestaffs could benefit from materials rather than the rather random stats they currently have.
* Give them 2 bowlimbs, a [sword guard](#sword-guard-and-stat-averaging), and a staff crystal. Depends on whether I want 5 materials or 4.
* Staff crystals grant slot types and some unqiue traits mimicing their previous unique functions:
    * Earth will grant defense stats and defense slots.
    * Sky will grant a boost to drawspeed and upgrade slots.
    * Ichor will grant more velocity and ability slots.
    * Enderslime grants more reach and more levels of the tool part traits.
    * Glass is a new crystal, granting a balance of slots, reduced power, and a boost to tank capacity. This replaces the usage of earthslime staffs for utility spitting.

#### Dual Wielding rework

* Dual wielding will be limited to small tools again.
* Dual wielding will no longer apply it's stat debuff.
* This allows broad tools to get a level of reach, which is not compatible with dual wielding due to how Minecraft reach mechanics work.
* Consider letting broad tools get a second level of reach via ability slot.

#### Throwing Modifiers

* Throwing tools will be able to run left click modifiers upon hitting a block or enitty.
* This will work largely like left click modifiers on regular tools, running them replacing the regular attack or block mining.
* Will likely treat separately from standard left click for the sake of the modifier hooks, so a tool has the option to skip running if its a projectile.
* Cannot implement on 1.20 without a lot of breaking changes/hook migrations, plus addons have not had a chance to consider the gameplay implications for their modifiers.


## Untargeted

This content is ideas that we may want to implement in the future, but there is no set version targeted.

### Smeltery

New features related to the smeltery, foundry, and fluids.

#### Smeltery interface

* Allows accessing the UI fluid tank
* Comparator signal for tank level
* On pulse, switches fluid order (bottom to top? Top to bottom?)

### Sublimery

<div class="hatnote" markdown=1>
Main page: [Sublimery](sublimery).
</div>

The sublimery is a major content update planned for either the end of 1.20 or the start of 1.21. It is the end variant of the smeltery, designed to fill some gaps related to how Tinkers works with XP from the base game and provide a way to draw more value out of ores late game.

### Soul Forge
<div class="hatnote" markdown=1>
Main page: [Soul Forge](soul-forge).
</div>

The soul forge is a planned multiblock for late game tool, modifier, and material crafting. We currently plan to turn this concept into an official addon after most of the core features are done in the base mod. As such, at earliest this will target 1.21.1 if not 26.1. For more information, see [Soul Forge](soul-forge).

### Tools

#### Halberds
<div class="hatnote">Earliest 1.21, may wait for 1.21.11</div>

* Tinkers' Construct implementation of the new vanilla spears.
  * Can dash.
  * Can jab.
* Crafted from a broad axe head, 2 tough handles, and likely a sword guard.
* Moved from Tinkers' Things as the reach halberd is made redundant by [dual wielding rework](#dual-wielding-rework)

#### Modifiers

**Overmending**

* New ability modifier for all types of tools.
* Converts picked up XP orbs into overslime on the tool.
* Requires 3 levels of "slime friend" modifiers on the tool, either using overforced or slimy traits.
* Crafted using 1 ingot of each slime alloy, plus some dragon's breath.
* Replaces mending moss/mending.

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

**Dash**

* Leggings modifier allowing you to dash forwards on keypress.
* Either by default or when upgraded, dash will deal damage like trident riptide.
* Can be used once in midair before needing to land.
* Purely horizontal movement.

### Worldgen

#### Inverted Bloodshroom Trees

* Bloodshroom will be found on the nether ceiling instead of bloodshroom islands.
* Trees grow downwards instead of upwards.
* May also include an ichor lake near tree spawns.
* Undecided which variant of sapling mechanics to use, given the lack of slimy foliage on the ceiling.
* Will replace the blood islands that barely function as the nether ocean was hard to detect.


## API

Various technical changes planned for some point in the future.

### Global tool definitions

We want to add a system to allow addons to modify existing tool definitions using the [tool module](/docs/json/tool-definitions#tool-modules) system. This would allow adding any merging behavior from tool defintions to either a specific tool or a tool tag, such as a new trait or a new tool action.

It may be worth making tool definitions directly have merging behavior. This might be redundant to the global tool defintions, so the better of the two designs may be better alone.

### Modifier JSON merging

We want a system in place that will allow addons to add new behavior to existing JSON modifiers. This would work similarly to the existing modifier module system, simply adding additional modules that will get merged in later.

### Recipe Controlled Tool Parts

We are considering moving the definition of tool parts to the tool recipe JSON. This would allow better control over part swapping behavior, along with allowing multiple recipes for a single tool and addons adding recipes for an existing tools without overriding resources.

The first step for this change will be to move the part swapping code to the tool building recipe. This will reduce the number of recipes needed for things such as ammo to work.

### Migrate Away From Tool Loot Hook

We keep reconsidering whether the tool loot hook is worth having compared to modifiers just directly adding global loot modifiers.

### Slots in crafted modifiers

* Crafted modifiers will now store slots instead of just modifier ID and level.
* Will be stored as a list based on the order they were applied.
  * For example, luck will be stored as "ability, 1; slotless, 2".
  * A modifier that alternates ability than upgrade would be stored as "ability, 1; upgrade, 1; ability, 1". Order is important.
* Benefits:
  * Simplifies modifier removal as the tool specifies how to remove them, no need to define extra recipes.
  * If a modifier changes types, you can remove the old application to recover the old slot.
  * If a modifier can be obtained in multiple ways, in theory this is usable to allow both to be mixed with the right type removing.
  * No need to track used modifiers in persistent data, making it easier to drop should it be impractical with components.