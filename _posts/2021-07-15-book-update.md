---
layout: post
title:  "Tinkers' Construct Book Update"
date:   2021-07-15 12:00:00 -0400
categories: posts
author: KnightMiner
image_root: updates/tinkers/book
---

Welcome to the visual changelog for the latest Tinkers' Construct Alpha, just released today!

*This blog was originally posted [on Imgur](https://imgur.com/a/tinkers-construct-alpha-daggers-books-qeBzSKn) and [Reddit](https://www.reddit.com/r/feedthebeast/comments/okn6h9/tinkers_construct_alpha_daggers_and_books/). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Guides

### Advancements

{% include update/image.html name="advancements" alt="New advancements for the smeltery track." %}

Going to start things off with some advancement updates. A few more advancements were added which should help guide players into getting started with the mod.

### New Books

{% include update/image.html name="mighty-smelting" alt="First couple of pages in mighty smelting." %}

We get that advancements alone are not the best tutorial. That is why ShinyPorygon has been working hard during these last couple alphas on updating our books to the latest changes in 1.16, with the help of DarkAngel, DaLumma, alexbegt, mDiyo, and myself KnightMiner. Also thank Falkor for the new book item textures.

This alpha includes full content for Materials and You, Puny Smelting, Mighty Smelting, Fantastic Foundry, and the Encyclopedia of Tinkering. So if you were waiting on the books to try out the new alphas, now is your chance.

### Multiblock Debug

{% include update/image.html name="multiblock-hints" alt="Showing the erroring block when constructing a foundry." %}

Speaking of documentation, don't you just hate when you are building a smeltery and you don't know why its not working? This new alpha has got you covered. When the smeltery or foundry fails to form, it will try to highlight the block causing issues in red, and you can right click the controller to get a message potentially explaining the problem.

In addition, for valid smelteries, you can see a yellow highlight on blocks preventing the smeltery from adding another layer as long as you are holding any of our books

### Modifier Textures

{% include update/image.html name="modifier-textures" alt="Modifier textures on swords and cleavers." %}

Another collaborative change on this alpha is the new modifier textures. RXCcrafter has added textures for many modifiers as part of this alpha. There are still a few modifiers not yet complete, but many of the classics and some new modifiers will now show up on tools.

## Weapons

### Daggers

{% include update/image.html name="" alt="" %}

Starting off the content changes for this alpha is a new tool, the dagger. It is lightweight and fast, dealing low damage at high speed, and has the added bonus of being able to be used in both the main hand and the offhand, allowing dual wielding of daggers.

### Dual Wielding

{% include update/image.html name="dual-wielding" alt="Dual wielding a sword and pickaxe." %}

What, you heard dual wielding and got excited, wanting to dual wield your sword and your battle pickaxe? Hmm...

Alright, how about a new dual wielding modifier? At the low cost of one ability slot, some purple metal, slime from the sky, and a couple of magic shell, your weapons can now be used in both hands. 

*fast small print voice* Offer only applies to small tools, and the modifier must be applied to both tools. Batteries not included.

### Offhanded

{% include update/image.html name="offhanded" alt="Using a broad tool and a shield." %}

Fortunately, small tools do not get all the fun. The new offhanded modifier will allow you to wield broad weapons such as the hammer, broad axe, or cleaver in just one hand, opening up your offhand to use with a shield or the new dagger. Also works outside of combat, in case you want to carry torches with your fancy hammer.

### Padded

{% include update/image.html name="padded" alt="Crafting padded on a sword." %}

In addition to dual wielding and offhanded, this alpha adds in padded, which reduces knockback from your tools. Why would you want reduced knockback? Well, what if your enemy keeps running away and you want them to, not run away?

Perfect for keeping enemies mostly still as you hit them with two daggers in rapid succession. So perfect that all daggers start with a single level of padded.

## Modifier Changes

### Recipe Tweaks

{% include update/image.html name="recipe-tweaks" alt="New recipe for pathing." %}

In addition to new modifiers, a couple of modifiers got tweaked recipes, including reach, pathing, stripping, tilling, and autosmelt. You can look up the new recipes in JEI, or in one of puny smelting, mighty smelting, or the encyclopedia of tinkering.

### AOE Shearing

{% include update/image.html name="aoe-shearing" alt="Shearing multiple sheep at the same time." %}

Shearing just got better! On tools with expanders or large tools, shearing now works in AOE, shearing not just one entity, but all within an area!

### Modifier Rarity

{% include update/image.html name="modifier-rarity" alt="Diamond increasing the rarity in the tool name for a sword." %}

One last modifier change is that certain modifiers, such as diamond, emerald, netherite, and shiny, now change the rarity of the tool, causing the name to show in another color. Makes your tool both stronger and flashier!

### JEI Appearance

{% include update/image.html name="shiny-jei" alt="JEI visualizing modifier appearance." %}

JEI also has slightly improved display of modifiers, so not only will modifier textures show, but modifiers such as shiny show the tool glowing.

## Slime

### Slimy Wood Material

{% include update/image.html name="slimewood-crafting" alt="Crafting slimewood in the part builder using greenheart." %}

Slimewood is now able to be crafted not just from pouring green slime on wood, but also using any of the woods from Tinkers' slime saplings. In addition, patterns are better sorted in the UI.

### Slime Cake

{% include update/image.html name="slime-cake" alt="All 5 slime cake variants." %}

What, you still want more? This alpha not big enough for you yet? Fine, how about cake? Slime cake is a variant of cake created with slime instead of milk, which grants potion effects when eaten. This replaces slime drops as the way to eat slime, as drying racks were moved to another mod.

### Slimewood Signs

{% include update/image.html name="signs" alt="Signs made of slimewood." %}

Still want more? Well, how about signs? All variants of slimy wood now can be used to create signs, like their vanilla counterparts.

Additionally, as the signs say, this alpha has major API changes, so if you are playing with any addons to Tinkers, chances are this build broke them. On the bright side, a breaking change like this should not happen again, and it was one of the remaining changes before a beta release (where the API will remain stable)

{% include update/end.html %}

## Download

The Tinkers' Construct 3.3.0 update can be downloaded from:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" github-tag="3.1.0.231" curseforge="3389395" modrinth=false %}

Make sure to get the latest version of Mantle:

{% include update/download.html name="mantle" version="1.6.115" curseforge="3389377" modrinth=false %}