---
layout: post
title:  "Ceramics and Inspirations on 1.20.1"
date:   2025-06-10 02:00:00 -0400
categories: posts
author: KnightMiner
image_root: updates/general/growth
---
For anyone unfamiliar, [Ceramics](/projects#ceramics) and [Inspirations](/projects#inspirations) are both mods created by KnightMiner, who is also the current lead developer for Tinkers' Construct. Ceramics is a standalone simple fluid transfer mod, both reusing the ideas of faucets and channels from Tinkers' Construct and providing various clay tools for early game. Inspirations is a variety mod adding a bunch of smaller features with a focus being on small ideas that might fit the base game.

As I was working on these updates, I ended up needing to change a couple things in Tinkers' Construct and Mantle for best compatibility, so both of them got a small update as well.

{% include toc.html %}

{% include update/start.html %}

## Ceramics

{% include update/image.html name="ceramics" alt="Overview of a few blocks and items from Ceramics" %}

Ceramics is a mod about adding new tools and decorative blocks made of clay. It started as the clay bucket, a feature from Iguana Tinker Tweaks that got lost when a lot of other features were integrated into Tinkers' or moved to their own addons. As the mod evolved, it got new features including cisterns as an alternative take on fluid storage, faucets and channels ported from Tinkers' (though on some versions Ceramics got them first as its easier to update), and a kiln for more quickly performing a bunch of furnace recipes that fit neither the blast furnace nor smoker.

### Better Gauges

{% include update/image.html name="gauge-tooltips" alt="Showcasing the new gauge tooltip from Ceramics" %}

One standout newer feature from Ceramics is the gauge, which can be placed on any fluid tank to read its fluid contents. The block was originally added to make it easier to see inside cisterns, butt it was pretty easy to make it work on tanks from other mods, notably Tinkers' Construct and Immersive Engineering.

As part of this update, gauges now have a tooltip that shows when looking directly at the block, displaying the fluid contents in the same style as the smeltetry GUI.

### Rainbow Bricks

{% include update/image.html name="rainbow-clay" ext="gif" alt="Animated rainbow bricks from Ceramics" %}

Rainbow bricks were not changed by this update, but the GIF on our CurseForge page was hosted on a website that seems to no longer exist. As a result, using this update post as an excuse to reupload it. Note this GIF is sped up for visibility; the animation in game is somewhere between prismarime speeds and this.

### Download

The new Ceramics 1.8.0 update can be downloaded in the following places:

{% include update/download.html name="ceramics" author="KnightMiner" version="1.8.0" curseforge="6635567" %}

## Inspirations

{% include update/image.html name="inspirations" alt="Overview of several items in Inspirations" %}

Inspirations is a mod for any feature ideas I have that are too small for their own mod, too gameplay altaring for Mantle, and not thematically correct for Ceramics or Tinkers' Construct. Mod started as a couple of features *inspired* by then abandoned mods or suggestion posts on Reddit. This notably included the torch lever, which is a lever variant that looks like a torch for secret entrances, and the (book)shelf, a block inspired by BiblioCraft for holding all your guidebooks. Shelves eventually got updated to be able to hold any item, and Inspirations got a bunch of new features including mulch (craftable falling block), several tools showing information otherwise locked to the debug screen, vanilla inspired item transfer in the collector and pipe, and additional functionality in cauldrons such as potion brewing and soup making.

### Lectern Covers

{% include update/image.html name="lecterns" alt="Lecterns holding many guidebooks" %}

As many mods updated past 1.14, they have been adding support to use their in game guidebooks on lecterns. However, since the block was only ever designed for written books, it can be difficult to remember which lectern contains which guidebook. Reusing a feature from Inspiration's shelves, lecterns now tint the cover color for modded guidebooks. The color is based on the average color of the book item sprite.

### Download

The new Inspirations 1.5.0.6 update can be downloaded in the following places:

{% include update/download.html name="inspirations" author="KnightMiner" version="1.5.0.6" curseforge="6635388" %}

## Mantle

{% include update/image.html name="fluid-tooltip-ids" alt="Taking damage from the third row of hearts" %}

Mantle is not often showcased on its own as it mostly contains features meant for other mods. These days, it contains a lot of the common code between the datapack features in Tinkers' Construct and Inspirations, the fluid code shared by Tinkers' and Ceramics, or the model code used in all three. Though it has a couple features that are present even without any of our mods.

One notable change in this new update is that fluid tooltips now show the fluid ID under advanced tooltips, mirroring item tooltip style. You will see this notably in UIs in Tinkers' Construct, plus on the gauge in Ceramics.

### Heart Renderer

{% include update/image.html name="heart-renderer" alt="Taking damage from the third row of hearts" %}

One such feature is the heart renderer, which has existed since the early days of Tinkers' Construct. In the vanilla game, you are never intended to go beyond 10 hearts, plus 4 absorption hearts, so the renderer is fine. In mods you can often reach 20+ hearts plus absorption, which can take up a ton of UI space. Mantle renders those higher levels of hearts as different colors of hearts all in the same space. While this makes it a bit harder to know max health, its a lot less space for large amounts of health.

{% include update/image.html name="low-health" alt="Half heart display when the player has an odd number of hearts" %}

In this newest update, the heart renderer got updated to notably support freezing hearts (from powdered snow), more accurate poison and wither hearts, show the damage animation when you lose health at higher levels, and show more accurate display of odd numbered max health. These changes did require some notable adjustements to the heart textures, so resource packs may need to update if they had support for Mantle.

As always, if you dislike our heart renderer, you can disable it in Mantle's client config to restore the standard vanilla heart renderer.

{% include update/image.html name="freezing-hearts" alt="New freezing hearts as the player takes freezing damage." %}

Another new feature is the heart renderer now will show your max health via colored heart containers behind the main one. It just shows the highest color, plus the second highest if you don't have a full 10 hearts in the highest. If you dislike the max health display, it can be disabled in the config to work as the heart renderer did before this update.

{% include update/image.html name="max-health" alt="Max health is 5 hearts blue, 5 hearts green even though current health is in yellow." %}

### Download

<div class="hatnote">Update: a hotfix was released to update the heart renderer and add some translations.</div>

The new Mantle 1.11.63 update, required for all updates covered in this post, can be downloaded at the following:

{% include update/download.html name="mantle" version="1.11.63" curseforge="6642332" %}

## Tinkers' Construct - Growth Update

My original intention was to update Ceramics and Inspirations directly and make this post just about them. Then some Mantle changes were required that was most efficient to reflect in Tinkers' Construct as well. And then I got inspired to add several neat new features to the mod and the update *grew* beyond my original plans. Hopefully this doesn't cause Tinkers' to steal the show on this update announcement.

### New Material Applications

{% include update/image.html name="materials" alt="Leather and vine variants and their relevant tool parts." %}

Ranged and armor materials are sometimes a little lacking compared to the variety of options for melee/harvest materials. This update notably removes restrictions on a couple of materials, notably leather on bowstrings and vines on armor.

New material options:

* Leather's tanned trait is ideal in combination with crystalshot, or for bows used as a melee weapon (a mDiyo favorite).
* Ancient hide is also now a bowstring granting +1 defense slot to your bow, allowing you to get some passive defense from an offhand bow.
* Regular vines as armor maille reduce durability loss in bright sunlight, which might be useful for some early game sets or for your home base armor.
* Skyslime vines on armor have a cool new trait called skyfall, which reduces the effects of gravity on the player allowing you to jump a bit higher and fall a bit slower.
* Enderslime vines reuse the trait from chorus shield cores to randomly teleport away attackers

### Nether Vine Materials

{% include update/image.html name="vines" alt="Twisting and weeping vines." %}

Something that has bothered me for awhile and I finally got around to fixing is nether vines. Before, they could craft into the regular vine material, but that trait reduces durability loss in sunlight (something notably lacking in the nether). Now twisting vines and weeping vines both have a new material with a unique trait.

Twisting vines have a neat trait called entangled where the tool damages you when you put it down in exchange for boosting mining speed (harvest), drawspeed (ranged), and knockback resistance (armor). The downside is pretty managable on armor, but adds a bit of risk on switching from your pickaxe to your sword or bow in combat scenarios.

Weeping vines have a trait boosting various stats in hot biomes (notably including the nether), though they provide an equal but opposite debuff in cold biomes. This includes boosting attack damage (melee weapons), projectile damage (ranged), and general protection (armor). For a nether set of equipment this will be a solid choice for any tinkerer.

### Gravity

{% include update/image.html name="gravity" alt="Gravity debuff on ancient." %}

The new gravity mechanics from both skyslime vines and from the ichor cake is pretty fun to play around with. But between them we had a way to reverse gravity and a way to reduce gravity, but nothing to increase gravity.

Upon reflection, this was the perfect downside for a couple of our "heavy" materials, notably lead and tungsten. Both materials got a recent buff that made them just a tiny bit too good, so making them increase gravity slightly puts them back into balance. The increase on a single tool won't be enough to lower your jump height below 1 block, but might make it a bit harder to leap far distances.

This mechanic was also applied to ancient, as that material is similarly just a tiny bit too strong compared to its debuffs. This gravity debuff is higher than the debuff of lead and tungsten, though still won't hurt you too much unless you get full ancient armor. If you go that route, we recommend some skyslime vines to reverse some of the effect.

### Category Icons

{% include update/image.html name="category-icons" alt="Showcasing the melee material category icon in the book." %}

One commonly missed design point in newer Tinkers' Construct is that some materials are focused as either harvest or weapon materials. Manyullyn for instance while it produces solid harvest material stats is really far better on a weapon, with hepatizon being more ideal for harvest tools such as pickaxes. We had this information in our design docs, but the only way to find it in game was noting slightly larger material stats which are not always easy to spot.

To solve this, material categories now show in the books as hints for the best usage of a material. There are three categories: melee (sword) for combat oriented materials, harvest (pickaxe) for mining focus, and general (axe) for materials that generalize to many materials. As always, you are free to ignore the material category and use whatever materials you like, but hopefully these hints will make it easier for newcomers.

Ranged materials also got category icons, though for them the categories are light (high drawspeed), heavy (high damage), or balanced (high accuracy/a mix of stats).

### Gauges

{% include update/image.html name="tinkers-gauges" alt="Copper and obsidian gauges on channels." %}

Mentioned earlier that gauges are a standout feature from Ceramics. Feature was so good we copied it over to Tinkers' Construct in the form of the copper and obsidian gauges. Copper gauges work just like their Ceramics counterparts, notably showing fluid tooltips when looking at them for tanks or smeltery drains. Obsidian gauges will additionally render the contained fluid in their window, which will notably be useful on some upcoming plans.

### Download

The new Tinkers' Construct 3.10.1.76 update can be downloaded at the following:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.10.1.76" curseforge="6635554" %}

{% include update/end.html %}