---
layout: post
title:  "Tinkers' Construct Bow Update"
date:   2022-12-27 12:00:00 -0400
categories: posts
author: KnightMiner
image_root: updates/tinkers/bow
---

The latest Tinkers Construct alpha is here, introducing ranged weapons! Been working on this for a couple of month, fully designing ranged weapons from the ground up. The linked visual changelog gives the basics so I encourage checking it out.

And for the people who will inevitably ask, no, this is not for 1.19, this is for 1.18. No, we have no ETA for 1.19.3, we want to work on our content backlog instead of chasing versions. 1.19.3 will come eventually when we feel its a good time.

*This blog was originally posted [on Imgur](https://imgur.com/a/tinkers-construct-bow-update-1-18-QfVq45F) and [Reddit](https://www.reddit.com/r/feedthebeast/comments/zwxyze/comment/j1xene0/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button). It has been copied over for the sake of preserving our update history.*

{% include toc.html %}

{% include update/start.html %}

## Crossbows

{% include update/image.html name="crossbow" alt="Dual wielding crosssbows." %}

The first ranged weapon you will encounter is the crossbow. Crossbows are small and fast ranged weapons, capable of firing both arrows and fireworks. In addition, with the right modifiers its possible to dual wield crossbows.

## Longbows

{% include update/image.html name="longbow" alt="Fighting a creeper with a longbow." %}

Back to the fun stuff, the second ranged weapon is the longbow. Longbows are large and powerful, capable of getting much more extreme stats. They currently only fire arrows, but in the future we have plans for giant arrows as an ammo type unique to longbows.

## Tipping Arrows

{% include update/image.html name="cast-arrows" alt="Recipes for casting tipped arrows in JEI." %}

You may be wondering, what about arrows? We decided that for design reasons, modifiable arrows lead to too many problems so are just using "vanilla" arrows this time. Do not despair though, that still leaves you many options including the now easier to craft tipped arrows.

If you recall, we allow dumping potions into seared tanks for use with modifiers such as spilling. You now also can cast that fluid on an arrow to create tipped arrows without the need to travel to the end.

## Arrow Variants

{% include update/image.html name="arrow-variants" alt="Various arrows from archer's paradox." %}

Tipped arrows not enough for you? Luckily Tinkers also supports most arrows added by other mods. If you want more arrow options we recommend Archer's Paradox by CoFH. This screenshot also contains arrows from Alex's mobs and Inspiratons.

We may add some custom arrow types of our own in the future based on some of the old arrow traits in 1.12, though most of the ideas we wanted to do were already done by [Archer's Paradox](https://www.curseforge.com/minecraft/mc-mods/archers-paradox).

## Crafting Bows

{% include update/image.html name="crafting-crossbow" alt="Crafting a crossbow in the tinker station." %}

For more details on the ranged weapons, they are created just like any melee or harvest tool in the tinker station (crossbows only) or tinkers anvil (crossbows and longbows).

Both bow variants consist of bow limbs, bow grips, and bowstrings and support many material variants.

## Bow Materials

{% include update/image.html name="materials" alt="Showing many bow materials in JEI." %}

Part of the reason bows were delayed so long is we wanted to put in the effort to make bows truly interesting. 1.12 bows suffered from too many materials that were useless and traits that only helped if you planned to use your bow for melee.

The 1.18 bow materials were designed from the ground up for ranged weapons. While many materials are also used for melee and harvest tools, there are also some unique bow materials (such as bamboo) and some materials unique to melee/harvest tools (such as stone). All materials have a trait that is actually useful for ranged combat. For instance, enderference from chorus lets you keep endermen from teleporting away from your arrows, instead of just helping if you melee the enderman with your bow.

Bowstrings notably are like tool bindings in that they have no stats, just traits. Some of these traits you have seen before on tool bindings, but a few were reimagined for bows.

For more information on the options available, its good to check out the books. All 6 guidebooks have been updated with relevant information to ranged weapons

## Bow Stats

{% include update/image.html name="stats" alt="Bow material stats show in the in game guidebook." %}

Bow stats also went through revisions, leading to the final choice of drawspeed, velocity, and accuracy.

* Drawspeed is quite simply how fast the bow draws. It uses the same units as attack speeds, essentially describing how many times you can fire the bow per second.
* Velocity determines how fast the arrow moves. This affects both your arrow range and acts as a multiplier on arrow damage.
* Accuracy determines how likely your arrow is to fly towards the crosshair. At 1.0 accuracy, your arrow will always hit the mark. Vanilla bows all fire with 0.75 accuracy.

Unlike melee and harvest tool parts, stats on bow parts are summed together, meaning tools such as longbows have more potential for large stats.

## Upgrades

{% include update/image.html name="upgrades" alt="Several bow upgrades shown in the book." %}

In addition to materials, bows also have many upgrades to choose from. This includes many vanilla modifiers (though some like piercing got rebranded to avoid confusion with our modifier) and some new ones such as freezing.

In addition, bows can receive many previously existing modifiers, including melee modifiers allowing you to turn your bow into an (somewhat) effective tool for stabbing.

## Abilities

{% include update/image.html name="abilities" alt="Quiver and crystalshot in the guidebook." %}

Bows also posses several abilities to choose from. This includes vanilla options like multishot and crystalshot (rebranded infinity), tinkers ones such as quivers, and classic modifiers like unbreakable and looting. They even support getting modifiers such as tilling or stripping (though that runs on left click instead of right click).

## Modifier Worktable

{% include update/image.html name="worktable" alt="Using the worktable to remove a modifier." %}

One last notable feature is actually from the last release (though it never got a showcase in a visual changelog): the modifier worktable.  This table is where you modify your modifiers, which currently means you can resort, hide, or even remove your modifiers. Since this is the bow update, know it can do all of these with modifiers on bows. All recipes for the table are listed in JEI.

## Ambidextrous

{% include update/image.html name="ambidextrous" alt="Applying ambidextrous to plate armor." %}

In addition to bows, this update has some other new features. One notable change is a small revamp to unarmed. You no longer need to spend an ability slot to buff the damage of your empty hand with sharpness or smite, only if you want to be able to punch with both hands. We hope this change will make unarmed more competitive with other options for weapons.

## Potted Plants

{% include update/image.html name="pots" alt="Potted slimy ferns and slimy saplings." %}

Finally, one last new feature from this build is the ability to put our plants in flowerpots. Because flowerpots are cool.

## Download

The Tinkers' Construct 3.6.0.73 update can be downloaded from:

{% include update/download.html name="tinkers-construct" github="TinkersConstruct" version="3.6.0.73" github-tag="3.6.0.73" curseforge="4275759" %}