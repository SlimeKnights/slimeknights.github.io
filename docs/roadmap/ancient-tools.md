---
layout: page
title: Ancient Tools
description: Ancient tools are unique tools found in worldgen. Unlike standard tools, they cannot be crafted in a tinker station or anvil. They have slightly higher number of modifier slots than standard tools, and two random materials.
---

{{page.description}}

Ancient tools will typically double the traits from each of their parts, and get a stronger effect from the rebalanced modifier.

{% include toc.html %}

## Overview

Generally, ancient tools have 2 materials, which are randomly selected during worldgen and cannot be changed.

When applying rebalanced to an ancient tool, the effect is doubled, granting the following choices:

* +2 upgrade slots.
* +2 defense slots.
* +2 soul slots.
* +1 ability slot.
* Extra level of the first two material traits.

## Melting Pan

The melting is a unqiue defensive and mining tool. It can be found in dungeons, igloos, and alike. It has the following behavior:

* **Parts**: Shield Plating (armor), Limb (ranged)
* **Model**:
    * Pan head uses the shield plating material.
    * Pan handle uses the bow limb material.
* **Modifier Slots**
    * 1 upgrade slot
    * 1 defense slot
    * 2 ability slots
* **Functionality**:
    * Starts with an upgraded version of melting with a higher ore rate.
    * Can mine any meltable blocks. Once it has a fluid inside mining is restricted to those that melt into that fluid.
    * Starts with a large fluid tank.
    * Can receive staff modifiers.

## War Pick

The war pick is a pickaxe crossbow. It can be found in mineshafts or pillager outposts. It has the following behavior:

* **Parts**: Tool Head (melee/harvest), Limb (ranged), Bowstring (ranged)
* **Model**:
    * Crossbow rotated 90 degrees.
    * Enlarged pickaxe head replaces the bow limb at the top.
    * Bow limb material determines what would be the grip.
    * String will always be white.
* **Modifier Slots**:
    * 3 upgrade slots
    * 1 ability slot
* **Functionality**:
    * Mines rock (like a pickaxe)
    * Fires arrows and fireworks (like a crossbow)

## Battle Sign

The battle sign is a melee shield. It can be found in nether fortresses and bastions. It has the following behavior:

* **Parts**: Shield Plating (armor), Tool Head (ranged)
* **Model**:
    * Head determines plate material.
    * Plating determines text color and handle color, or just the handle if that looks better.
* **Modifier Slots**:
    * 3 defense slots
    * 1 ability slot
* **Functionality**:
    * Melee weapon
    * Blocks (between travelers and plate shields)
    * Starts with knockback and bonking

## Swasher

The swasher is a fluid based melee weapon. It can be found in in shipwrecks, buried treasure, and ocean ruins.  It has the following behavior:

* **Parts**: Tool Head (melee/harvest), Grip (ranged)
* **Model**:
    * Visuals based on a cutlass pistol
    * Grip determines handle
    * Head determines blade
* **Modifier Slots**:
    * 3 upgrade slots
* **Functionality**:
    * Melee weapon
    * Starts with spilling
    * Starts with spitting (uses bow stats, maybe spitting 2)

## Other Considerations

* **Trident**: Melee throwable weapon. May or may not replace [spears](..#ranged).
* **Knight's Shovel**: the shovel wielded by one of the greatest warriors of the past, found in dungeons or in the hands of zombies.
* **Ancient armor set**, either as 4 unique pieces with special traits or 4 pieces fitting an untouched area of armor.
