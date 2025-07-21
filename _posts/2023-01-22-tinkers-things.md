---
layout: post
title:  "Introducing Tinkers' Things"
date:   2023-01-22 12:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/tinkers-things/tinkers-things.png
image_root: updates/tinkers/tinkers-things
---

This post is a double feature, both an update of Tinkers' Construct and a new addon for the mod made possible by this update.

Being able to make a mod like Tinkers' THings is a goal I have been working towards for a long time. In 1.18 I moved most of the tool logic for Tinkers' Tools to JSON, so you can create not just materials but also modifiers and redesign tools using datapacks. Unfortuantely, due to the way tools work internally I cannot add new tools with datapacks (as datapacks load too late to add items, and each tool needs to be a unique item to use tags).

I later discovered a mod called [Json Things][json-things] by gigahertz. This mod adds in Thing Packs, a way to register items, fluids and alike using Json Files. By combining that with Forge low code mods (mods that do not contain any java code), you can actually create a pretty unique Tinkers' Construct addon using datapack knowledge. If you ae interested in creating such an addon yourself, I wrote [a wiki page](https://slimeknights.github.io/docs/json/json-things/) explaining the new types we add.

Since learning by example tends to be more beneficial, I wrote an addon called Tinkers' Things. This mod can be thought of as an expansion pack for Tinkers' Construct: while nothing in it is essential for playing the main mod, the features in the addon enhance the mod experience. This mod also serves as an example of both how to make a Tinkers' Construct datapack (a question we get a lot) and how to make a Tinkers' Construct thing pack.

