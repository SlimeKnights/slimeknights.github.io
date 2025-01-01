---
layout: post
title:  "Tinkers' Construct 1.20 and Ancient Tool Update"
date:   2024-12-31 22:58:00 -0400
categories: posts
author: KnightMiner
update_images: tinkers/ancient-tools
---

Tinkers' Construct is now available for 1.20.1! As part of this update, we have added many cool new features, most notably ancient tools. In addition, a few of these features will also be available in the next release for 1.19.2 (as many of them were coded before the port), see the note at the top of the section for supported versions.

If you are a modpack maker, note that this new release is an alpha, so we ask you only include it in a modpack if you plan to continue to support your modpack for the next couple of months while we finish stabilizing this release.

As is typical with new releases, the API is going to be a bit unstable for addons while Tinkers' is in alpha. Once we make a beta release the API is expected to remain stable until the next major release. So if you are an addon author, you may wish to hold off on making an update. If you are willing to push ahead anyways, check out [the update primer](/posts/2024/12/31/1.20-update-primer/).

{% include toc.html %}

{% include update/start.html %}

## Ancient Tools
<div class="hatnote">Available on 1.19.2 and 1.20.1</div>

The first new feature is ancient tools! These are a new variant of tools which are not crafted, but instead found in loot. Ancient tools typically have 2 "tool parts" with completely random materials. They do not support part swapping, but support most modifiers that regular tools support. In addition, applying the rebalanced modifier to an ancient tool will grant double the modifier slots, or provide an ability slot with no penalty.

Wandering traders have a chance to spawn with a trade for a random ancient tool, which will cost between 6 and 32 emeralds based on the material tiers selected. In addition, each ancient tool has its own unique methods of obtaining.

