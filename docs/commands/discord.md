---
layout: page
title: Discord Commands
description: This page covers custom bot commands available on our Discord.
---

This page covers custom bot commands available [on our Discord](https://discord.gg/njGrvuh). These commands are often used to query common resources.

{% include toc.html %}

## FAQ

The following commands are meant to query FAQ questions. They have no arguments. Note none of these commands provide information that is not available on this site. In other words, only use the commands to respond to another person on discord; if you have a question you will get a much faster answer by just clicking the link to the information.

* `!support`: Posts information from [What versions of Minecraft do you support?](/faq/#what-versions-of-minecraft-do-you-support), which answers when we plan to port to a given version.
* `!cfbuilds`: Posts information from [Where are the builds? I cannot find them on CurseForge!](/faq/#where-are-the-builds-i-cannot-find-them-on-curseforge).
* `!islands`: Posts information from [How do I configure slime islands?](/faq/tinkers-construct-3/#how-do-i-configure-slime-islands)
* `!fabric`: Posts information from [Do you plan to port the mod to other platforms?](/faq/#do-you-plan-to-port-the-mod-to-other-platforms) focused on the Fabric Modloader.

## Information 

The following commands provide information that is not listed directly on the FAQ.

* `!bedrock`, `!marketplace`: Provides a reminder our discord does not cover the FTB Bedrock edition, and links their discord.
* `!optifine`: Provides information on the reasons to not use Optifine along with links to alternatives.
* `!read`: Shows all book emoji in a row preceeded by the read slime, to remind someone to read in game books.
* `!paste`: Links to many common websites for pasting large amounts of text or code.
* `!pingsites`: Shorter version of `!pings`.
* `!events`: Post a reference image for common reasons an event handler does not work.
* `!mcjty`: Post a link to [McJty's modding tutorials](https://www.mcjty.eu/docs/intro).
* `!pings`: Posts a reminder to avoid unneeded pings to the dev team.
* `!disablepings`: Posts information on how to disable pings on reply.

## Memes

The following commands simply post images of memes relevant to common discord conversations:

* `!crashlog`: Post a meme about how people say a mod is crashing but don't provide a crash log.
* `!try`, `!tryitandsee`: Post a link to the [Try it and See](https://tryitands.ee/), which is an answer to people asking really specific questions that are easily verifiable in game.
* `!modderstrap`: Posts a comic about how modders often spend more time modding than playing the game.

## Remove Recipe

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

## Emoji

These commands build pictures from emoji. While they are mostly meant for fun, they are occasionally useful to give someone information on building a structure.

* `!melter`: Shows how to create a simple melter and casting setup.
* `!alloyer`: Shows how to create a simple alloyer setup.
* `!smeltery`: Shows how to create a simple smeltery.
* `!smeltery_pouring`: Shows how to create a simple smeltery with a casting setup.
* `!foundry`: Shows how to create a simple foundry.

### Faucet

The faucet command shows casting from an input to an output.

**Syntax:**
```
!faucet [input] [output]
```

**Arguments:**

* `[input]`: emoji to show on the top of the faucet. If unset, defaults to a random tank, alloyer, or melter.
* `[output]`: emoji to show on the bottom of the faucet. If unset, defaults to a random tank, alloyer, or melter.

## Documentation

The following commands post links to wiki or documentation pages.

### Minecraft Wiki

The Minecraft Wiki command posts a link to a [Minecraft Wiki](https://minecraft.wiki/) article. The link will automatically embed an snippet from the article if it exists.

**Syntax:**
```
!mcw [title]
```

**Arguments:**

* `[title]`: Space separated list of words in the article title.

### Minecraft Wiki Search

The Minecraft Wiki search command posts a link a Minecraft Wiki search with prefilled search terms. Unlike the [`!mcw`](#minecraft-wiki) command, this command cannot embed if the page exists.

**Syntax:**
```
!mcws [words]
```

**Arguments:**

* `[words]`: Space separated list of search terms.

### Links

The links command post a link to [Projects](/projects).

**Syntax:**
```
!links [project]
```

**Arguments:**

* `[project]`: Space separate words in project name to link. If unset, posts a link to the top of the projects page.