---
layout: page
title: Creating a Low Code Mod
description: This page covers information on creating low code mods for Forge. Low code mods are mods created entirely from resources such as JSON files and images.
---
<div class="hatnote" markdown=1>
See also: [Resource Locations](/docs/json/resource-location) for a description of how to locate resources.
</div>

{{page.description}} They rely on no Java to implement their functionality, making them ideal even for authors with low coding background.

Low code mods can implement any functionality available to [resource packs](/docs/json/resource-location#resource-packs)  or [data packs](/docs/json/resource-location#data-packs). In addition, if [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things) is installed, low code mods gain additional functionality from [thing packs](/docs/json/resource-location#thing-packs) allowing most common mod elements to be added without writing any Java code.

{% include toc.html %}

## Setup

To start creating a pack, create a folder for all pack contents, which will henceforth be called `YourMod` in this guide. Within that folder, you will need a [`pack.mcmeta`](https://minecraft.wiki/w/Pack.mcmeta) in the root, and a [`mods.toml`](https://docs.minecraftforge.net/en/latest/gettingstarted/modfiles/) under `YourMod/META-INF/mods.toml`.

### pack.mcmeta

`pack.mcmeta` is simply a JSON file that specifies information about your mod. The following is a minimal `pack.mcmeta` for 1.20.1:

```json
{
  "pack": {
  "description": "Resources for my Awesome Mod",
  "pack_format": 15
  }
}
```
Generally, it is not necessary to define additional fields in this file, but there are some useful additional functionalities listed on the [Minecraft Wiki page](https://minecraft.wiki/w/Pack.mcmeta).

### mods.toml
<div class="hatnote" markdown=1>
See also: [Forge Docs](https://docs.minecraftforge.net/en/latest/gettingstarted/modfiles/), [Forge Community Wiki](https://forge.gemwire.uk/wiki/Mods.toml).
</div>

Most of your basic configuration for your mod will be done under `mods.toml`. Note that this is a `.toml` file, which is a slightly different format than `.json` because Forge is too cool for JSON.

The following fields should be set in your `mods.toml`:

* `modLoader`: set to `lowcodefml` to ensure Forge does not error due to your mod having no Java entrypoint.
* `loaderVersion`: can be used to restrict the versions of FML allowed, though typically setting to `*` is sufficient.
* `license`: set the permissions for who may use your resources. A popular license is MIT, which means anyone may freely copy and reuse your resources. If you are not sure what to set, simply write "All Rights Reserved", which means no permissions are granted; you can always change it later once you decide.
* `[[mods]]`: This means all following fields assign properties within the mod array.
    * `modId`: The domain for your mod. This should match the domain you use in all {% include type.html type="resource location" name="resource locations" %} for new content in your mod.
    * `version`: Version number for your mod. You are free to format this as you wish. A common method of writing numbers is `A.B.C` (e.g. 3.9.2) where:
        * `A` is only incremented on major rewrites of the mod.
        * `B` is incremented on new features and reset to 0 with major rewrites.
        * `C` is incremented on bug fixes and reset to 0 with new features.
        * If you wish, you can also prefix it with the Minecraft version, e.g. `1.20.1-3.9.2`
    * `displayName`: Player facing name for your mod.
    * `description`: A description of what your mod does, displayed in the mods list.
    * `logoFile`: Path from the root of your mod to the mod's icon.
    * `authors`: A list of authors who helped make the mod.
* `[[dependencies.<modId>]]`: Adds a dependency for the mod `<modId>`. For example if your mod is `my_mod`, this would be `[[dependencies.my_mod]]`.
    * `modId`: ID of the mod your mod is dependent on.
    * `mandatory`: If `true`, the mod is required, meaning Forge will not load the game without it present. If `false`, the mod is not required, but if present it must conform to the following settings.
    * `versionRange`: [version range](#version-ranges) matching allowed versions. If the mod is installed and its version is not allowed, Forge will prevent loading with an error.
    * You typically want to add a dependency on either Minecraft or Forge to make sure your mod runs on the right Minecraft version.
    * If you are using [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things), do not forget to mark it as a dependency to prevent hard to read errors due to your registry contents not being added.

For an example low code `mods.toml`, see [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/blob/1.20/src/META-INF/mods.toml).

#### Version ranges

Within `mods.toml` are many version ranges. These typically are written as two comma separated numbers surrounded by brackets. Square brackets indicate inclusive ranges (that is, the listed number is allowed), while parenthesis indicates exclusive ranges (that is, the listed number is disallowed).

For example, `[1.20.1,1.20.3)` means match any version between `1.20.1` and `1.20.3`. The left square bracket means `1.20.1` will match the range, while the right parenthesis means `1.20.3` will not match.

As another example, `[1.20.1,)` indicates that `1.20.1` and any later version should match.

If you wish to match any version, you can simply set the range to `*`.

## Resources
<div class="hatnote" markdown=1>
See also: [Mod Resources](/docs/json/resource-location#mod-resources)
</div>

Once the low code mod is setup with a `mods.toml` and a `pack.mcmeta`, you are ready to start adding resources to your mod. Typically, you will create these contents using external programs.

You can just use file explorer to manage files in your mod. For a simple text editor to start writing low code mods, consider [Notepad++](https://notepad-plus-plus.org/). For a simple image editor to create textures, consider [Paint.NET](https://www.getpaint.net/).

For information on specific resource pack and data pack file contents, consult the rest of [the docs](/docs).

### Generating resources

Sometimes, certain resources have a lot of similarities and you may wish to generate the resources automatically. Most modders make use of data generators in Java for this task, but if you are writing a low code mod; odds are you do not want to write Java.

If you are familiar with Python, you can make use of some of the data generation setup from [Simple Gravel Ores](https://github.com/elucent/GravelOres/tree/master/src/main/python) to get started. This includes generators for blocks, models, tags, and some world gen used by Gravel Ores, and can be adapted to other JSON types you may encounter.

If you are writing an addon for Tinkers' Construct and wish to generate textures for tool parts, see the [Generate Part Textures Command](/docs/commands/tinkers/generate-part-textures).

## Testing

The easiest way to test your low code mod is using the mod [Json Things](https://www.curseforge.com/minecraft/mc-mods/json-things). Regardless of whether you plan to depend on Json Things for your final mod, if you build your mod under `.minecraft/thingpacks/YourMod`, then any changes to resources will be visible to Minecraft without needing to copy any files. This means you can reload any resource pack contents with `F3+T`, and any data pack contents with `/reload`.

Note that when testing in this way, the contents of `mods.toml` will be ignored; you will want to do a test of your final mod jar to ensure that works.

## Packaging

The simplest way to package your mod is to create a `.zip` file with all the resources. On Windows, you can do this by selecting all files in the `YourMod` folder and clicking "Send To" > "Compressed (zipped) folder". `pack.mcmeta` should be at the root of the zip file for it to be recognized.
After creating the zip file, just rename it from `.zip` to `.jar` to allow Forge to recognize it. If you do not see the file extension, you may need to enable file name extensions under Windows Explorer properties.

If you have Java installed and wish to automate packaging your mod (that is, simply double click a script to package), you can take advantage of the Java `jar` command to package the mod, which notably does not require any Java code to create the Jar. You can see an example script using this in [Tinkers' Things](https://github.com/SlimeKnights/TinkersThings/blob/1.20/release.bat), which notably merges two different source folders together to make the mod.