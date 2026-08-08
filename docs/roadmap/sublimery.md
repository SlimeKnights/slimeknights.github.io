---
layout: page
title: Sublimery
description: This page details a major planned content update to Tinkers' Construct including an end variant of the smeltery and usages for XP. This update will either come towards the end of 1.20 or early into 1.21.
---

{{page.description}}

The sublimery

{% include toc.html %}

## Essence

* Essence is a new fluid representing liquid XP.
    * Essence has a fluid effect that will drop XP orbs at the target, making it effective for portable mending.
    * Essence can also be casted into glass bottles to make bottles o' enchanting.
* This fluid is obtained by melting down the player in a smeltery or foundry, which will extract your XP into essence.
    * If you run out of XP, you will just get liquid soul as before.
* Another method of obtaining this fluid is dropping XP orbs into the smeltery or foundry, similar to the item pickup.
* May include a new armor modifier that allows it to collect XP orbs to directly create essence without having to extract it from a player.

### As a Slime

* Essence will be considered a pseudoslime, which will include many slime usages.
* The alloying recipe for Queen's Slime will be changed to include essence as a 4th component, acting as its slime metal.
    * Between Essence and Magma, we have two pseudoslimes, so thats like 1 slime, right?
* Considering allowing casting it into an "essenceball" which works for restoring overslime.

**Slimesuit:**

* Essence can be casted onto slimesuit parts to make Essenceskulls, Essencelytras, and alike.
* Its trait is Experienced, granting more XP from all sources.
* Will potentially also make an Essenceskin material from casting on leather, for the sake of travelers, armor maille, bowstrings, and bindings.

**Crystals:**

* Essence will be craftable into crystals, undecided if this will be the same method as slime crystals.
* These crystals can be found naturally in earthslime geodes, replacing the steel shard clusters (which are now exclusive to skyslime geodes).
* Crystals will be the method of repairing the slimesuit made from essence.
* Will also get used in relevant modifiers where XP makes sense but we want to gate behind tinkers tech.

### As a Fuel

* Essence will become the third smeltery fuel.
* It will be faster than lava and blazing blood, but not as hot as blazing blood.
* Intention is to allow it to be skipped for progression, but to provide a buff late game when XP is plentiful.

## Sublimery

* New end variant of the smeltery.
* Made out of slimestone and knightmetal.

### Slimestone

* Slimestone is a new series of blocks made by casting slime on endstone.
    * Will have a color for each slime, with "regular" and "bricks" variants.
* As a tool material, it will have an overslime related trait.
    * Details are not fully decided on its trait.
    * May reuse overmending, giving you a way to get it without an ability slot, but that seems too good.
    * May instead find some melee/harvest specific idea feeding off end stone's drop consumption, given stones are melee/harvest exclusive.

### Casting Peripherals

* Since slimestone is created directly in block form, for casting perhipherals the sublimery will use quartz.
    * Undecided if its a quartz composite, or just quartz bricks.
* They work identically to seared/scorched channels/faucet except for one small difference: downwards pouring is replaced with upwards pouring.
    * This allows fluid transfer upwards!
* Since it uses quartz instead of end stone, these will be available pre-end, filling the gap in fluid transfer mechanics.

### Mechanics

* The sublimery supports both alloying and byproducts. This comes with all the risks you might expect.
* When melting ores, they come in at 3 nuggets per ore and 9 nuggets of byproduct. For comparison:
    * Smeltery/melter is 12 nuggets of ore.
    * Foundry is 9 nuggets of ore, 3 of byproduct.
* When melting non-ores, they will melt into all components like the foundry.
* When melting mobs, they will give XP instead of their unique fluids.
    * The amount of XP will be based on how much XP the mob typically drops.
    * For players, they already give XP in the smeltery and foundry, but the sublimery will deal less damage while extracting.
* Will consume more fuel than the smeltery or foundry.

### Multiblock Comparison

**Unique Mechanics:**

* *Smeltery* will be given a better fuel consumption rate, making it the most fuel efficient of the three.
* *Foundry* has the highest storage capacity, and benefits from the lack of alloying for storage.
* *Endery* can mass produce XP by melting mobs, and extracts XP from the player doing less damage.

**Shared Mechanics:**

* *Smeltery* and *Foundry* both can melt mobs into unqiue fluids.
* *Smeltery* and *Endery* both can alloy.
* *Foundry* and *Endery* both produce byproducts from ores and recycle into complete fluids.
* All three multiblocks can perform melting recipes to produce liquids.