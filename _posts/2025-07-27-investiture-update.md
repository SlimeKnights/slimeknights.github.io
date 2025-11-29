---
layout: post
title:  "Investiture Update for Metalborn 1.20.1"
date:   2025-07-27 19:30:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/metalborn/investiture/nicrosil-spike.png
image_root: updates/metalborn/investiture
---

Metalborn just got it's second update, with two new metal powers, more ways to change your power, ways to recycle metalminds, and some bug fixes. If you did not see [the earlier post]({% post_url 2025-07-17-metalborn %}), this mod is based on [Feruchemy](https://coppermind.net/wiki/Feruchemy) - the art of storing power in metals: while storing, you are temporarily weaker, but you can later draw out that power to increase your power by the same amount. Check out the in game book for more info, which is also available [online](/docs/books/1.20/metalborn).

With this new update, mod is officially feature complete. Mod may still get a few more features in the future, notably considering some mod compatability in metals. Mod is marked as a release so it syncs better on CurseForge, plus it is for the most part feature complete apart from some future compatability.

{% include toc.html %}

{% include update/start.html %}

## Hemalurgy

To start off, hemalurgy has a couple of new ways to use spikes.

### Invested Nuggets

{% include update/image.html name="invested-nuggets" alt="Forging spikes to create invested nuggets." %}

The first new feature is the ability to craft invested nuggets, which can be consumed to change your ferring type. Invested nuggets can be crafted in a metal forge by combining a nicrosil or netherite nugget with a full metal spike.

* Using a nicrosil nugget will give you an invested nicrosil nugget, which randomizes your ferring type when consumed.
* Using a netherite nugget will give you an invested nugget matching the type of the spike, giving you the same power that spike stole; for example using a steel spike will grant you the power to store speed in steel.

This feature notably provides a viable way to use nicrosil metalminds in single player, along with a good late game option for selecting your power without loss of max health.

If this feature seems familiar, its did exist in the previous build as an unobtainable item called "Lerasium Nuggets". I wanted to move away from Lerasium as that metal has some unknown effects in the books (and tends to be far more associated with Allomancy) and I never came up with a way I liked to obtain them. Plus, there is [some lore precedence](https://wob.coppermind.net/events/210/#e4616) for using metal spikes in this way.

### Nicrosil Spikes

{% include update/image.html name="nicrosil-spike" alt="Stabbing yourself with a nicrosil spike." %}

One thing that bothered me before was that nicrosil did not have a proper spike type unlike the rest. Something else that bothered me was the fact that you could easily cheese the invested nugget mechanic by removing your own power with a spike, then turning it into a nicrosil nugget to randomize it until you got one you liked. This exploit led to a gameplay loop I didn't like.

Turns out the solution to both problems was the same: nicrosil spikes are a special variant of spikes that target players. You can either use the spike on yourself to remove your power and fill the spike (damaging you greatly in the process), or use it to kill another player to steal their power. The ability to steal your own power using other spike types was removed; those are only usable on monsters now. Filled nicrosil spikes are functionally identical to the matching filled metal spike except that they cannot be used to create invested nuggets.

## Feruchemy

Next up, Feruchemy has a couple of new powers, plus a new way of gaining additional powers without Hemalurgy.

### Breath

{% include update/image.html name="breath" alt="Drowning on land while storing breath." %}

Zinc and nickel had their power changed to storing breath. While storing, you will lose air for moving around too much, losing it faster the more you move. Standing still will allow the bubbles to recover if you are not storing breath too quickly. Tapping breath increases the time air lasts underwater, like the respiration enchantment.

Both zinc and nickel are compatability powers, which are only enabled if the metal is present. If both are present, only zinc will have this power.

### Netherite

{% include update/image.html name="netherite" alt="All available netherite items." %}

I wanted to keep stealth around, and at the same time I thought I should do soemthing with the last metal, netherite. Netherite ingots felt a little expensive for using for feruchemy, so I opted to use netherite scrap to craft the metalminds.

Netherite metalminds store luck, which increases mob drops when tapping (like looting), but decreases all drops when storing. I want to eventually make it work like fortune as well, though I need an event that doesn't exist until 1.21 for that. Netherite also has a special property: you will not naturally spawn as a netherite ferring.

Luck used to be the power for silver, it now gets stealth (which was moved from zinc/nickel). This felt a bit nicer paired with determination and the fact silver steals power from silverfish was oddly fitting.

### Identity

{% include update/image.html name="identity" alt="An identity metalmind filled with Sazed's identity." %}

The next new power added is identity. This power, like nicrosil, does not have ferrings and can be used by anyone regardless of power. While storing identity, metalminds you fill are created "unkeyed", which removes the restriction that prevents other players from using it. Tapping an identity metalmind lets you borrow someone else's identity and use their metalminds (so be careful what you do with metalminds you fill with your identity!)

Identity metalminds are crafted from aluminum, though if thats not in your pack alternative recipes using quartz are enabled. Since this feature is always available, nicroil metalminds now have an identity lock like other metalminds.

### Unsealed Metalminds

{% include update/image.html name="unsealed-metalmind" alt="Forging an unsealed metalmind using nicrosil." %}

Another unobtainable item from the first build was unsealed rings; these are based on a mechanic from some of the later Mistborn books where a non-feruchemist can temporarily gain a feruchemical power using a special variant of metalmind. After connecting netherite to the most powerful methods of gaining power in the mod, I came to the decision something similar would work well for creating unsealed metalminds. At least until Brandon Sanderson reveals the actual method to create them (will hopefully be soon based on [this later update](https://wob.coppermind.net/events/544/#e16900)).

Combining a netherite nugget, an empty metalmind of a metal, and a filled unkeyed (see [identity](#identity) above) nicrosil metalmind storing the matching power, you can now forge this item. Unlike nicrosil metalminds, there is no time limit on using the power, and they have no downsides unlike spikes. However, due to the nature of their investiture, it is not possible to use more than 2 unsealed metalminds at a time. Combining unsealed metalminds with spikes and your natural power means you can use up to 8 differnet powers at once - your ferring type, 2 unsealed metalminds, 4 spikes, and 1 nicrosil metalmind (using more than 1 nicrosil would take up too many slots so you can't take advantage of the extra power).

Its worth noting that to obtain these in single player, its necessary to take advantage of invested nuggets or respawn as you can only fill nicrosil metalminds with your true power (no spike granted powers). In multiplayer, these can be crafted using a nicrosil metalmind filled by another player.

## Recycling

{% include update/image.html name="recycling" alt="Smelting a pewter metalmind to get pewter ingots." %}

One last new mechanic for this update is the ability to recycle metalminds. I wanted a way to empty metalminds so you can refill them with power for the sake of powers that are more useful to fill than to drain. Placing any metalmind or spike in a furnace will smelt it into the appropiate amount of material. We aren't cheap like vanilla giving you just nuggets!

{% include update/end.html %}

## Download

**Metalborn**

Metalborn beta 1.0.0 can be downloaded at the following:

{% include update/download.html name="metalborn" author="KnightMiner" version="1.0.0" curseforge="6819390" %}

**Mantle**

Requires a Mantle update to 1.11.79:

{% include update/download.html name="mantle" version="1.11.79" curseforge="6819217" %}
