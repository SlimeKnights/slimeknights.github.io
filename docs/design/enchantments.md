---
layout: page
title: Modifiers vs. Enchantments
description: This page describes a bit of the design philosophy behind Tinker's modifiers and how they differ from vanilla enchantments. Most of this page will be contrasting how the two sources of upgrading your tool differ, as it helps in designing modifiers (or potentially even enchantments), along with explaining why you cannot use both on a tool.
---
{{page.description}}

This page is based primarily on Tinkers' Construct 3 for Minecraft 1.16 and above, but it will be partly relevant to earlier versions.

{% include toc.html %}

## Main idea

The first difference between the two relates to how they are applied. Enchantments are random, giving the player more control as they gain more resources. 

### Enchantments - Controlled Randomness

Enchantments are a way to randomly improve your tool. Each enchantment gives you a unique effect, but you have little control over which enchantments you actually get on your tool. While enchantments are inherently random, later game mechanics allow you to control the randomness in order to get the best overall tool. Two examples are:

* **Grindstone**: The grindstone allows the player to unenchant a tool, which gives a chance to re-roll enchantments. While this does not give you a better chance of getting the enchantments you want, it means a poor set of enchantments does not require a brand new tool to be crafted.
* **Enchanted Books**: Enchanted books allow selectively adding or upgrading specific enchantments on tools. The process of obtaining enchanted books is still random, but with enough resources the player can easily mass produce books, giving a good chance of obtaining the enchantment they want.

### Modifiers - Choice and Variety

The primary idea behind modifiers is the player chooses the modifiers they get. Based on which items they use, different modifiers are applied to the tool in a predictable way. The player should never be relying on RNG to get the modifier they want. This removes the chance of a super lucky build that RNG grants, but also means the tools will feel more personalized.

In addition, modifiers encourage exploring more content in the game, as each modifier requires different items to craft. Instead of a single resource that allows enchanting all tools, there are different resource objectives for each upgrade, including ores, mob drops, dungeon loot, and crops. However, this also means some modifiers will be gated behind areas the player has not yet visited, while most enchantments can be obtained once the player unlocks enchanting.

## Cost

Both methods of upgrading have a different primary cost, as mentioned partly in the modifiers main idea.

### Setup cost

If the player is lucky and finds enchanted books as loot, they can start enchanting as soon as they find enough iron for an anvil (or find an anvil as part of world generation). Otherwise, they will be required to find diamonds both for an enchanting table and to mine obsidian. Later game, an enchanting setup can be upgraded through the use of bookshelves (costing a lot of leather), an anvil (costing a lot of iron), and a grindstone (costing a bit of stone). Progression in enchanting is overall branching, with using difference sources for different methods of improving tools.

For Tinker tools, the player has to spend a bit of wood to get the original tables, along with optional chests. Creating higher tier tools will require a melter or smeltery setup to use metal parts and to craft some modifier items, along with eventually a smeltery for creating alloys which are needed to make the higher tier station for making tools. Progression of a Tinker tool setup is overall linear, with a specific task needed to get an upgraded setup.

### Upgrading cost

Enchantments require experience to upgrade, which can be obtained from many sources, though all sources produce the same effect. In addition, enchanting will require the use of lapis lazuli, which is available either as an ore or as trades from villagers. For advanced enchanting setups, books will be required, needing a reliable source of leather. Finally, treasure enchantments are only available from special sources such as trading, fishing, or exploring. While available from many sources, only a single source is needed for an ideal enchantment setup, meaning once the player has access to a good source of enchantments and experience they are less likely to pursue other sources. For all sources, the chance of getting any specific enchantment is still random, making the largest cost time as you may have to perform a task many times to get the desired effect. 

For modifiers, each modifier has unique costs which vary per source. Each improvement requires a different source to obtain, requiring the player to branch out and target specific resources to improve. This means that the player may be gated from some modifiers due to not exploring an area or due to poor RNG during world generation. This also means that getting an idea tool requires the player to perform many different tasks, which while still potentially time consuming, it gives more variety in gameplay.

## Balancing

Both methods have a few mechanics to prevent tools from becoming too powerful.

### Conflicting enchantments

The primary way enchantments are balanced is through use of conflicting enchantments. Multiple enchantments that improve the tool in similar ways tend to conflict, meaning the player has to choose which boost they want. A good example of this is damage enchantments, the player has to choose whether they want to target all enemies equally, or get a stronger boost against zombies or spiders. This mechanic allows the game to have dozens of enchantments without all end-game tools being the same, as the player has a set of choices about which conflicting enchantment to apply (and whether to apply some enchantments at all). This also prevents a tool from being too powerful in a specific area, as after choosing an enchantment from that area, the remaining enchantments will improve other unrelated aspects of the tool.

### Modifier slots

