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

## What versions of Minecraft do you support?

We currently are primarily focused on 1.20.1, which is currently in Alpha. We still have some API improvements and new features planned (see the [roadmap](/docs/roadmap)), including some minor breaking changes to the API. We plan to release a new update to 1.19.2 in the near future to deal with bugs discovered during the 1.20 port, along with a couple of new features. 1.18.2 may also receive a new release with a couple of major bugs discovered recently. Anything before 1.18.2 is no longer supported.

1.21 will come eventually after we are satisfied with content on 1.20.1. We are undecided on whether 1.20.2+ will receive any updates.

If you want help with gameplay, you are free to ask on [our discord](https://discord.gg/njGrvuh), though note help with 1.7.10 or 1.12 may be limited due to how old those versions are (its been years, details are forgotten). Additionally, anything older than 1.7.10 and any version between 1.8 and 1.11 are entirely unsupported. Make sure to mention what version you are talking about if asking about any version other than 1.20.1, as otherwise we will answer for 1.20.1.

## Do you plan to port the mod to other platforms?

In general, none of us see much point in porting the mod to another mod loader, as Forge has served us well enough for years and contains many systems we rely upon. Porting to another platform would require significant work, which none of us have time for.

A few notable platforms:
* NeoForge is maintained by many members of the team who used to run Forge, it is likely come 1.21 we will switch to NeoForge.
* Fabric is missing many systems that we rely upon, including models, events, Forge's fluid API, and the capability system. Replacing any of these or migrating to a Fabric version of the API (once added) would take significant effort for very little gain.
* Bedrock we do not believe has a mature enough addon system for us to make something that is properly Tinkers' Construct. This is only proven by the two ports on Bedrock we have seen.

While we do not have time to make such ports, there are several ports and alternatives to Tinkers' Construct that already exist, which are described by [this spreadsheet](https://docs.google.com/spreadsheets/d/1gOxPm37wu8Y9vVewNYv8JAxfkPQmkUfvnSjsk_sMiBo/edit#gid=0).

## Can you port Tinkers' Construct to X?

If its a future version, we are already aware that version exists and are considering the porting in the future, see the above FAQ entry. If Tinkers' Construct skipped a Minecraft version, we have no plans to backport to it, so don't ask. We additionally have no plans to backport features from newer versions of Tinkers' Construct to older versions.

## Can I port Tinkers' Construct to X?

We do not give permission to port Tinkers' Construct to any future Minecraft edition on Minecraft Java for Forge or NeoForge as long as the mod is still actively being developed. Actively being developed can be loosely defined as any activity on the mod's GitHub or Discord by the authors, including just commenting on GitHub issues. If in doubt, feel free to reach out on discord. The reason for this blanket "no permission" statement is if the mod is not currently ported, that means we have a reason it is not ported. This is often related to wanting to stabilize older versions before moving onto newer versions, along with time constraints. You are free to reach out to ask how you can help with the port, but we are not interested in people making their own forks that are not under the official project. We currently are undecided on how we will handle the Forge and NeoForge split on 1.20.1+; once we decide we may add Forge post 1.20.1 to the list of platforms we do not support that others may fork into.

You are free to fork the mod if you wish to port to a platform we do not support, such as Fabric, Bedrock, or alike. Additionally, you are free to port to or fork an existing version for an older version we no longer support. If you do so however, we require you to name the project something other than "Tinkers' Construct" to prevent confusion for the end users expecting it to be the same project. The Bedrock Edition by Feed the Beast is an exception to this policy due to explicate permission from the devs.

You may reuse code and assets from Tinkers' Construct to make such a fork happen, as those are under the MIT license. Additionally, if you have a public release or a code repository with significant progress, feel free to post about it on [our discord](https://discord.gg/njGrvuh) and I will add it to the spreadsheet.

## Where are the builds? I cannot find them on CurseForge!

CurseForge is not great about displaying alpha builds on CurseForge. To ensure you don't miss the file, instead of looking at the sidebar, click "Files" then "View all" (legacy site) or "Show alpha files" (new site). There is also a dropdown on after switching the view to filter by version.

## I found a bug, what do I do?

Start by updating your mods to the latest version, as your bug is possibly fixed in a later version. Also try testing with just Tinkers' Construct installed to determine if its a mod conflict, as that can be valuable information for fixing the issue.

If the bug still happens in an up to date pack, you can try searching [our issue tracker](/SlimeKnights/TinkersConstruct/issues) to see if its a known issue, then ask on [our discord](https://discord.gg/njGrvuh) for help debugging it.

If you are certain it is a bug in the latest version and it is not already reported it, you can create a new issue on [our issue tracker](/SlimeKnights/TinkersConstruct/issues).

## I have a suggestion, can I share it?
<div class="hatnote" markdown=1>
See also: [Common Suggestions](common-suggestions).
</div>

If you want to make a suggestion, the preferred place to do so is [our discord](https://discord.gg/njGrvuh). Note that we expect suggestions to be thought out. As an outline, you want to tell us:

* What you want us to add in details. Don't just say its name; tell us what it does and how its obtained.
* If you are suggesting a new feature, that feature should have multiple uses. Try and come up with 3 usecases for the idea.
* If a similar feature exists in the mod (for instance, you are suggesting a new weapon or material), make sure to tell us both why you would use your new idea over the similar feature, and why you would use the similar feature over your idea.

Posting your suggestion does not mean we will accept it, and in many cases we will critique your idea, so do not make suggestions if you are not open to criticism. Remember that you are asking us to take time out of our plans to work on your idea; coming up with a well thought out suggestion will make us a lot more likely to consider it. Also remember that suggestions can be a good source of addons, you could always learn to create mods by trying to create your idea.

## Will you add support for X to your mod?

When it comes to mod support, it typically must meet one of three criteria to be added:

* Support that works for many mods is preferred over support for a specific mod. For example, adding support for melting tin or alloying bronze supports several mods adding those ores and alloys, but support for Refined Glowstone only helps Mekanism.
    * An exception is trivial support, for example support that only requires a couple JSON files and not direct API access. This is why Refined Glowstone has melting and casting, but no tool material.
* If I personally play a mod, I am a lot more likely to add support than if I never use the mod.
* If someone else pull requests support, it will typically be added as long as it does not require significant maintenance. Please talk to the devs before making the pull request to prevent wasted work.

Note that these criteria are just guidelines, just because something meets these guidelines does not mean it will definitely be added. A notable case of this is support for a mod that we do not feel can be added without breaking the balance of the mod.

## Why is the wiki wrong?

The only official sources of information are those on this documentation website and the GitHub repositories. Any other source is not made by our team. As a result, they may be a mix of multiple versions, or simply inaccurate.

## Where did the config go? Can you make X configurable?

Configs are located either in `.minecraft/config` as before, or in the world folder.

If you do not see an option to configure the feature in either place, its likely that feature is now controlled by data packs.
We plan to continue migrating features to data packs, for instance nearly all our recipes can be changed or disabled via datapacks, and removing recipes can also be used to effectively remove features.

## Can I put a SlimeKnights mod in my modpack?

Feel free to use the mod in any modpacks. You are allowed to use it, you do not need to ask for permission. When using the mod, please use the CurseForge or GitHub download and do not rehost the files if possible. If you need to rehost the mod, link the CurseForge or GitHub page in your modpack description. Never use builds from places besides Curse, CurseForge, or Github releases.

Any modpack using Tinkers' Construct is expected to handle user support queries, specifically related to mod interactions. If you discover the issue is in fact caused by Tinkers' Construct and not just modpack config changing recipes, feel free to report it to us.

## Is there an official Minecraft server for SlimeKnights mods?

We have no plans to maintain a public server for our mods. There are many other public servers that exist that contain our mods, or private servers you can join. Note that our discord server should not be used to seek a server to join or to advertise Minecraft servers.