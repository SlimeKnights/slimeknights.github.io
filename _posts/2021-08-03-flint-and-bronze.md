---
layout: post
title:  "Tinkers' Construct 3.1.1 Update"
date:   2021-12-06 12:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/3.1.1/dual-wield-broad.png
image_root: updates/tinkers/3.1.1
---

Welcome to the visual changelog for Tinkers Construct 3.1.1! This build contains a lot of features I have been working on for the last few weeks.

*This blog was originally posted [on Imgur](https://imgur.com/a/tinkers-construct-1-16-5-alpha-3-1-1-visual-changelog-lagWZNh) and [Reddit](https://www.reddit.com/r/feedthebeast/comments/oxi2sq/comment/h7mkj0a/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Tools

### Flint and Bronze

{% include update/image.html name="flint-and-bronze" alt="Flint and bronze burning down a tree." %}

To start things off, we have a new tool that I am particularly excited about: flint and bronze. Its essentially a modifiable version of flint and steel, allowing you to light fires, ignite TNT and creepers, and create nether portals. You can apply any melee or durability based modifiers to the tool, plus all modifiers for giving additional slots

While the tool itself may not seem that fancy, adding it required several internal changes that ultimately will go towards adding back travelers gear. Think of it as the first step towards armor.

### New Bone Materials

{% include update/image.html name="blazing-bone" alt="Casting blazing bone." %}

This update also adds in two new tool materials: bloodbone and blazing bone.

* Bloodbone is a tier 2 material created by pouring blood on bone tool parts. It has a trait that gives you bonus damage at low health.
* Blazing bone is a tier 4 material created by pouring blazing blood on necrotic bones. It has the highest attack speed of tier 4, and a trait that boosts your damage when you are on fire, making it a contender with manyullyn for weapons.

From these two new materials, all tier 1 materials can now be upgraded to a higher tier through a composite recipe, which helps keep the part builder relevant even late game.

### Dual Wielding Rebalance

{% include update/image.html name="dual-wield-broad" alt="Dual wielding broad axes." %}

Also in this update are some improvements to dual wielding:

* Dual wielding only has to be applied to the item in the offhand now, before both hands needed the modifier
* Dual wielding now works on broad tools, provided they have the Offhanded modifier
* The modifier applies a flat reduction to tool stats rather than a hidden reduction when attacking. Means its easier to judge tool damage, but a tool with the modifier in the main hand will be less effective

### Modifier Removal

{% include update/image.html name="modifier-removing" alt="Removing a modifier from flint and bronze using a wet sponge." %}

I know what you are thinking, that dual wielding change might leave you with tools with some undesirable modfiers on your main weapon, so you might be wishing you could remove modifiers from tools. Luckily you can do that now with a wet sponge!

This feature existed in a previous alpha but was temporarily removed to work out some conflicts with complex modifier recipes. Compared to the original version, you now not only get slots back but also some of the recipe input.

Note that eventually we plan to have a proper table to remove modifiers with a more friendly UI. For now, you may have to try the sponge in a few slots to remove the modifier you want, or use more than one sponge.

### More Heads

{% include update/image.html name="more-heads" alt="Showcasing all the new heads added by Tinkers'." %}

Oh, you were wondering about the blaze head? This update adds in 7 new head types in addition to the vanilla heads, so you can now behead husks, drowneds, spiders, cave spiders, strays, endermen, and blazes. These heads have all previous head functionality, meaning they reduce the distance the relevant mob sees you at, drop when killed by a tool with severing or a charged creeper, and can be used for +1 upgrade slot on tools.

### Sword Tweaks

{% include update/image.html name="sword-tweaks" alt="Chopping down bamboo with a sword." %}

Swords were slightly changed in this alpha, as they no longer start with 2 ability slots, instead starting with 1 ability and 3 upgrade slots like other tools. In our testing, we have found swords to be one of the strongest weapons overall, plus most people used the slot to gain more upgrade slots anyways.

To make up for this change, swords can also instant break bamboo now just like in vanilla.

### Upgrade Adjustments

{% include update/image.html name="upgrade-rebalance" alt="Applying reinforced to a sword." %}

To finish up tools, a bunch of modifiers were slightly tweaked to bring them more in line with each other. Notably piercing is a bit stronger now, and haste a bit weaker. Reinforced and sweeping edge have a weaker first level but stronger later levels, and the melting modifier now produces more fluid to make farming blazing blood a bit easier.

In addition, several material stats were adjusted. The majority of the changes were buffing or nerfing handles to make sure each tier was a bit more in line and prevent our tools from being too much stronger than vanilla.

## World

### Terracubes

{% include update/image.html name="terracubes" alt="Terracubes chilling on a clay island." %}

Moving on from tools to world, the first change is a new mob, terracubes. They are a clay slime variant that spawn on the clay islands added a few alphas ago.

### Bloody Nether Foliage

{% include update/image.html name="blood-foliage" alt="Blood slime island with nether style foliage." %}

Foliage on blood slime islands now behaves more like nether foliage, including bloodshrooms needing bonemeal to grow, saplings coming from bonemeal on slimy nylium, and composting slimy wart into bonemeal

### Skyroot Height

{% include update/image.html name="tall-skyroot" alt="A double height skyroot tree." %}

Skyslime islands felt left out, so skyroot saplings now have a chance to grow twice as tall. Really lets them reach towards the sky.

### Slimy Grass Spawning

{% include update/image.html name="slimy-grass-spawning" alt="Skyslimes spawning in superflat on blue slimegrass." %}

Slimes will now spawn anywhere in the proper dimension on the corresponding colored slimy grass. This means that the slime grass seeds found in dungeons can be used to produce a slime farm. Unlike slime island spawns, slimy grass does not prevent non-slimes from spawning, so finding an island is still more ideal.

### Map Colors

{% include update/image.html name="map-colors" alt="Showcasing block map colors" %}

Many blocks got more proper map colors added, so things like slime islands and smelteries show better now.

## Building

### Tinkers' Chest 

{% include update/image.html name="tinkers-chest" alt="Tinkers Chest UI containing much bamboo." %}

The modifier chest was renamed to the Tinker's Chest. It now can hold any type of item instead of just modifiers, making it a chest with 64 slots but a smaller stack size per slot. In addition, the chest can be dyed to help with identifying them in the tabs.

Cast chests also keep their contents when broken now, while the other two types properly drop their contents.

### Nahuatl Blocks

{% include update/image.html name="nahuatl" alt="Nahuatl planks, slabs, stairs, and fences." %}

Nahuatl is a new building block for this update, crafted from pouring molten obsidian on wood, just like the tool parts. Its mostly decorative, and serves as a highly blast resistant wood variant and a way to repair your nahuatl tools.

### New Part Builder Variants

{% include update/image.html name="part-builders" alt="Part builders made from nahuatl, blazewood, and lavawood." %}

Nahuatl, blazewood, and lavawood also all now work for making part builders and tinker stations.

### Quartz Casting

{% include update/image.html name="casting-quartz" alt="Casting stone variants with molten quartz." %}

Couple of smeltery recipe tweaks, including a way to composite cast seared and scorched brick items, a recipe for casting andesite using molten quartz, and some fixes to melting recipes for quartz.

## Custom Modifier Slots

{% include update/image.html name="custom-slots" alt="Applying a defense slot using the new generic creative slot item." %}

Finally, this update has some API changes that should help addons, including adding a way for them to define new types of modifier slots (screenshot shows armor slots added through this system, which is a new slot type we will use in the future on armor). I tried to keep breaking changes to a minimum so addons will still work, but there is a chance certain addons may still break.

{% include update/end.html %}

## Download

The Tinkers' Construct 3.1.1 update can be downloaded from:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" github-tag="3.1.1.252" curseforge="3412365" modrinth=false %}
