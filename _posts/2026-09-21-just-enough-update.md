---
layout: post
title:  "Tinkers' Construct and Tinkers' Things Just Enough Update for 1.20.1"
date:   2026-09-21 21:30:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/just-enough/cuirass.png
image_root: updates/tinkers/just-enough
---

The Just Enough Update is an update to Tinkers' Construct for 1.20.1. It features somes smaller changes to features that had too few or too many options, bug fixes for the [Slimesuit Update]({% post_url 2026-09-04-slimesuit-update %}), along with improves recipe vieweing through Just Enough Items.
If no major issues are discovered, the Just Enough update will be marked as the "release" version for the Slimesuit Update.

This update is paired with a Tinkers' Things update, which updates it to support the Slimesuit update as well.


{% include toc.html %}

{% include update/start.html %}

## Tinkers' Construct

### Cuirass Variants

{% include update/image.html name="cuirass" alt="Cuirass in many different wool variants." %}

The notable new feature in this update is cuirass getting a few more material variants. Before it could only be crafted out of leather and leather composites, while now it supports many more "cloth" types including wool and all variants of vine. New cuirass materials can be used in place of leather for crafting the travelers pieces, or part swapped using the items directly.

Some cuirass traits include:

* Knockback resistance from wool.
* Solar powered from vine, making it take less damage in sunlight.
* Flamestance from weeping vine, making you take less damage in warm environments.
* Entwined from twisting vine, giving a speed boost but making you take damage when the armor is removed.

### Slimy Vine rework

{% include update/image.html name="vine-skin-split" alt="Showcasing differences between slimy vines and slimeskin." %}

Previously, for skyslime and enderslime, slimeskin and slimy vines were the same material, just having different recipes and names. Now they have been fully split to have distinct traits, giving more defensive traits to the slimeskins and more utility traits to the vines. Skyslimeskin grants a new trait airborn which reduces damage from airborne attackers, while enderslimeskin takes the enderclearance trait to teleport attackers. Skyslime vines took skyfall to reduce your gravity, while enderslime vines teleport you away from danger.

The main reason for this change is plate maille no longer has vine as material options, as upon reconsideration they just fit better with the design for travelers. Plate can still use slimeskins, and any slimy vine maille crafted before this update should continue to work.

{% include update/image.html name="slimy-vines" alt="Showing the two types of slimy vines as cuirass." %}

### Venom Slimesuit

{% include update/image.html name="venom" alt="A full venom slimesuit." %}

Venom was added as a new slimesuit material granting magic resistance. This partly was done to mirror how venombone is often associated with magic and magic damage, and partly done to free up ender pearl which felt a little too rare to get the common trait of magic resistance.

Ender pearl as a slime material now grants enderclearance, giving it a pre-end source (as both enderslime vines and chorus are end materials).

### Rugged Leather

{% include update/image.html name="rugged" alt="Standing on cactus using rugged." %}

Leather's trait on slimeboots was buffed, giving you not just the ability to walk on powdered snow, but also many harmful blocks such as cactus and knightmetal. When trimmed, it now also gives you immunity to thorns.

Vines similarly were given a benefit from trim, boosting the percentage per light level from 5% to 6% (making max reinforcement go from 75% to 90%).

### Traveler's Banners

{% include update/image.html name="travelers-banner" alt="Various pattenrs on travelers shield." %}

Thanks to textures made by @onethirdpirsquaredh, the traveler's shield can now receive banners, fitting the pattern into their circle shape.

### Clear Banners

{% include update/image.html name="clear-shields" alt="Applying a clear pattern to a shield." %}

Banners got another improvement in this update, with a recipe to apply a banner as "clear". This skips the solid colored banner background and just shows the additional patterns on top, letting the shield core material show through.


## JEI Improvements

In addition to a few more variants of things, this update makes many improvements to our JEI support.

### Fuels

{% include update/image.html name="fuel-tab" alt="Showing the values of each fuel." %}

While fuels are animated in the melting and alloying recipes, a lot of players have expressed a desire to see fuels directly in their own tab. So now they have their own tab.

Tab also includes numbers for solid fuel, which animates representative fuels. However, if you focus on a valid fuel item, it will show it as the fuel in that recipe with the proper stats. You can change the represenative fuels using a tag.

### Materials

{% include update/image.html name="material-tab" alt="Showing many types of material recipes." %}

The materials tab is another popular request. While this info is in the books, the JEI tab allows you to search up a specific item to see how its used in materials. The tab shows info on items associated with each material used for repair and the part builder, and for fluids used for casting and composite recipes. It additionally shows the leftovers for larger material recipes, returned when you have more material than you need in the part builder.

