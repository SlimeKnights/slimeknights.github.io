---
layout: post
title:  "Tinkers' Construct Plate Update"
date:   2024-05-13 12:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/plate/plate.png
image_root: updates/tinkers/plate
---

Tinkers' Construct for 1.19.2 is now on 3.8.2. There are quite a few internal changes (notably to tool definitions and material stats) which open the doors to a lot of addon potential, notably datapacks. The API should be mostly stable after this release so its a much better time for addons to update, though its still possible a bug in the new API will force a change.

Since I'm sure someone is wondering, what about 1.20.1? As mentioned above, 1.19.2 is nearly in a state I will call stable. Once its stable, there is one other notable feature I am considering for 1.19.2: the sublimery (which will provide access to new mid to late game materials). More info on the sublimery can be found on the roadmap. After the sublimery is added (or I decide to put it off again), I will likely be targeting 1.20.1. 1.20.2+ is still undecided as 1.21 is coming soon.

Now that the boring stuff is out of the way, time for the cool new features!

*This blog was originally posted [on Reddit](https://www.reddit.com/r/tinkersconstruct/comments/1cqtcte/new_update_for_tinkers_construct_1192_with_some/). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Plate Armor Materials

{% include update/image.html name="plate" alt="Plate armor made from seared stone, manyullyn, heptizon, cobalt, ancient hide, copper, and iron." %}

Plate armor now uses materials! Plate has two tool parts:

* Plating comes in helmet, chestplate, leggings, and boot variants. Its made from molten metal or stone and is only craftable via casting (no part builder). It provides durability, armor, toughness, and knockback resistance stats. A notable unique plating material is gold.
* Maille has just a single variant. Its made from either casting or the part builder, with the part builder allowing leather and ancient hide. It has no stats, just provides traits.

Alongside these changes, plate armor now starts with 2 upgrade slots and 3 defense slots. Many armor traits will provide new ways to get defense, or you can use ancient hide to get a defense slot to restore plate to its 4 defense slots. It notably starts with 0 ability slots; meaning you either need to add defense with a recipe (draconic/rebalanced) or make use of travelers gear and slime suit to get armor abilities.

## Part Builder Sand Casts

{% include update/image.html name="sand-cast-builder" alt="Making a sand cast in the part builder." %}

You might be wondering, if plating can only be created by casting, how do you make plating casts? The answer is taking advantage of a new part builder feature!

Place sand or sand casts in the pattern slot in the part builder, and you can shape it into any valid sand cast. That cast can then be placed in the part builder to create a tool part, which can be used for making more sand casts, a gold cast, or just used in tool creation.

## Plate Shields

{% include update/image.html name="plate-shield" alt="Casting a plate shield." %}

Plate shields were not left out of the armor rework. They make use of a new tool part - shield cores - which can be crafted out of wood, slimewood, bamboo, nahuatl, or the new blazewood. Shield cores like maille just provide traits, with the majority of the stats coming from the plating.

Shield plating is not crafted directly, rather you pour molten metal or stone on a shield core in a casting table to apply the plating. Plate shields like plate armor now have 2 upgrades and 3 defense slots with 0 abilities.

## Blazewood

{% include update/image.html name="blazewood" alt="Blazewood shield and staff embellishment." %}

What is blazewood you ask? Blazewood was a feature left unused from 1.12 where it was the tool material granting autosmelt. I liked the texture too much to fully remove it, so its sat as a decorative block since the port to 1.16.

With shield cores only being craftable from wood, it seemed like a good time to bring it back. It has a trait similar to that of blazing bone, providing a tier 4 shield core material. Plus it is the first animated tool material and make a great embellishment for staffs.

## Travelers Shield Rework

{% include update/image.html name="travelers-shield" alt="Crafting a travelers shield." %}

With the plate shield being made from wood and metal, copper and wood felt less unique for travelers shields. To make them more distinct, they are now made using leather and patterns.

Apart from the recipe their functionality is unchanged, though they do now get wood embellishments (instead of metal) and the dyed modifier changes the color of the outer ring (instead of the wood). This was the last usage of the metal embellishments, which have been fully migrated to plate armor.

## Protection Rework

{% include update/image.html name="protection" alt="Applying the protection modifier." %}

All armor materials that are also "protection types" notably have their trait as their relevant protection type (so cobalt grants melee protection). To make this work better, a couple protection types got recipe changes:


* Blast protection now uses obsidian instead of emerald
* Projectile protection now uses iron instead of amethyst bronze
* Reinforced (durability "protection") now uses emerald instead of iron.
* Armor reinforcements now use wood as a base instead of obsidian.

In addition, melee and projectile protection got their secondary bonuses improved.

## Chain Rework

{% include update/image.html name="chain-rework" alt="The new wrought iron material variant." %}

With iron no longer granting "durability reinforcements", and irons trait elsewhere being magnetic, it made a lot less sense for chain bindings to grant reinforced. The material was thus removed in favor of rose gold bindings and the new rose gold bowstring (crafted from casting rose gold on a string bowstring).

Since I liked the palette of chain bindings, its now a material variant of iron made by casting molten glass on iron. If you are unaware, material variants are visual alternatives to a material, notably used for wood types.

## Unknown Borders

{% include update/image.html name="unknown" alt="Unknown tool parts." %}

Speaking of visual changes, unknown tool parts now render as an empty outline instead of white. This helps distinguish tools with broken NBT from tools with white materials.

## Armor in Books

{% include update/image.html name="book-armor" alt="Tier 4 armor materials in fantastic foundry." %}

Books got updates with the armor changes. Plate armor was notably moved to puny melting as it just requires a melter to craft (instead of cobalt). In addition, puny melting, mighty smelting, fantastic foundry, and the encyclopedia all got sections on armor materials.

The armor pages contain info on armor plating (including shield plating) plus armor maille and shield cores. It should have all the info on the new armor traits and stats for those interested in exploring the mod.

## Encyclopedia Update

{% include update/image.html name="encyclopedia-update" alt="New encyclopedia of tinkering index page." %}

With the addition of armor materials, we were now up to 12 different material sections in the book. This was a lot, so we opted to combine materials into just 4 sections: melee/harvest, ranged, armor, and slimeskulls.

A result of this change was only modifiers remained as unlocked by crafting the other guidebooks, so the section unlocking feature was ditched (encyclopedia now always contains all its info).

{% include update/end.html %}

## Download

### Tinkers' Construct

The 3.8.2.32 update can be downloaded from all the usual places, including:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.8.2.32" curseforge="5340027" %}

### Mantle

Requires a Mantle update to 1.10.36, download from:

{% include update/download.html name="mantle" version="1.10.36" curseforge="5339977" %}

