---
layout: post
title:  "Tinkers' Construct Throwback Update for 1.20.1"
date:   2025-12-23 21:00:00 -0400
categories: posts
author: KnightMiner
image: /assets/images/updates/tinkers/throwback/ballista.png
image_root: updates/tinkers/throwback
---
The Throwback Update is the latest update to Tinkers' Construct for 1.20. This update adds in a ton of new ranged combat options, several material improvements, and compatability with Twilight Forest.

This update will be the last major content update for 1.20.1. Next effort will be some quick code cleanups before a port to 1.21.1.

{% include toc.html %}

{% include update/start.html %}

## Twilight Forest

One of the big parts of this update is a collaboration we had with the Twilight Forest team. As part of this collaboration, we worked together to redesign the materials from Twilight Forest with traits that better suited the materials, plus modifiers and a new ancient tool. This includes their Fiery, Steeleaf, and more.

Now, you might be wondering, "what about Twilight Forest's Knightmetal? I see a lot of references to it!" Well, it turns out that slimes have managed to get their hands slime(?) on some of it and it can now be natively found in Tinker's Construct in the end!

This is not all that came out of the collaboration, however. Make sure to check things out in the latest Twilight Forest update on 1.21.1 to see some older features from SlimeKnights mods revived in Twilight Forest including a very retro but stylish kind of armor, Berry Bushes, and Drying Racks!

### Ironwood

{% include update/image.html name="ironwood" alt="Various tools receiving the benefit of barkskin." %}

Ironwood is a tier 2 material from the Twilight Forest, created from mixing liveroot with gold and iron. It can be shaped in the part builder to form parts. Its trait is Decidious, which will share some of the tool's durability with other equipped tools via barkskin, preventing some durability loss.

### Steeleaf

{% include update/image.html name="steeleaf" alt="Full set of steeleaf armor." %}

Steeleaf armor is a tier 3 material from the Twilight Forest, which can be obtained by casting molten steeleaf into parts. Its trait is Experienced, which increases XP gain from killing mobs and breaking blocks, perfect for your uncrafting needs.

### Fiery

{% include update/image.html name="fiery" alt="Casting fiery using fiery liquid on iron." %}

Fiery is a tier 4 material obtained by casting fiery liquid on iron tool parts. Fiery liquid is obtained by dumping either fiery tears or fiery blood into any form of Tinkers' tanks.

On held tools, its trait is Autosmelt, which smelts the drops of mined blocks and killed mobs. If you have enough levels of Autosmelt, it will have a chance to grant bonus copies of the smelted item. There is a set of tags to configure which items can be copied like for pack makers to use.

On armor, its trait is Tempered Protection, which grants a large boost to defense while the target is on fire. Pairs nicely with the fiery modifier.

### Knightmetal

{% include update/image.html name="knightmetal" alt="Enderslime spawned with knightmetal goggles and a knightmetal core." %}

The last new material in this update is knightmetal, which is a tier 4 material melted using blazing blood to cast into parts. Knightmetal is a special part of this collaboration, as its not just supported in Tinkers' Construct, but a new native material in the mod (meaning it is available without Twilight Forest installed). Its primarily obtained from enderslimes, who stole some from the Twilight Forest and used it to create armor. Some even ate enough that they will drop knightmetal shards on death.

Knightmetal's trait is Valiant, which boosts damage against armored targets. Its trait on armor is Stalwart, which boosts defense against armed attackers.

### Embossed

{% include update/image.html name="embossed" alt="Crafting embossed on a hammer." %}

Back to Twilight Forest compatability is a new slotless modifier granting +1 upgrade slot called Embossed. To obtain this modifier, simply use any boss trophy, which is obtained by killing a Twilight Forest boss.

### Minotaur's Axe

{% include update/image.html name="minotaur" alt="A minotaur spawned with a Tinkers' axe." %}

The final new feature from our new compatability is the Minotaur's Axe, which is a new ancient tool found in the labyrinth. Minotaurs have a chance to spawn with this tool instead of their golden axes, and it can also be found in the loot chests in the dungeon. The weapon is similar to a hand axe, though it has two tool heads and gives you a large damage bonus when attacking while sprinting.

Also, don't worry that these axes may end up as a nerf to the minotaurs. As part of this update, we improved the ability of monsters to use modifiers from our melee weapons, so minotaurs can use most of the material traits they spawn with!

## Ranged

