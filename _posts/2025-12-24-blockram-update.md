---
layout: post
title:  "Tinkers' Things Blockram Update for 1.20.1"
date:   2025-12-24 22:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/blockram/blockram.png
image_root: updates/tinkers/blockram
---

In case you missed it, Tinkers' Construct received the [Throwback Update]({% post_url 2025-12-23-throwback-update %}) yesterday, which added many improvements notably including ranged weapons. This small Tinkers' Things update adds a few more example tools based on new capabilities.

Honestly, this update was nearly too small for a blog post, I mostly made it as its easier to do the download links using our blog.

{% include toc.html %}

{% include update/start.html %}

## Blockram
{% include update/image.html name="blockram" alt="Throwing a blockram at a skeleton." %}

The blockram is a new ancient tool added by Tinkers' Things. Yes, its now possible using purely JSON to add a new ancient tool, as the one missing piece (letting monsters spawn with it) is now JSON controlled in Tinkers' Construct.

Blockrams are a throwing and returning tool that can break any block, but cannot mine using left click. They are also functional weapons, acting as a form of boomerang. You can find them in the hands of skeletons (who melee with them), in stronghold chests, or as gifts from toolsmith villagers.

## Magmaskin

{% include update/image.html name="magmaskin" alt="Various tools and armor made of magmaskin." %}

Magmaskin is the latest new tool material, acting as the example composite material. It is crafted by pouring magma on leather, and can be used to construct armor maille, travelers curiass, tool bindings, and bowstrings. It's trait overworked boosts overslime received from all sources (which allows it on parts not supported by plated slimewood).

This replaces veinline, our previous composite material as it's trait is eclipsed by the newer ancient hide bowstrings and maille.

## Ranged Silky Cloth

{% include update/image.html name="silky-fletching" alt="Firing silkibound arrows." %}

Silky cloth has existed in Tinkers' Things before as our part builder example material. Now in addition to crafting armor maille, its available as an arrow fletching and bowstring material (giving us an example ammo material). It's trait is silkibound, which limits the directions you can fire in while boosting power (its a lot like amethyst or amethyst bronze's trait, but on different parts).

{% include update/end.html %}

## Download

The new Tinkers' Things 1.3.3 update can be downloaded at the following:

{% include update/download.html name="tinkers-things-json" github="TinkersThings" modrinth="tinkers-things" version="1.3.3" curseforge="7375264" %}