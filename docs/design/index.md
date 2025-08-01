---
layout: page
title: Design Documents
breadcrumb: Design
description: This page contains links to various design documents we have shared related to features for SlimeKnight mods. The often are more detailed than the in game descriptions, and also give some info on future content. If you are making an addon, its encouraged to read through the relevant documents to ensure you understand how the mod is organized.
---
<div class="hatnote" markdown=1>
This page is about design documentation on implemented features. For features that are not implemented in the mod, see [Roadmap](../roadmap). For Java documentation, see [Addon Documentation](../addons).
</div>

{{page.description}}

In general, design docs are updated to the latest 1.20 build with the addition of content for future plans. The [in game books](../books) remain the best source of information accurate to your version of the mod. Note that many design docs will also contain future plans instead of just current features.

{% include toc.html %}

## Tinkers' Construct 3

### Tools

* [**Tools**](https://docs.google.com/spreadsheets/d/1SLqUg2Rg3HxTaJD97gXw3fipkz-jTY78k8JrunJhFic/edit#gid=0): Contains information on tools, tool parts, armor, and projectile added by the mod.
* [**Tool upgrades**](https://docs.google.com/drawings/d/1OjAT9ySZ3pXVbgXZY5RpfNkpVWJ5ectsqEbYELlU7OQ/edit): Visual chart connecting related tools and their upgrades.
* <b id="modifiers">Modifiers and Traits</b>
  ([1.16](https://docs.google.com/spreadsheets/d/18duuzGfy3-AF9zUTsl_wg-osdjykvkZzpJT2EiR5UuM/edit),
  [1.18](https://docs.google.com/spreadsheets/d/17qwV8UOR0DBsUqbxyernG4e4LtjAZ55DMAqnJWc2kLw/edit),
  [1.19](https://docs.google.com/spreadsheets/d/19Nbi-jTrhZg4zMZ8DreELWHv6SZDik5wxiz13Iqhnbw/edit?usp=sharing),
  [1.20](https://docs.google.com/spreadsheets/d/1uQre2AIXdAETeXGIKe2bIs8jbIvAVOnYZ11zo9ODBQQ/edit?usp=sharingsharing)):
  Detailed trait descriptions for each material, along with detailed modifier descriptions.
* <b id="materials">Material tiers</b> 
  ([1.16](https://docs.google.com/spreadsheets/d/1fx9SF4K_6Eg9LBCuaV43bdyuh5KgNZsAIY6fkYAFbYQ/edit),
  [1.18](https://docs.google.com/spreadsheets/d/10nTUAQ5iPhzyf8BTlX9Wy9spJLbYrziYeCwZWcD5xJ0/edit),
  [1.19](https://docs.google.com/spreadsheets/d/1c8SOET2_i82slCiay_Cn0NNmoGBYn-IhmIl9PePwqEY/edit?usp=sharing),
  [1.20](https://docs.google.com/spreadsheets/d/1WMK9s_e27o4YTdBvPQYa3ifloobjVLwK2qljL2ozPXM/edit?usp=sharing)):
  Classification of materials into tiers and stat types, along with a listing of tool stats.
* [**Modifiers vs. Enchantments**](enchantments): Discussion on what makes modifiers different from enchantments, and how they are balanced. Useful for considering how to adapt an enchantment into a modifier or vice versa.

### Smeltery

* **Alloy Chart** ([1.16](https://docs.google.com/drawings/d/1hg0j298beD-zXRuwCl4zq7YVZ_p0xi_JgK7hRNPa2vA/edit), [1.18](https://docs.google.com/drawings/d/1TQHHbeXNRGBd-vwkw5OaY9N3-tvIQuG6cUaiOXJho54/edit)): Visual diagram of composite and alloy components and how they relate. Helpful for designing new alloys to prevent overusing or underusing certain components.

### Technical

* [**Faucet State Diagram**](https://docs.google.com/drawings/d/1Hxv2Xdv3n_D2cg1fpCvv1jYoIz3hVJ5_zO-vr74L754/edit?usp=sharing): State transition diagram for the faucet and its interactions with redstone.
* [**Tool NBT Components**](https://docs.google.com/drawings/d/1BI42KITkszTT0BVb4xeQQU1-38t2mcKaa1ISM8fHx2g/edit): Contains information on all the elements of tool NBT, useful for modders who need to work with NBT directly or pack makers wanting to add commands related to NBT.

## Metalborn

* [**Powers**](https://docs.google.com/spreadsheets/d/1TjooDOsU0l1hOEa1FSsqwhG5no_HhcwzRz59b2ZYJZ8/edit?usp=sharing): Contains a full list of all powers curently in the mod and their associated metals and Hemalurgy targets.
