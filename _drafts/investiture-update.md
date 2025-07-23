---
layout: post
title:  "Investiture Update for Metalborn 1.20.1"
categories: posts
author: KnightMiner
image: /assets/images/updates/metalborn/investiture/nicrosil-spike.png
image_root: updates/metalborn/investiture
---

Metalborn just got it's second update, with some small bug fixes and improvements to a few of the power mechanics. If you did not see the earlier post, this mod is my own take on [Feruchemy](https://coppermind.net/wiki/Feruchemy) from Brandon Sanderson's [Mistborn series](https://coppermind.net/wiki/Mistborn_(series)). Feruchemy is the art of storing power in metals: while storing, you are temporarily weaker, but you can later draw out that power to increase your power by the same amount. Check out the in game book for more info, which is also available [online](/docs/books/1.20/metalborn).

This new update is enough for me to mark the mod as Beta. This means I have settled on a few of the core features and don't plan to mess with internals too much, though I may still make some gameplay changes in a later update. Rest of this post will talk about the new features.

{% include toc.html %}

{% include update/start.html %}

## Invested Nuggets

{% include update/image.html name="invested-nuggets" alt="Forging spikes to create invested nuggets." %}

The first new feature is the ability to craft invested nuggets, which can be consumed to change your ferring type. Invested nuggets can be crafted in a metal forge by combining a nicrosil or netherite nugget with a full metal spike. Using a nicrosil nugget will give you an invested nicrosil nugget, which randomizes your ferring type when consumed. Using a netherite nugget will give you an invested nugget matching the type of the spike, giving you the same power that spike stole; for example using a steel spike will grant you the power to store speed in steel.

This feature notably provides a viable way to use nicrosil metalminds in single player, along with a good late game option for selecting your power without loss of max health.

If this feature seems familiar, its did existed in the previous build as an unobtainable item called "Lerasium Nuggets". I wanted to move away from Lerasium as that metal has some unknown effects in the books (and tends to be far more associated with Allomancy) and I never came up with a way I liked to obtain them. Plus, there is [some lore precedence](https://wob.coppermind.net/events/210/#e4616) for using metal spikes in this way.

## Nicrosil Spikes

{% include update/image.html name="nicrosil-spike" alt="Tooltip of a nicrosil spike, saying it targets players." %}

One thing that bothered me before was that nicrosil did not have a proper spike type unlike the rest. Something else that bothered me was the fact that you could easily cheese the invested nugget mechanic by removing your own power with a spike, then turning it into a nicrosil nugget to randomize it until you got one you liked. This exploit led to a gameplay loop I didn't like.

Turns out the solution to both problems was the same: nicrosil spikes are a special variant of spikes that target players. You can either use the spike on yourself to remove your power and fill the spike (damaging you greatly in the process), or use it to kill another player to steal their power. The ability to steal your own power using other spike types was removed; those are only usable on monsters now. Filled nicrosil spikes are functionally identical to the matching filled metal spike except that they cannot be used to create invested nuggets.

## Unsealed Metalminds

{% include update/image.html name="unsealed-metalmind" alt="Forging an unsealed metalmind using nicrosil." %}

Another unobtainable item from the first build was unsealed rings; these are based on a mechanic from some of the later Mistborn books where a non-feruchemist can temporarily gain a feruchemical power using a special variant of metalmind. After connecting netherite to the most powerful methods of gaining power in the mod, I came to the decided something similar would work well for creating unsealed metalminds. At least until Brandon Sanderson [reveals the actual method to create them](https://wob.coppermind.net/events/509/#e15981).

Combining a netherite nugget, an empty metalmind of a metal, and a filled nicrosil metalmind storing the matching power, you can now forge this item. Unlike nicrosil metalminds, there is no time limit on using the power, and they have no downsides unlike spikes. However, due to the nature of their investiture, it is not possible to use more than 2 unsealed metalminds at a time. Combining unsealed metalminds with spikes and your natural power means you can use up to 7 differnet powers at once.

Its worth noting that to obtain these in single player, its necessary to take advantage of invested nuggets as you can only fill nicrosil metalminds with your true power (no spike granted powers). In multiplayer, these can be crafted using a nicrosil metalmind filled by another player.

{% include update/end.html %}

{% comment %}
## Download

Metalborn beta 1.0.0 can be downloaded at the following:

{% include update/download.html name="metalborn" author="KnightMiner" version="1.0.0" curseforge="" %}
{% endcomment %}