---
layout: post
title:  "Tinkers 1.20 Beta - Byproduct Update"
date:   2025-03-02 23:00:00 -0400
categories: posts
author: KnightMiner
image_root: updates/tinkers/byproduct-update
---
Tinkers' Construct just had a beta released for 1.20.1. This means we are ready to call the API safe for addons to use, but are not yet ready to call the update content stable. If you are making a modpack, expect to need to keep an eye on the changelogs for balance changes and alike. Check out the [the update primer]({% post_url 2024-12-31-1.20-update-primer %}) for a guide on updating.

In addition to stabilizing the API, this new update adds quite a few of our plans for 1.20.1 content including a much needed fluid effect revamp and many more uses for foundry byproducts. We are currently unsure how much more content from the backlog will target 1.20.1 until we move onto the next major update.

{% include toc.html %}

{% include update/start.html %}

## New materials

The first group of changes is several new materials available for crafting.

### Ichor

{% include update/image.html name="ichor" alt="Melting ichor using a foundry." %}

The first new feature is ichor melting. While not directly a material, it is the first step in a few materials in our plans. Ichor has always been set apart from the other slime types in our plans, with some unique processing in mind. While the original plans for its processing got scrapped, we still wanted to keep it unique due to its gaseous nature. So we ended up with this.

Ichor is not the fluid obtained from melting ichor items; you get blazing blood for doing that. Rather, ichor is the byproduct for melting ichor items. This means that melting ichor is foundry exclusive always comes at a loss (not counting the gain in blazing blood of course).

Once melted, ichor behaves like any other fluid, even allowing you to cast it back into various ichor items. Those can of course be melted down to get more blazing blood and less ichor, in case you just want to convert your whole stock. Note that melting ichor requires blazing blood, so you still need the initial blazes to get this process going.

### Cinderslime

{% include update/image.html name="cinderslime" alt="Cinderslime blocks and items." %}

Like all slimes, cinderslime has to have a slimy material. In this case, it is used to alloy cinderslime, a new slime metal. Cinderslime has a trait that converts liquid fuel into overslime overtime; producing it at a faster rate than overgrowth at a cost of fuel.

{% include update/image.html name="cinderslime-alloy" alt="Alloying cinderslime." %}

### Better Ore Byproducts

{% include update/image.html name="byproducts" alt="Byproducts for several different ores." %}

Foundry byproducts got improved in this update to overall make the foundry more useful. Before, many byproducts were less valuable than the ore they came from so you usually just wanted more ore from the smeltery. Now, most byproducts are more valuable than the original ore. A full list of byproducts for native ores:

* Nether gold and gilded blackstone give copper as a byproduct, to help with nether only runs.
* Copper gives a bit of gold as a byproduct, since copper is so common.
* Overworld gold gives cobalt as a byproduct. While this won't let you get cobalt pre-nether (as you need a foundry), you can use it to stock up on cobalt if you aren't finding much ore.
* Cobalt gives 1/4 of a diamond per raw ore. While cobalt is great, diamonds tend to be more useful across mods.
* Diamond gives 3 nuggets of debris per ore block. Note you do need blazing blood to melt diamond ore.
* Debris gives 1 nugget netherite per block. This ends up as a slight discount if you were going to make netherite anyways.
* Amethyst clusters give amethyst and quartz in a 1 to 1 ratio.
* Quartz has iron as a byproduct, to give it a source in the nether.
* Iron has steel as a byproduct.

### Steel

{% include update/image.html name="steel" alt="Decorative steel blocks." %}

Wait, steel? Yes, Tinkers' Construct now has steel as a built in material instead of it being compatability exclusive. Steel can be obtained in 3 ways in tinkers: byproduct of iron ore (as mentioned above), byproduct of melting chainmail armor, and occasionally in armor drops from skyslimes (yes, its significant that skyslimes wear steel, and are used to make slimesteel).

Steel gives us another metal to work with without needing to add new ores; we had considered a few alternatives but ultimately this just felt the most suited to the mod. Worth noting that Tinkers' steel is fully tagged to work with other mods as steel; progression wise its comparable in placement to most other mods that add steel (such as Immersive Engineering), though we notably don't add a way to turn processed iron into steel.

