---
layout: page
title: Common Suggestions
description: This page covers common suggestions for our mods. These suggestions are divided into categories based on whether they are planned for future versions already or simply rejected for some reason.
---
<div class="hatnote" markdown=1>
For suggestions related to adding back removed feature, also check [Removed Features](/docs/removed).
</div>

{{page.description}}

Note for suggestions that are simply "port the mod to X", you will be better answered by the [General FAQ](..).

{%include toc.html %}

## Ancient tools

Since the introduction of ancient tools, we have had quite a few suggestions for them which simply go against their design. This section gathers a few of those suggestions to clarify why they are not going to be implemented.

### Craft ancient tools

By design, ancient tools are not craftable. They are meant to be loot exclusive tools in a similar vein to the trident or mace from the base game, rewarding players who choose to explore and giving a template for pack makers who wish to do a quest driven or exploration driven pack themed around Tinkers.

If we allow crafting the ancient tools, they lose their place in the mod. In addition, in some cases they just have too much overlap with existing tools which would lead to us just removing one of the two entirely. Do remember that a lot of their abilities are not exclusive to them; so you can often craft a similar tool from the craftable options.

All that said, for people wishing for "a config" to make them craftable, remember that datapacks are our primary source of configuration for the mod. You can use them to add recipes for ancient tools if you wish. We do not currently provide a template for that, but we do have "canonical" recipes for the tools:

* Melting Pan - created by casting molten metals on a bow limb in the same style as plate shields.
* Battle Sign - created by casting molten metals on a large plate in the same style as plate shields.
* War Pick - created from a pickaxe head, a bow limb, and a bowstring.
* Swasher - created from a sword blade, a tool handle, a bow grip, and a seared tank.

### Swap ancient tools materials

Similarly to disallowing crafting ancient tools, we also have no plans to enable part swapping for ancient tools. In order for a loot exclusive tool to be interesting to find, it either needs to reward you for finding multiple or be extremely rare. We did not want to make them extremely rare as many players would never get a chance to use them. Instead, material variants give advantages to finding multiple, as you can both attempt to collect them in a variety of materials, and there is a luck aspect to finding a good set.

Keep in mind that since you do not have control over materials, ancient tools are on average slightly stronger. So ultimately you can make powerful tools without needing to choose the material. You also can use the modifier worktable to transfer modifiers from one ancient tool to another should you find a better set of materials later.

## Bring back removed tools

Its a very common low effort suggestion to just say "bring back all the removed tools" or "bring back a specific removed tool". Remember if something was removed, it was removed with good reason; suggestions to just bring back removed content are both annoying and honestly disrespectful of the effort we put into improving the mod. While it is true that some tools were removed, we have added so many more tools, so take some time to explore the new content first.

Overall, we would rather provide fewer well made tools than a large number of poorly made tools; this unfortunately sometimes leads to your favorite tool being cut, just remember the one we kept was someone else's favorite. If you think a removed tool should come back, make a detailed suggestion including what niche you think that tool filled.

### Bring back the shovel

Shovels were replaced by the pickadze and the mattock, both of which can break dirt blocks but have an extra feature on top. Since the mattock was in the mod as effectively a stronger shovel, the shovel felt out of place. Rather than making up some arbitrary ability to justify shovels, we opted to remove the shovel in favor of shovel alternatives. If you really want a tool that looks like a big spoon, consider the excavator.

No, we do not need to have shovels just because vanilla does, we can make our own design choices. And no, this is not up for debate. Dislike that there are no shovels? Consider using our addon [Tinkers' Things](/projects/#tinkers-things), which adds shovels as a boring example harvest tool.

### Bring back modifiable ammo
<div class="hatnote" markdown=1>
See also: [Next update](/docs/roadmap#projectiles), [Removed Features](/docs/removed#projectiles)
</div>

The design of ammo in Tinkers' Construct 1 and 2 was problematic due to two issues:

* The first issue with this design is how modifiers were handled between bows and arrows. Since both ammo and bows were modifiable, this generated a lot of confusion about which of the two tools needed to receive which upgrades, in part as some worked on bows only for melee combat. Additionally, this meant bows and arrows effectively had twice as many modifier slots as other tools, which threw off the power scaling compared to vanilla bows even more than material bows already did. Limiting modifiers to just bows makes the design easier to parse and easier to balance.
* The second issue with ammo was the fact durability was treated as ammo. The reason for this was to fix a problem where modifying ammo was way too expensive for a single use projectile, requiring us to give you a way to repair it to avoid repaying the modifier cost. This led to a lot of exploits with other durability related modifiers which rendered a lot of the ammo costs meaningless, and removed most of the cost associated with using projectile weapons, which discourages many interesting vanilla mechanics such as arrow farms.

We have a reworked design coming in the next update. Ammo is still crafted from a variety of materials, but would not be modifiable after creating. Crafting arrows would work much like vanilla where you get multiple for a combination of materials (instead of using durability), and the lack of modifiers keeps the cost down so it is not a problem if they are single use. Material choices gives you some interesting options, while ultimately leaving most of the complexity in tool design to bows.

### Bring back removed weapons
<div class="hatnote" markdown=1>
See also: [Removed Features](/docs/removed#tools) for more specific reasons each tool was removed and their replacement.
</div>

In total, we removed 4 weapons from older versions: longswords, rapiers, frypans, and shortbows. None of these weapons provided anything other than minor stat changes to their counterparts of the sword/longbow. Since all harvest tools are also weapons, we opted to merge longswords, rapiers, and frypans into existing harvest tools rather than keeping them reskins of the sword. For the shortbow, we turned that into an example ranged weapon in [Tinkers' Things](/projects/#tinkers-things).

Ultimately, Minecraft's combat isn't complex enough to make too many interesting variants of melee weapons or bows beyond those we already provide. Thus, rather than adding reskins of existing melee and ranged weapons with minor stat alterations that you can already recreate with modifiers, we would rather add new and unique weapons that have different attack patterns. See [the Roadmap](/docs/roadmap#ranged) for some potential future ranged weapons.

## Add a paxel

The standard design for paxels is very boring tool design. They have all functionality of other tools, making standard tools like pickaxes and axes useless. Why would we provide an option that makes other features in our mod useless? Especially in a mod all about encouraging you to create more tools.

That said, we do have many, many, balanced paxel alternatives that you should consider:

* Mattocks allow you to mine most shovel and axe blocks. Pairing with a pickaxe lets you mine all relevant "paxel" blocks.
* Pickadzes allow you to mine any pickaxe or shovel blocks with no harvest level, perfect for mining most non-ore blocks.
* An amethyst bronze pickaxe can mine most common blocks faster due to its crumbling trait, which can offer up to 250% mining speed against blocks with no harvest tools.
* The splashing and spitting modifiers can break just about any block at the cost of some molten gems for each use. For best results you will want to use molten diamond or molten netherite, but molten quartz, molten amethyst, and molten emerald are options if you are on a budget.