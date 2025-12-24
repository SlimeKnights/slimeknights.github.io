---
layout: page
title: Removed Features
description: This page covers various features that were removed in Tinkers' Construct 3, along with the reasoning for their removal.
---
<div class="hatnote" markdown=1>
See also the [missing features spreadsheet](https://docs.google.com/spreadsheets/d/1CuGKWMtrX-RM26U2xEdrpt5HCYLywQcr_qWhvzyYOGc/edit?usp=sharing) summarizing many removed features.
</div>

{{page.description}}

{% include toc.html %}

## Tools

### Weapons

* **Battleaxe**, **Lumber Axe**: were merged into the broad axe.
* **Cutlass**: does anyone actually know what the cutlass did?
* **Longswords**: Was not distinct enough from broadswords to justify another melee weapon. Leap ability has been turned into the springing modifier that can be added to swords or other tools.
* **Rapier**: Original design was completely OP in PvP and rather niche in PvE. Was replaced by the dagger (for high speed weapon) and the vein hammer/piercing modifier (for high piercing weapon in a more balanced way).
* **Frypan**: Was not distinct enough from broadswords to justify another melee weapon. Excavators have replaced frypans as the high knockback weapon, and the special attack is an ability called bonking. The concept of "funny pan" has come back as the melting pan ancient tool.

### Equipment

* **Chisel**: replaced by the vanilla stonecutter.
* **Slime Boots**: Replaced with the bouncy modifier, which starts on the slime suit Slimeboots. Yeah, its the same name, but its significantly changed mechanically.
* **Slime Slings**: Replaced with a set of modifiers that can be applied to any tool. Recommended to use a slime staff as the base.
* **Glove**: Replaced by haste chestplate modifier.
* **Heart Container**: Replaced by revitalized armor modifier.
* **Tool Belt**: Replaced by a pants modifier.

### Moved to Tinkers' Things

The following tools were moved to the official addon [Tinkers' Things](/projects/#tinkers-things). This is typically due to the fact the tool was not distinct enough from other tools in the mod, so were left out to reduce decision overload and bloat. However, they also made excellent examples of how to add a tool for the official addon.

* **Shovels**: Just a weaker form of a mattock.
* **Shortbows**: Not very distinct from longbows, and crossbows made a more unique early game bow.
* **Knapsack**: Now works as a bag item in the inventory instead of a custom equipment item.

### Projectiles

<div class="hatnote">
Note projectiles exist in a new way in current versions.
</div>

In general, projectiles in Tinkers' 1 and 2 had several flaws, leading to the following reasons for their redesign:

* Durability as ammo was incredibly awkward. Either it led to confusing behavior or just unlimited ammo. Ammo should use stack sizes.
* The way modifiers function is large material costs for permanent boosts, while ammo is meant to be cheap and disposable.
* When bows were involved, was unclear to players whether a modifier belonged on the arrow or the bow.
* Vanilla arrows got much more interesting, and mods have a ton of flexibility to add cool arrow types.

Projectiles reworked as a result:

* **Arrows**: We have reworked these to just have material traits, with minimal crafted modifiers.
* **Shurikens**: Reworked to be less spammable, with some strict limits on how much damage they can deal.
* **Bolts**: Was functionally just arrows with an arbitrary restriction and neat crafting which led to a lot of bugs. Replaced with standard arrows.

### Ores

* **Ardite**: was replaced by ancient debris in the nether. We have plans to bring back ardite later as an end ore.
* **Aluminum**, **Tin**: replaced by automatic compatability for other mods adding those ores.

### Materials

**Planned return**

* **Knightslime**: no longer exists as a overworld alloy since purple enderslime is now in the end. It will be brought back in the future as a late game alloy.

**Replaced**

* *Colored Slime*: replaced by slimewood, slimesteel, and alike. We wanted to provide unique materials for each slime type rather than simply recoloring a material mixed from slime and dirt.
* **Netherrack**: overall felt too cheap for a good material. Was replaced with blackstone and basalt.
* **Obsidian**: replaced with nahuatl. We wanted more variety in how melter materials were crafted.
* **Paper**: replaced with rose gold. We wanted to make the material cost a bit more for such a strong trait.
* **Tinkers' Bronze**: replaced with amethyst bronze. Overall the goal was a tier 3 harvest material that doesn't require other mods.

**Moved to modifier**

* **Cactus**: felt better as a modifier, especially with how it mostly made sense only on shields and armor.
* **Firewood**: felt better as a modifier, autosmelt. In general in modern Tinkers we expect material traits to have multiple levels.
* **Prismarine**: felt better as the hydraulic modifier.

**Removed**

* **Alumite**: was replaced by amethyst bronze. Does not make sense to provide an aluminum alloy when we don't have aluminum.
* **Sponge**: felt too rare to make a good material; gave it a use in removing modifiers instead.


### Modifiers

**Planned return**

* **Blasting** (1.12): we want to add a similar feature as a tool trait as part of an end material.

**Replaced**

* **Fortified**: replaced by diamond, emerald, and netherite raising mining levels. New vanilla mechanics mean lowering mining levels is hard.
* **Height++**, **Width++**: Replaced by expanded, which works on more AOE types than rectangles.
* **Shulking**: Replace by spilling modifier, using ichor as the fluid.
* **Webbed**: Renamed to sticky.

**Removed**

* **Embossment**: planned to be replaced with a mechanic called the [Soul Forge](../roadmap#soul-forge).
* **Flux Modifier**: too many standards exist for RF, making it hard to balance. We will leave energy based modifiers up to addons.
* **Moss**, **Mending Moss**: Planned to be replaced by a new overslime feature.


## Tinker Tanks

* Original purpose was to prevent alloying in mass fluid storage.
* Smelteries now have the option to disable alloying by removing the fuel.
* Foundries also don't alloy, and have a high capacity.

## Slime

### Blood

* Blood was a slime alternative, but we add so many ways to obtain slime that was not useful enough.
* In addition, it was obtained from melting not just farm animals, but also players and mobs, so it was difficult to give it a good use.
* Mob melting now produces meat soup, a fluid you can drink while feeling less weird.
* Player melting and the default melting fluid is now liquid soul, which is also obtained from soul sand and has some future plans.

### Pink Slime

* Was originally the fallback for when mixing multiple types of slime.
* In most recipes, opted to have no fallback and make each slime variant unique.
* When a fallback is needed, opted to use green "earthslime" since that form is less used in the mod.

## Gadgets

* **Wooden Hoppers**: I (KnightMiner) never much cared for wooden hoppers, plus many better wooden hoppers exist elsewhere.
* **Drying Racks**: Too functionally similar to vanilla's new campfires. Additionally, was majorly underutilized in the base mod, just producing decorative blocks and a copy of all vanilla meats.
* **Stone Ladders** and **Stone Torches**: Just felt out of place in a tool mod.
* **Brownstone**: Too functionally similar to vanilla's soulspeed mechanic.
* **Consecrated Soil**: Felt out of place in Tinkers', effectively replaced by punji sticks.

## Miscellaneous

* Gravel ores: Moved to [standalone mod](/projects#simple-gravel-ores).
* Oreberry bushes: Felt these were imbalanced, left to other mods to implement.