This update isn't just exploring the Twilight Forest. We also implemented brand new ranged weaponry in the mod.

### Javelin

{% include update/image.html name="javelin" alt="Preparing to throw a javelin." %}

Javelins are a new broad tool created from a mixture of melee and ranged parts. They have average melee weapon stats, but can also be thrown like a trident to deal ranged damage.

Other tools can also be thrown using the new throwing ability modifier, and the returning ability modifier will make thrown tools return to your hand. If throwing is put on a harvest tool such as a pickaxe or hammer, it will break blocks it hits provided it has enough mining speed.

### Ballista

{% include update/image.html name="ballista" alt="Firing a sword using ballista." %}

Throwing isn't the only way to launch tools. The Ballista modifier is a new modifier for longbows that allows them to fire a tool from the other hand. The bow's velocity will provide a boost to the tools melee damage and mining speed, though not every bow modifier will be applicable to ballista projectiles. Returning works from tools fired using ballista, which can be a good way to save ability slots.

### Fishing Rods

{% include update/image.html name="fishing-rod" alt="Fishing rod hooked into mob." %}

Fishing rods are the newest small ranged weapon, boasting in reusable ammo. They deal damage by hooking mobs and pulling back, which works similarly to bows by scaling damage based on velocity and power. They can also be used to fish, but why would you do that?

### Grapple

{% include update/video.html name="grapple" alt="Demonstrating grapple to scale a wall." %}

One notable ability modifier for fishing rods is grapple, which will pull you towards any block you hook. With a bit of practice, you should be able to avoid most fall damage from using this to pull you up blocks.

### Drill Attack

{% include update/image.html name="drill" alt="Encyclopedia page about the drill attack." %}

Maybe the best projectile is actually yourself. Combining the drill attack ability with springing, flinging, or grapple, you will perform a spin attack in the direction of the ability, performing a melee attack on the first collided monster (kinda like riptide). 

## Ammo

One popular feature that was dropped during the Tinkers' Construct 3 rewrite was tinkerable ammo. This was done partly as the design of ammo made them impossible to balance, and partly because it made the mod very confusing about which modifiers went on the bow or the arrow (ultimately leading to too few bow modifiers).

The new design for ammo uses stack sizes just like vanilla arrows, providing greater compatability with other mods. Arrows have very few modifier recipes, primarily leaning into material traits for their unique effects.

### Arrows

{% include update/image.html name="arrow" alt="Crafting arrows in the anvil." %}

Arrows are created from an arrow head, an arrow shaft, and an arrow fletching. Arrow heads tend to provide damage based traits, while arrow shafts are often more specialized. Fletchings are largely negative traits apart from feathers, allowing you to save on arrow cost at a small cost to the projectile.

You get 4 arrows from each craft, and they stack up to 64. Additonally, our arrows should work in most custom bows, still performing their effects.

### Shurikens and Throwing Axes

{% include update/image.html name="shuriken" alt="Wielding a shuriken and a throwing axe." %}

Shurikens also make a full comeback in this update. They are crafted using 2 arrow heads to get 4 shurikens. Different materials will change how much damage they deal or add special effects when they hit. Throwing axes are a variant of the shuriken made from an arrow head and an arrow shaft, granting 2 throwing axes. They do a bit more damage and gain access to arrow shaft traits, at the cost of less damage from arrow head traits and less velocity (making them not go as far). Both tools stack to 16.

### Sleeves

{% include update/image.html name="sleeves" alt="Inventory of a sleeves vest." %}

Max stack size of 16 seem too small for your axes or shurikens? Try the new sleeves upgrade for chestplates. Each level adds 3 slots that can be filled with up to 16 throwable items, such as shurikens, throwing axes, splash potions, ender pearls, or eyes of ender. To throw an item, you can right click with an empty hand. Sneaking while right clicking changes the selected item to throw.

### Fluid Materials

{% include update/image.html name="fluid-ammo" alt="Tooltip for a glass arrow filled with molten cobalt." %}

Two notable materials for ammo are flint and glass. Flint's trait is Tippable, which allows casting potions on the projectile to perform extra effects. Unlike tipped arrows, harming actually works, its notably pretty solid on shurikens for a damage boost.

Glass's trait is Smashing, which allows filling the projectile with fluid such as molten metals to perform effects on hit at the cost of doing a bit less damage from Amorphous. This has a higher damage potential than potions when considering tier 4 materials, but also a higher cost.

### More Materials

