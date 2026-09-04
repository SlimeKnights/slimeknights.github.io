---
layout: post
title:  "Tinkers' Construct Slimesuit Update for 1.20.1"
date:   2026-09-04 19:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/slimesuit/slimesuit.png
image_root: updates/tinkers/slimesuit
---

The Slimesuit Update is the latest update for Tinkers' Construct 1.20.1. This update was started largely as a ton of internal changes and cleanups to help reduce the workload to port to 1.21, but also includes a bunch of the main features from the roadmap that were most notably missing from the mod.

We have already started the process of porting Mantle to 1.21, though that won't be released until our first Mantle dependant mod is ready for testing. Tinkers will not be our first 1.21 mod but it is a high priority.

{% include toc.html %}

{% include update/start.html %}

## Slimesuit

{% include update/image.html name="slimesuit" alt="Many different slimesuit combinations." %}

The biggest new feature in this update is a rework to the slimesuit. After reworking plate and travelers to both have material variants, the simple design of slimesuit felt a lot more out of place. We had originally planned to rework it as part of the [Soul Forge](/docs/roadmap/soul-forge/) using that to gate access to the suit, but current plans likely move the Soul Forge to an official addon and we wanted the Slimesuit rework to stand on its own.

The design we settled on was simply removing the gate so slimesuit is made in the casting basin, unlocked around the same time as the other two armor sets. You start with one of four slimesuit exclusive tool parts, and then cast slime on it to produce each piece. The slime type determines the primary repair material and trait, with some options including:

* Earthslime to restore overslime overtime.
* Skyslime to reduce gravity.
* Ichor to boost movement, attack and mining speed.
* Enderslime to grant a chance to dodge by teleporting
* Clay to boost defense.
* Honey allows you to eat your armor to remove poison and restore hunger.

Additionally, as part of this rework, all main slimesuit pieces start with 2 ability slots, but only 3 upgrade slots and 0 defense slots. This should help distinguish them from plate (all defense no ability) and travelers (balance of slot types).

### Slimecages

{% include update/image.html name="slimecage" alt="Casting a slimecage while being watched by armor stands wearing slimecages and slimelytras." %}

The main reason we originally gated the slimesuit to the end is access to elytras requires the end. To solve this, we opted to make the slimesuit chestplate the slimecage, created using a ribcage (bones in a part builder) and slime. This armor specializes in unarmed damage, with the bones granting various melee traits that may be familiar from melee weapons including pierce, antitoxin, necrotic, and scorching. Additionally, they include new traits such as ram attack (bonus damage while sprinting) and levitation (causes the target to float).

Slimelytras remain a part of the mod in two ways. First, like other chestplates, slimecages support the wings modifier for 2 ability slots. They also remain around as the fifth slimesuit piece as an alternative chestplate, made by casting any valid slime type on an elytra. Due to the strength of wings, slimelytras only get 1 ability slot (same as before this update) instead of 2 like the other pieces.

### Slimeshell

{% include update/image.html name="slimeshell" alt="Inventory of a slimeshell with maxed out shulker slots." %}

Slimeshells have been reworked to provide an early game alternative to the pockets modifier. They now only grant a single row of 9 inventory slots, but the shulker shell material will boost that by another 6, and can be rebalanced to achieve the previous 9 slots. They are created from casting slime onto the new shell toolpart, which in addition to shulker can be made from metal shards, turtle, dragon, prismarine, and phantom.

### Slimeboots

{% include update/image.html name="slimeboots" alt="Slimeboots watching the player fish in a slime lake." %}

Slimeboots are once again craftable in the overworld. While the bouncy modifier was available as soon as entering the nether, many players liked creating these boots after finding their first slime island. The are crafted from casting slime on laces, which are made from many types of string, vines, and leathers.

### Slimeskull

{% include update/image.html name="slimeskull" alt="A collection of skulls and slimeskulls in a jungle template." %}

Slimeskulls already had material variants, changing based on the skull used to construct them. The biggest change is they now support slime materials, allowing you to use overworld skulls to craft them earlier. We additionally rebalanced a lot of the existing slimeskulls to be more comparable in strength as about half of the traits were not that useful. For instance, zombies now boost defense against undead, drowned let you swim for longer, and husks convert some damage taken into regenration.

