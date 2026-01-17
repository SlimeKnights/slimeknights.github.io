---
layout: page
title: FAQ
description: This page covers frequently asked questions about SlimeKnights mods. These answers are meant as a general answer to questions in any of our mods; mods will often have a specific FAQ to answer more specific questions.
---

{{page.description}}

Because it needs to be said to our discord users for some reason, **this FAQ is up to date**. If it has not been updated in awhile, that means nothing has changed. Asking a question that is on here because "it has not been updated in awhile" is a violation of our rules and is grounds for banning.

{%include toc.html %}

## Mod Specific Questions

This FAQ page covers general questions about our mods. If you have a mod specific question that is not answered here, its possible you will find it on the following FAQ pages:

* [**Tinkers' Construct 2**](tinkers-construct-2): Tinkers' Construct between 1.8 and 1.12.
* [**Tinkers' Construct 3**](tinkers-construct-3): Tinkers' Construct since 1.16
* [**Common Suggestions**](common-suggestions): Frequently made suggestions for our mods.

## Minecraft Versions

### What versions do you support?

We currently are primarily focused on 1.20.1, working on a final major update, see the [roadmap](/docs/roadmap) for more details. After that, 1.20.1 will be put in support, possibly just receiving bug fix updates. 1.18.2 and 1.19.2 may both receive a bug fix update as well. 

1.21.1 NeoForge is the next target after the major 1.20.1 update.

If you want help with gameplay, you are free to ask on [our discord](https://discord.gg/njGrvuh), though note help with 1.7.10 or 1.12 may be limited due to how old those versions are (its been years, details are forgotten). Additionally, anything older than 1.7.10 and any version between 1.8 and 1.11 are entirely unsupported. Make sure to mention what version you are talking about if asking about any version other than 1.20.1, as otherwise we will answer for 1.20.1.

### Can you port to another Minecraft version?

If its a future version, we are already aware that version exists and are considering the porting in the future, see [the above FAQ entry](#what-versions-do-you-support).

If Tinkers' Construct skipped a Minecraft version, we have no plans to backport to it, so don't ask. We additionally generally will not backport features from newer versions of Tinkers' Construct to older versions.

### Can I port to another Minecraft version?

We do not give permission to port our mods to any future Minecraft edition on Minecraft Java for Forge or NeoForge as long as the mod is still actively being developed. Actively being developed can be loosely defined as any activity on the mod's GitHub or Discord by the authors, including just commenting on GitHub issues. If in doubt, feel free to reach out on [our discord](https://discord.gg/njGrvuh). The reason for this blanket "no permission" statement is unofficial forks of our mod tend to just cause a maintenance burden that falls on us once we port to that version. Additionally, we often have a good reason for not porting yet, such as wanting to stablize or add content to the current version before porting to the next or having limited time to work on the mod.

You are free to reach out to ask how you can help with the port, but we are not interested in people making their own forks that are not under the official project. We currently are undecided on how we will handle the Forge and NeoForge split on 1.20.1+; once we decide we may add Forge post 1.20.1 to the list of platforms we do not support that others may fork into.

You may fork to port to a platform we do not support such as Fabric, or for older versions we no longer support (curently includes anything before 1.18). If you do so however, we require you to name the project something other than "Tinkers' Construct" to prevent confusion for the end users expecting it to be the same project.

You may reuse code and assets from Tinkers' Construct to make such a fork happen, as those are under the MIT license. Additionally, if you have a public release or a code repository with significant progress, feel free to post about it on [our discord](https://discord.gg/njGrvuh) and I will add it to the spreadsheet.


## Other platforms

### Will you port to other mod loaders?

In general, none of us see much point in supporting multiple modloaders; Forge has served us well enough for years and contains many systems we rely upon, and the NeoForge team continues to support those systems after 1.20. Supporting multiple mod loaders requires significant additional work which we lack time for.

A few notable platforms:
* NeoForge is maintained by many members of the team who used to run Forge, come 1.21 we will switch to NeoForge.
* Forge is used on 1.20.1 and below. We will likely drop support for Forge in 1.21.1 as most of the mods we are interested in are NeoForge exclusive.
* Fabric is missing many systems that we rely upon, including models, events, Forge's fluid API, and the capability system. Replacing any of these or migrating to a Fabric version of the API would take significant effort for very little gain.

While we do not have time to make such ports, we allow others to make forks as long as they do not call the fork "Tinkers' Construct". You can find many such forks and alternatives on [this spreadsheet](https://docs.google.com/spreadsheets/d/1gOxPm37wu8Y9vVewNYv8JAxfkPQmkUfvnSjsk_sMiBo/edit#gid=0).

### Is the Bedrock Edition port official?

The [Bedrock Edition](https://www.feed-the-beast.com/marketplace/tinkers-construct) is created by Feed the Beast with permission from mDiyo. However, SlimeKnights have no involvement with the mod beyond granting permission to use the name and ideas.

Due to limitations of the Bedrock platform, the FTB Bedrock Edition does not match the gameplay of the Java Edition and likely never will. As a result, the resources on this site along with on our discord cover only the Java Edition. If you have questions on the Bedrock Edition, you can ask on [FTB's discord](https://go.ftb.team/discord).

Note that FTB makes two editions of the addon: [Tinkers' Construct](https://www.feed-the-beast.com/marketplace/tinkers-construct) which costs money, and [Tinkers' Construct Lite](https://www.feed-the-beast.com/marketplace/tinkers-construct-lite) which is free. There are additionally many free unofficial alternatives covered by [this spreadsheet](https://docs.google.com/spreadsheets/d/1gOxPm37wu8Y9vVewNYv8JAxfkPQmkUfvnSjsk_sMiBo/edit#gid=0), though most of them do not support Console Editions.

### Do you plan to port to Hytale?

Hytale is not in a state where it is ready for Tinkers' Construct. It lacks the concept of redstone automation and transfer of fluids needed to make the smeltery work, and the RPG aspects are too incomplete to consider trying to design tool and weapon content around it. Once the game is more stable and has fleshed out their content we will reconsider whether its worth porting.

If you are interested in making your own mod like Tinkers' Construct for Hytale, follow our general forking policy. That is, you are free to make something inspired by the mod, but you may not call it Tinkers' Construct. You are free to say its inspired by Tinkers' Construct to credit the mechanics you use.


## Playing the mods

### Where are the builds? I cannot find them on CurseForge!

CurseForge is not great about displaying alpha builds on CurseForge. To ensure you don't miss the file, instead of looking at the sidebar, click "Files" then "View all" (legacy site) or "Show alpha files" (new site). There is also a dropdown on after switching the view to filter by version.

### Can I put your mod in my modpack?

Feel free to use the mod in any modpacks. You are allowed to use it, you do not need to ask for permission. When using the mod, please use the CurseForge, Modrinth, or GitHub download and do not rehost the files if possible. If you need to rehost the mod, link the CurseForge, Modrinth, or GitHub page in your modpack description. Never use builds from places besides CurseForge, Modrinth, or Github releases.

Any modpack using Tinkers' Construct is expected to handle user support queries, specifically related to mod interactions. If you discover the issue is in fact caused by Tinkers' Construct and not just modpack config changing recipes, feel free to report it to us.

### Is there an official Minecraft server for SlimeKnights mods?

We have no plans to maintain a public server for our mods. There are many other public servers that exist that contain our mods, or private servers you can join. Note that our discord server should not be used to seek a server to join or to advertise Minecraft servers.


## General support

### I found a bug, what do I do?

Start by updating your mods to the latest version, as your bug is possibly fixed in a later version. Also try testing with just Tinkers' Construct installed to determine if its a mod conflict, as that can be valuable information for fixing the issue.

If the bug still happens in an up to date pack, you can try searching [our issue tracker](https://github.com/SlimeKnights/TinkersConstruct/issues) to see if its a known issue, then ask on [our discord](https://discord.gg/njGrvuh) for help debugging it.

If you are certain it is a bug in the latest version and it is not already reported it, you can create a new issue on [our issue tracker](https://github.com/SlimeKnights/TinkersConstruct/issues).

### Is there a wiki?

The only official sources of information are those on this documentation website and the GitHub repositories. Any other source is not made by our team, notably including the wikis. Our experience is most wikis tend to either mix information or simply be lacking in information. Additionally, modpacks have a lot of freedom to change Tinkers' Construct, which both means the wiki may not be accurate to your playthrough and and adds another source of wrong information for the wiki.

You can find most documentation for our mods in game through our books, which for the most part automatically update for your pack. These books are also available [online](/docs/books), though with more limited functionality.

### Where did the config go?

Configs are located either in `.minecraft/config` as before, or in the world folder.

If you do not see an option to configure the feature in either place, its likely that feature is now controlled by [data packs](/docs/json/resource-location/#data-packs).
We plan to continue migrating features to data packs, for instance nearly all our recipes can be changed or disabled via data packs, and removing recipes can also be used to effectively remove features. See the documentation on [commands](/docs/#commands) which includes commands to help you create data packs.


## Suggestions
<div class="hatnote" markdown=1>
See also: [Common Suggestions](common-suggestions).
</div>

### I have a suggestion for a feature

If you want to make a suggestion, the preferred place to do so is [our discord](https://discord.gg/njGrvuh). Note that we expect suggestions to be thought out. As an outline, you want to tell us:

* What you want us to add (in details). Don't just say its name; tell us what it does and how its obtained.
* If you are suggesting a new feature, that feature should have multiple uses. Try and come up with 3 usecases for the idea.
* If a similar feature exists in the mod (for instance, you are suggesting a new weapon or material), make sure to tell us both why you would use your new idea over the alternative, and why you would use the alternative over your idea.

Posting your suggestion does not mean we will accept it. We will often critique your idea, so do not make suggestions if you are not open to criticism. Remember that you are asking us to take time out of our plans to work on your idea; coming up with a well thought out suggestion will make us a lot more likely to consider it.

If we do reject your suggestion, remember that you can create an addon for your idea. Just because we are not interested in the idea does not mean its a bad idea, so we encourage getting creative to turn your idea into something you can play. You do not even need to use Java to write an addon, a [low code mod](/docs/guides/lowcode-mod/) requires only writing JSON files.

### I need a new API for my addon

Please talk to us to request new APIs rather than writing mixins. You should never write a mixin into another mod until you talked to the mod's author.

You can request new APIs either through [our discord](https://discord.gg/njGrvuh) or an issue on GitHub for the [relevant project](/projects). Note that while often API requests are integrated into the mod, we may still reject the idea if its out of scope for the relevant feature. To maximize the chances of your suggested API being added, make sure to describe what you plan to do with the API along with the problem with existing APIs towards that goal.

### Can you add compatability with another mod?

When it comes to mod support, it typically must meet one of three criteria to be added:

* Support that works for many mods is preferred over support for a specific mod. For example, adding support for melting tin or alloying bronze supports several mods adding those ores and alloys, but support for Refined Glowstone only helps Mekanism.
    * An exception is trivial support, for example support that only requires a couple JSON files and not direct API access. This is why Refined Glowstone has melting and casting, but no tool material.
* If I personally play a mod, I am a lot more likely to add support than if I never use the mod. Twilight Forest having Tinkers' Construct compatability is an example.
* If someone else pull requests support, it will typically be added as long as it does not require significant maintenance.
  * Anything that requires new dependencies in dev will likely not be accepted.
  * Please talk to the devs before making the pull request to prevent wasted work.
  * Support that requires a lot of gameplay decisions notably needs discussion before making a pull request so we can ensure it fits our vision for the mod.

Note that these criteria are just guidelines, just because something meets these guidelines does not mean it will definitely be added.
