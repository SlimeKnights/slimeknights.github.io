---
layout: post
title:  "Tinkers' Construct 1.20 and Ancient Tool Update"
categories: posts
author: KnightMiner
update_images: tinkers/ancient-tools
---

Tinkers' Construct is now available for 1.20.1! As part of this update, we have added many cool new features, most notably ancient tools. In addition, a lot of these features are also avaiable on the latest release for 1.19.2 (as many of them were coded before the port).

This was partly brought about as in starting off 1.20 development, we wanted to finish removing some deprecated APIs; however those APIs were still in use in a few places requiring some work on 1.19 to finish removing them. Since an update that just cleans up APIs is pretty boring, we decided to add a few smaller features for another 1.19.2 update.

{% include toc.html %}

{% include update/start.html %}

## Ancient Tools

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

## More Shield Abilities

{% include update/image.html name="shield-bonk" alt="Bonking recipe can now be applied to a shield." %}

Ancient tools are not having all the fun in this update; shields got a couple of internal tweaks that allowed them to receive flinging, springing, bonking, warping, spitting, and zoom! All of these modifiers are charged up or used while you block with the shield, and when applicable actively upon releasing the shield. Use it to defend yourself until you can escape, or to launch an effective counterattack.

## Smelting Modifier

{% include update/image.html name="smelting" alt="Smelting modifier book page." %}

During the development of ancient tools, a lot of ideas for unique traits on ancient tools were considered. One idea went as far as getting coded before it ultimately got scrapped from the tool; that being the frying modifier for the frypan. The frypan ultimately ended up too similar to the battlesign so it got reworked into the melting pan, but its modifier was too neat to delete.

The smelting modifier reworks frying into an upgrade available to most tools. Sneaking and interacting opens an inventory with 1 slot per level of the modifier. Using the tool (for mining, as a melee weapon, as armor, etc.) will slowly cook the items inside, making your tool an effective furnace that doesn't require fuel. Or, just fill the slots with items and use the tool is a (really small) bag.

## Book Page Numbers

{% include update/image.html name="book-pages" alt="Smelting modifier book page." %}

Some time during the migration to 1.18, the internal UI changes led to us accidentally dropping book page numbers. They are now back, meaning you can see that the encyclopedia has way too many pages (and hopefully you better understand why we split the books into different volumes). This is technically a Mantle change, but it corresponds to this update.

Speaking of Mantle changes, another new change is the addition of the [book export command](/docs/commands/mantle#export-book-images), which automatically screenshots every page of a book. This command allowed us to create something pretty cool, [online books](/docs/books). While the books are just static images (meaning no tooltips or animations), they provide a super useful reference to book contents out of game, and even can be installed as an "app" on your phone.

{% include update/end.html %}

## Download

Download Tinkers' Construct ### for 1.20.1 at the following links:

* Not yet released.

You can also download many of these new features in ### for 1.19.2 at the following:

* Not yet released.