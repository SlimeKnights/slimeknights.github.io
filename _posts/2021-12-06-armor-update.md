---
layout: post
title:  "Tinkers' Construct Armor Update"
date:   2021-12-06 12:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/armor/cover.png
image_root: updates/tinkers/armor
---

Welcome to Armor in Tinkers' Construct 3. This blog post will give you a brief rundown on how to use it. After several months working on this on and off, the armor side of Tinkers' Construct 3 for 1.16.5 is finally ready to test.

*This blog was originally posted [on Imgur](https://imgur.com/a/tinkers-construct-3-armor-wkYPPzp) and [Reddit](https://www.reddit.com/r/feedthebeast/comments/ra0t9g/comment/hnfjfax/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Overview

{% include update/image.html name="cover" alt="All three armor sets on armor stands." %}

First, know this is not Construct's Armory, rather its a reimplementation of Travelers' Gear from 1.7.10. That means the armor pieces are created from a single material in the crafting table, but have a large number of modifiers to apply.

## Guidebook

{% include update/image.html name="guidebook" alt="Showing the armor sections in the guidebook." %}

As your guide into armor, check out the Encyclopedia of Tinkering. It contains a section on armor, and includes armor modifiers in the upgrades, defense, slotless, and abilities sections.

## Defense Slots

{% include update/image.html name="defense" alt="Defense modifiers shown in the guidebook." %}

You might be wondering at this point, what are defense modifiers? Defense modifiers are a new type of modifier slot similar to upgrades and abilities. The primary use of these slots is protection modifiers, which are comparable to protection enchantments.

You can also spend the slots on certain types of secondary defense, such as knockback resistance, health boost, or making piglins ignore you.

Each armor piece starts with a mix of defense and upgrade slots, which is the main factor differentiating the sets.

## Travelers

{% include update/image.html name="travelers" alt="Showcasing travelers gear in the overworld." %}

Now that the basics are out of the way, lets get some details on the sets. First off is the travelers gear. It is craftable in a crafting table from primarily leather and copper, making it an ideal first armor set as its readily available in the overworld.

Travelers is a balanced armor set with protection comparable to chain armor, though it can be modified to iron level protection. Each piece has 3 upgrade slots, 2 defense slots, and 1 ability slot.

## Plate Armor

{% include update/image.html name="plate" alt="Wearing plate in the nether." %}

Plate armor is the defensive armor set. It is created from primarily iron and manyullyn, meaning it requires nether access and blazing blood to create.

Plate armor is a high defense set with protection comparable to iron armor, though it can be modified to diamond or even netherite levels of protection. Each piece has 1 upgrade slot, 4 defense slots, and 1 ability slot.

## Slimesuit

{% include update/image.html name="slimesuit" alt="Wearing slimesuit in the end." %}

The final set of armor is the slimesuit. This armor is created from pouring liquid enderslime on various items in a casting basin, making it require end access. Specifics can be found in JEI, and the encyclopedia details repair items.

The slimesuit is a highly modifiable, high mobility set of armor. It has almost no defense, and each piece 5 upgrade slots, 0 defense slots, and 1 ability slot. However, what the slimesuit lacks in protection it makes up for in abilities. Specifically:

* Slimeboots start with the bouncy modifier and increase jump height.
* Slimeshell (leggings) are currently incomplete, but in the future will include pockets like the 1.7.10 backpack
* Slimelytra (chestplate) grants you wings to fly with. Its basically a modifiable elytra
* Slimeskull (helmet) has different effects based on the skull used in crafting it.

## Slimeskulls

{% include update/image.html name="slimeskulls" alt="Slimeskull listing in the encyclopedia." %}

For more information on the slimeskulls, there are 11 different currently supported skulls which each have a unique ability. Examples include spreading negative potion effects to enemies, attacking enemies with blaze fireballs, teleporting to dodge arrows, and exploding like a creeper.

The screenshot shows a section from the Encyclopedia of Tinkering which has full details on skulls available and repair items.

## Upgrades

{% include update/image.html name="upgrades" alt="Table of contents for upgrades." %}

As far as non-defense modifiers go, many upgrades that worked on melee or harvest tools now work on armor, such as diamond (increases armor value), netherite (increases armor toughness), and magnetic (constantly attracts items).

In addition, there are several new upgrades such as power (boosts attack damage of all melee tools), leaping (increases jump height), and springy (causes knockback against attackers). For a full list in game, check out the encyclopedia. Or check out the spreadsheet in the linked post.

## Abilities

{% include update/image.html name="abilities" alt="Abilty listing in the book." %}

To conclude, some highlights of armor abilities. Tool abilities such as gilded or unbreakable are available, along with many new ones such as bouncy (like slime boots, before, but a modifer), double jump, slurping (lets you drink fluids in your helmet for effects), and unarmed attack (lets you punch with both hands and modify the damage of an empty hand).

Most armor abilities are slot exclusive, based on each piece's speciality:

* Helmet: has a special keybinding to manipulate effects.
* Chestplate: can interact with the world using an empty hand.
* Leggings: not fully implemented, but in the future will have inventory related modifiers.
* Boots: Movement and jump based abilities, along with walking based abilities in the future.

{% include update/end.html %}

## Download

The Tinkers' Construct 3.3.0 update can be downloaded from:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" github-tag="3.3.0.307" curseforge="3551295" modrinth=false %}

Make sure to get the latest version of Mantle:

{% include update/download.html name="mantle" version="1.6.146" curseforge="3551291" modrinth=false %}