Tinkers' Construct 3 balances tools based on modifier slots. Each tool has a limited total number of slots, requiring the player to choose how to fill the slots. Adding an extra level of sharpness may require fewer levels of knockback for instance, causing many of the best tools to excel at just a single task. For example, an ideal zombie killer sword will take as many levels of smite as possible, then fill the remaining slots with sharpness to get the most damage against zombies. However, doing so means losing out on other modifiers such as luck or knockback.

There are a few key exceptions which can be added without consuming slots. For those modifiers, they have to be balanced in other ways as otherwise every tool might as well get that modifier.

### Level caps

Both methods balance based on maximum levels, though there are some differences to how the max levels impact the method.

For enchantments, once you have a single level of an enchantment, there is little to stop you from getting the maximum level (apart from poor RNG). This means that any ideal tool with sharpness will likely have sharpness V by endgame.

For modifiers, this cap mainly forces the player to consider multiple different modifiers. Since you are only allowed up to 5 levels of sharpness, if you want to further increase damage you might branch out into fiery, piercing, or haste. An exception to this is slotless modifiers, which rely on the level cap to prevent from being too strong as the slot limit does not prevent them from being added.

One notable effect of this is while ideally one level of a modifier is roughly as strong as one level of an enchantment, modifiers need to be more concerned about how levels scale. An enchantment can have a strong first level and weaker later levels as there are few reasons the player would decide against more levels of an enchantment. With modifiers, the slot limit means the player independently decides whether to add each level of a modifier, as not adding it leaves room for a different modifier.

### Negatives

Enchantments also exist in the form of curses, which appear on some books obtained outside of the enchanting table to give some disadvantages to using the book. While this can give the player some interesting choices, they are rare enough the player may just decide to seek out another book instead.

Modifiers are always a choice to be applied, so any negatives the player has to choose to apply. As a result, the concept of curses does not fit the design, but some modifiers exist that provide both a positive and negative effect. This is the primary way to balance slotless modifiers, as otherwise all slotless modifiers will be applied to every tool.

### Scaling cost

One last way enchantment are balanced is through scaling costs to continue modifying (and even repairing) a tool. Early on, this discourages making many small changes to a tool as it reduces the number of times a tool may be practically repaired. Ultimately, tools may become too expensive to repair or make further changes, leading to a tool being retired and the player restarting the process of creating a good quality tool. This mechanic is rather controversial, but does add one more incentive to not try to get every enchantment on a tool. In practice, it often leads to the player finding alternative means of repairing a tool that lacks scaling costs, which strongly pushes players towards specific builds, limiting choice.

For modifiers, the cost is upfront and can be quite a bit more expensive initially. However, no scaling cost mechanic is utilized, meaning a single tool can be kept though the lifetime of the mod. This is primarily as scaling cost pushes the player towards upgrades that reduce durability loss, which reduces the overall choice. Tinkers wants the player to be willing to make a tool that is really strong but will break fast and not be afraid of the tool not being usable for long in the world. As a result, scaling cost is one mechanic Tinkers has chosen not to mirror.

## Using both

A common question we get asked about Tinkers' Construct tools is "Why can't I use both enchantments and modifiers on a tool?". There are two main reasons, gameplay and technical.

### Gameplay

Modifiers are primarily balanced through a limit in slots, while enchantments are balanced through conflicting enchantments, as mentioned above. Being able to use both would bypass one or both of these restrictions. On a modifiable tool for instance, being able to add enchantment would allow the tool to continue to get stronger after already reaching its slot limit, which will lead to a tool that is simply too strong. On the other hand, adding modifiers to an enchantable tool will lead to the tool having some "conflicting" upgrades, such as multiple sources increasing the tool damage.

### Technical

Modifiers require a lot of additional gameplay hooks, meaning it is non-trivial to simply apply them to any tool like enchantments can. In addition, due to the way Minecraft is coded, enchantments such as silk touch or fortune are nearly impossible to replicate without actually enchanting the tool. However, applying the enchantments leads to some unintended side effects, such as being able to duplicate XP using the grindstone. The solution we came up with is only applying the enchantments right before they are needed and removing it after, such as applying silk touch right before a block is broken. As a result of this logic, the tool will lose any former enchantments, not just silk touch, which existed before the action was performed. This is something we could potentially work around, but due to the gameplay argument we decided it is not worth it.

### Why not make enchantments into modifiers?

While you could in theory balance enchantments on a tool as modifiers, gameplay wise, we do not know what items are needed to apply any particular enchantment. Enchanted books are certainly an option, but that is a pretty big progression break from the rest of Tinkers. In addition, as mentioned above in the technical argument, there would still be issues getting them to work properly without producing an XP duplication with the grindstone. Overall, we think its easier to just code a second copy of the enchantment as a modifier, as we have enough hooks to implement most desired behaviors. We do this for most vanilla enchantments, and other mods can choose to either do so or leave it up to addons to add compatibility.

Making a modifier into an enchantment is also possible, though since Minecraft has a lot fewer hooks for enchantments than we add for modifiers, it would be difficult to port every modifier over. We have no plans to add all modifiers as enchantments, but there are mods that exist with enchantments or tools similar to many of our modifiers.