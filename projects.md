---
layout: page
title: Projects
permalink: /projects/
---

This page lists download links for all SlimeKnights mods.

{% comment %}
In each section, mods are sorted by latest Minecraft Version, then alphabetically.
An exception is Mantle, since its special so it goes first.
{% endcomment %}

## Current Projects

These SlimeKnights projects are actively supported, either on the latest Minecraft version or in development for a later Minecraft version.

<div class="project-list">
    {% include project.html
      name="mantle" latest="1.19.2"
      description="Mantle is a mod containing shared code for SlimeKnights mods. Why? For science and slime, why else?"
    %}
    {% include project.html
      name="tinkers-construct" title="Tinkers' Construct" latest="1.19.2"
      github="TinkersConstruct"
      description="Tinkers' Construct is a mod about putting tools together in a wide variety of ways, then modifying them until they turn into something else."
    %}
    {% include project.html
      name="tinkers-things" title="Tinkers' Things" latest="1.19.2"
      github="TinkersThings" curseforge="tinkers-json-things"
      description="Official addon for Tinkers' Construct adding a variety of content written purely in JSON."
    %}
    {% include project.html
      name="tinkers-mechworks" title="Tinkers' Mechworks" latest="1.16.5"
      github="TinkersMechworks"
      description="Tinkers' Mechworks is a mod that adds various redstone machines such as drawbridges."
    %}
    {% include project.html
      name="natura" title="Natura" latest="1.12.2"
      github="Natura" github-author="progwml6" modrinth=false
      description="Natura is a mod that aims to spice up the world with interesting worldgen."
    %}
</div>

## Affiliated Projects

These mods are made by a member of SlimeKnights, but are not directly part of the group.

<div class="project-list">
    {% include project.html
      name="simple-gravel-ores" title="Simple Gravel Ores" latest="1.20.1"
      author="KnightMiner" github-author="elucent" github="GravelOres"
      description="Simple Gravel Ores brings back the classic gravel ores from Tinkers' Construct 1 into modern versions, with configurability to support any mod's ores."
    %}
    {% include project.html
      name="simply-tea" title="Simply Tea" latest="1.20.1"
      author="KnightMiner" github="SimplyTea"
      description="A simple tea mod made for /u/Pickles256 on Reddit!"
    %}
    {% include project.html
      name="inspirations" latest="1.19.2"
      author="KnightMiner"
      description="Inspirations is a mod for Minecraft adding various smaller features to the game. The design is targeted towards vanilla, so instead of game changing features there are many smaller changes. "
    %}
    {% include project.html
      name="animal-crops" title="Animal Crops" latest="1.18.2"
      author="KnightMiner" github="AnimalCrops"
      description="Adds seeds which over time grow into farm animals."
    %}
    {% include project.html
      name="ceramics" latest="1.18.2"
      author="KnightMiner"
      description="Originally inspired by the clay bucket from Iguana Tinker Tweaks, this mod simply added a clay bucket, but now it adds quite a few other features made from clay to both improve the early game and be used in long term builds."
    %}
    {% include project.html
      name="simple-absorption" title="Simple Absorption" latest="1.18.2"
      author="KnightMiner" github="SimpleAbsorption"
      description="This is a simple mod giving the player absorption hearts to make a world without natural regeneration less punishing."
    %}
    {% include project.html
      name="tinkers-complement" title="Tinkers' Complement" latest="1.12.2"
      author="KnightMiner" github="TinkersComplement"
      description="Tinkers Complement is designed to add features to Tinkers Construct in a modular way, providing mod compatibility and features to help with modpacks."
    %}
</div>


## Abandoned Projects

These SlimeKnights mods are no longer actively being maintained.

<div class="project-list">
    {% include project.html
      name="harvest-tweaks" title="Harvest Tweaks" latest="1.12.2"
      github="HarvestTweaks" modrinth=false inactive=true
      description="This mod allows you to modify the harvestability of blocks and tools.<br>As of 1.17, this mod is no longer needed as tags control harvestability."
    %}
    {% include project.html
      name="recording-status-mod" title="Recording Status Mod" latest="1.12.2"
      github="RecMod" modrinth=false inactive=true
      description="A cosmetic mod adding an indicator to the player list for their recording/streaming status."
    %}
    {% include project.html
      name="tinkers-skyblock" title="Tinkers' Skyblock" latest="1.12.2"
      github="TinkerSkyblock" modrinth=false inactive=true
      description="This small mod adds several items, aimed at reducing the earlygame downtime in skyblock maps."
    %}
    {% include project.html
      name="tinkers-tool-leveling" title="Tinkers' Tool Leveling" latest="1.12.2"
      github="TinkersToolLeveling" modrinth=false inactive=true
      description="You know back in the days, when you played GTA and used the cheat code for a tank, and then went on and caused mayhem? This mod is like that, except for tinker tools and the cheatcode takes longer to enter."
    %}
    {% include project.html
      name="iguanas-tinker-tweaks" title="Iguanas Tinker Tweaks" latest="1.7.10"
      github="IguanaTweaksTConstruct" modrinth=false inactive=true
      image-extension="jpeg"
      forum="2176855-iguanas-tinker-tweaks"
      description="Addon for Tinkers' Construct that adds a slower progression through the earlygame, and tool-leveling which awards random bonus modifiers on levelups."
    %}
    {% include project.html
      name="painted-stone" title="Painted Stone" latest="1.6"
      github="PaintedStone" modrinth=false curseforge=false inactive=true
      forum="1292658-1-6-x-painted-stone"
      description="Little mod to make colored stone in the world."
    %}
</div>