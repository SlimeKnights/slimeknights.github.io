---
layout: post
title:  "Tinkers' Construct Foundry Update"
date:   2021-05-21 12:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/foundry/foundry.png
image_root: updates/tinkers/foundry
---

This visual changelog details some of the features in the latest Tinkers' Construct alpha adding the foundry!

*This blog was originally posted [on Imgur](https://imgur.com/a/tinkers-construct-alpha-update-spUnQoD) and [Reddit](https://www.reddit.com/r/feedthebeast/comments/nm0p4y/just_released_a_new_tinkers_construct_alpha_with/). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Smeltery

### Alloyer

{% include update/image.html name="alloyer" alt="Arrangement for the new alloyer." %}

Starting the visual changelog is the alloyer, previously from Tinkers' Complement. This provides a means to alloy outside of a smeltery, and is the first step of progression for a Tinker's Construct Nether start

### Foundry

{% include update/image.html name="foundry" alt="The new foundry multiblock smelting cobalt." %}

After gathering materials to alloy obsidian, and enough scorched bricks, you can craft a foundry, the nether variant of the smeltery. Unlike the smeltery, the foundry cannot create alloys, and it requires the corners in the structure. However, it also has a larger tank capacity, and ores produce byproducts such as iron from cobalt ore. Check JEI for a full byproduct listing.

### Scorched Block Variants

{% include update/image.html name="scorched-blocks" alt="Scorched block variants for decoration." %}

As part of the foundry there are several scorched block variants for decoration, including two pillar variants and two variants with slabs and stairs. Scorched variants of faucets, channels, basins, and tables also exist, plus the tanks

### Tank Tweaks

{% include update/image.html name="tank-variants" alt="Each tank variant holding an ideal fluid." %}

Speaking of tanks, one change in this alpha is to make the tank variants more clear. Before, gauges had a capacity of 27 ingots, while windows and tanks both held 4 buckets.

Now tanks are clearly divided into fuel tanks (4 buckets), and ingot tanks (32 ingots), and each variant has a gauge texture for 4 total variants.

### Molten Texture Updates

{% include update/image.html name="molten-textures" alt="Many of the new molten fluid textures." %}

This new build also includes some texture updates, including for molten obsidian, Tinkers' Bronze, and the Tinker's Anvil. Big thanks for RCXcrafter for making many of the new textures for Tinkers' Construct 3.

### Molten Diamond

{% include update/image.html name="diamond-melting" alt="Melting diamond in a foundry." %}

It was a little inconsistent that emerald was the only gemstone that could be melted, so now both diamond and quartz can be melted. Diamonds do require molten blaze to melt, but quartz can be melted with just lava.

This means both ores give byproducts in the smeltery, along with potentially being used in alloys in the future.

## Modifiers

### Sweeping Edge

{% include update/image.html name="sweeping-edge" alt="Sweeping edge recipe in JEI." %}

Moving on to tools, a new modifier for this update is sweeping edge. It is basically the same as the vanilla enchantment, working on both swords and cleavers.

### Shiny

{% include update/image.html name="shiny" alt="Applying shiny to a pickaxe." %}

Another new modifier for this update is shiny. Using an enchanted golden apple, you can add this slotless modifier to make your tools glow, showing off your wealth.

### Exchanging

{% include update/image.html name="exchanging" alt="Demonstrating exchanging on a vein hammer, swapping granite with scorched bricks." ext="gif" %}

Exchanging is a third new modifier. Tools with exchanging will replace mined blocks with the block from the offhand. The behavior will differ based on the tool you use, whether its the diamond shape of the veining hammer or the rectangle of the sledge hammer.

### Melting

{% include update/image.html name="melting" alt="Applying the melting ability in JEI." %}

Melting is not new to this update, but worth mentioning as it addresses a common concern with molten blaze. As an alternative to building a smeltery under a blaze spawner, you can use this modifier to melt attacked mobs into your tool's internal tank, which can later be drained into a tank or the smeltery.

Any mob that is meltable in the smeltery can also be melted using this modifier.

### Reinforced

{% include update/image.html name="reinforcement" alt="Iron reinforcements being used to apply reinforced." %}

Reinforcement got a few updates in this alpha. First off, individual reinforcment items are a lot cheaper, costing 1/4 of an obsidian block instead of 8 obsidian. The classic reinforcement is now made using iron, and slimesteel reinforcements are also available now to increase the capacity for overslime.

This change is partially in preparation for armor reinforcements, later on the roadmap will serve as the way to obtain modifiers such as fire and blast protection.

### Unbreakable

{% include update/image.html name="unbreakable" alt="Transferring items needed to apply unbreakable." %}

Also, while unbreakable is not new to this alpha, it was easy to miss in the earlier changelogs. Instead of just applying reinforcement 5 times, it now is an ability modifier with a prerequisite of netherite and reinforced V (7 upgrade slots and 1 ability total)

This screenshot also shows some of the new JEI support, the move items button now works in the tinker station for modifier recipes.

### Luck Recipes

{% include update/image.html name="luck" alt="New luck recipes in JEI." %}

Luck in this alpha has been changed to makes its recipe a bit more in line with other abilities as it tends to be one of the most powerful modifiers. Each level requires different items to add. Note that only the first level requires an ability slot.

### Severing

{% include update/image.html name="severing" alt="JEI support for severing recipes." %}

In case you are concerned about the number of rabbits feet needed, this last change can help with that. Beheading has been renamed to severing, and now has the ability to sever various other body parts from mobs, including rabbits feet, turtle shells, and spider eyes.

## Technical

### CraftTweaker Support

{% include update/image.html name="crafttweaker" alt="Script adding some crafttweaker recipes." %}

For some technical changes, this build adds in native CraftTweaker support. Big thanks to Jared (CraftTweaker dev) for adding in the support.

### Extra Modifier Slots

{% include update/image.html name="extra-upgrades" alt="Language entries for custom extra modifier slots." %}

Another technical change is the addition of 3 new modifiers for modpack makers. These modifiers all provide 1 extra upgrade slot, but have no recipe by default. Modpacks can add a crafting recipe for them if desired, such as by content that lacks native Tinkers Construct support, or as questing rewards. Our Github wiki details our many recipe JSON formats, big thanks to Princess of Evil for writing all of those.

### Datapack Materials

{% include update/image.html name="datapack-materials" alt="Material stats in a datapack." %}

Finally, this update makes some changes to how Tinker's Construct handles materials in datapacks. While it will unfortunately break some old addons or datapacks, this change will make it a lot easier for addons to add new tool types, such as bows or armor.

{% include update/end.html %}

## Download

The Tinkers' Construct 3.0.4 update can be downloaded from:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" github-tag="3.0.4.171" curseforge="3326523" modrinth=false %}