As part of adding ancient tools, we added a new command to help test them, the [materials command](/docs/commands/tinkers#materials). This command lets you swap out a material on a tool (useful as ancient tools don't part swap), along with query stats and traits for a material. If you are interested in experimenting with potential ancient tool builds give it a try.

### Melting Pan

{% include update/image.html name="melting-pan" alt="Using a melting pan to mine iron ore." %}

Melting pans are a highly specialized mining tool, which can be reconfigured using staff modifiers as an effective weapon, shield or utility item. Their materials are a shield plating (armor) and a limb (ranged), providing a good basis for staff modifiers.

Melting pans have the unique ability to mine any meltable block (provided it meets the harvest tier requirement; can be improved using modifiers such as diamond and netherite). Mining the block will fill the pan with the proper molten liquid, and restrict further mining to blocks that melt into that liquid. In addition, ores mined by the melting pan produce more output than ores melted in the melter or smeltery.

Melting pans can be found in dungeon chests, igloo chests, and in the hands of husks. In addition, they are occasionally given as a gift from a toolsmith villager after defending them from a raid.

### War Pick

{% include update/image.html name="war-pick" alt="War pick held by a vindicator." %}

War picks are a cross between a pickaxe and a crossbow. Their materials include a tool head (helping with melee and mining), a limb (helping with ranged attacks), and a bowstring (which provides traits that may be applicable to both functions).

War picks can be useful to save hotbar slots over carrying both a bow and a pickaxe, and can save your life from an unexpected attack while mining. However, they are unable to receive many interaction based modifiers applicable to either bows or pickaxes due to having too many other features.

Zombie villagers will occasionally spawn with war picks, though they seem to have forgotten how to fire them in their transformation. In addition, a war pick may be found in loot in pillager outposts, abandoned mineshafts, or woodland mansions. Finally, upon successful defense of a village from a raid, a weaponsmith may give you a war pick.

### Battlesigns

{% include update/image.html name="battlesign" alt="Battlesign held by a piglin." %}

Battlesigns are a cross between a melee weapon and a shield. Materials include both a head (helping with melee) along with a shield plating (helping with blocking).

Battlesigns in addition to shielding also start with the bonking modifier, which is used when you stop blocking to knockback and damage nearby attackers. Additionally, they start with knockback, helping keep good pigmen safe from super hostile monsters.

All variants of piglin will occasionally spawn holding a battlesign. In addition, they can be obtained in bastions and from bartering with piglins.

## Armor Trims
<div class="hatnote">Available on 1.20.1 only</div>

{% include update/image.html name="armor-trims" alt="Adding trim to a plate chestplate." %}

Now that we are on 1.20, we have access to armor trims! You can add them to most Tinkers' Armor (notably excludes the travelers goggles) using the trim pattern and the trim material in the Tinker Station or Tinker's Anvil as a slotless modifier.

To help with applying trims, the tinker station, tinkers' anvil, and modifier worktable all have an armor stand preview the equipment you are modifying, similar to the smithing table. For it to appear on the modifier worktable you must not have the side chest inventory visible.

We are currently undecided on whether the netherite modifier will require the netherite trim item in the future. We do have plans to include some of our metals as new trim materials once we find the cleanest way to do that (seems the simplest approach is using a mod called Trimmed, but we don't want another hard dependency).

## Tool Part Reworks
<div class="hatnote">Available on 1.20.1 only</div>

Several tools got their tool parts reworked slightly.

### Adze Head

{% include update/image.html name="pickadze" alt="Comparing a pickaxe and a pickadze after the texture tweak." %}

The adze head is a reskin of the previous round plate tool part. Given the part had 2 usages, both in a variant of an adze, it seemed reasonable to make the part reflect that.

As part of this change, pickadzes got a texture tweak to make them more distinct from a pickaxe.

### Tough Collar

{% include update/image.html name="tough-binding" alt="Casting a cobalt tough collar, a new tool part for broad tool bindings." %}

With the increase of bnding exclusive tool materials, we wanted to options open to broad tool builds by giving more of them bindings. To accommodate this, we created a new tool part, the tough collar. It is effectively the same part as the tough binding from 1.12 and before; its a large variant of a tool binding.

Tough collars are used in place of the second large plate on mattocks, and in place of the large plate on the vein hammer giving both of them a binding stat. In addition, the tool binding in the broad axe and the scythe are both now tough collars.

## More Shield Abilities
<div class="hatnote">Available on 1.19.2 and 1.20.1</div>

{% include update/image.html name="shield-bonk" alt="Bonking recipe can now be applied to a shield." %}

Ancient tools are not having all the fun in this update; shields got a couple of internal tweaks that allowed them to receive flinging, springing, bonking, warping, spitting, and zoom! All of these modifiers are charged up or used while you block with the shield, and when applicable actively upon releasing the shield. Use it to defend yourself until you can escape, or to launch an effective counterattack.

## Smelting Modifier
<div class="hatnote">Available on 1.19.2 and 1.20.1</div>

{% include update/image.html name="smelting" alt="Smelting modifier book page." %}

During the development of ancient tools, a lot of ideas for unique traits on ancient tools were considered. One idea went as far as getting coded before it ultimately got scrapped from the tool; that being the frying modifier for the frypan. The frypan ultimately ended up too similar to the battlesign so it got reworked into the melting pan, but its modifier was too neat to delete.

The smelting modifier reworks frying into an upgrade available to most tools. Sneaking and interacting opens an inventory with 1 slot per level of the modifier. Using the tool (for mining, as a melee weapon, as armor, etc.) will slowly cook the items inside, making your tool an effective furnace that doesn't require fuel. Or, just fill the slots with items and use the tool is a (really small) bag.

## Hanging Signs
<div class="hatnote">Available on 1.20.1 only</div>

{% include update/image.html name="hanging-signs" alt="Hanging signs announcing the release date of 1.20.1 Tinkers." %}

Hanging signs are now available in Tinkers' Construct wood types. Not much else to say, they are signs that hang.

## Improved Creative Tabs
<div class="hatnote">Available on 1.20.1 only</div>

{% include update/image.html name="creative" alt="Searching for iron in the fluid creative tab." %}

As part of 1.20, creative tabs got reworked. We took the opportunity to rethink our creative tabs to improve the experience. The gadgets tab got merged into the general tab as it had very few items. Replacing it is the new tables tab, and the fluids tab.

The fluids tab contains filled variants of all of our tanks and copper cans, which are very convenient for testing fluid modifiers in tools. You can search these with the search bar on top, which is also available in the tools and tool parts tab.

Check out the client config to control which creative entries show in JEI.

## Book Page Numbers
<div class="hatnote">Available on 1.19.2 and 1.20.1</div>

{% include update/image.html name="book-pages" alt="Smelting modifier book page." %}

Some time during the migration to 1.18, the internal UI changes led to us accidentally dropping book page numbers. They are now back, meaning you can see that the encyclopedia has way too many pages (and hopefully you better understand why we split the books into different volumes). This is technically a Mantle change, but it corresponds to this update.

Speaking of Mantle changes, another new change is the addition of the [book export command](/docs/commands/mantle#export-book-images), which automatically screenshots every page of a book. This command allowed us to create something pretty cool, [online books](/docs/books). While the books are just static images (meaning no tooltips or animations), they provide a super useful reference to book contents out of game, and even can be installed as an "app" on your phone.

{% include update/end.html %}

## Download

### 1.20.1

Download Tinkers' Construct 3.9.0.6 for 1.20.1 at the following links:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.9.0.6" curseforge="6041763" %}

Requires Mantle 1.11.28:

{% include update/download.html name="mantle" version="1.11.28" curseforge="6041712" %}

### 1.19.2

You can also download many of these new features in 1.19.2 at the following:

* *Coming soon*.