The material title acts as an ingredient, allowing you to click it to see all recipes for a given material, or to view part builder recipes using that material to make parts.

### Tool Tinkering

{% include update/image.html name="tinkering-tab" alt="Ways to modify tools without modifiers." %}

The tool tinkering tab shows any recipes used in the tinker station or anvil that change a tool without adding modifiers. This includes things such as tool repair, part and material swapping, and the weird recipes that damage a tool for optimizing modifiers.

In addition, some relevant recipes such as repair and overslime show in the crafting table tab as they also work in the crafting table.

{% include update/image.html name="crafting-repair" alt="Repairing tools in the crafting table." %}

### Better Material Display

{% include update/video.html name="tool-build-animation" alt="Improved recipes for creating tools." %}

Recipes for tools that require multiple materials, such as the tool building tab, now show the output with all the materials of the input instead of a represenative tool. This also notably affects the crafting table recipes for travlers gear and the casting recipes for slimesuit.

{% include update/video.html name="travelers-crafting" alt="Animation of variants of travelers gear crafting." %}

### Recipe Compacting

{% include update/video.html name="recipe-compacting" alt="Animation of compacted recipes." %}

Many similar recipes have been compacted, such as all the material variants of casting or composite recipes or all the potions for tipping. This should make it far easier to navigate the tab. When focusing a specific fluid or material, it will still work as it did before, showing just that variant. If focusing on a tool, the inputs will be updated to more closely match the tool.

### Dynamic Focusing

{% include update/image.html name="tool-focusing" alt="Focusing on armor showing it as the input." %}

Most tool specific recipes now change the display to more closely match the focused tool. For modifier recipes, they will actually show a copy of your tool with the modifier applied as the result, letting you estimate stats or quickly see if you are missing a requirement.

This feature is a bit experimental so its possible it breaks. If you run into any issues with it, there is a config option to disable it.

## Tinkers' Things

{% include update/image.html name="things-update" alt="Knightslime Laminar Armor alongside the other two knightslime sets." %}

This new update is paired with a Tinkers' Things update. Most of the changes in this update are simply updating the content for the latest JSON or content changes in the base mod, but there are a few notable new features. To start, we have some lovely new textures for laminar armor by @loafobucket.

### Tipped Blowpipes

{% include update/image.html name="tippable" alt="Recipes adding tippable to blowpipes." %}

Blowpipes in the mod were a little underwhelming late game. They are nice early game as a cheap alternative to bows since they use durability for ammo, but late game they notably fell off.

To give them a bit more utility, they now support receiving tippable as a modifier. This is the same trait that flint has on arrow heads, allowing you to cast potions on it to apply potion effects to your projectiles. Like fishing rods, blowpipes potions are reusable. This replaces the previous 2 or 3 recipes that applied specific potions to the ammo.

### Silky Cloth Cuirass

{% include update/image.html name="silky-cuirass" alt="An armor stand wearing full silky cloth cuirass." %}

Silky cloth was added as a new cuirass material, serving as an example of how to add [new cuirass materials](#cuirass-variants) for other addons. It uses the same trait as silky cloth on other armor, granting 1 ability slot and -3 max health.

### Hematite Shell

{% include update/image.html name="hematite-shell" alt="Crafting hematite shell in a part builder." %}

For an example slimesuit material, hematite shiell was chosen. It grants its standard armor trait, granting +2 defense slots for -5% protection. This notably provides a way to get up to 4 defense slots on slimeshell for a weird defense build.

While hematite is not normally a part builder material, it uses the override feature of item part recipes, serving as both an example of overrides and an example of using a tool part with a specific material as a recipe result.

### Laminar Banners

{% include update/image.html name="laminar-banner" alt="Showcasing banners on laminar shields." %}

Like [travelers's](#travelers-banners), laminar now supports receiving the banner modifier thanks to some textures by @onethirdpirsquaredh. The "kite shield" shape makes for some unique designs.

This feature replaces the previous feature that allowed dyeing laminar shields to receive a cross design, as you can now recreate a similar design via [clear banners](#clear-banners).

### Dyeing Laminar

{% include update/image.html name="dye-laminar" alt="Dyeing the shield core on laminar." %}

Laminar armor now supports dyeing to change the color of its shield core, similar to how plate can be dyed to change the color of the maille.

{% include update/end.html %}


## Download

**Tinkers' Construct**
The new Tinkers' Construct 3.12.1.231 update can be downloaded at the following:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.12.1.231" curseforge="8944121" %}

**Tinkers' Things**

The new Tinkers' Things 1.3.4 update can be downloaded at the following:

{% include update/download.html name="tinkers-things-json" github="TinkersThings" modrinth="tinkers-things" version="1.3.4" curseforge="8944153" %}