*This blog was originally posted [on Imgur](https://imgur.com/a/tinkers-things-small-tinkers-construct-update-FRYAflO) and [Reddit](https://www.reddit.com/r/feedthebeast/comments/10iu7jl/comment/j5gii5m/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Tinkers' Construct

{% include update/image.html name="cover" alt="Several features in this update showcased." %}

Most of the Tinkers' Construct update is bug fixing and internal changes, but there are a few gameplay features that will be covered in the next screenshots

### Renaming Tools

{% include update/image.html name="renaming" alt="Renaming armor as golden is applied." %}

To start things off, an old well loved feature has made a return. You can now rename tools in our tables. While you could use vanilla anvils before, that made the name sadly italic. In the Tinker Station, you can name a tool on creation, while the anvil allows you to name a tool during any modification.

This screenshot also shows off another feature: any armor with the golden modifier can now be repaired using gold. This might be enough to convince you to put it on more than one piece. This will be most useful on plate armor, as gold tends to be easier to come by than cobalt.

### Modifier Crystals

{% include update/image.html name="modifier-crystals" alt="Applying haste as a crystal to a tool." %}

The first feature is modifier crystals. These are an item that acts a lot like enchanted books. If you obtain one, you can use it to apply a modifier without paying its regular item cost. You still have to pay the regular modifier slot costs, e.g. haste crystals require an upgrade slot to apply and are capped at 5.

One way to obtain these crystals is cheating them in from JEI, making testing modifiers easier. There are also a couple of ways to get them in survival.

### Extracting Enchantments

{% include update/image.html name="extract-enchantment" alt="Extracting enchantments from a book." %}

The first way to obtain them is by extracting enchantments. Using the modifier worktable, an enchanted book or tool can be placed with a slime crystal to pull enchantments off as modifiers. The type of crystal and additional item requirement will vary based on the enchantment, with skyslime for upgrades, earthslime for defense, and ichor for abilities. More details are in JEI.

By default, we support vanilla enchantments along with enchantments from several mods such as Cyclic and Encorselation, making this a viable method of getting modifiers in larger packs. It is controlled by JSON, allowing packs to add more enchantments to the list or outright disable the feature.

### Extracting Modifiers

{% include update/image.html name="extract-modifiers" alt="Extracting modifiers from a tinkers tool." %}

Another method to get modifier crystals is to extract them from a tool. This works the same as modifier removal with venom or sponges, except you get the modifier back to apply to another tool later. The required items to perform this makes it an end game tinkering technique.

### Renaming Tools

{% include update/image.html name="smelt-dirt" alt="Creating a slime crystal from slimy dirt." %}

You might be concerned at this point about a lack of slime crystals, as slimy geodes are not always easy to find (and some modpacks sadly disable them). Luckily, you can now craft slime crystals using a twist on the classic recipe: blasting slimy dirt. This works for all 4 slime crystal types.

### Cast Slime Dirt

{% include update/image.html name="cast-dirt" alt="Casting slime dirt." %}

Oh, don't have slimy dirt? Well, that can be casted now as long as you have access to liquid slime. Unfortunately will not work to get you ichor dirt as liquid ichor is gated behind a future feature, but the other 3 types are available.

### Seared Variants

{% include update/image.html name="seared-variants" alt="Smeltery using multiple variants of seared bricks." %}

Continuing with smeltery stuff, the controllers, drains, chutes, and ducts for both smelteries and foundries now support any seared/scorched block variant for the texture. Should give a bit more flexability for decorating with them. The models were also made to pop slightly to enable this change.

### Depth Strider

{% include update/image.html name="depth-strider" alt="Recipe for depth strider from JEI." %}

In related news, we now support depth strider on our boots. This is made possible by a nice recent forge feature, and also allows you to add modifiers for many modded enchants pretty easily with datapacks. We will not guarantee all enchantments will work as modifiers, but we expect a majority of them will.

### Renaming Tools

{% include update/image.html name="renaming" alt="Renaming armor as golden is applied." %}

## Tinkers' Things

{% include update/image.html name="tinkers-things" alt="Showcaing various Tinkers' Things features." %}

Datapacks are a nice transition into the major feature of this update: Json Things support! If you are unfamiliar with Json Things, it is a mod that lets you add new items, blocks, fluids, and alike in thing packs, which are basically datapacks that are loaded on game load. And as a bonus, they also can be loaded from mod jars. By combining this with Forge's low code mods (mods that only contain datapacks and resource packs), you can create Tinkers' Construct addons with a pretty good chunk of content without writing any Java code!

To demonstrate the flexibility of this and to serve as example Tinkers' Construct thing packs, I wrote an addon called Tinkers' Things. This addon is written entirely in JSON files, and in addition to being a survival friendly mod, it serves as an example of both datapacks and Tinkers Json Things support. The rest of the images cover features in that addon.

### Tinker's Chisel

{% include update/image.html name="chisel" alt="Tooltip for a tinker's chisel." %}

The first feature in this addon is the Tinker's Chisel. The chisel is an early game pickaxe, crafted from flint and sticks in a crafting table. It notably can be crafted without any tool parts and without a pickaxe, making it perfect for getting that first bit of stone before you construct your proper tools. Its also great in later game as it has the exchanging modifier, letting you swap mined blocks for the block in the offhand.

The chisel is an example of a simple no parts tinker tool added via Json Things. It also has some datapack examples for modifiers and modifier recipes as you can upgrade the tool with copper to raise its mining level.

### Shovel

{% include update/image.html name="shovel" alt="Using a shovel to mine dirt." %}

You are not limited to tools that have no tool parts though. This next tool, the shovel, is created from tool parts in the anvil. Like its vanilla counterpart, it has the ability to create paths and mine dirt. This tool uses existing tool parts to craft, but is still a good example for the JSON required to add a standard tool.

Now, Tinkers' Construct already has two tools for mining dirt, the mattock and the pickadze. While the shovel cannot mine as many blocks effectively as either of those tools, it makes up for it by only needing 2 tool parts to create, and providing 5 upgrade slots (2 more than most small tools).

### Halberd

{% include update/image.html name="halberd" alt="KnightMiner holding a halberd." %}

This addon also includes a weapon, the halberd. Despite the axe head, halberds are not good at chopping wood at all. Rather, it is an effective reach weapon, letting you attack mobs from an extra 2 blocks away. Perfect for mounted attacks.

The halberd serves as another tool example, specifically a broad tool that requires the anvil to create.

### Blowpipe

{% include update/image.html name="blowpipe" alt="Fighting a spider with a blowpipe." %}

Beyond harvest tools and melee tools, you also can use Json Things to create ranged weapons. The first weapon in this addon is the blowpipe. Blowpipes serve as an early game arrow launcher, as they do not require any string to craft (just bamboo and paper). Later game, they have several unique modifiers (more JSON modifer examples!) to inflict potion effects on the target of your "darts".

### Shortbow

{% include update/image.html name="shortbow" alt="Aiming a shortbow." %}

This mod also has a multipart ranged weapon, the short bow. Shortbows have a bit less velocity and accuracy, but make up for it by allowing you to run at nearly full speed while drawing back the bow. This takes advantage of a feature that will be used in the future for Tinkers' Construct traveler's shield.

### Hematite

{% include update/image.html name="hematite" alt="Many hematite parts in JEI." %}

Beyond tools, you also can add custom materials without writing java code. The majority of material creation is already controlled by datapacks, but one limiting factor was being unable to add new fluids or add the items to repair the material. Both of these are things addable by Json Things.

The screenshot shows two materials: hematite and veinline. Hematite is a tier 4 alloy created from blood, debris, and obsidian. It has a unique trait that gives you 2 upgrade slots but some pretty big conditional attack damage and mining speed penalties. Hematite provides examples of alloys, casting, melting, and toolpart casting/melting.

Veinline is a composite of hematite on string. It only grants 1 upgrade slot at a small loss to accuracy, useful as there are no rose gold bowstrings. Veinline is the example of how to add a composite tool material.

### Large Repair Kits

{% include update/image.html name="large-repair-kit" alt="Large repair kit repairing a vein hammer." %}

I had a hard time deciding on an example tool part, as while I wanted to show how to add the recipes, I did not want a part used in only one tool. I ended up with a compromise, a custom repair kit. Repair kits show you how to add the proper recipes for casting, compsite, and part builder, just like a regular tool part.

Large repair kits specifically cost 8 ingots to create, and work like repair kits to repair 9 ingots worth of durability. Compared to the regular repair kits (2 ingots for both), these give a bit of a discount and are nice for tools with a lot of durability.

### Laminar Armor

{% include update/image.html name="laminar" alt="A new set of laminar armor." %}

The final feature added by this addon (and the last new type of Tinkers' Thing you can add) is laminar armor. This armor is a mid game defensive set created from slimesteel and wool. It features overcast, making it easy to boost its durability with overslime.

Defense wise, it is a bit below plate armor, but has 5 defense slots and 2 upgrade slots. That comes at a cost however, the armor starts with 0 ability slots.

### Decorating Laminar

{% include update/image.html name="embellish-laminar" alt="Laminar dyed and embellished." %}

The armor also has the unique feature of supporting both dyeing (for the wool) and embellishments (for the slimesteel) to fully personalize the armor. You have the option in addons to support one or both with any custom armor sets.

{% include update/end.html %}

## Download

### Tinkers' Construct

The Tinkers' Construct 3.6.2.92 update can be downloaded from:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.6.2.92" github-tag="3.6.2.92" curseforge="4360093" %}

### Tinkers' Things

To download Tinkers' Things (requires [Json Things][json-things]:

{% include update/download.html name="tinkers-things-json" github="TinkersThings" modrinth="tinkers-things" version="1.0.2" curseforge="4360106" %}

[json-things]: https://www.curseforge.com/minecraft/mc-mods/json-things