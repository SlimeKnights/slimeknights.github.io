---
layout: post
title:  "Metalborn: Satchel Update for 1.20.1"
date:   2026-02-01 9:30:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/metalborn/satchel/cover.png
image_root: updates/metalborn/satchel
---

Welcome to the visual changelog for the latest update to Metalborn! This update adds several new features including satchels and soulbound, plus some rebalances and many bug fixes.

After this update, next plan for this mod is to focus on a 1.21.1 port, though there are a few tasks with the documentation website that take priority.

{% include toc.html %}

{% include update/start.html %}

## Additions

### Satchels

{% include update/image.html name="satchels" alt="A pewter satchel holding many items." %}

The first new feature in this update is satchels, which are a bag that can be used for convenient metalmind and spike storage. Unlike bags from other mods, opening the satchel UI gives you access to your ring, bracer, and spike slots. If you prefer, these bags can also be used for conventional item storage, though that can be disabled in the config.

Satchels come in 4 variants:
* Bronze: cheapest variant, holding 9 items.
* Pewter: upgrades storage to 18 items.
* Steel: holds 9 items, immune to fire and despawning when dropped in the world.
* Nicrosil: holds 9 items, remains in the inventory upon death.

All 4 variants can be dyed and renamed in anvils to make it easier to distinguish multiple satchels.

### Mist Satchel

{% include update/image.html name="mist-satchel" alt="Pulling metalminds out of a mist satchel." %}

Mist satchels are an uncraftable satchel variant. Upon death, all metalminds and spikes are added to a mist satchel making it easier to gather them with a full inventory. Mist satchels only support item extraction, and disappear when emptied.

### Soulbound Metalminds

{% include update/image.html name="soulbound-metalmind" alt="Book page on soulbound metalminds." %}

Soulbound metalminds remain in the inventory upon death. They are crafted using a full identity metalmind (any identity) with an empty metalmind of the desired type and an ender pearl (this resembles the recipe for unsealed metalminds).

Metalminds can be either unsealed or soulbound, not both.

Note that by default, your power is reset upon death, so you may wish to keep a spike of the matching power in a nicrosil satchel. Alternatively...

### Soulbound Spikes

{% include update/image.html name="soulbound-spike" alt="Book page on soulbound spikes." %}

Soulbound spikes remain in the inventory upon death, allowing you to keep access to a power no matter what new power you gain post death. This works well alongside soulbound metalminds to keep access to your reserves after death.

### Cosmere Compatability

{% include update/image.html name="cosmere-metals" alt="Book page on soulbound spikes." %}

Bendalloy, chromium, and cadmium are all now available as metal powers if another mod adds those metals (such as [Allomancy](https://www.curseforge.com/minecraft/mc-mods/allomancy)). These work like brass and zinc, replacing the "less accurate" metal. To be precise:

* Chromium replaces netherite for luck.
* Cadmium replaces silver for stealth.
* Bendalloy replaces rose gold for energy.

On the chance this disables a metal in your pack, you can always use the `/metalborn metal set` and `/metalborn ferring set` commands to migrate. Or a datapack to force enable those now disabled powers.

## Changes

### Improved Nicrosil

{% include update/image.html name="nicrosil-tooltip" alt="New and improved nicrosil tooltip and spike." %}

Nicrosil spikes and metalminds now store the name of the metal that matches the power they contain. This both helps with JEI searches, and to help you remember the matching metal without looking it up.

Nicrosil spikes also have an improved texture, which shows a bit of the metal it stole. While thematically the spike would be all nicrosil, this is just better for gameplay. Nicrosil metalminds already do the same thing with the color of the power bar.

### Matching Tapping and Storing

{% include update/image.html name="tap-all" alt="Tooltip explaining to hold shift." %}

Holding shift while toggling a power now allows you to tap or store all matching metalminds, making it faster to engage your full set of speed for instance.

### Unbound Unsealed

{% include update/image.html name="unsealed-limit" alt="Storing 3 gold rings." %}

The limit on the number of unsealed rings you can use at once has been dropped. While this limit fit the lore, it didn't fit how expensive these rings are to produce.

### Power Rebalance

{% include update/image.html name="rebalance" alt="Updated effects of pewter after the rebalance." %}

Pewter, constantan/brass, and iron all had adjustments to their powers. Pewter has the most notable changes as tapping grants less damage, but also grants some temporary instant health. Constantan/brass is notably more viable for combat, while iron is more useful when tapped.

### Fireproof Items

{% include update/image.html name="fireproof" alt="Netherite items floating in lava." %}

Items crafted using netherite including invested nuggets, unsealed metalminds, and netherite nuggets themselves are now all immune to lava. This mirrors other netherite items in Minecraft, plus the new steel satchels.

{% include update/end.html %}


## Download

**Metalborn**

Metalborn update 1.0.1 can be downloaded at the following:

{% include update/download.html name="metalborn" author="KnightMiner" version="1.0.1" curseforge="7564375" %}

**Mantle**

Requires the latest Mantle 1.11.104 update, can be downloaded at the following:

{% include update/download.html name="mantle" version="1.11.104" curseforge="7563777" %}