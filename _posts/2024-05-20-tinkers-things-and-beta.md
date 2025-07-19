---
layout: post
title:  "Tinkers' Things 1.19.2 and Tinkers' Beta"
date:   2024-05-20 12:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/things-and-beta/hematite-plate.png
image_root: updates/tinkers/things-and-beta
---

Tinkers' Construct 1.19.2 being a Beta release means the API should no longer break on future updates for 1.19.2. This means addon developers should be safe to update their addons and modpack makers should be safe to use the mod in modpacks. We may still make some balance changes in the future, but it shouldn't break existing worlds or addons.

To get the ball rolling on addons, I also updated Tinkers' Things to 1.19.2. In case you have not heard of it, Tinkers' Things is the "official" addon to Tinkers' Construct, and is written entirely using JSON files (taking advantage of a mod called JSON Things to do stuff that datapacks and resource packs cannot do). This update serves as an example of all the data changes required to update an addon, though if you are writing your addon using Java you likely will want to use data generators instead.

So, what is new in these updates?

*This blog was originally posted [on Reddit](https://www.reddit.com/r/tinkersconstruct/comments/1cwbw5z/tinkers_things_is_updated_to_1192_tinkers/). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## New Armor Materials

{% include update/image.html name="hematite-plate" alt="Plate armor made using hematite and silky cloth." %}

Tinkers' Things now adds hematite as a material option for plating and maille, serving as an example for custom armor materials. In addition, it adds in silky cloth as a maille exclusive material, which serves as an example of a part builder material.

Hematite armor is a tier 4 material, and has a trait that grants +2 defense slots in exchange for -5% protection against all sources. Its great for building highly specialized armor against a particular damage type, while for an all around armor set you will be better off with a different material.

Silky cloth grants +1 ability slot in exchange for -3 max health. This allows you to circumvent the weakness of plate armor having no starting ability slot, but at a heavy cost.

## Laminar Armor Update

{% include update/image.html name="laminar-rework" alt="Laminar armor made using gold, copper, and slimewood." %}

Laminar armor from Tinkers' Things has been updated to use materials like plate armor. This means its an example of how to add material armor now (with makeshift being the example of non-material armor). To keep it distinct, it uses two armor plating plus a shield core, rather than an armor plating and an armor maille. In addition, it starts with 1 ability slot, 2 upgrades, and 0 defense slots (as opposed to plate starting with 3 defense slots and no ability).

Note its role has swapped from 1.18, where it was higher defense than plate but lower modifiability. This is mostly due to tradeoff between ability slots and defense slots being more interesting than upgrade versus defense slots for the base mod.

## Laminar Crafting

{% include update/image.html name="laminar-crafting" alt="Recipe for laminar in the Tinkers' Anvil." %}

Laminar armor has 3 tool parts (the two plating plus a shield core), and also requires 2 pieces of leather making the total recipe take 5 items. This means you need to use the anvil to create laminar armor (while plate can be made in the tinker station).

To make up for the more expensive recipe, Laminar armor gets a +1 toughness bonus regardless of the materials used, plus a 150% durability multiplier.

## Laminar Shield

{% include update/image.html name="laminar-shield" alt="Laminar shield made from iron and seared stone." %}

The laminar shield has also been updated to use materials, as it was just more interesting than no materials. I decided to really lean into the heater shield design by making it checkerboard the two materials. The updated design both includes an example tool part (previously we only had a repair kit variant, no true tool part) and an example of a tool casting recipe.

The laminar shield starts with 1 ability slot and 3 upgrade slots along with its 2 traits from shield plating. The extra upgrade slot makes up for the fact that unlike laminar armor, it has no shield core. It also gets the +! toughness and the 150% durability bonus of laminar armor.

## Wood Palettes

{% include update/image.html name="makeshift-embellishments" alt="Makeshift armor using various wood textures." %}

Moving on from Tinkers' Things specific features to features in the new Tinkers' Construct build, the palettes for all wood variants got updated to better match their plank variants (old colors were based on the logs, but did not always give the expected the user might expect). This notably stood out on plate shields, but also is notable on laminar armor and makeshift armor.

## Wings

{% include update/image.html name="wings" alt="Makeshift, travelers, plate, laminar, and slimesuit chestplates all with the wings modifier." %}

While updating the armor models to make it easier to configure in Tinkers' Things (and other JSON addons), it ended up being easier to make all chestplates have a wings texture than special casing the slimelytra. Rather than placeholder textures, I opted to give each unique textures, and liked them so much I had to make them obtainable in survival.

The wings modifier can now be applied to any chestplate using an elytra. This costs 2 ability slots (meaning plate has to sacrifice both slots or use silky cloth). Slimelytra continues to have wings as a trait (meaning your 3 ability slots are free for other usages).

## Slimeskull Colors

{% include update/image.html name="slimeskull-colors" alt="Slimeskulls in various colors." %}

As another visually appealing slimesuit related change, slimeskulls "skull tint" is now the material color from the embellishment rather than always being purple. Should help your armor reach the proper theme.

## Fluid Behaviors

{% include update/image.html name="fluid-behavior" alt="A zombie burning in molten manyullyn." %}

One of the big perks of porting to 1.19.2 was Forge's new fluid API. Taking advantage of this, all Tinkers fluids should now have fluid behavior. You will burn in hot fluids (with the fire and damage varying based on type), and cool fluids will let you swim (with some granting additional effects).

This functionality is also registered with Json Things, allowing molten hematite from Tinkers' Things to make you burn as well.

{% include update/end.html %}

## Download

### Tinkers' Things

You can download Tinkers' Things from all the usual websites:

{% include update/download.html name="tinkers-json-things" github="TinkersThings" modrinth="tinkers-things" version="1.2.0" curseforge="5358137" %}

### Tinkers' Construct

And don't forget to grab the latest 3.8.3.39 Tinkers' build:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.8.3.39" curseforge="5358052" %}