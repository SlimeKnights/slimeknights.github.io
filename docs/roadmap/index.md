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

We just finished a new 1.20.1 update for Tinkers' adding quite a few roadmap items, plus a bug fix release making it stable. Tinkers' will likely get another 1.20.1 update in the near future, though that update is less pressing.

Next project is to work on HTML books for the docs website, then focus efforts on a 1.21.1 port of Mantle and Metalborn. Once those ports are done, we will select the next project to port; high chance it is Tinkers' Construct.

1.19.2 and 1.18.2 are both considered stable. We plan at least 1 more bugfix release for each version, but its to be determined how many bug fixes make it to each which are not already coded.

## 1.20

These features will come on a later 1.20 build.

### Knightslime

* Alloyed from enderslime, cobalt, and obsidian.
* Traits:
  * General and ranged: Overwield. Grants a small boost to melee speed, mining speed, velocity, and drawpseed by consuming extra overslime.
  * Armor: Overshield. Grants a small boost to protection by consuming extra overslime.

### Manyullyn Rework

* Manyullyn's traits while potentially strong only worked in pretty niche situations.
* We wanted manyullyn to be a bit more general use and be more competitive with knightmetal steel.
* New trait is ambush, which grants +1 damage when at full health, and +0.6 damage against targets at full health.
* On armor, grants warded, which does a flat damage reduction after armor when you are at full health.
* Manyullyn's previous traits are now on a new compat material: nicrosil. Available from tin, nickel, or chromium.

### Slimeskull Rework

* Many slimeskull effects are very niche and not too useful.
* Plan is to rework the effects by taking advantage of compatability traits or traits not normally available on helmets.
* The best traits will remain unchanged.
* As part of this, also adding the dragon head slimeskull.

### Redstone Arrows

* They go fast.

## 1.21 Changes

This section contains various tweaks to tools that came up during the design or discussion of the Throwback update, but felt too large to make in 1.20. They will most likely happen in the first 1.21 release, though these features are subject to change.

### Smeltery

#### Smeltery Tank Cleanup

* Instead of fuel and ingot tanks, just have tanks and gauges.
* Smeltery will have 4000mb tank volume.
* Foundry will have the ingot tank volume.

#### Scorched Faucet Tweaks

* To better distinguish scorched from seared, planned to make it opaque as a more efficient on rendering pipe.
* Pair with obsidian gauges to see your fluid if needed.
* Not fully sold on this idea.


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
* Staff crystals grant slot types.

#### Dual Wielding rework

* Dual wielding will be limited to small tools again.
* Dual wielding will no longer apply it's stat debuff.
* This allows broad tools to get a level of reach, which is not compatible with dual wielding.
* Consider letting broad tools get a second level of reach via ability slot.

### Defense Rework

Following sections contain a couple of changes to make plate armor more distinct from travelers, which is a little bit too good by comparison currently (as 1 defense slot does not quite compare to 1 ability slot).

After the changes, traveler's potential before rebalanced will be 3 defense slots plus 1 defensive material trait (gained 1 slot but lost 1 potential trait). Plate will have 4 defense slots plus 2 defensive material traits (gained 1 slot).

#### Slotless Defense slot

* To keep armor from scaling too quickly, give +1 defense slot from a slotless modifier.
* Most likely will do this using the armor trim modifier.
  * Different trim variants will still be cosmetic. But applying any variant grants a defense slot.
  * For armor like travelers goggles that do not fit trims, include an alternative form of trim that has no shapes, just materials. Crafted using any trim template.

#### Jeweled Hide

* With the introduction of many new types of maille, ancient hide feels a little redundant, just granting +1 defense slot.
* With the introduction of the ancient tool material, ancient hide is a bit confusing.
* To solve this, plan to replace ancient hide with jeweled hide, swapping the molten debris for molten diamond.
* On pickaxes, will continue to grant fortune.
* On armor, will grant revitalized.
* On ranged weapons, will grant a boost to use item speed, letting you move more quickly while drawing back.

### Slimesuit Slimy 2.0

* Reworking the slimesuit to be earlier game instead of end gated.

**More Slime:**
* Instead of enderslime, any slime type will be usable. Lets you craft it earlier game!
* Slime stats include durability, overslime, knockback resistance, and movement speed.
* Slime variants:
  * Earthslime: grants overgrowth
  * Skyslime: grants skyfall
  * Ichor: grants overshield
  * Enderslime: grants enderclearance
  * Clay: grants armor
  * Honey: ???
  * Magma: ??? (fire related)  

