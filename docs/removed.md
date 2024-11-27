---
layout: page
title: Removed Features
---
<div class="hatnote" markdown=1>
See also the [missing features spreadsheet](https://docs.google.com/spreadsheets/d/1CuGKWMtrX-RM26U2xEdrpt5HCYLywQcr_qWhvzyYOGc/edit?usp=sharing) summarizing many removed features.
</div>

This page covers various features that were removed in Tinkers' Construct 3, along with the reasoning for their removal.

{% include toc.html %}

## Tools

* **Longswords**: Was not distinct enough from broadswords to justify another melee weapon. Leap ability has been turned into a modifier that can be added to swords or other tools.
* **Rapier**: Original design was completely OP in PvP and rather niche in PvE. Was replaced by the dagger (for high speed weapon) and the vein hammer/piercing modifier (for high piercing weapon in a more balanced way).
* **Slime Boots**: Replaced with the bouncy modifier, which starts on the slime suit Slimeboots. Yeah, its the same name, but its significantly changed mechanically.
* **Slime Slings**: Replaced with a set of modifiers that can be applied to any tool. Recommended to use a slime staff as the base.

### Moved to Tinkers' Things

The following tools were moved to the official addon [Tinkers' Things](/projects/#tinkers-things). This is typically due to the fact the tool was not distinct enough from other tools in the mod, so were left out to reduce decision overload and bloat. However, they also made excellent examples of how to add a tool for the official addon.

* **Shovels**: Just a weaker form of a mattock.
* **Shortbows**: Not very distinct from longbows, and crossbows made a more unique early game bow.

### Projectiles

<div class="hatnote" markdown=1>
See also: [Potential future plan](../roadmap#projectiles) reimplementing projectiles in a new way.
</div>

In general, projectile in Tinkers' 1 and 2 had several flaws, leading to the following reasons for their removal:

* Durability as ammo was incredibly awkward. Either it led to confusing behavior or just unlimited ammo. Ammo should use stack sizes.
* The way modifiers function is large material costs for permanent boosts, while ammo is meant to be cheap and disposable.
* When bows were involved, was unclear to players whether a modifier belonged on the arrow or the bow.
* Vanilla arrows got much more interesting, and mods have a ton of flexibility to add cool arrow types.

Projectiles removed as a result:

* **Arrows**: Alternatives include vanilla arrows, mods such as [archer's paradox](https://www.curseforge.com/minecraft/mc-mods/archers-paradox), many new bow modifiers
* **Bolts**: Was functionally just arrows with an arbitrary restriction and neat crafting which led to a lot of bugs. Replaced with standard arrows.
* **Shurikens**: Way too easy to make a spammable unlimited weapon that outshined most melee and ranged alternatives. Currently replaced by flint and quartz shurikens for a cheap disaposable ammo, though future plans may bring new alternatives.

## Tinker Tanks

* Original purpose was to prevent alloying in mass fluid storage.
* Smelteries now have the option to disable alloying by removing the fuel.
* Foundries also don't alloy, and have a high capacity.

## Slimes

### Blood

* Blood was a slime alternative, but we add so many ways to obtain slime that was not useful enough.
* In addition, it was obtained from melting not just farm animals, but also players and mobs, so it was difficult to give it a good use.
* Mob melting now produces meat soup, a fluid you can drink while feeling less weird.
* Player melting and the default melting fluid is now liquid soul, which is also obtained from soul sand and has some future plans.

### Pink Slime

* Was originally the fallback for when mixing multiple types of slime.
* In most recipes, opted to have no fallback and make each slime variant unique.
* When a fallback is needed, opted to use green "earthslime" since that form is less used in the mod.

## Miscellaneous

* **Wooden Hoppers**: I (KnightMiner) never much cared for wooden hoppers, plus many better wooden hoppers exist elsewhere.
* **Drying Racks**: Too functionally similar to vanilla's new campfires. Additionally, was majorly underutilized in the base mod, just producing decorative blocks and a copy of all vanilla meats.
* **Stone Ladders** and **Stone Torches**: Just felt out of place in a tool mod.
* **Brownstone**: Too functionally similar to vanilla's soulspeed mechanic.