## Fluid Effect Rework
{% include update/image.html name="cheap-effects" alt="Showing blazing blood and powdered snow." %}

Ichor, cinderslime, and steel aren't just useful as tool materials, they are also useful in the new fluid effect rework. For those unfamiliar, fluid effects is a system used by many modifiers such as spitting, spilling, splashing, slurping, and wetting to apply effects to blocks and entities by consuming molten fluids. It gives another use to the smeltery beyond simply crafting tool parts.

Before, a lot of fluids were given effects just to make spilling have options, but not a ton of thought was put into them. Notably, there were a ton of metal options, but blazing blood tended to out perform a lot of them in terms of raw damage (despite being one of the cheaper options). Now, we have reworked the effects similarly to materials, dividing fluids into different tiers and classes with more expensive effects being stronger. Note that in addition to the below fluids, you can continue to use potions in fluid effects for a larger variety of options.

For a full list of effects, check out the [in game books](/docs/books/1.20/encyclopedia/#fluid-effects) or the [design documents](/docs/design#modifiers).

### Gems

{% include update/image.html name="gem-effects" alt="Showing several gems with block breaking." %}

Gem fluids are used to break blocks. When used in spitting, the projectile will keep moving after breaking the first block until the fluid is fully consumed. Alternatively, they can be used in splashing as a pickaxe alternative.

Different gems grant different mining effects, with emerald notably granting silk touch, diamond fortune, and debris breaking the strongest blocks with a small amount of fluid.

### Clay and Glass

{% include update/image.html name="clay-effects" alt="Showing clay and seared stone effects for placing." %}

Clay and glass fluids (which include obsidian, seared stone, and scorched stone) are used for building and direct damage. 
Unlike most other fluids, these do not count as fire damage, meaning fewer entities have immunity. This comes at a downside of the larger amount of fluid used per usage. The large fluid usage is primarily due to the fact these fluids place blocks; allowing the quick construction of walls at range with spitting.

### Slime

{% include update/image.html name="slime-effects" alt="Showing unique slime effects." %}

Slime fluids have the most unique effects, granting functions like piston pushing (skyslime), piston pulling (earthslime), and block exchanging (enderslime). Ichor notably has two useful effects: against blocks it can break anything, regardless of hardness, at the cost of not breaking multiple blocks. Against entities, ichor grants levitation, which can be used for cheap but very slow vertical movement.

Slime adjacent fluids also have unique effects, such as magma (explosions), ender (placing blocks, even at distance), and venom (posion and strength).

### Slime Metal

{% include update/image.html name="slimemetal-effects" alt="Showing slime metal explosions." %}

Slime metals have various explosion related effects. Slimesteel notably does a 0 damage explosion, which can be useful for using its knockback to travel. Cinderslime has an explosion with inverted knockback, which can be useful for gathering targets in a newly made hole. Queens' Slime explodes without damaging blocks, making it most ideal for combat in terrain you care about.

### Metal

{% include update/image.html name="metal-effects" alt="High damage metal fluid effects." %}

As stated earlier, originally despite the cool effects you get from molten metals, blazing blood was often the best option due to its higher damage. Now molten metals have the higest damage, due to their higher cost in obtaining. Their damage ranges from 2-5 based on their tier, and each metal also has some additional positive or negative effect to consider.

Some metals are most useful in combat via spilling or spitting, while others are more useful to drink through slurping, even despite the large damage.

## New Modifiers

In addition to all these smeltery related changes, we also got several notable new modifiers.

### Crafting Table

{% include update/image.html name="tool-inventory" alt="Crafting table modifier on a slimeshell." %}

The first new modifier is crafting table, which is a modifier for leggings or the knapsack from Tinkers' Things. For one ability slot, you have access to an on the go crafting table whenever you sneak and press I. Also shown in the screenshot is some of the UI improements to the tool inventory; they now have a fluid bar shown if the tool contains a fluid tank (for instance, from wetting).

In case 1 ability slot is too much for you, you can use the discounted version "workbench", which grants just a 2x2 crafting window. Its mainly useful for when you don't have an ability slot to spare but want the convenience of directly crafting out of the pants inventory.

### Headlight

{% include update/image.html name="headlight" alt="Player glowing from headlight." %}

If you install [Headlight](https://www.curseforge.com/minecraft/mc-mods/headlight) by MrBysco, you now get a new modifier implemented using their API. The Headlight modifier causes the area around the player to appear visually brigher, sorta like classic mods that make carrying a torch spread light.

As an alternative when you just have Tinkers, you can add glowing to your boots to automatically place light blocks when you enter dark areas.

## UI Improvements

But wait, there's more! In addition to a lot of gameplay changes, we also added a ton of improvements to Tinkers' UIs. First of which is the smeltery.

### Smeltery UI Overhaul

{% include update/image.html name="smeltery-ui" alt="The brand new smeltery UI in full detail." %}

The smeltery UI has been mostly unchanged since its creation in 1.6. One of the notable flaws was it had a ton of wasted space, as half of the main UI area was just left empty. The new UI has several improvements:

* Larger tank area - this makes it easier to see what fluids you have and to click the fluid you want.
* Bucket slot - placing buckets, tanks, and fluid using tools in the slot lets them interact with the fluid as if right clicking a drain. The bucket button lets you toggle the mode to fill only or drain only for better control over fluid items like tools.
* Fluid tank transfer - clicking a fluid region with a fluid supporting item will attempt to transfer the fluid. Left click will try to fill the item from the UI tank, while right click will attempt to dump the item into the tank.

All of these features notably also exist in the foundry. The last smeltery feature is also available in the melter and alloyer UIs.

### Tank Item Improvements

{% include update/image.html name="tank-item-interactions" alt="Dumping a bucket item into a tank item." %}

Taking advantage of some bundle hooks, you can now dump fluid items into other fluid items by right clicking them. This notably works for seared tank variants, which can be filled or emptied by right clicking various fluid items, including non-standard ones like soup bowls. Tools with fluid handlers also support this feature.

### Repair Kit Interaction

{% include update/image.html name="repair-kit-inventory" alt="New repair kit tooltip." %}

Repair kits also take advantage of the new hook to allow repairing without a crafting table. Simply right click on a tool while holding a repair kit with the mouse to apply it to the tool.

### Creative Interactions

{% include update/image.html name="creative-slot-rework" alt="New creative slot tooltip." %}

These new hooks also prompted simplifying the creative slot items. Now instead of crafting them with a tool as a "modifier", you simply right click them onto a tool to increase its slots, or right click a tool onto it to decrease slots. This functionality notably requires you to be in creative mode or to be an operator; if you are one of those modpack makers who used creative slots as a lazy quest reward, just take a few extra minutes to do it properly with a custom modifier. We will happily link you resources to accomplish that.

You can perform a similar interaction using modifier crystals, where right clicking a tool with a modifier crystal adds a level of the modifier, and right clicking a crystal with the tool removes a level. This also only works in creative (the survival usage of modifier crystals remains unchanged), and behaves the same as the modifiers command (meaning no modifier slots are consumed nor recipes checked).

### Armor Stand Rotate

{% include update/image.html name="armor-stand-rotate" alt="Rotating an armor stand in the UI." %}

The tinker station, tinkers anvil, and modifier worktable recently got an armor stand to preview your tool and armor modifications. Now you can rotate it, to get the full 360 on the tool.

## Download

### Mantle

Update to the latest Mantle 1.11.44 for 1.20.1:

{% include update/download.html name="mantle" version="1.11.44" curseforge="6258424" %}

### Tinkers' Construct
<div class="hatnote">We released the hotfix 3.9.2.37 to fix an issue with melters, and another issue with NeoForge.</div>

Download Tinkers' Construct 3.9.2.37 for 1.20.1 at the following links:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.9.2.37" curseforge="6266282" %}

### Tinkers' Things

Download the new Tinkers' Things 1.3.1 update for 1.20.1:

{% include update/download.html name="tinkers-things-json" github="TinkersThings" modrinth="tinkers-things" version="1.3.1" curseforge="6258956" %}