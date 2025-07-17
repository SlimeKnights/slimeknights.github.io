---
layout: post
title:  "Tinkers' Construct Traveler's Update for 1.20.1"
date:   2025-07-16 20:00:00 -0400
categories: posts
author: KnightMiner
image_root: updates/tinkers/travelers
---
Tinkers' Construct just got a new update! The main feature in this update is more improvements to Traveler's Gear, but it also has some preparations for an new mod I am working on called Metalborn. More on that mod in a later post.

{% include toc.html %}

{% include update/start.html %}

## Traveler's Gear

{% include update/image.html name="travelers-gear" alt="Traveler's Gear made with slimeskin." %}

In the last update, Traveler's Gear got the ability to swap out its metal type for different shield plating materials. Sadly, the leather part of the gear felt left out, especially with cool new maille materials like slimeskin. Thus, we decided to give traveler's gear a second material, cuirass, which supports a bunch of leather variants.

### Casting Cuirass

{% include update/image.html name="casting-cuirass" alt="Casting a slimeskin cuirass on a traveler's vest." %}

When crafting traveler's, you will still craft it from leather and metal as before, giving you the leather material with tanned as it's trait (in other words, works exactly as it did last update). You also can still dye the armor, which will show instead of the leather variant.

To take advantage of these new cuirass materials, you have to cast various liquids on the leather armor. Some options include:

* **Earthslime - Slimeskin**: Gives overgrowth, making the armor restore overslime overtime.
* **Skyslime - Slimeskin**: Gives skyfall, reducing the impact of gravity letting you jump higher.
* **Enderslime - Slimeskin**: Gives enderclearance, causing you to teleport away from attackers.
* **Ichor - Ichorskin**: New material granting overshield, more on that later.
* **Ancient Debris - Ancient Hide**: Gives the armor an additional defense slot.

This also showcases our new JEI support for part swap casting recipes, previously those were not visible in JEI.

### Ichorskin

{% include update/image.html name="ichorskin" alt="Showing various ichorskin armor pieces." %}

Ichorskin is a new material for armor maille and cuirass which is created from casting ichor on leather. It's trait overshield will consume a lot more overslime on hit to grant up to 5% protection. If you run out of overslime, that protection bonus goes away.

This is notably the first material trait that consumes overslime for more than just durability; we have a few late game material ideas that will do similar but most of them are waiting on other future plans.

### Cleaning leather

{% include update/image.html name="cleaning-cuirass" alt="Casting venom on armor to restore leather." %}

Since traveler's doesn't support traditional part swapping, its important to let you return to regular leather so you can cast a different fluid on it for part swapping. To make this work, venom can now be casted on all these leather variants to clean them, returning you to leather.

A consequence of this is you might see some weird recipes for leather maille, bindings, and bowstrings. But you can always just not use them.

## Traveler's Shield

{% include update/image.html name="travelers-shield-core" alt="All traveler's shield variants shown in JEI." %}

Traveler's shields in addition to getting cuirass now also have a shield core, granting them many of the unique plate shield traits. To select your shield core, you simply change the center item when crafting a traveler's shield. You can part swap using the regular shield core item, though its a little more expensive than the original craft.

{% include update/image.html name="crafting-travelers-shield" alt="Crafting traveler's shields." %}

### Cactus Shield Cores

{% include update/image.html name="cactus" alt="Dual wielding cactus shields." %}

Speaking of shield cores, you might have noticed a couple new ones in the last screenshot. These work on both plate shields and traveler's shields.

The first new one is cactus. Its trait is thorns, which allows you to exceed the usual max level for thorns on a shield, or simply save an upgrade slot.

### Ice Shield Core

{% include update/image.html name="ice-shield" alt="Hiding behind an ice shield." %}

Ice is our first fully transparent material, which as a shield means it blocks your view a bit less. Its trait is frostshield, which absorbs all freezing damage you take to fill up its frostshield bar. Like stoneshield or overslime, this bar is consumed before regular durability use.

## Pewter

{% include update/image.html name="pewter" alt="Hiding behind an ice shield." %}

Next new feature in this update is a new compat alloy: pewter. If you are unfamiliar with compat materials, these are materials that are only added if other mods add the appropiate metals, in this case pewter. A notable mod that adds pewter is Metalborn, which is an upcoming mod by KnightMiner. Though like any compat alloy, pewter is also available if any mod adds the appropiate ores, in this case tin or lead. 

Pewter as a melee weapon grants the trait raging, which boosts your melee damage/projectile damage when your health is low. You might recognize this trait from bloodbone, which was removed back in 1.19. On armor, pewter grants vital protection, which boosts your protection when your health is low. 

Worth a note: if you want pewter (or any compat alloy which has no ingots present) on traveler's gear, you can get it through casting. Check JEI for the recipe.

## Books

### Ancient

{% include update/image.html name="ancient-book" alt="Information on ancient in tinker's gadgetry." %}

Ancient is a material only available through loot, most notably ancient tools. Based on this, it didn't make sense to show it in JEI or the standard material listings as its not normally craftable. However, the books also provide useful stat information.

As a compromise, ancient is now covered in our exploration book Tinkers' Gadgetry. You can find full information on the trait there, plus lovely pictures of various tools with that material.

### Moved Worktable Pages

{% include update/image.html name="worktable" alt="Pages on the modifier worktable in Puny Smelting." %}

The modifier worktable was previously covered in Tinkers' Gadgetry, but it didn't make a ton of sense since its not an exploration feature, and it caused a lot of people to miss that feature. Its now covered under Puny Smelting instead. The main thing this changes is the writing style of some of its pages, as Thruul is a lot more agressive than Melvin.

Page also shows a smaller change: invisible ink is now applied via skyslime instead of invisiblity potions, since the latter was honestly pretty expensive for a cosmetic.

{% include update/end.html %}

## Download

**Tinkers' Construct**

The new Tinkers' Construct 3.10.2.92 update can be downloaded at the following:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.10.2.92" curseforge="6777068" %}

**Mantle**

Requires the latest Mantle 1.11.71 update, can be downloaded at the following:

{% include update/download.html name="mantle" version="1.11.71" curseforge="6776978" %}
