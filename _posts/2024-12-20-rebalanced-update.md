---
layout: post
title:  "Tinkers' Construct 3.8.4 for 1.19.2"
date:   2024-12-20 2:24:00 -0400
categories: posts
author: KnightMiner
image_root: updates/tinkers/3.8.4
---

3.8.4 is the latest release of Tinkers' Construct for 1.19.2. This update is mostly bug fixes and quality of life changes, but it also features a few larger features. This update is notably enough for me to call 1.19.2 fully stable; though it will still receive a few smaller features in the future.

You might be thinking, "isn't 3.8.4 an old update? it came out months ago." You would be correct, this is mostly me experimenting with using the Jekyll blog post system for these visual changelogs; want to have it all figured out before the next update actually releases. Plus, you get a cool table of contents on this version!

{% include toc.html %}

## What is next for Tinkers'

This update puts 1.19.2 in a state where I could happily move onto 1.20. Based on what I have heard from people, there is still plenty of demand for 1.20.1 so it is definitely the next target. We also recently made a large 1.18.2 bug fix update, which clears up most of the longstanding issues on that version. Its possible 1.18.2 will get 1 or 2 more bug fix updates but development is focused on 1.19 and 1.20 right now. 1.19.2 will receive at least 1 more content update with a few feature I threw together in some free time. This update may or may not come before the first 1.20.1 build.

So, what is new in this 3.8.4? Glad you are interested in hearing about it again. Lets start with some of the coolest new features.

{% include update/start.html %}

## Rebalanced

{% include update/image.html name="rebalanced-pickaxe" alt="Applying rebalanced (trait) to a pickaxe." %}

The first new feature is rebalanced (trait). If you are not familiar with rebalanced, its a modifier with 3 different variants, letting you apply 1 extra modifier slot to your tool. The variants let you add +1 upgrade, +1 defense slot, or +1 ability (adding an ability costs an upgrade slot though). This modifier can only be added once to each tool; attempting to apply a second time just replaces the previous application.

Rebalanced's trait variant is crafted from enderslime crystals and manyullyn, and will add a second copy of the traits from the main tool part on the tool, for instance a pickaxe will get a second copy of the pickaxe head trait. Many tools with no tool parts will also get an extra trait, typically a second copy of a trait that tool already starts with (such as scorching for flint and brick).

## Variant Display

{% include update/image.html name="variant-display" alt="Rebalanced (ability) and rebalanced (defense) showing their variant names in JEI." %}

Speaking of rebalanced, one thing that confused some people is it was difficult to tell which variant of rebalanced did which in JEI. The recipes in JEI now specify which variant is being applied to make that more clear.

## Tools in JEI

{% include update/image.html name="tool-building" alt="Tool recipes showing in JEI." %}

Speaking of JEI, tool recipes now show in JEI, to help players distinguish between the multiple methods of tool crafting that now exist. The recipes will mark tools that require the Tinkers' Anvil, plus supports recipe lookup and usage helping you figure out the uses of that leftover tool part from a chest.
Thanks to paypur for implementing this feature!

## Extract Modifier

{% include update/image.html name="extract-modifier" alt="Recipes for extracting modifiers using earth and ichor crystals." %}

Continuing on recipes, the modifier worktable now has recipes to extract modifiers using a slime crystal of the appropriate type and a wet sponge. Before, these recipes required an enderslime crystal (so it was end gated), unless you were willing to lose the modifier entirely. These new recipes should encourage more experimentation early game, as if a modifier does not work on one tool you can always move it to a different tool.

## Better Entity Melting

{% include update/image.html name="melting" alt="Melting a bat into night vision, a phantom into slow falling, and a piglin into gold." %}

Another improvement in this update is many new and improved entity melting recipes. With the removal of blood, an effort was made to grant many more interesting fluids that mobs would melt into, including iron from zombies, gold from piglins, and different potion types from many mobs. The full list can be explored in JEI.

## Stone Plating

{% include update/image.html name="stone-plating" alt="Creating stone plating using a part builder." %}

A common point of confusion with the new plate armor added in 1.19.2 is how to create the casts. While many players were able to pick up that you can now create sand casts in the part builder, it was not obvious enough that was an option. Plus, some players preferred to skip to gold casts without having to waste some metal to make their first cast. However, I did not want to remove the intentional design that plate armor requires casting to be created.

The solution is adding in stone plating as the first non-functional set of tool parts. Like other tool parts, they can be made in the part builder and used in creation of casts (both gold and sand). However, unlike other tool parts, you cannot actually construct plate armor from stone plating; its just too heavy and thick to create useful armor.

## Soulbound

{% include update/image.html name="soulbound" alt="Book page for soulbound, showing the echo shards recipe." %}

One last recipe related change is soulbound is now created using echo shards instead of a totem of undying. This fits a bit more thematically, and nicely ties in a new area in Minecraft into Tinkers' Construct.

## Soul Belt

{% include update/image.html name="soul-belt" alt="Book page for soul belt, a new ability modifier." %}

On a related note, there is a new modifier: soul belt. This leggings ability modifier allows you to make your entire hotbar persist upon death, including items that cannot normally receive soulbound (basically anything that is not a tinker's tool). It requires soulbound to apply, along with a soul compass.

## Swift Sneak

{% include update/image.html name="swift-sneak" alt="Recipe for the new swift sneak modifier." %}

Another new modifier is shift sneak. This is the same as the new enchantment found in the deep dark from 1.19.2. You can apply it using a sculk sensor (which is arguably slightly easier to find than the ancient city, but close enough).

## Enderclearance

{% include update/image.html name="enderclearance" alt="Encyclopedia page for chorus as a shield material, showing the new trait." %}

Chorus shields previously granted enderference, which prevented attackers from teleporting. While that trait was useful on melee weapons, it never quite suited shields. Now they grant enderclearance, which will randomly teleport the attacker away to give you some breathing room.

## Shield Display

{% include update/image.html name="shield-block" alt="Holding shields blocks less of the screen." %}

Speaking of shields, one minor fix that is worth discussing is the shield block location has been fixed. It was never intended to be so high up in previous 1.19 builds; that was a bug caused by the migration in some models.

## Cast Cost

{% include update/image.html name="cast-cost" alt="Cost tooltip for a gold pick head cast." %}

Finally, tool part casts now display their material cost in the tooltip. Small quality of life feature that is just insanely useful to have.

Before this change; part casts were just a normal item with no special behavior, this actually makes them have a special class. While this does not prevent you from creating a gold cast as just a regular item, you can access the new cast type as part of the JSON Things support under the ID tconstruct:part_cast. It requires setting a field part to the ID of the part for recipe lookups to get the part cost.

{% include update/end.html %}

## Download

If all this sounds great to you, you can download the update from all the usual places:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.8.4.50" curseforge="5735113" %}