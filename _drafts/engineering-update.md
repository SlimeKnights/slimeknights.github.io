---
layout: post
title:  "Tinkers 1.20 Beta - Engineering Update"
categories: posts
author: KnightMiner
image_root: updates/tinkers/engineering
---
This new update for Tinkers' Construct adds many new features related to automation, along with more compatability for [Immersive Engineering][immersive-engineering] and a ton of new datapack features giving more flexability to JSON addons.

{% include toc.html %}

{% include update/start.html %}

## Tools

### Travelers' materials

{% include update/image.html name="travelers-materials" alt="A row of travlers gear with different materials on each piece." %}

To start the engineering, we found a new technique for creating traveler's armor out of more types of metal. To craft, simply use a different ingot type than copper. These materials grant both varying defense stats and plating traits, notably boosting the protection of travelers gear. This produces a better tradeoff with plate (still higher defense) or travelers (more ability slots).

Due to this change, travelers lost an upgrade slot. However, crafting with rose gold will give you the same number you remember.

Another consequence of this change is the golden modifier is no longer applied using a defense slot as both travelers and plate get it via trait. Slime suit now grants the modifier to piglin and piglin brute slimeskulls.

### Ancient

{% include update/image.html name="ancient" alt="Various ancient tools using the ancient material." %}

Not all advances are modern with the newest material: ancient. Ancient is a loot exclusive material found primarily on ancient tools (hence the name), though plate armor can also notably obtain it via bastions. It grants the tool an extra ability slot at the cost of large debuffs to several speed stats. It also reuqires ancient debris to repair.

## Fluids
### Slime Bottles

{% include update/image.html name="slime-bottles" alt="Brewing a slimy potion and a slimy bottle." %}

In chemical engineering, slime bottles got some brand new effects, both bringing them more in line with the new fluid effects for slime and making them more distinct from vanilla potions:

* Earth bottles now grant experienced (boosting XP drops).
* Sky bottles grant ricochet (increasing knockback and sling modifiers).
* Ichor bottles grant levitation (for some easy flight).
* Ender bottles grant enderference, preventing teleports.

Congealed slime now also can be brewed into an awkward potion to create new potions with the matching effect, usable in fluid modifiers.

### Slimy Cakes

{% include update/image.html name="slime-cake" alt="All slimy cakes arranged." %}

Slimy cakes also got a revamp as part of food engineering (thats a real thing!). Each cake now grants a completely unique status effect not available in potion form:

* Earth cakes grant bouncy, like the modifier.
* Sky cakes grant double jump, like the modifier.
* Ichor cakes grant anti-gravity, causing you to fall up. Be careful that you have a way to land safely!
* Ender cakes grant returning, causing you to teleport to the cake location after the timer runs out. Eat more ender cake to extend the timer!


### Improved Effects

{% include update/image.html name="fluid-effects" alt="Dual wielding staffs using the new ender fluid effect." %}

Finishing up our chemical engineering is some improvements to a couple of fluid effects:

* Ichor now places blocks; this was moved from ender to make "building staffs" far more practical.
* Ender now has a new interaction effect, allowing you to interact with the target of the projectile. This has a lot of potential for dual wielding staffs with splashing.
* Enderslime now applies returning to the target before the teleport, and can be used to extend the return timer from enderslime cake.

## Smeltery
### Fluid Cannon

{% include update/image.html name="fluid-cannon" alt="Both types of fluid cannon ready to fire." %}

Our efforts in chemical engineering prompted the design of a new fluid delivery system. This block runs off redstone pulses to fire fluid projectiles that work just like the spitting modifier, except automatic! Useful for mob farms, auto block breakers and placers, and even has some limited block interaction using ender.

These blocks notably are *not* players, which affects killed entities and the interactions it can perform. But they still have many useful interactions without being a player.

### Casting Tank

We managed to combine a drain with a seared tank to create a new variant of casting block. Unlike the casting table or basin, this holds a buffer of fluid which is used when an item is placed inside. It can be used to automaticaly fill or empty simple fluid containers, such as buckets, copper cans, and even potion bottles or soup bowls.

While you can place tools in this block, you are better off using the tinker tank.

### Tinker Tank

{% include update/image.html name="tinker-tank" alt="The tinker tank being used to fill a swasher." %}

Whe combining a drain with a scorched tank, the behavior of the block ended up different. Instead of a buffer, this tank directly interacts with the tool's tank. This can be used to automate filling or draining tools instead of requiring manual interaction with a tank or drain.

Note this block does not work with fluid containers that lack incremental sizes, such as buckets or copper cans. For that use the casting tank.

## Immersive Engineering

Any good engineer can tell you that collaboration is important to develop the most useful technology. This is why Tinkers' is improving compatability with [Immersive Engineering][immersive-engineering].

### Treated Wood

{% include update/image.html name="treated-wood" alt="The new treated wood tool material." %}

Casting creosote oil on wood creates treated wood, a new general tool material that boosts the tool's overall durability and repair efficiency. This material is avaialble from any mod adding either treated wood or creosote oil.

### Fluid Effects

{% include update/image.html name="ie-fluids" alt="Documentation for resin in Tinkers' fluid effects." %}

Immersive Engineering fluids now work in all relevant fluid modifiers, performing effects based on their chemthrower effects. This includes things such as herbicide removing plants, and concrete trapping mobs in blocks of quick-dry cement.

### Chemthrower

The chemthrower now supports all the latest effects from smeltery fluids, including not just entity effects such as status effects and high damage, but also block effects such as piston pushing, block breaking, and even block placing. Since the chemthrower spreads out the fluid a lot, you may need to move around a bit to fully apply effects that require more fluid.

{% include update/end.html %}

{% comment %}
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
{% endcomment %}

[immersive-engineering]: https://www.curseforge.com/minecraft/mc-mods/immersive-engineering