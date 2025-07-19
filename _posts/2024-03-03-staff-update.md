---
layout: post
title:  "Tinkers' Construct Staff Update"
date:   2024-04-02 12:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/staff/spitting.png
image_root: updates/tinkers/staff
---

Welcome to the visual changelog for Tinkers' 3.7! This is last major content update for Tinkers 1.18 with a bunch of features that have been on the backlog or in development since the last 3.6 update.

Now that the backlog has been cleanup up, next goal is some API cleanups (won't be in a 1.18 build) then a 1.19.2 port. Until then, lets talk about what is new in this update!

*This blog was originally posted [on Reddit](https://www.reddit.com/r/tinkersconstruct/comments/1b5te1x/tinkers_construct_271_and_tinkers_json_things_110/). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Smeltery

### Cheese

{% include update/image.html name="cheese" alt="Cheese being casted surrounded by cheese blocks." %}

To start things off, we have cheese. Cheese is created in a casting table or basin using milk. Note it will take a *long* time to change from milk into cheese, best to work on other tasks while you wait for the milk to congeal. When eating cheese, not only do you receive some hunger and saturation, but a random potion effect will be removed (from among milk curable effects).

### Smeltery Glass

{% include update/image.html name="smeltery-glass" alt="Seared Soul Glass and Seared Tinted Glass in two smelterys." %}

Continuing on the smeltery, we have 2 new variants of seared glass. Tinted glass is a variant that stops light from coming though (like tinted glass). Seared soul glass works as a smeltery wall but allows entities to pass though. Both also exist in scorched forms for a foundry. For consistency, soul glass (the non-seared version) also allows entities to pass through.

### Tank Dispensing

{% include update/image.html name="tank-dispenser" alt="A piston and a dispenser adjacent to a seared tank." %}

To improve smeltery automation, seared tanks are now broken by pistons, and can be placed by dispensers. Should make it easier to build mechanisms for emptying/filling tanks and swapping smeltery fuel.

## Staffs

One of the big goals of this update was to get some of the plans for staffs implemented to make the usage of the tools more clear. This was done through various new modifiers and a new staff variant.

### Spitting

{% include update/image.html name="spitting" alt="A staff shooting 5 lavaballs." %}

To start, spitting is a new modifier that allows tools to launch a fluid projectile. The projectile on its own just does a bit of knockback, but the fluid type used can add additional effects. This uses the same registry as spilling (the melee effect) and slurping (the helmet modifier), meaning you can get plenty of options like potions, restoring hunger, damaging targets, and even removing potion effects.

Projectile stats will change the behavior of spitting. Velocity will determine the speed and range of the projectile. Projectile power will determine how much fluid is consumed and the strength of the effect. Drawspeed determines how quickly you can launch fluids. Higher levels of the modifier will give "multi-shot" behavior.

### Staff Stats

{% include update/image.html name="charging-staff" alt="An enderslime staff charging up, as a skyslime staff is held in the offhand." %}

While most tools don't have much way to change projectile stats, staffs now can receive many ranged weapon modifiers including quick draw (to boost drawspeed) and power (to boost projectile power). In addition, each staff variant has a stat specialty: skyslime has higher drawspeed, earthslime has higher accuracy, ichor has higher velocity, and the new enderslime has higher projectile power.

Enderslime staffs are a new staff variant that start with reach, created from enderslime, nahautl, and netherite. They have a balance of slot types.

### Amethyst Staff

{% include update/image.html name="amethyst-staff" alt="Crafting an Amethyst Staff in a Tinkers' Anvil." %}

If you want more variety in staff variants, Tinkers JSON Things (the official addon made with only JSON) now includes the amethyst staff. This staff variant is made using bow parts which determine the drawspeed, accuracy, and velocity of the final staff and grant it ranged weapon traits. It also takes advantage of a previously unused feature: non-tool parts in a tool crafting recipe.

### Sling Modifiers

{% include update/image.html name="flinging" alt="Charging up to fling away from a block." %}

As part of this update, we have 4 new modifiers meant to serve as replacements for the 4 slime sling variants. All of them make use of ranged stats to boost the effect of the modifier, though they can also be applied to standard melee weapons in addition to all the staff variants. With the exception of warping, knockback will boost the power of sling modifiers on melee weapons. In 1.19, we plan to remove slime slings entirely as the modifiers are just better versions of the slings.

* Springing works like the old skyslime slings, launching you forwards into the air. Using this on a sword lets you recreate the classic longsword.
* Flinging works like the old earthslime slings, launching you away from the targeted block. Like regular earthslime slings, you are unlikely to survive without some fall damage protection like bouncy.
* Bonking is a bit more special than the first two. While on staffs it works just like the ichor slime sling (knocking mobs away), on melee tools it will deal damage before knocking the target back just like the old frypan charge attack (add to an excavator with its new "bonk" particle to recreate a frypan!)
* Warping is available to replace enderslime slings letting you teleport forward - even though blocks. Unlike the other 3 sling replacements, knockback does not boost the effect of warping, only projectile stats like velocity or power.

## Staff Builds

### Bucket on a Stick

{% include update/image.html name="bucket-on-stick" alt="Bucket on a Stick by TheInfiniteCrafter." %}

For the first, here is an older design by TheInfiniteCrafter of a bucket on a stick: a high capacity fluid tank made using a skyslime staff (to maximize upgrade slots).

### Slingshot+

{% include update/image.html name="slingshot" alt="Slingshot+ by Gentozik" %}

Taking advantage of the new springing modifier is a staff by Gentozik that lets you quite nearly fly; power and quick charge maximize the distance you travel and minimize the distance you fall before you next launch. Combine it with bouncy boots for long distance travel, or slow falling/levitation to fully achieve controlled flight.

### Fluid Sniper

{% include update/image.html name="sniper" alt="Fluid Sniper by Zen." %}

Finally, a spitting staff design by Zen. This staff uses an enderslime staff for higher projectile power, and is designed to maximize the size of a single projectile. You can make your choice between a cheaper fluid like lava or a more compact fluid such as molten iron.

## Tools

### Makeshift Armor

{% include update/image.html name="makeshift-armor" alt="Makeshift Armor." %}

Another new Tinkers' JSON Things feature is makeshift armor, created out of patterns. This is designed to be super early game armor for your first mining trip rather than receiving a ton of modifiers. It has the same protection level as leather armor in vanilla, except it has just a helmet and chestplate.

With the addition of this set, we now have an armor for all 5 tool material tiers: makeshift armor is tier 1, travelers gear is tier 2, laminar is tier 3, plate is tier 4, and slimesuit is tier 5 (tier 5 is not yet implemented, but slimesuit should give you an idea of what to expect).

### Blocking Bows

{% include update/image.html name="bow-blocking" alt="Blocking with a bow." %}

Bows can now receive blocking, which allows them to be used as a shield while charging up/storing the arrow in the crossbow. Staffs will similarly use blocking when charging up any of their modifiers like spitting or flinging.

In addition, tools that can charge now can access scope, including the crossbow and staffs (was limited to bows before).

### Pierce

{% include update/image.html name="pierce" alt="Putting piercing on a bow." %}

Piercing got a rework, now called pierce. Instead of dealing bonus damage that ignores armor, it instead just cancels 1 point of armor per level. This should make whether its beneficial a bit more intuitive. The recipe was also changed to using pointed dripstone to prevent conflict with thorns (which also used cactus).

Due to the large behavior difference, the old behavior still exists under the old ID in case a modpack relied on that (datapacks can restore the recipe/trait). You can use the worktable to swap the modifier out on old tools. Unsure if the old piercing will be kept around in 1.19.

### Counterattack Rework

{% include update/image.html name="counterattack" alt="Adding fiery to a chestplate." %}

"Counterattack" modifiers got a rework. First, sticky was removed in favor of freezing, which applies the powdered snow freezing effect (slows target and damages them). Fiery also now works on more tools, notably on armor it will burn targets on counterattack.

### Tool Traits

A few tools got their starting modifiers tweaked. Kamas once again start with tilling for consistency with scythes and to add variety to farming tool options (if you added tilling before, the modifier workstation lets you reclaim the slot). Pickadzes and mattocks no longer start with a melee trait as I never found one I liked, plus both tools do so much already.

### Emerald Repair

{% include update/image.html name="emerald-repair" alt="Repairing a tool with the emerald modifier." %}

Emerald now boosts the effectiveness of repairs instead of just boosting durability.

### Diet Support

{% include update/image.html name="slurping" alt="Eating mushroom soup from a staff." %}

If you use the mod Diet, slurping fluids for food or eating pig iron now contributes to nutrition. Slurping fluids have their equivalent food item defined in JSON (since they are mostly soups, its typically the soup item). Eating pig iron will register as whatever nutrients bacon uses.

## Guide

### New Advancements

{% include update/image.html name="advancements" alt="Showing the new Perfect Aim advancement." %}

To help suggest some tool making goals, we have 3 additional advancements. These were partly made to test out some new APIs for modifiers, but they should also be a neat objective.

### Book Updates

{% include update/image.html name="modifer-overview" alt="Showing off new icons on modifier overview pages." %}

Books got plenty of improvements and typo fixes. A notable additional is modifier icons on the modifier overview pages. The books should also include all new content from this update.

### Addons in Books

{% include update/image.html name="book-things" alt="Showing the blowpipe from Tinkers' Things in the book." %}

Books also got a new feature allowing addons to add pages to tool or modifier sections without complex Java code. This is notably used by Tinkers JSON Things to include its pages in the book.

## Technical

### Composable Modifiers

The biggest new datapack feature is composable modifiers, this allows combining multiple modifier effects into a single modifier, which notable simplified the implementation of hematite in Tinkers JSON Things along with letting us migrate many more modifiers to JSON. This did require deprecation of a lot of old modifier APIs to implement, but they all will continue to work until 1.19.2.

### Stat Renames

Some tool stats got renamed for clarity as seen in previous screenshots, "Attack Damage" is now "Melee Damage", "Attack Speed" is "Melee Speed", "Harvest Tier" is now "Mining Tier", and "Projectile Damage" is now "Projectile Power". These are meant to reflect the broader usage of these stats and make it more clear which stats will affect the tool.

### Advanced Tooltips

{% include update/image.html name="advanced-tooltips" alt="Modifier IDs in the bow tooltip." %}

Continuing with technical changes, we also show IDs for various things in tool tooltips when advanced tooltips are on, such as modifier or material IDs. Should help with making datapacks.

{% include update/end.html %}

## Download

### Tinkers' Construct

The Tinkers' Construct 3.7.1 update can be downloaded from:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.7.1.155" github-tag="3.7.1.155" curseforge="5148042" %}

### Tinkers' Things

The Tinkers' JSON Things 1.1.0 update can be downloaded from:

{% include update/download.html name="tinkers-json-things" github="TinkersThings" modrinth="tinkers-things" version="1.1.0" curseforge="5155195" %}