{% include update/image.html name="ammo-materials" alt="Full list of ammo materials in the encyclopedia." %}

A few more highlights of ammo materials include:

* Quartz for a simple damage boost.
* Ender pearls to teleport you safely to where it lands.
* Skyslime provides extra knockback.
* Prismarine works underwater.
* Shulker shell does not break when it hits a target, letting you reuse the arrow.
* Slimewood makes the arrow or axe bounce off walls and the ground.
* Glowstone places a light source.
* Gunpowder explodes, great for collecting dragon scales.
* Dragon scales do more damage when fired while in the air.
* And more!

Shurikens fully replace the previous glowball, EFLN, flint shuriken, and quartz shurikens we had in the mod before. Glowballs specifically are replaced by the glowstone material, while EFLNs are replaced by gunpowder shurikens. Mixing gunpowder with prismarine will apply the classic EFLN explosion shape that works underwater.

### Redirected

{% include update/image.html name="redirected" alt="Applying redirected to a quartz shuriken." %}

As mentioned earlier, ammo does not have a ton of modifier recipes. This was done largely to keep costs of projectiles down as they are single use. However, one notable recipe you can apply is the Redirected modifier, which adds an extra level of the first head (kinda like rebalanced on other tools). This costs dragons breath, making it a late game buff to your ammo.

### Arrow Pattern

{% include update/image.html name="arrow-cast" alt="Reusable golden arrow pattern." %}

Players experienced with Tinkers' Construct 3 might be concerned at the pattern cost in creating all the arrow parts. We have done two things to help with that. The first thing is pattern crafting now gives twice as many patterns, making each worth as much as a stick instead of a plank. The second thing is the golden arrow pattern, which is a reusable pattern specifically for making arrow parts (this mirrors how gold casts work as reusable part builder patterns for their part).

The screenshot also shows another related feature: the part builder UI is now slightly taller, having 4 rows of patterns instead of 3. This change applies to most of our tables, including our chests. This was made after considering that we were about 20 pixels shorter than a double chest UI, so had plenty of vertical space to use.

## But Wait, There's More!

Beyond ranged combat and the Twilight Forest, we have quite a few other neat features in this update.

### Minimap Modifier

{% include update/image.html name="minotaur" alt="Navigating the labyrinth using minimap." %}

The latest new helmet upgrade is minimap! Slot in either a vanilla map or compatible maps from other mods to get it added to your HUD. It will even be explored as you traverse. You can use the client config to adjust its size and position.

As part of this change, the item frame modifier was made a bit cheaper, making it more competitive for your upgrades.

### Upgrade Update

{% include update/image.html name="forecast" alt="Recipe for Forecast on a tool." %}

One thing that bothered me for awhile is how many of our methods for getting +1 upgrade slot revolved around killing monsters. For a bit more variety, we made a small tweak to the set. The new forecast modifier costs a silk-touched diamond, emerald, or cobalt ore block for +1 upgrade slot, replacing resurrected (end crystal). End crystals are now instead used to craft rebalanced, replacing dragon scales or gilded blackstone. The recipe for gilded (which turns an ability slot into 2 upgrades) was also switched to gilded blackstone as part of this (as it just makes sense, its gilded).

### Compatability Ore Rework

{% include update/image.html name="compat-rework" alt="Lead's page in the encyclopedia." %}

Tinkers' Construct has quite a bit of compatability for common ores and alloys such as lead, silver, and bronze. However, both tungsten and platinum we found very rarely showed up in modpacks, which reduced visibility for one interesting trait, hid a very boring trait, and left us with too few tier 2 harvest materials. Additionally, I was always pretty unhappy with invar's trait, as it was the opposite of invariant.

To solve this problem, I decided to drop compatibility for platinum and tungsten as materials. Lead is now a harvest material, receiving parts of tungsten's old trait - boosting mining speed at the cost of your movement speed. Invar received the combat side of that trait that was previously on lead - boosting melee damage at the cost of movement speed. I feel this gives you a much more polished set of compatability materials.

