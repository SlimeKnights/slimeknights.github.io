---
layout: page
title: Tinkers' Construct 3 FAQ
description: This page covers frequently asked questions about Tinkers' Construct 2, which is the current version of Tinkers' Construct, first released for Minecraft versions 1.16. This FAQ not cover general questions about SlimeKnights mod development.
---
<div class="hatnote" markdown=1>
For questions related to a suggestions, see [Common Suggestions](../common-suggestions).
</div>

{{page.description}}

{%include toc.html %}

## How do I craft X?

Download [Just Enough Items](https://www.curseforge.com/minecraft/mc-mods/jei). It allows viewing nearly all recipes in the mod. This is the best way to determine recipes as they can be changed by modpacks.

Note that you can view recipes for tool parts (including in the part builder and casting), melting recipes, alloying, and entity melting. In addition, you can look up modifier recipes by looking up usage on a tool, or view all recipe tabs.

## Where did X go?

Tinkers' Construct 3 has many many gameplay changes, and is also incomplete. Refer to [What's New](/docs/whats-new) and [Removed Features](/docs/removed) for a summary of what changed in Tinkers' Construct 3, and [Roadmap](/docs/roadmap) for a summary of what is currently complete and what is planned for future updates.


## Tool Crafting

The following sections cover common questions on how to create tools.

### How do I make the stencil table and tool parts?

The stencil table was merged with the part builder in an interface similar to the stonecutter. This means you can craft tool parts using only the part builder instead of needing two blocks.

### What are upgrade or ability slots?

Modifiers are divided into 4 major types:
* *Traits*: Inert abilities based on the tools construction. Most small tools gain 3 traits from the materials, and large tools 4 traits. In addition, some tool types have additional traits, such as cleavers granting beheading or pickaxes piercing.
* *Upgrades*: Classic type of modifier slot from previous versions; many classic modifiers such as quartz and haste use this slot type. Most small tools start with 3 upgrade slots, large tools start with 2 upgrade slots, and more can be added through other modifier types.
* *Ability*: More limited slot slot type for stronger, more exclusive modifiers such as silk touch, autosmelt, or unbreakable. Most tools start with 1 ability slot, and an additional ability slot can be added to all tools though a slotless modifier.
* *Slotless*: Modifiers that can be added to a tool through recipes. Unlike upgrades or abilities, there is no limit to the number of slotless modifiers a tool may have.

### How do I add more modifier slots?

There are 5 ways to get additional upgrade slots:

* All small tools start with 3 upgrade slots, as opposed to large tools which start with only 2.
* Adding a book an quill, a music disc, a mob head, or a end crystal to a tool will each give you +1 upgrade slot for a total of +4 upgrade slots.
* Rose gold grants +1 upgrade slot per rose gold tool part
* The gilded modifier uses a golden apple to trade 1 ability slot for 2 upgrade slots. This can be done multiple times.
* The rebalanced modifier grants an extra slot type of your choice, terms and conditions apply.

Ability slots can only be increased in 2 ways: the draconic modifier and the rebalanced modifier. Note draconic has two recipes.

This means most melee, harvest and ranged tools have a maximum of 10 upgrade slots, 2 ability slots, and rebalanced's bonus. This in total grants up to 15 upgrade slots if gilded is used.

### How do I add luck to my tool?

