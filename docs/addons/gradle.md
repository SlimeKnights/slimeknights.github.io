---
layout: page
title: Gradle Setup
description: Documentation for how to add Tinkers' Construct as a dependency in a development environment.
---

{{page.description}}

{% include toc.html %}

## Repository
First you need to add our maven repo to your `build.gradle`:

```gradle
repositories {
    ...
    maven {
        name 'DVS1 Maven FS'
        url 'https://dvs1.progwml6.com/files/maven'
    }
}
```

Make sure to add it to the root repositories, not the buildscript repositories.

## Dependency

Then you need to tell Gradle to get Tinkers' Construct from the repository.

### For 1.16+

```gradle
dependencies {
    implementation fg.deobf("slimeknights.mantle:Mantle:${minecraft_version}-${mantle_build}")
    implementation fg.deobf("slimeknights.tconstruct:TConstruct:${minecraft_version}-${tinkers_build}")
}
```

### For 1.12

```gradle
dependencies {
    deobfCompile "slimeknights.mantle:Mantle:1.12-${mantle_build}"
    deobfCompile "slimeknights:TConstruct:1.12.2-${tinkers_build}"
}
```

### For 1.7.10

```gradle
dependencies {
    compile "slimeknights.mantle:Mantle:1.12-${mantle_build}:deobf"
    compile "slimeknights:TConstruct:1.12.2-${tinkers_build}:deobf"
}
```

On 1.7.10, it is important to use the same mappings version as dependencies, though some external tools allow using a different mapping version. Later versions of Forge Gradle do not have this issue.

## Versions

`${minecraft_version}` is your full minecraft version, e.g. `1.16.5` or `1.18.2`.

Mantle is needed for Tinkers' Construct. The requirement `${mantle_build}` for the last time this page was updated is listed in the following table, but clicking the link will bring you to the current version The current build is listed.

The `${tinkers_build}` corresponds to the latest release and its jenkins build. You can find the latest build on the [release](https://github.com/SlimeKnights/TinkersConstruct/releases) page. The table below has the latest as of the time of writing.

| Minecraft Version | Mantle Version | Tinkers Build |
|:-|:-|:-|
| 1.19.2 | [1.10.35](https://github.com/SlimeKnights/TinkersConstruct/blob/1.19.2/gradle.properties#L20) | [3.8.4.50](https://github.com/SlimeKnights/TinkersConstruct/releases/tag/v3.8.4.50)
| 1.18.2 | [1.9.49](https://github.com/SlimeKnights/TinkersConstruct/blob/1.18.2/gradle.properties#L20) | [3.7.2.167](https://github.com/SlimeKnights/TinkersConstruct/releases/tag/3.7.2.167)
| 1.16.5 | [1.6.158](https://github.com/SlimeKnights/TinkersConstruct/blob/1.16/gradle.properties#L20) | [3.3.4.335](https://github.com/SlimeKnights/TinkersConstruct/releases/tag/3.3.4.335)
| 1.12.2 | [1.3.3.49](https://github.com/SlimeKnights/TinkersConstruct/blob/1.12/build.properties#L7) | [2.13.0.183](https://www.curseforge.com/minecraft/mc-mods/tinkers-construct/files/2902483)
| 1.7.10 | [0.3.2.jenkins187](https://github.com/SlimeKnights/TinkersConstruct/blob/1.7.10/build.properties#L3) | [1.8.8](https://www.curseforge.com/minecraft/mc-mods/tinkers-construct/files/2264246)

