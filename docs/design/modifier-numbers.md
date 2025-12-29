---
layout: page
title: Modifier Numbers
description: This page documents some of the numbers used in Tinkers' Construct 3 to balance modifiers, in particular material traits. It should serve as a resource to help with consistency and in case addons want suggestions of how to balance against the base mod.
---
{{page.description}}

{% include toc.html %}

## General

### Melee Damage

For flat boosts, the baseline for unconditional damage boost is 0.75, which gets boosted by 120% from netherite.

Conditional damage has a baseline of 2 for hard conditions (e.g. smite, bane), and 1.6 for easy conditions (e.g. cooling). Particularly hard conditions (e.g. raging, insatiable) have +2.5. Conditional damage is boosted by 125% from emerald.

For flat damage multipliers, the baseline is 8% (ductile), which gives a flat +2 damage from 25 damage. For conditional, reference points are 15% from solid (which decreases movement speed), and 20% from conducting (which has a particularly challenging condition). Easier conditions should likely stick to 10-12%.

### Attack Speed

Attack speed is generally applied as a multiplier. A flat multiplier is around +5% (swiftstrike upgrade) to +7% (lightweight trait).

Due to how attack speed works, conditional attack speed is not possible.

### Mining Speed

For flat boosts, the baseline is +4, which is further boosted by netherite at 125%. Against ineffective blocks, the baseline is +1 (crumbling).

Conditional mining speed starts at +6 for easy conditions (entangled, maintained), +7.5 to +8 for medium (temperate, hydraulic), and moves onto +9 for hard conditions (lightspeed, blasting)

Conditional multipliers show up with easy conditions at +15% (heavy) and hard ones at +25% (momentum).

## Ranged

### Projectile Power

For flat boosts, the baseline unconditional power boost is 0.5 from quartz's keen trait. Note the standard power modifier grants an extra 0.5 at the first level, but that is specific to that modifier rather than a general trend.

Conditional damage starts at 0.75 for easy conditions (e.g. crystalbound, flamestance, solid), and goes up to 1.0 for hard conditions (dragonshot, raging) and +1.25 for the hardest condition (insatible). Keep in mind that ranged attacks make some conditions that are hard on melee (like low health) easier.

For percentage multipliers, it is generally recommended to instead boost the velocity stat.

### Velocity

Velocity generally only receives flat boosts, no percentage boosts. The baseline is +0.05 for a flat trait (see lightweight, though that splits the boost between 2 stats), or +0.1 for a conditional trait.

### Draw Speed

Drawspeed starts at +25% for flat boosts (quick charge), which is notably excluded from longbows. A flat +0.3 is also seen on lightweight, alongside other stats.

Conditional boosts start at a flat +0.15 for easy conditions (entangled, antitoxin, temperate), and goes up to +0.25 for hard conditions (antitoxin at poison 2, momentum).

### Accuracy

Flat accuracy comes at +0.1 per upgrade level.

All forms of conditional accuracy come with other bonuses, so are typically below the +0.15 baseline.