First, refer back to [How do I craft X?](#how-do-i-craft-x) and actually use JEI to look up recipes. If you are still confused, check JEI for usages of lapis blocks, the recipe will show under the modifiers tab. There is a different recipe for each level, so its easiest to refer to JEI.

### How do I make a tool unbreakable?

Unlike in 1.12 where reinforced V would make a tool unbreakable, in 1.16+ unbreakable is a modifier that requires netherite, reinforced V, and an ability slot to apply. Check JEI for the recipe, and for other recipes that increase upgrade slots so you can reach the 7 upgrade slots needed for reinforced V and netherite.

### What is the best tool?
<div class="hatnote" markdown=1>
See also: our [longer guide](../best-tool) on how to create a good tool.
</div>

To start, it is important to emphasize the fact that Tinkers' Construct by design does not have best tools. We give you a ton of options with different advantages and disadvantages to build tools, and it is up to you to choose which options are the best for you and your goal. Ultimately, its best instead of aiming for the best tool to just try and make a good tool; you can always improve it later to make a better tool. Also, do not be afraid to make mistakes; overall its pretty hard to make a bad tool unintentionally, so just about any design you make should be good.

If you are not interested in exploring these options, you are honestly better off playing a different mod. The whole point of Tinkers' Construct is for you to build tools; why install a tool building mod if you are not interested in building them? If you are willing to explore the mod, we have a [longer guide](../best-tool) you can follow.

### What do staffs do?

Staffs are essentially a blank slate to apply interaction ability modifiers. Useful modifiers for staffs typically falls into one of three categories:

* **Ranged/projectile** - these modifiers make use of the staffs ranged stats, which can be upgraded with power and quick charge. Examples include spitting, flinging, springing, bonking, and warping.
* **Defense/passive boosts** - these modifiers provide either active or passive defense. Includes protection modifiers and blocking.
* **Close range** - these modifiers apply directly to an adjacent block, and often become AOE when applied with expanded. Examples include splashing, tilling, firestarter, and bucketing.

Each of the different slimestaff variants is best suited to different builds. In addition, the melting pan (ancient tool) is considered a staff and can use most staff modifiers.

### How do I fill my tool with fluid?

You can fill a tool with fluid in the same ways you fill a bucket or copper can with fluid:

* Right click on a tank or drain with the tool.
* Left click on a fluid in a UI.
* Place the tool in the bucket slot in the smeltery or foundry UI.

Buckets and copper cans can also be filled using a casting table, which tools do not support.


## Mod progression

The following sections cover questions related to progressing through the mod through stronger technology and rarer resources.

### How do I craft large tools like the hammer? Where is the tool forge?

The tool forge was replaced with the Tinker's Anvil. Combine any 3 metal alloy blocks and 4 seared blocks to create an upgraded tool station that can craft all broad tools.

### How do I craft a smeltery controller?

First, create a seared melter and place it above either a seared heater or a seared tank filled with lava. Next, use it to melt 4 ingots worth of molten copper, and pour those on seared bricks (or seared heater in 1.18.1 and earlier) in a casting basin. Note after melting the copper, you can immediately reuse the heater you used to melt the copper. 

### How do I get cobalt ore?

Cobalt ore is found in the nether at lower elevations. You need a tool with a mining level level of diamond or higher to mine it. This can be accomplished using materials such as tinker's bronze, pig iron, slimesteel, and nahuatl. Alternatively, you can use the diamond modifier to boost a tools mining level.

### How to I craft manyullyn or other nether alloys?

In order to craft manyullyn, you need to alloy cobalt with molten debris. Melting ancient debris and alloying manyullyn, hepatizon, or queens slime requires use of a hotter fuel such as blazing blood in place of lava. For best results, either create a second smeltery or remove all lava from the smeltery.

### How do I get blazing blood?

There are three ways to get blazing blood:

* Melt a blaze in a smeltery or foundry. You can do this either by carrying the blaze with tools such as the piggybackpack, or by building a smeltery or foundry under a spawner. Note you cannot have the spawner in the smeltery, it must be outside the structure.
* Apply the melting modifier to a tool using the recipe shown below, then use it to attack blazes. This will cause the tool to fill with blazing blood, which can then be used on a seared tank or a smeltery drain to empty it.
* When bartering with piglins, they have a chance to offer a scorched lantern filled with blazing blood. This lantern can be emptied into any regular tanks

![Melting modifier](/assets/images/docs/melting.png)

### How do I get blazing blood out of my smeltery?

You can either use a bucket on the drain, or use a faucet to fill either a casting table containing a bucket or a tank.

### How to I use the alloyer?

The alloyer must be place above a scorched tank or a heater. Additional tanks or melters must be placed on the sides or top. The side and top tanks are filled with alloy inputs, and the alloyer itself will be filled with the alloyed fluid.

![Alloyer](/assets/images/docs/alloyer.png)

### What is the foundry? How do I build the foundry?

The foundry is an alternative to the smeltery for melting items and entities. Unlike the smeltery, it cannot alloy, however ores melted in the foundry produce byproducts, and the structure has a higher capacity for fluid.

To build the foundry, you need to use scorched blocks instead of seared blocks, and the structure must include the corners, as shown in the image below.

![Foundry structure](/assets/images/docs/foundry.png)

Also, because people keep assuming things we never said, the foundry does not have to be build in the nether, nor is there anything stopping you from building a smeltery in the nether. It is a smeltery alternative.

### Why can't I cast using the scorched casting basin?

The scorched casting table and scorched casting basin both require a cast item to perform a cast. This makes them easier to automate for "composite recipes" such as creating seared stone using clay on cobblestone, as you can guarantee you won't accidently cast terracotta. If you do want to cast using "no cast", you can use either gold bars (for the scorched casting table) or gold platforms (for the scorched casting basin).

This behavior is different than the seared casting blocks, hence why it is highlighted in both [the book](/docs/books/1.20/fantastic-foundry#alloyer) and their tooltips.


## Addons

The following sections cover questions related to addons that are commonly mistaken as part of the mod.

### Why won't my tools level up? Can I play tool leveling for Tinkers' Construct 3?

Tool leveling was added by an addon, it was never part of the base mod. The mod is not updated to 1.16+, as its main developer is no longer active. The current Tinkers' Construct team has no plans to update the mod nor add leveling to the base mod. That said, there are several addons that add similar functions on the latest version.

Since 1.16, there are many ways to get more modifier slots, so there is no need for more slots from leveling. Between starting slots, material traits, slotless modifiers, and turning ability slots into upgrades, its possible to get as many as 15 upgrade slots without any addons. Do you really need leveling to add even more than that?

### What does this addon feature do?

While many of us are knowledgeable about base mod features, and some of us have played a lot of addons, we do not know any addon. You are free to ask, just know we might not know the answer. You will usually get better answers on the addon's discord.


## Configuration

The following sections cover questions related to configuring Tinkers' Construct or adding more content.

### How do I configure slime islands?

As of 1.18.2, datapacks have a lot more control over structures. You can find our placement settings for islands in the mod JAR, and copy them into a datapack to replace our settings. __To disable, make the structures array empty__. See [The Minecraft Wiki](https://minecraft.wiki/w/Structure_set) for more info, such as how to make them more or less common.

### What mods are compatible with Tinkers?

Any mods using the Forge system for fluid pipes will automatically work with the smeltery, foundry, tanks, faucets, and channels. In addition, any mod that adds a common ore (copper, tin, lead, aluminum, etc.) will get melting and casting compatibility for the ore, and some of those will also get tools. These days the question is really not what mods are compatible but what mods are not compatible, as Forge lets most mods work together rather seamlessly. 

Tinkers specifically has special recipe compatibility for mods such as Ceramics, Immersive Engineering, and Create. In addition, mods such as Thermal Foundation, Immersive Engineering, and MineColonies have special compatibility for Tinkers.

### What mods do I need to get all the materials?

While it is true we have compatibility materials for common ores, *none of them are required to play the mod*. We designed Tinkers' without the compatibility materials, and just added them after the fact to fill space from other mods adding ores that are not usable in tools. More ores simply to give you more materials is just clutter; add other mods if you want to play that mod, not to get 1 more material option. If despite our recommendation you still want the materials, any mod that just adds more ores will get them for you; consider Thermal Foundation as an option.

Instead of pursuing getting every single compatibility material, instead consider installing addons that give you more material options from mods you already have installed. Alternatively, consider [designing your own material](/docs/guides/material) based on something already in your pack; you can pull traits from the disabled materials to make material design easier.