Note that we still support melting and casting for platinum and tungsten, and they still have their fluid effects. Additionally, we created a quick lowcode mod that restores in case its needed for a pack, available on the [release page](https://github.com/SlimeKnights/TinkersConstruct/releases/tag/v3.11.0.148) ([direct link](https://github.com/SlimeKnights/TinkersConstruct/releases/download/v3.11.0.148/Tinkers-Platinum-Tungsten-1.0.0.jar)). We do not plan to maintain the mod past this release so we recommend incorporating it into your modpack or addon if you need those materials.

### Better Electrum

{% include update/image.html name="shocking" alt="New trait for electrum." %}

One other compatability material that never quite fit was electrum. Its trait gave you a boost to XP, but mods that provide electrum tend to use little to no XP making it just out of place. It's new trait is shocking, which boosts damage against targets in the water, providing a thorns like effect on armor.

For those who really liked massive amounts of XP, that can still be obtained using [Steeleaf](#steeleaf) if you have Twilight Forest.

### Fake Ingots

{% include update/image.html name="alloys" alt="Showing pewter and bronze alloys." %}

As you hopefully know, Tinkers' Construct has compatability materials that are disabled by default, but will automatically enable if other mods are detected as adding them. More recently, the compatability alloys were set to enable if another mod added them, or added all their alloy components. Reason is practically, all you need for a castable material is the fluid, which we add regardless. However, some players disliked that these materials were activated without ingots or blocks, forcing you to store them as fluids.

To solve this, we now provide NBT ingots and blocks for these materials if we don't detect another mod adding them. These will function in all relevant tinkers recipes, including crafting anvils and travelers gear and repairing tools.
Internally, they are essentially tool parts, which prevents them from being tagged for other mods to use them. However, this is the point as we don't want other mods checking the tags thinking we unconditionally add these metals.

For addon authors, I'll point out that this includes block tool parts, using a 3D model. I kept the logic for both pretty generic so it should be reusable. The model also supports being used for 3D tool models, see [the model format](/docs/json/models/material#material-block).

### War Charge

{% include update/image.html name="war-charge" alt="Charging up power on a war pick." %}

While I loved the concept of war picks as a pickaxe crossbow, they always felt a little weak compared to the other ancient tools. To make them a bit stronger and more interesting, they now have a new trait called war charge. While loaded with an arrow, every block you mine will give it a small velocity boost, increasing the damage of the next fired arrow.

Additionally, its now a bit easier to find war picks and melting pans. All variants of zombies now have a chance to spawn with melting pans, and many illager variants including zombie villagers can spawn with war picks.

### Recycle Tools

{% include update/image.html name="recycling" alt="Recycling a crossbow." %}

Basic vanilla tools such as wood, stone, and bows cannot be recycled in a smeltery. While most of those are cheap, other mods add more valuable tools such as ironwood from Twilight Forest. You can now recycle such tools in a part builder using venom bottles. This mirrors a similar feature where you can recycle tinkers tools in the part builder, which was switched to also use venom.

### Fluid Behaviors

{% include update/image.html name="fluid-swim" alt="New visuals for swimming in slimy fluids" %}

As part of this update, we improved the fluid behaviors for many of our fluids. This includes proper underwater tinting when swimming in slimes, and proper camera blocking visuals in our molten metals. Additionally, many other fluid behaviors were tweaked to make them more distinct and interesting, such as how far our fluids flow.

### Placeable Ichor

{% include update/image.html name="ichor" alt="Ichor flowing upwards." %}

We got a bit tired of waiting for the modloader to add support for reverse gravity fluids, so we just did it ourselves. Unfortunately, the fluid model is still hardcoded, but we got some pretty nice reverse gravity flowing behavior for ichor and cinderslime. Its a little weird, but is suited to those unique fluids.

### Generate Melting Recipes

{% include update/image.html name="generate-melting" alt="Command to generate melting recipes." %}

One new technical change is a command to generate melting recipes based on crafting table recipes. Tinkers' Construct 2 used to have a feature that would generate recipes by scanning the crafting table recipes, improving options for recycling. We manually created a bunch of those recipes for vanilla, but until now there was not an option for modded content.

The new generate melting recipes command will do the same scan, but then cache the results in a datapack. You can then freely modify the datapack to include the desired recipes in your pack (as some of the generated recipes are pretty weird). There is a JSON file you can modify using a datapack for further configuration of the command.

The generate part textures command was slightly renamed as a result of this change.


## Download

**Tinkers' Construct**

The new Tinkers' Construct 3.11.0.148 update can be downloaded at the following:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.11.0.148" curseforge="7371800" %}

**Mantle**

Requires the latest Mantle 1.11.95 update, can be downloaded at the following:

{% include update/download.html name="mantle" version="1.11.95" curseforge="7367477" %}
