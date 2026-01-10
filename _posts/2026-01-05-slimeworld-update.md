---
layout: post
title:  "Tinkers' Construct Slimeworld Update for 1.20.1"
date:   2026-01-05 1:30:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/slimeworld/ichor-end.png
image_root: updates/tinkers/slimeworld
---

This update is primarily a bug fix and balance tweaks update for the recent [Throwback Update]({% post_url 2025-12-23-throwback-update %}). However, it adds a few notable features

{% include toc.html %}

{% include update/start.html %}

## World

Most of the notable changes in this update are tweaks to worldgen, in preparation for some larger worldgen changes we have planned for 1.21.

### Better Overworld Islands

{% include update/image.html name="ocean-sky" alt="A skyslime island in the ocean." %}

Skyslime islands can now be found in the ocean. These have a 50% chance of replacing the ocean earthslime island. This allows modpacks that dislike the sky islands to still have access to skyslime by keeping the ocean islands around.mIf you are interested in removing the sky islands from your pack (or any other structure), try out the new [Mantle command](/docs/commands/mantle/#structure-set).

Additionally, both earth and sky islands now have a chance to spawn with each other's tree types, making the trees a bit easier to find and adding a bit more island variety.

### Improved End Islands

{% include update/image.html name="ichor-end" alt="A skyslime island in the ocean." %}

Enderslime islands in the end have a chance to spawn with ichor dirt instead of enderslime dirt. This helps prepare for an upcoming 1.21 plan that reworks the nether islands and might make that dirt variant hard to find.

### Overworld Geode Tweaks

{% include update/image.html name="steel-earth" alt="Steel shards in the overworld geodes." %}

Since the ocean islands are our preferred method of finding skyslime when the sky islands are disabled, we decided to shift the geodes to be less in focus by making both types a bit less common. Sky geodes are now found deeper underground so are less likely to have buggy generation, and both geode types are now sources of steel shards.

### Cobalt in Ichor Geodes

{% include update/image.html name="ichor-cobalt" alt="Cobalt shards in ichor geodes." %}

Ichor geodes were also tweaks to include a chance of cobalt shards. Like steel or knightmetal, these metal shards do not regrow. Instead, they provide a reward when you encounter additional ichor geodes exploring (as you really only need 1 to get enough ichor).

Generation for ichor geodes was slightly tweaked to reduce the chance of them spawning floating in the air, which might make them slightly more rare.

### Terracubes Everywhere

{% include update/image.html name="terracubes" alt="Terracube in a jungle." %}

Terracubes now spawn anywhere in the world instead of just on their islands to add a bit more variety to monsters. They have the same spawn chance as endermen.

In case you never met one of them, they are immune to fall damage and do not jump that high, but drop clay on death.

### Smelt Shards

{% include update/image.html name="smelt-shards" alt="Smelting steel shards to get steel nuggets." %}

Steel shards can now be smelted in a furnace or blast furnace to get nuggets. Cobalt and knightmetal shards can be smelted in a blast furnace for nuggets. These use less fuel than smelting their matching ores, and results in the same amount of metal as melting them.

## Smeltery

### Scorched Casting

{% include update/image.html name="scorched-casting" alt="New models for scorched casting blocks." %}

Scorched casting tables and casting basins got new models that better represent their functionality. For those unaware, the nether variants of the casting block disallow casting unless you have a cast, as this makes it far easier to automate recipes that require casting a fluid on a consumable cast.

Their recipes were also tweaked to include the appropiate "empty casts" which allows you to cast recipes that requires no cast, as a hint to help you find those items.

### Better Beacons

{% include update/image.html name="more-beacons" alt="Beacons of cinderslime and slimesteel." %}

More of our metal blocks and ingots now work for beacons. Slimesteel and cinderslime are particularly interesting as they do not block beacon beams, letting you stack beacons.

## Tools

### Cactus Bows

{% include update/image.html name="cactus" alt="Various tools made of cactus." %}

Cactus in addition to it's former shield cores can now also be used to create bowlimbs and arrow shafts. It's trait on ranged weapons grants +10% velocity at the cost of dealing 1 damgae to you when firing an arrow or throwing a cactus throwing axe.

### Blunted Modifier

{% include update/image.html name="blunted" alt="Blunting a fishing rod, causing it to lose its damage stat." %}

Blunted is a new modifier that removes the melee capability from ranged weapons. This is useful when you have a left click modifier, such as toggled fishing, to ensure you don't accidently punch instead of activating the modifier.

### Blockade Modifier

{% include update/image.html name="blockade" alt="Adding blockade to a sword." %}

Blockade is a new modifier for anything that supports blocking. It adds +100% block amount per level at the cost of an upgrade slot, letting you turn even melee weapons into effective shields.

### Smelting Modifier Improvements

{% include update/image.html name="smelting-revamp" alt="Smelting pickaxe with its two slots" %}

The smelting modifier was added in the ancient tool update as the scrapped version of the melting pan's trait. The modifier smelts items inside as you use the tool to mine blocks, hit monsters, or other such actions, but was not super practical as you had to swap its item a lot.

This update makes it a lot more useful. Instead of holding 1 item per slot, it now holds 64 items per slot, and has an output slot similar to a furance. Additionally, at higher levels all slots will smelt at once.

### Longer Staffs

{% include update/image.html name="staff-reach" alt="Staff starting with reach." %}

Slimestaffs now all start with reach, helping to distinguish them from bows a bit. This change was largely done as since the introduction of barebow, many modifiers that used to be best on staffs are now better on bows. There are a few other staff improvements planned, but those will be held off until 1.21.

### Sling Traits

{% include update/image.html name="sling-traits" alt="Manyullyn and hepatizon triggering after using springing." %}

Sling modifiers such as springing, flinging, bonking, and warping now have modifier hooks, letting traits such as insatiable, momentum, valiant, or crystalshot interact with them.

As part of this update, we also fixed a bug where knockback resistance was not properly syncing to client, causing it to be ignored by slings. This update restores the intended functionality where too much knockback resistance stops you from moving from flinging and springing.

### Rebalances

{% include update/image.html name="rebalances" alt="Fishing rod hitting a test dummy." %}

Many materials, traits, and tools got some small rebalances in this update to bring them more in line after the Throwback Update. Check out the full changelog for more details.


{% include update/end.html %}


## Download

**Tinkers' Construct**
<div class="hatnote">Update: 3.11.2.165 was released to fix bugs and improve documentation compared to 3.11.1.158.</div>

The new Tinkers' Construct 3.11.2.165 update can be downloaded at the following:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.11.2.165" curseforge="7443615" %}

**Mantle**

Requires the latest Mantle 1.11.97 update, can be downloaded at the following:

{% include update/download.html name="mantle" version="1.11.97" curseforge="7414488" %}