**Improved Skulls:**

* *Materials*: skulls
  * Each skull grants a unique and strong trait (revamping the list will likely target 1.20).
  * May want to simplify stats, dropping the unique repair materials (as its just hard to remember).
* *Traits*: *none* (all from skulls)
* *Function*: varies.

**New Chestplate - Slimecage:**

* *Materials*: bone
  * Material list will be similar to bones in shield cores.
  * Traits will be similar to bones in melee, might grant 2 levels.
  * Undecided on whether wood will be included here, it does break the mob drop theme.
  * May or may not do attack damage on the bones.
* *Traits*: ambidextrous, reach
* *Function*: unarmed attack, building.

**Slimelytra Will Return:**

* *Materials*: none (just elytra)
* *Traits*: Wings
* *Function*:
  * Flying is basically a shield, right? Still goes in chestplate slot.
  * Probably needs 1 more thing to set it apart from slimecage, maybe stats are sufficient.

**Slimeshell more Shells:**

* *Materials*: shells
  * Material list will be similar to unique mailles.
  * Options such as turtle shell, dragon scale, shulker shell, couple more overworld options.
  * Traits will match maille, defensive. Possibly give 2 levels.
* *Traits*: Pockets
  * Likely will be reduced to just 9 slots instead of 18 since this comes much earlier.
* *Function*: Storage, best defensive slimesuit option.

**Slimeboots get Laces:**

* *Materials*: laces
  * Material list is similar to bowstrings.
  * Options such as string, vines, nether vines, slime vines.
  * Slime vine traits will be unique to slimeboots, with sky granting leaping.
* *Traits*: Bouncy
* *Function*: Bouncy


## Untargeted

This content is ideas that we may want to implement in the future, but there is no set version targeted.

### Smeltery

New features related to the smeltery, foundry, and fluids.

#### Inverted Channels

* Slimesteel and Cinderslime can make channels and faucets.
* They work identically to seared/scorched channels/faucet except for one small difference: downwards pouring is replaced with upwards pouring.

#### Smeltery interface

* Allows accessing the UI fluid tank
* Comparator signal for tank level
* On pulse, switches fluid order (bottom to top? Top to bottom?)

### Soul Forge
<div class="hatnote" markdown=1>
Main page: [Soul Forge](soul-forge).
</div>

The soul forge is a planned multiblock for late game tool, modifier, and material crafting. We currently plan to turn this concept into an official addon after most of the core features are done in the base mod. As such, at earliest this will target 1.21.1 if not 26.1. For more information, see [Soul Forge](soul-forge).

### Sublimery

The sublimery has gone through a few iterations, most recently as a multiblock to get XP for the [Soul Forge](#soul-forge), as its current design may not stand on its own without the system it was designed to fuel. It is undecided whether to keep it as part of the soul forge, revamp it for Tinkers' or scrap it entirely.

Features of the sublimery:

* Upside-down smeltery unlocked at the beginning of the end.
* Created using slimestone (slime on end stone) and slimesteel/cinderslime/queen's slime/knightslime (undecided).
* Third variant of the multiblock melting structure, after the smeltery and foundry.
* Will support melting entities into gaseous experience instead of transitional entity melting.
* Will likely not support alloying (smeltery exclusive) or byproducts (foundry exclusive).
* Will likely have the same ore output rate as smelteries, though it will be configurable in case a modpack wishes it to be higher.

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

* Consumes experience fluid from the tools tank to restore overslime.
* Requires 3 levels of "slime friend" modifiers on the tool, either using overforced or slimy traits.
* Crafted using 1 ingot of each slime alloy, plus some dragon's breath.
* Replaces mending moss.

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

* Crafted modifiers will now store slots instea of just modifier ID and level.
* Will be stored as a list based on the order they were applied.
  * For example, luck will be stored as "ability, 1; slotless, 2".
  * A modifier that alternates ability than upgrade would be stored as "ability, 1; upgrade, 1; ability, 1". Order is important.
* Benefits:
  * Simplifies modifier removal as the tool specifies how to remove them, no need to define extra recipes.
  * If a modifier changes types, you can remove the old application to recover the old slot.
  * If a modifier can be obtained in multiple ways, in theory this is usable to allow both to be mixed with the right type removing.
  * No need to track used modifiers in persistent data, making it easier to drop should it be impractical with components.