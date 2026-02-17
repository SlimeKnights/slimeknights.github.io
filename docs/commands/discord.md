---
layout: page
title: Discord Commands
description: This page covers custom bot commands available on our Discord.
---

This page covers custom bot commands available [on our Discord](https://discord.gg/njGrvuh). These commands are often used to query common resources.

{% include toc.html %}

## FAQ

The following commands are meant to query FAQ questions. They have no arguments. Note none of these commands provide information that is not available on this site. In other words, only use the commands to respond to another person on discord; if you have a question you will get a much faster answer by just clicking the link to the information.

* `!faq`: Links to [Tinkers' 3 FAQ](/faq/tinkers-construct-3).
* `!support`: Posts information from [What versions do you support?](/faq/#what-versions-do-you-support), which answers when we plan to port to a given version.
* `!cfbuilds`: Posts information from [Where are the builds? I cannot find them on CurseForge!](/faq/#where-are-the-builds-i-cannot-find-them-on-curseforge).
* `!islands`: Posts information from [How do I configure slime islands?](/faq/tinkers-construct-3/#how-do-i-configure-slime-islands).
* `!besttool`: Links to [Making the Best Tool](/faq/best-tool/) and the `#tool-showcase` channel.
* `!fabric`: Posts information from [Will you port to other mod loaders?](/faq/#will-you-port-to-other-mod-loaders) focused on the Fabric Modloader.

### Other Mods

These commands provide FAQ answers that do not directly link FAQ.

* `!bedrock`, `!marketplace`: Provides a reminder our discord does not cover the FTB Bedrock edition, and links their discord.
* `!optifine`: Provides information on the reasons to not use Optifine along with links to alternatives.

### Books

These commands link online books.

* `!read`: Shows all book emoji in a row preceeded by the read slime, to remind someone to read in game books.
* `!onlinebooks`: Provides links to all 6 Tinkers' books online.
  * Optional argument specifies Minecraft version.
* `!` followed by a book emoji: Provides a link to that specific book.

### Pings

* `!pings`: Posts a reminder to avoid unneeded pings to the dev team.
* `!disablepings`: Posts information on how to disable pings on reply.

## Wikis

The following commands link to wikis. They take any number of arguments, subbing the spaces for `_` or `-` to form valid URLs.

[**Minecraft Wiki:**](https://minecraft.wiki/)

* `!mcw`: Links a Minecraft Wiki page.
* `!mcws`: Links a Minecraft Wiki search.
* `!<mcw>`: Links a Minecraft Wiki page with no embed.

[**Coppermind:**](https://coppermind.net/)

Relevant to Metalborn.

* `!coppermind`: Links a Coppermind page.
* `!<coppermind>`: Links a Coppermind page with no embed.
* `!|coppermind|`: Links a Coppermind page under a spoiler.

[**Slimeknights Documentation**](/docs)

* `!projects`: Links the SlimeKnights project page. Argument specifies anchor.
* `!docs`: Links to documentation. Argument specifies subpage.
* `!<docs>`: Links to documentation with no embed. Argument specifies subpage.
* `!docj`: Links to documentation with automatic `json/` prefix. Argument specifies subpage.
* `!<docj>`: Links to documentation with no embed and with automatic `json/` prefix. Argument specifies subpage.

## Emoji

These commands build pictures from emoji. While they are mostly meant for fun, they are occasionally useful to give someone information on building a structure.

* `!melter`: Shows how to create a simple melter and casting setup.
* `!alloyer`: Shows how to create a simple alloyer setup, guaranteed valid alloys (or no alloy).
* `!smeltery`: Shows how to create a simple smeltery.
* `!smeltery_pouring`: Shows how to create a simple smeltery with a casting setup.
  * Optional argument `[output]` to change the casting destination.
* `!foundry`: Shows how to create a simple foundry.
* `!alloymelter`: Shows how to create an alloyer using a melter input.

### Faucet

The faucet command shows casting from an input to an output.

**Syntax:**
```
!faucet [output]
!faucet <input> <output>
```

**Arguments:**

* `<input>`: emoji to show on the top of the faucet. If unset, defaults to a random tank, alloyer, or melter.
* `[output]`: emoji to show on the bottom of the faucet. If unset, defaults to a tank matching the input.

## Memes

The following commands simply post images of memes relevant to common discord conversations:

* `!crashlog`: Post a meme about how people say a mod is crashing but don't provide a crash log.
* `!try`, `!tryitandsee`: Post a link to the [Try it and See](https://tryitands.ee/), which is an answer to people asking really specific questions that are easily verifiable in game.
* `!modderstrap`: Posts a comic about how modders often spend more time modding than playing the game.


## Coding

These commands link resources related to coding.

* `!paste`: Links to many common websites for pasting large amounts of text or code.
* `!pastesites`: Shorter version of `!paste`.
* `!events`: Post a reference image for common reasons an event handler does not work.
* `!mcjty`: Post a link to [McJty's modding tutorials](https://www.mcjty.eu/docs/intro).

### Remove Recipe

The remove recipe command demonstrates the syntax and location for removing a recipe using a datapack. This information is also present at [Removing recipes](/docs/json/resource-location#removing-recipes).

**Syntax:**
```
!remove [domain] [output]
!remove <id>
```

**Arguments:**

* `[domain]`: recipe domain to remove. If both `[domain]` and `[name]` are unset, defaults to the text `<domain>`.
* `[name]`: recipe name to remove. If both `[domain]` and `[name]` are unset, defaults to the text `<name>`.
* `<id>`: Recipe ID to remove. Will do one of the following:
    * If the ID contains a `:`, then the text before `:` will be treated as the domain and the text after will be treated as the name.
    * If the ID lacks a `:`, then the domain will be `minecraft` and the text after the ID.