In addition, this update adds two new skull types: dragon and knightmetal. Dragon skulls provide a trait that prevents you from being one shot by strong attacks. Knightmetal is created using the new [knightmetal fluid cannon](#knightmetal-fluid-cannon), and grants spitting to apply fluid effects with the helmet keybind.

### Migration

{% include update/image.html name="migration" alt="Full set of migrated slimesuit." %}

If you crafted a slimesuit before this update, Tinkers will do its best to migrate the item to the new system. The slime will be migrated to the internal material blood, which adjusts the modifier slots to match those before the update (-1 ability slot, +2 upgrade slots on most pieces). The non-slime part will be migrated to the material closest to the previous function (shell to shulker, boots to skyslime vine, and skull will ensure the mob matches).

You can cast slime on these parts to use the new slime types, and use part swapping with either a slimesuit part or a skull to change the mob part. Note to swap the slime you will need at least 2 upgrade slots available.


## Materials

In addition to the slimesuit and its new and reused materials, this update also adds and reworks several materials.

### Knightslime

{% include update/image.html name="knightslime" alt="New visuals for knightslime visualized in the end." %}

Knightslime is the latest slimemetal, alloyed using cobalt, obsidian, and enderslime. Knightslime was originally designed in 1.12 as an alumite replacement, but Tinkers' Construct 3 replaced it with a combination of amethyst bronze and slimesteel, so the material concept was left unused waiting for the soul forge. We recently decided it made more sense to be a final tier 4 end-gated alloy.

Its trait overwield will consume the tool's overslime to buff its mining speed and attack speed. On armor, its trait overshield will consume overslime to boost its protection against all damage. Overshield may sound familiar as it was previously the trait of ichorskin, which now instead provides its new trait from the [slimesuit](#slimesuit).

### Manyullyn Rework

{% include update/image.html name="manyullyn_rework" alt="Updated Encyclopedia Stats for Manyullyn." %}

A common concern expressed by people is manyullyn's trait is a little too situational for how late game it is offered, as the best application of insatible was the less common problem of fighting crowds. We decided to rework the trait based on Manyullyn's other 1.12 trait, cold-blooded. The new trait, ambush, provides bonus damage while you or your target is at full health, making it ideal for one-shotting builds and shorter fights. The new armor trait can help keep damage to a minimum as long as you have a source of healing.

### Nicrosil

{% include update/image.html name="nicrosil" alt="Showcasing nicrosil tools and armor in the Nether." %}

While insatible was not a good fit for manyullyn, it was still a pretty solid trait, so we decided to rework it into a new compatability material, nicrosil. You may also recall that insatible shows up as an option for [slimecages](#slimecages). For anyone unfamiliar with it, the metal is notably included in Cosmere inspired mods like [Metalborn](/projects/#metalborn), and insatible had thematic overlaps with Feruchemy. For armor, it gets kinetic, manyullyn's previous armor trait.

Nicrosil can be alloyed from tin, quartz, and emerald, though the recipe may change based on access to nickel and chromium. Additionally, like other compatability alloys, nicrosil will be available as long as its components are avaialble (making it present if a mod adds nickel, chromium, or tin). Nicrosil is also our second tier 4 compatability metal after Twilight Forest fiery, and the first that is a blazing blood alloy.

### Jeweled Hide

{% include update/image.html name="jeweled_hide" alt="Jeweled Hide being casted from diamond on leather." %}

Jeweled Hide is a rework of ancient hide, being crafted from casting diamond on leather instead of ancient debris on leather. Since this is the intended path to get fortune III in Tinkers' (when incombination with Luck II, only requiring a rabbits foot if you need fortune IV), we figured gating it behind ancient debris felt a little too late. Melting diamond still requires blazing blood, but is available as a much earlier material. Additionally, it clears up confusion between ancient hide and ancient (the ancient tool exclusive material).

Jeweled Hide also provides fortune on bowstrings, which is ideal on fishing rods to provide additional fishing luck. On armor, its trait is revitalized, boosting your health. This switch from fortified (+1 defense slot) was an intentional "nerf" to travelers gear to help distinguish it from plate armor, though do not worry as travelers [has a new way](#trims) to get an extra defense slot.

### Redstone

{% include update/image.html name="redstone" alt="Making redstone arrow heads in the part builder." %}

Arrow heads previously included both gunpoweder and glowstone as dust based materials, so it only seemed fitting to allow redstone. Its trait is supercharged, which boosts the velocity of the projectile. On throwing axes and shurikens that just boosts its range, but on arrows velocity also affects damage.

### Cheese and Pig Iron Bows

{% include update/image.html name="cheese" alt="A bow made of cheese and pig iron." %}

As part of the internal reworks, tasty (pig iron's trait) now works on bows, allowing you to eat it while drawing back the bow. With this new feature, pig iron is the latest option for making bows. Additionally, cheese can be used to create a "string cheese" bowstring, which provides less saturation but removes a random status effect when eaten.

Cheese, pig iron, and slimesuit's Honey all leverage a rewrite to how tasty works internally which will allow making a purely JSON food-based Tinkers' Construct addon if anyone is inclined. Take a look at the trait JSONs tasty, scrumptious, and savory.

### Ancient Material Swapping

{% include update/image.html name="ancient_part_swap" alt="Swapping the handle on a battle sign." %}

The original design for ancient tools assumed no part swapping, but given the high variance in materials (especially when you have a lot of material addons), we opted to allow a method of swapping materials. We did not want to just straight up allow part swapping with tool parts as that devalues finding additional ancient tools in the world, so instead allow part swapping by using another copy of the tool.

Placing an unmodified ancient tool in the crafting grid with an ancient tool will swap one of its materials, with the material to swap being baed on the slot you place the sacrifice. This means if you find one battle sign with a good plate and one with a good handle, you can combine the best of both.

Note this feature also works on regular tools, but is generally a waste compared to recycling it in the part builder. Additionally, if you have a modified tool you wish to sacrifice, you can first remove all its modifiers in the modifier worktable.

## Modifiers

This update doesn't just add tools and materials, but additional new modifiers.

### Trims

{% include update/image.html name="trim" alt="Encyclopedia page on armor trims." %}

Armor trims have been reworked to now provide an additional defense slot to armor rather than being purely cosmetic. On plate armor, this provides 1 extra defense slot that was needed to make general defensive armor feel stronger than enchanted armor pre-end. On traveler's gear, this replaces [ancient hide](#jeweled-hide) as the method to achieve up to 4 defense slots per piece.

On the slimesuit, trim instead buffs the mob part trait giving the tool an additional utility benefit.
Two of the most applications of trim is on slimeboots, with darkthread laces (looting) and [jeweled hide](#jeweled-hide) laces (fortune). Darkthread with trim grants the tool experienced, additionally boosting XP, while jeweled hide when trimmed grants looting making it effectively a level of luck. Jeweled Hide plus trim is intended to replace luck on leggings which is no longer an option.

### Banner

{% include update/image.html name="banner" alt="Omnious banner being added to a plate shield." %}

Plate shields now support a new modifier: banner. This is crafted using any banner, and copies the patterns to the plate shield using the vanilla shield style. The full size handheld shield should automatically support all modded banner patterns that support shields, though the 16x icon form may have more limited support.

Travelers shield does not support banners as we currently lack textures for round 16x banner patterns. If you are an artist who wants to attempt to create these, feel free to submit a [pull request](https://github.com/SlimeKnights/TinkersConstruct/pulls).

### Slimeball

{% include update/video.html name="slimeball" alt="Trickshot using the new slimeball modifier." %}

Slimeball is a new staff exclusive modifier that allows you to fire slimeballs as a fireball like projectile. This modifier was originally designed as a migration of firebreath (blaze slimeskull trait) to JSON, but that trait had too much thematic overlap with spitting so it was reworked. Rather than letting all the work go to waste it was turned into a proper wizarding attack on staffs!

Slimeballs automatically start with bounce, making them bounce a single time upon hitting a wall. The weird behavior of fireballs leads to some pretty cool arcs as a result of this.

### Sliver

{% include update/video.html name="sliver" alt="Swapping slimeballs using the sliver." %}

Slimeball notably allows firing all different types of slimeball, which each have some unique behaviors. Since you may wish to switch between them quickly, the new sliver modifier (slime quiver) makes that super easy. 

### More Dyeing

{% include update/image.html name="dyed_maille" alt="Dyeing the color of maille red on golden armor." %}

Travelers gear has support dyed to change the color of its leather for awhile, and it felt inconsistent that plate lacked a similar feature. Now you can dye the maille on plate armor using dye, giving you more cosmetic variety with your armor.

Additionally, the slimesuit supports dyeing. On most pieces it will dye the mob part, while on the slimelytra specifically it will dye the wings.

### JSON Migration

This update migrates many modifiers to JSON, which will give more flexability to modpack makers wishing to configure Tinkers' and to authors of JSON-based addons.

## Knightmetal Fluid Cannon

{% include update/image.html name="fluid_cannon" alt="Knightmetal Fluid Cannons filled with various fluids." %}

The knightmetal fluid cannon is the third variant of the fluid cannon, crafted using knightmetal and shulker shells. It features the highest velocity, accuracy, and capacity of the three variants, though has power in the middle.

## Art

### Ingot Retexturing

{% include update/image.html name="ingots" alt="All four available slimemetal ingots, plus the new steel and knightmetal ingots and nuggets." %}

We actually had some unused textures for knightslime since a lot of the texture reworks in 1.18. However, since those textures were a little too close to amethyst bronze in color we opted for a full cosmetic rework for knightslime. Rather than waste good textures, we recolored the previous knightslime textures giving cinderslime unique ingot and nugget visuals (it was previously a recolored slimesteel). Cinderslime also got a small palette tweak to make it a bit more vibrant.

Additionally, knightmetal and slimesteel got small tweaks to their textures.

### Material Rarity

{% include update/image.html name="rarity-tooltips" alt="Showing rarity of an unmodified hepatizon pickaxe." %}

Tool materials now have rarity which can be defined in their mateiral definitions. A tool's rarity is made up of the largest rarity from its parts.

By default, materials have the following rarity:

* Tiers 0-2: Common
* Tier 3: Uncommon
* Tier 4: Rare
* Tier 5 (ancient): Epic

But rarity can be overridden by explicately setting it.

### More Modifier Textures

Thanks to work by CreepingCreeper and wearespeedcome/Frozen_Ender, we now have many additional modifier textures for crossbows, plate armor, longbows and fishing rods. Note that armor modifier textures only show on the item form as we have not found an efficient way to include them on the full armor model; though [dyed](#more-dyeing) can give you some additional options for the model visuals.

### Modifier Model Rework

We implemented a new system for finding modifier textures for tools which provides a ton of additional flexability at the cost of requiring a few more JSON files. For 1.20, you can continue to use the previous system where textures are automatically detected in the appropiate folder, but come 1.21 you will need to use a modifier sprite map (located under `assets/<domain>/tinkering/modifiers/sprites`) to assign textures to a modifier on a tool. 

This system notably allows us to much more easily reuse textures for modifiers, along with allowing us to apply unique behavior to a single modifier on different tools. Additionally, its notably more efficient and predicable than the directory scans to find the textures.

## Documentation

### Interactive Online Books
<div class="hatnote" markdown=1>
Main Page: [Interactive Books](/docs/books/1.20)
</div>

{% include update/image.html name="html_books" alt="Showcasing tooltips on an online book." %}

Thanks to the efforts of Paypur, we implemented an interactive version of our online books. In addition to displaying book contents (now including copyable text!), you can navigate the book using buttons and indices, and many of the tooltips function on the webpage. Future updates should further improve the capability of these interactive books.

Since not all devices will support the interactive book, we will continue to provide the original screenshot based approach, which can be accessed using the "gallery" link on the book pages.

### JEI Improvements

{% include update/image.html name="jei_catalysts" alt="Showing crafting stations and modifiers as catalysts to crafting." %}

This update makes various improvements to our JEI support. It notably includes more protection against mods providing broken implementations of fluids (which would previous break our whole plugin due to their broken mod), improved catalyst sets for vanilla recipe types, and better support for our JEI configuration for what to show in the item list. Additionally, modifier recipes no longer show tools that start with that modiifer, and overslime recipes show the ammount restored as text.

{% include update/image.html name="overslime_amount" alt="Slime showing the amount of overslime it adds to the tool." %}

### Translation Updates

{% include update/image.html name="translations" alt="Cover of Mighty Smelting in various languages." %}

This update includes many translation updates thanks to members of the community. Notably, several of these translations contain translated book covers, changing the title to display in their language.

### Material Tooltip Scaling

{% include update/image.html name="tooltip_scaling" alt="Showing the difference between iron plating on travelers vs plate armor." %}

The part stats tooltip on tools now rescales the stats based on the scaling used by the tool, which provides more accurate information on the contributions of each part to your tool's overall stats.

### Durability Command

{% include update/image.html name="durability_command" alt="Running the durability command to break a tool." %}

As it is commonly useful to test tools at either broken states or low durability, we added a new command to set the durability of a tinker tool.


{% include update/end.html %}


## Download

**Tinkers' Construct**
The new Tinkers' Construct 3.12.0.220 update can be downloaded at the following:

{% comment %}
{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.12.0.220" curseforge="8809959" %}
{% endcomment %}
{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.12.0.220" curseforge=false %}

CurseForge is coming soon (waiting on file approval).

**Mantle**

Requires the latest Mantle 1.11.117 update, can be downloaded at the following:

{% include update/download.html name="mantle" version="1.11.117" curseforge="8809819" %}
