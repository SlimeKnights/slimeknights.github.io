---
layout: page
title: Soul Forge
description: The soul forge is a multiblock made from all the dimensions. Allows advanced manipulation of traits and creation of unique materials.
---

{{page.description}}

The soul forge content will most likely come as part of an official addon, expanding Tinkers' Construct from tier 4 to tier 5. This is partly as the complexity of the multiblock may make it harder for new players to engage with it, and partly as it will be a major power buff compared to tier 4 technology.

{% include toc.html %}

## World Gen

### Teantium Ore

* Unstable ore of the end
* Will explode if mined improperly
* To properly mine the ore, you need to use the melting modifier and obtain it as a liquid
* If casted into ingots, the ingots will explode after a short time
* To process the ore:
    * Place the teantium ingot in the soul forge, and extract the shaluth and soulsteel souls. This leaves behind hollow
    * Place the two souls back into separate hollow ingots to use
* Shaluth and soulsteel will be tier 4 materials used in alloys. Unstable may be used in other crafting recipes but cannot be used as a material


## Soul Forge

The soul forge is a new multiblock allowing working with material souls. Souls can be extracted leaving behind hollow items, then inserted into other items including tools as a new way to apply modifiers.

### Soul Extractor

* Requires materials from ancient cities to build.
* Allows you to remove the soul from materials, granting hollow.
    * Hollow is a tier 4 material with pretty solid stats, but a hollow trait (+1 soul slot).
    * You can fill it with traits using the other parts of the soul forge, with some risk.
* Also allows creation of hollow gems. Hollow gems are inverted diamonds, reducing a variety of stats in exchange for +1 soul slot.

### Soul Infuser

* Requires materials from bastions to build.
* Allows you to add a soul to an existing material.
* Using alone only works with liquid soul, which can be infused into a few things including iron to make soulsteel.

### Soul Movement

* Souls are axis aligned projectiles similar to shulker bullets
* The soul extractor shoots out a soul after extracting.
* Souls can hit "soul refractors" to be redirected down a different axis.
* Souls can also be split into multiple smaller souls if hitting the right block.
* Souls decay if they exist too long, or if they hit a block where they lack interactions.
* Refracting into soul forge blocks will continue the recipe.

### Soul Slots

* Combining the soul extractor and the soul infuser lets you fill soul slots on tools.
* Simply extract the relevant material soul then connect it into the infuser using some hollow wires to fill a tool.
* The first soul slot filled on a tool has no consequences.
* Every soul slot filled after the first also adds a random curse alongside the intended trait.
    * The curse is randomly chosen from a list, some will be relatively tame and some pretty horrible.
* Soul slots can be obtained in several ways:
    * Every tool can get a soul slot from a hollow gem, which reduces its stats.
    * Tools with materials can use hollow to get a soul slot.
    * Rebalanced can grant a soul slot.
    * Possibly include a 4th way that can be repeated for more curses.
* New way to add modifiers to tools, replacing embossments from 1.12.

### Soul Merger

* Combining multiple souls together allows creating "soul alloys" of sorts.
* This requires both hollow and soulsteel to construct.
* Used for many tier 4 and tier 5 materials.

### Soul Staff

* Crafted using a hollow gem as the crystal material.
* Starts with 2-3 soul slots, and potentially a unique trait.

### Soul Splitter

* Crafted from materials found in the end.
* Required to process teantium into a usable form.
* Can also split alloys into their core components for recycling.
* Input is liquids instead of items?

## Soul Oven

The soul oven is a reimagining of the high oven from [Tinkers' Steelworks](https://www.curseforge.com/minecraft/mc-mods/tinkers-steelworks). The oven will have many similar core mechanics, including:

* Instead of being heated using liquid fuels, it will use specific solid fuels. The choice of fuel may impact the melting result.
* The oven won't immediately heat up, rather it heats up over time. Once heated, it can easily reach temperatures and speeds higher than lava or blazing blood.
* The oven has several additional slots for "additives". These will work on a similar system to the part builder or [soul forge](#soul-forge) to map items into "materials" for changing the melting result.

This potentially may fit the soul forge as an early version of soul mixing, gating the more advanced version to the end. Alternatively, it may work well as part of a simplification of the soul forge into a multiblock.


## Materials

* Soulsteel
    * Tier 4 melee material made from forcing a lot of liquid soul into an ingot.
    * Temporarily lowers the targets max health at the cost of consuming the attackers XP.
    * Can also ignore a portion of mined blocks's hardness.
    * If the attacker runs out of XP, their max health will lower.
* Hollow
    * Tier 4 special material made from removing the soul from metals.
    * Grants the tool 1 additional soul slot.
* Shaluth
   * Tier 4 material made from splitting teantium.
   * Trait will increase drops from mobs at the cost of damage.
* Ardite
   * Tier 4 material made from splitting teantium.
   * Trait will increase tool speed against all blocks (even ineffective) at the cost of loss of block drops (like blasting in 1.12).
* Chromata
   * Tier 4 material made from mixing redstone, glowstone, and lapis with some appropiate metal.
   * Trait will relate to light, potentially boosting tool stats in the light.
* Bamboom
   * Tier 4 armor and ranged material made from casting teantium on bamboo.
   * Trait adds explosions to common tool actions.
* KnightSlime
   * Tier 5 composite, from pouring shaluth (possibly combined with other stuff) onto slimestone.
* Ebonite
   * Tier 5 weapon material made by forging the souls of blazing bone, venombone, and shaluth.
   * Charges as the player takes wither damage, then unleashes powerful effects based on the charge.
* Matthium
   * Tier 5 harvest material alloyed using soulsteel, ardite, hollow, and gaseous XP
   * Temporarily boosts mining speed after attacking, and boosts attack speed after mining.
* Alexandrite
   * Tier 5 special material made by forging the souls of diamond, emerald, and shaluth into an ender pearl.

## Modifiers

* Hollow gem
    * Grants a tool an additional soul slot.
* Soul Gem
    * Modifier that removes a single curse from the tool.
    * Requires 1 soul slot to apply.
* Gardite
    * Modifier in a soul merging sing all the slime into a hollow gem.
    * Applies a stat boost to the tool based on how many low tier materials it contains.
* Soul slots
    * Obtained using either hollow gems, or the hollow material.
    * Can be filled with souls from various materials, granting their trait.
    * May have additional methods of adding more soul slots at the cost of applying curses to your tool.
* Soulshot
    * Some sort of tool or modifier that allows you to weaponize souls in a handheld cannon.
