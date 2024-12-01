---
layout: page
title: Texture Generators
description: Tinkers' Construct 3 makes extensive use of data generators to generate material variants of tool parts with more detail than a simple tint. This page documents those data generators for use by addon creators.
---
<div class="hatnote" markdown=1>
This page is about using texture generators for addon authors. For data pack or resource pack authors, see the [generate part textures command](/docs/commands/tinkers/generate-part-textures).
</div>

{{page.description}}

For mod pack, data pack and resource pack creators, along with creators of low code mods like [Tinkers' Things](/projects#tinkers-things), it is not possible to directly use texture generators. A good alternative is the [generate part textures command](/docs/commands/tinkers/generate-part-textures).

## Material Part Texture Generator

`MaterialPartTextureGenerator` takes as parameters a single [`AbstractPartSpriteProvider`](#part-sprite-provider) and one or more [`AbstractMaterialSpriteProvider`](#material-sprite-provider). Unlike many other generators, you should not need to extend this class, simply creating one or more instance in `GatherDataEvent` is sufficient. Based on the needs of your addons, there are a couple setups you may use.

To generate textures for the Tinkers' Construct materials and parts, you generally will want to reuse one of the Tinkers' providers rather than copying and pasting it, despite it not being part of `library`. It is possible there will be changes to it which requires you to rerun datagen on update; however, this will only affect your mod in dev, it will never break a released build.

See the following sections for more specifics on these generators and recommended setups.

### Addon with new materials

For an addon that just adds new materials, you will need to create an instance of `AbstractMaterialSpriteProvider`, but you can reuse the existing `TinkerPartSpriteProvider`.

### Addon with new tools

For an addon that just adds new materials, you will need to create an instance of `TinkerMaterialSpriteProvider`, but you can reuse the existing `AbstractPartSpriteProvider`.

### Addon with mix of tools and materials

Each instance of `MaterialPartTextureGenerator` can only handle a single `AbstractPartSpriteProvider`, however its perfectly fine to have multiple instances. In general, its most efficient to only use each `AbstractPartSpriteProvider` a single time due to texture caching. The following setup is recommended for addons with both tools and materials:

* One instance handling Tinkers' Construct part textures with your new materials
* One instance handling your new part textures with both your new materials and those from Tinkers' Construct

This set of generators intentionally leaves out running Tinkers' Construct part textures with Tinkers' Construct materials, as those are provided by the base mod. Do not generate textures with that combination or you may break the main mod.

Addons can also freely support other addons using this setup. You should be able to safely reuse part and material texture providers from other addons with just a datagen time compile time dependency, meaning outside of dev there is no longer a hard dependency.

## Part Sprite Provider

If you are writing an addon that adds new tools, you will want to create a part sprite provider, extending `AbstractPartSpriteProvider`. The builders in that class will make it easy to add sprites both individually (for tool parts) or for the different pieces of a tool. Each sprite typically requires a path relative to `assets/<mod_id>/textures/item/tool/`, though in some cases (such as armor) paths relative to `assets/<mod_id>/textures/` may be used. In addition to a path, each part also has a material stat ID (e.g. head or handle) which will prevent generating parts for materials that are not applicable. For instance, several materials in Tinkers' Construct are binding exclusive, so generating pickaxe head textures for them would not make sense.

If your addon adds new materials, you can reuse the built in part provider from Tinkers' Construct (`TinkerPartSpriteProvider`) to generate the base set of parts. It also doubles as an example of how to use the abstract class. Note that in order for datagen to actually load textures from the Tinkers' Construct mod jar, you need to add Tinkers' Construct as an existing mod for datagen by adding `'--existing-mod', 'tconstruct'` to your `build.gradle` datagen run configuration `args`. For an example, [see Materialis](https://github.com/RCXcrafter/Materialis/blob/10358fdbc22eb9d952b587eb540246049b50fd2c/build.gradle#L121).

### Generator Part Texture JSON Generator

If you add new part textures, you should use it in an instance of `GeneratorPartTextureJsonGenerator`. This will create a JSON file usable by the texture generator command, allowing modpack and resource pack devs to easily generate textures for your new tools.

## Material Sprite Provider

The material sprite provider lets you define three properties for a material:
* Stat types: determines which sprites will be supported. Most materials will find the helpers `meleeHarvest()`, `ranged()`, `armor()`, and alike useful.
* Fallbacks: determines which base textures will be used in generation. This primarily affects shading, for instance `"metal"` is a much shinier base than `"rock"`. Note you can define your own base textures as long as you provide the relevant sprites.
* [Sprite Transformer](#sprite-transformer): Logic to map an uncolored sprite to the desired appearance.

If your addon adds new tools, you will likely want to reuse `TinkerMaterialSpriteProvider` to generate variants of your parts using the Tinkers' materials. It also doubles as an example of this provider.

### New Stat Types

If your addon adds new stat types, and you want to apply them to materials from Tinkers' Construct or an addon, the easiest method is to make use of a `StatOverride`, which is one of the constructor parameters for `MaterialPartTextureGenerator`. If you use this approach, make sure to pass the `StatOverride` to `GeneratorPartTextureJsonGenerator`. This option was added in 1.19.2.

Another option (which notably works before 1.19.2) is to extend the relevant material sprite provider (for instance, `TinkerMaterialSpriteProvider`) and override `addAllMaterials` (ensuring to call `super`). The builders are set up so multiple calls to `buildMaterial` with the same ID will give the same builder, meaning you can get the existing builder then add the stat type. This option will not add entries to the relevant material render infos, which is not an issue provided the stat type is used by the [material stats](/docs/json/materials#stats).

### Sprite Transformers

By default, Tinkers' Construct provides several sprite transformers. See [material render info](/docs/json/material-render-info#sprite-transformers) for a list of options, or look for classes extending `ISpriteTransformer`.

Additional transformers can be registered by implementing `ISpriteTransformer`, allowing more complex behavior to be described. Ultimately, transformers have access to the full ARGB values of the base sprite, pixel coordinates, and any number of additional sprites you wish to include.

### Material Render Info Provider

In addition to generating part textures, `AbstractMaterialRenderInfoProvider` accepts an optional `AbstractMaterialSpriteProvider` argument. This will provide you with two useful features in your render info:

* Matching materials will automatically get their color set from your palette, along with getting their fallbacks set
* The render info will be populated with `"generator"` information for the sake of the texture generator command.

It is strongly advised you use this generator if you plan to use material texture generators.