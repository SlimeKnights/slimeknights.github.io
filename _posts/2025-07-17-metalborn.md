---
layout: post
title:  "Metalborn - new mod for 1.20.1 inspired by Feruchemy"
date:   2025-07-17 16:20:00 -0400
categories: posts
author: KnightMiner
image: assets/images/updates/metalborn/alpha/spikes.png
image_root: updates/metalborn/alpha
---

Just released a new mod for 1.20.1 called Metalborn. This mod is my own take on [Feruchemy](https://coppermind.net/wiki/Feruchemy) from Brandon Sanderson's [Mistborn series](https://coppermind.net/wiki/Mistborn_(series)). Feruchemy is the art of storing power in metals, which seemed to fit so well with the large amount of metals in modded Minecraft. While storing, you are temporarily weaker, but you can later draw out that power to increase your power by the same amount.

This blog post will talk about some of the story of the mod and my design goals. If you simply are interested in downloading it to play it yourself, see [download](#download). To get started with the mod, check out the in game book, which is also available [online](/docs/books/1.20/metalborn).

{% include toc.html %}

{% include update/start.html %}

## Story

I started designing this mod back in 2018. I've always loved the worlds and magic systems created by Brandon Sanderson, and thought Feruchemy in particular had a lot of potential as a Minecraft mod.
The idea of storing power and drawing it later seemed like an interesting alternative take on brewing, and the large amount of overlap between the metals in the books and the metals in modded Minecraft made the idea seem especially fitting: you turn the metal ores you already have into a new way to power yourself up.

The mod went through a couple design iterations, including for a short time working on the design in collaboration with [wiresegal](https://www.curseforge.com/members/wiresegal/projects), though ultimately the project never made it past the design phase and has been on the backburner since 2019. Earlier this year, I decided to take advantage of a lot of the utilities I've written in Mantle and my extra 6 years of experience modding the game to turn the design into a reality.

## Design Goals

### Gameplay over faithfulness

{% include update/image.html name="metal-effects" alt="Effects of copper and bronze." %}

One key design principle for the mod is to focus on gameplay over faithfulness to the source material. While I tried to add as many metals and powers from the books, some of the metals in Mistborn are pretty obscure (such as chromium or cadmium), and I didn't want to clutter your world with ores that are only useful in Metalmind.

A related issue is some of the powers in the books do not adapt well into Minecraft (such as storing "wakefulness" or "mental speed"), and I ultimately wanted to make all powers roughly as good (so you aren't too disappointed if you didn't get the ferring type you wanted). Based on this, some creative liberties were taken with the power list.

### Single starting power

{% include update/image.html name="ferring-search" alt="Message upon interacting with a metal that is not your power." %}

To keep each playthrough different, and to add variety on servers, each player spawns with access to a single random metal power. This power matches up to a type of metal ore or alloy in your world, which can store a specific type of power. For instance, you might spawn as a steelrunner ferring, capable of storing speed in steel and then drawing out that speed later. You can discover your power by interacting with ingots or nuggets of the appropiate types.

For the sake of single player, your type of ferring will also randomly change on death (though this is configurable). This adds an extra penalty to death, but also adds a way to explore more of the mod before you advance through some of the other mechanics.

### Sharing powers

{% include update/image.html name="nicrosil" alt="A nicrosil metalmind storing the ability to be a steelrunner." %}

To add a community aspect to the mod, you are able to share your powers with other players using nicrosil metalminds. So if your friend is a brute ferring (able to store strength in pewter), they can store their ability to store pewter in nicrosil, and then swap nicrosil metalminds with you to use both steel and pewter.

Unlike in the books, anyone is able to use nicrosil regardless of their powers. This is one of those decisions made as it leads to better gameplay even if its a bit less faithful.

### Gradual progression

{% include update/image.html name="spikes" alt="Player with several spikes granting additional powers." %}

I decided early on that I did not want to start you with access to every power. But I still wanted to allow you to gain additional powers. Nicrosil is great in multiplayer, but for single player I needed something that didn't require dying and respawning a ton. Luckily, the Mistborn series had an answer for me: Hemalurgy.

Hemalurgy is a method of stealing powers using metal. In the books, powers are usually stolen from other humans, but due to the high magic environment of Minecraft I decided to allow you to steal powers from common monsters using this system. I decided against implementing Hemalurgy's ability to steal attributes other than Feruchemy powers as it just felt a bit redundant to the Feruchemy powers, meaning my interpretation is a bit less faithful (though I may reconsider some attribute hemalurgy in the future).

### Standalone mod

{% include update/image.html name="alloying" alt="Alloying nicrosil in the metal forge." %}

One key goal in my mods is to allow them to work on their own; I never want a mod to require other mods to be fun. But this posed a challenge: the only way to make alloys in vanilla is honestly pretty boring - combine ingots in a crafting table. After some thought, I came up with the metal forge. This is a furnace variant that instead of having a single input slot, contains a 2x2 crafting grid. Not only does it let me use it for making alloys of up to 4 inputs, but I can also perform some shaped crafting recipes to create metalminds and spikes making the metal forge more than just an alloy furnace.

Playing standalone also has another concern: I didn't want to add a ton of metal ores that were only used to make metalminds. Having a ton of ores that only exist for one mechanic just makes mining less fun, especially if you have no intention to use it. Plus, I liked the idea that you discover your power from metals you already have. I ultimately settled on the following:

* Reduce the number of metal powers available when you only have Metalborn installed, and add the rest based on detected ores in your modpack.
* Add just a single ore: tin. Using tin, you can alloy bronze, pewter, and nicrosil (with a few creative liberties on the recipes for pewter and nicrosil).
* Create steel using nether resources rather than a dedicated process.
* Finally, instead of electrum (which requires silver), I opted for rose gold (which requires copper and gold).

Combining this all together gives a total of 8 core metals: iron, steel, tin, pewter, copper, bronze, gold, and rose gold. Plus nicrosil, which is special.

### Compatability

{% include update/image.html name="casting" alt="Casting metalminds using the casting table." %}

Another goal for the mod was to make it automatically integrate with mods in your pack. The first step taken towards this goal is to make the recipes for pewter and nicrosil automatically adjust based on available ores. Specifically, pewter will require lead in its recipe if detected, and nicrosil will require nickel.

Additionally, many common metals will be detected to add an additional 4 metal powers, specifically silver, electrum, zinc, and brass if detected will each add an additional power, bringing the list up to 12 powers (plus nicrosil). Since zinc and brass are pretty uncommon (its basically just Create with them), if they are absent then nickel and constantan will be considered to add their powers.

Finally, since I also write Tinkers' Construct, I naturally had to add support for making metalminds using the smeltery. Cast are added to allow creating them from the relevant molten fluids, and the most recent Tinkers' Construct update adds better support for pewter and nicrosil alloying.

### Data driven

{% include update/image.html name="forge-automation" alt="Automating the metal forge." %}

As Minecraft moves more and more towards datapacks, I always try to maximize datapack support in my mods; Metalborn is no exception. With the exception of nicrosil (due to its complexity), every single metal power is created through datapacks. You have full freedom to remove powers in the mod and add new ones, both allowing you to make the mod more faithful, or simply add more options for your modpack.

Datapacks can notably choose from any attribute or potion effect (including modded ones). Additionally, an addon can register new effects for more complex effects such as how storing health or energy works in the base mod. Overall, I'd love to see people adapt the metals in the mod to their modpack, including adding powers based on other mod's custom metals and abilities. Maybe psimetal from Psi or Knightmetal from Twilight Forest could provide some unique effects based on features from those mods.

## Future of the mod

### New metals

{% include update/image.html name="powers" alt="Full list of metals available in the mod." %}

I have a few more metal powers planned for the future, notably aluminum's identity power and cadmium's breath power, though neither is present in the initial release and I may change the metals that grant the powers. In the case of breath, I will almost certaintly change its metal, possibly by swapping a moving of the current powers around.

### Unsealed metalminds

{% include update/image.html name="unsealed" alt="Description of unsealed metalminds in the book." %}

One cool concept from the books that you see later in the series is unsealed metalminds, which are metalminds anyone can use regardless of their power. At this time, the method of creating them hasn't been revealed in the books, but its such a cool concept that I want to do it as part of the mod.

At this time, I have them implemented such that you can cheat them in, but there is no way to obtain them in survival yet. I may end up just placing them in loot tables and leaving them uncraftable, or may otherwise wait for Sanderson to release the method of making unsealed metalminds (apparently its a very complex process). Ultimately, for gameplay reasons I need to avoid it being too complex as it does need to compete with Hemalurgy for gaining powers.

### Allomancy

{% include update/image.html name="cover" alt="Cover of the book describing Feruchemy." %}

I left the mod name and book title generic to allow freedom to add some other Cosmere magic. Its possible in the future I add a few potion brewing recipes as a nod to Allomancy, but otherwise I have no current plans for Allomancy in this mod.

The first reason is I already added an Allomancy like mechanic in another one of my mods - Tinkers' Construct includes a helmet modifier called slurping, which allows you to fill your helmet with molten metals then drink them for different effects. I don't have a design for Allomancy that wasn't just a rehash of that.

Second reason is to do Allomancy well, you really need to make iron-pushing and steel-pulling work, which are way more work than I wanted to do. Tinkers' solves this by doing a simple magnet mechanic, which works as its not trying to recreate Allomancy.

Fortunately for fans of Mistborn, there is already an [Allomancy mod](https://www.curseforge.com/minecraft/mc-mods/allomancy) which supports both 1.20.1 and 1.21.1, I definately recommend checking that out.

## Isn't there already a Feruchemy mod?

There is a [Feruchemy mod](https://www.curseforge.com/minecraft/mc-mods/feruchemy-allomancy) for 1.18.2 by blits49, though it notably has not updated in awhile (last update was in 2022). This mod is not a fork of that one, I wrote this mod entirely from scratch without any more knowledge of that mod than it's name. Any similarities are purely because we both based our mod off of Brandon Sanderson's books.

Ultimately, I've been wanting to write this mod for awhile, so I'd have likely written this mod even if there was a Feruchemy mod supporting the same version. Though it just happened that there isn't any overlap in the versions we support at this time. I personally feel mods doing similar things is totally fine as long as each author put in their own original work and spin on the idea, and modpacks aren't including both in the same pack.

{% include update/end.html %}

## Download

**Metalborn**

Metalborn alpha 0.1.0 can be downloaded at the following:

{% include update/download.html name="metalborn" author="KnightMiner" version="0.1.0" curseforge="6777563" modrinth=false %}

Will be on Modrinth as soon as they approve it, probably in about 2 weeks.

**Mantle**

Requires the latest Mantle 1.11.71 update, can be downloaded at the following:

{% include update/download.html name="mantle" version="1.11.71" curseforge="6776978" %}
