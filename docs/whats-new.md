---
layout: page
title: What's New?
---
<div class="hatnote" markdown=1>
This page is a summary of all changes since Tinkers' Construct 2. For specific build by build changes, see [the release notes](https://github.com/SlimeKnights/TinkersConstruct/releases). For future plans, see [Roadmap](../roadmap). For features removed in Tinkers' Construct 3, see [Removed Features](../removed).
</div>

This page is a summary of the changes in Tinkers' Construct 3 for 1.16+, as compared to Tinkers' Construct 2 from 1.12 and before.

{% include toc.html %}

## World

### Ore Gen

* Copper ore has been reintegrated into Tinkers' Construct
    * In 1.16, Tinkers' Construct added this ore alongside cobalt.
    * For 1.18+, Tinkers' Construct uses the new vanilla ore.
* Cobalt returns with more uses
    * Instead of 
* Ardite ore replaced with Ancient Debris
    * Manyullyn is now made from alloying cobalt with ancient debris, making the rare vanilla ore useful for more than netherite.
    * Future plans for the end dimension will likely use of ardite.

### Slimes

Slime types now have unique names:

* Vanilla green slime is called "earthslime", though sometimes just "slime".
* Blue slime from sky islands is called "skyslime".
* Orange slime from the nether is called "ichor".
* Purple slime has been moved to the end, now called "enderslime".

#### Islands

Slime islands got reworked:

* Slimy trees now grow slimewood.
    * Replaces previous behavior of growing congealed slime.
    * Slimewood is useful as a tool material, notably creating slimestaffs.
    * Slimeballs can still be obtained "like apples" from leaves.
* New earthslime islands!
    * Spawn in the overworld oceans.
    * Loaded with earthslimes (vanilla slimes) and the new greenheart slimy trees (a bright green wood).
    * Spawn with either blue or green slimy dirt variants, with green foliage.
* Skyslime islands return!
    * Spawn in the sky as before, though may be less common.
    * Tree variant is skyroot, a bright blue wood.
    * Spawn with blue or green slimy dirt and blue foliage.
    * Skyslimes no longer die when jumping off the island, bouncing instead.
    * Skyslimes may occasionally spawn wearing armor from Tinkers' Construct.
* Clay islands add variety to the overworld!
    * Skyslime islands may rarely spawn as a clay island.
    * Contains a random overworld tree variant.
    * Filled with dirt, grass, sand, clay, and water.
    * Regularly spawns terracubes, a clay slime variant that may randomly wear vanilla armor.
* Nether islands were renamed to blood islands!
    * Spawn with orange dirt and red foliage.
    * "Trees" are known as bloodshrooms, which follow nether hyphae mechanics. They grow congealed ichor instead of shroomlights.
    * Remain a good source of magma cubes, with a lake of liquid magma.
* Purple islands migrated to the end as enderslime!
    * Enderslime mobs spawn on the islands, teleporting both for offense and defense.
    * Enderslimes occasionally spawn disguised as other mobs, which may change their behavior.

#### Geodes

Since 1.18, slimy geodes can now be found as the main source of slime crystals:

* Slime crystals are used in many modifiers, though can also be smelted from slimy dirt.
* Giant earthslime geodes spawn at low elevation in the overworld.
* Tiny skyslime geodes spawn at high elevations in the overworld, sometimes reaching the surface.
* Ichor geodes spawn near the nether ceiling, providing the primary source of ichor.
* Enderslime geodes spawn among the outer end islands, appearing as giant endstone rocks from the outside.

## Tool Tables

Tool tables received many improvements, notably:

* Crafting stations are now crafted using a log and a pattern, allowing different leg variants.
* Any two table blocks together will now form tabs instead of requiring a crafting station. In addition, multiple tables of the same type can be on tabs, up to 6 selected by distance.

### Part Builder Rework

* The stencil table and part builder were merged into a single block.
* Instead of crafting stencils, you simply place a pattern and a material into the part builder to make a tool part.
* Patterns are consumed upon crafting a tool part, though a gold cast can be as the pattern to prevent this.
* In addition to tool parts, can also be used to create sand casts and to recycle parts from tools that lack modifiers.
* Part builders now show a side inventory similar to the crafting station.

### Tool Crafting

* The tool station was renamed to the tinker station
    * Contains a tool slot and 3 input slots, like the classic Tinkers 1 UI.
    * Limited to small tools and modifiers with 3 or less inputs.
    * Can only rename tools on creation.
* Tool Forge was remodeled into the Tinkers' Anvil
    * Name sounds cooler and the anvil looks way cooler.
    * Unlike the vanilla anvil, not affected by gravity due to the awesomeness of seared bricks (or developer laziness, take your pick).
    * Contains 5 slots, like the Tinkers 2 UI.
    * Can create any tool, including broad tools, and apply all modifiers.
    * Requires 3 blocks of an alloyed metal alongside seared or scorched bricks.
    * Can rename tools on any modification.

### Modifier Worktable

* New tool table to modify the modifiers on a tool.
* Notably can:
    * Reorder modifiers, affecting visuals and modifier priorities.
    * Hide modifiers from the tool model (granted most modifier textures are still not done...).
    * Remove modifiers, restoring their slots.
    * Configure the behavior of advanced modifiers on some tools.
    * Transform enchantments or modifiers on a tool into a modifier crystal, which can be used to apply a modifier without playing its regular cost.

### Chests

* The cast chest returns, though is now crafted using seared bricks and a gold cast.
* Part chest also returns, for mass storage of tool parts.
* New Tinkers' Chest contains many slots with a limited stack size, perfect for storing large amounts of tools, and is also dyeable.

## Materials

<div class="hatnote" markdown=1>
For a full list of materials in the mod, see [Design Docs](../design#materials).
</div>

Tool materials have been rebalanced and divided into both tiers and classes. In addition, there are now separate material lists for different tool types.

Materials have the following tiers:

* **Tier 1**: Starting tier, comparable to wood or stone. These materials may be used in the part builder.
* **Tier 2**: Comparable to iron, these materials require melter access or early nether/end access.
* **Tier 3**: Comparable to diamond, these materials require alloying or nether ores.
* **Tier 4**: Comparable to netherite, these materials require advanced alloying.

### Melee and Harvest

The melee and harvest set of materials is used to create harvest tools such as pickaxes and shovels, along with weapons such as swords or axes. Melee and harvest materials are generally divided into the following classes:

* **General**: All-around materials with no particular focus.
* **Melee**: Most useful on melee weapons, may have diminished effectiveness on harvest tools.
* **Harvest**: Most useful on harvest tools, may have diminished effectiveness on melee weapons.
* **Special**: Contain more powerful traits or more unusual traits.
* **Binding**: May only be used to construct tool bindings.

Compared to Tinkers' 2, melee and harvest materials got several major reworks:

* **Bindings**: No longer have stats. Purpose is to allow choice of a trait from any tier.
* **Handles**: Instead of a flat durability, contain several multipliers for durability, mining speed, melee damage, and attack speed.

### Ranged

Ranged materials are used to create bows and crossbows, along with specialized ranged weapons from addons, They have the following classes:

* **General**: All-around materials with no particular focus.
* **Light**: Materials focused on high drawspeed.
* **Heavy**: Materials focused on high projectile velocity, boosting arrow damage.
* **Special**: Contain more powerful traits or more unusual traits.
* **Bowstring**: May be used to construct bowstring, contain a unique list of materials.

Compared to Tinkers' 2, ranged materials got several major reworks:

* Bow parts have traits actually useful for bows instead of just reusing melee weapon traits.
* **Bow Limbs**: Stats include durability, velocity, drawspeed, and accuracy.
* **Bow Grips**: New bow exclusive material with stats of melee damage, accuracy, and a durability multiplier.
* **Bowstring**: Continue to have no stats, but now have unqiue traits instead of just texture variants.

### Armor

Ranged materials are used to create plate armor and shields. They have the following classes:

* **General**: All-around materials with no particular focus.
* **Defense**: Materials focused on high protection.
* **Knockback**: Materials focused on high knockback resistance.
* **Maille**: May only be used to construct maille.
* **Shield Core**: May be used to construct shield cores, contain a unique list of materials.

### Part Cleanup

* All tool parts only have 1 material stat type now instead of that varying per tool. For example, a large plate is now always a tool head.
* Many parts that only got used once were removed in favor of other parts.
* All tool heads are ideally used on at least 2 tools.
* Sword guards were notably replaced with tool handles, and tough bindings are replaced with large plates.

### Trait rework

<div class="hatnote" markdown=1>
For a full list of material traits in the mod, see the [Design Docs](../design#modifiers).
</div>

* All material traits have been redesigned from the ground up.
* Notably, in most cases a material only has 1 trait for a particular tool type, instead of heads and handles/bindings having different traits.
* Low tier material traits on average are a bit weaker than in Tinkers' 2 to make it easier to select traits early game. High tier material traits tend to be more extreme.
* Some material traits from Tinkers 2 are now modifier recipes and vice versa.

## Tools

<div class="hatnote" markdown=1>
See also: [Removed Tools](../removed#tools).
</div>

### Melee and Harvest

The following tools are effective as both breaking blocks and as a melee weapon.

#### Small

These tools require 3 parts or less, making them craftable in the [tinker station](#tool-crafting):

* **Pickaxe**: Small tool effective on rock. Also an effective weapon against armored targets.
* **Pickadze** (1.18+): Limited maximum harvest level, but effective on both rock and dirts. Can also create paths.
* **Mattock**: Replaces the shovel, effective on dirts and logs. Limited effectiveness on non-natural wood blocks. Retains the ability to till dirt.
* **Hand Axe**: Replaces the hatchet, effective both on wood and as a powerful melee weapon.
* **Kama**: Effective on "shearable" blocks and plants, and can till dirt. Also can harvest crops and attack mobs in a small area.
* **Dagger**: High speed weapon usable in both hands. Also effective on many plants.
* **Sword**: Renamed from broadsword as the best sword. Has the best DPS of weapons, along with a sweep attack that.

#### Broad

These tools require 4 parts or more, making them require the [Tinkers' Anvil](#tool-crafting).

* **Sledge Hammer**: Effective against rock in a 3x3 pattern. Also an effective weapon against undead.
* **Vein Hammer**: Effective against matching adjacent rock. Also an effective weapon against armored targets.
* **Excavator**: Effective against dirts in a 3x3 pattern. Also a high knockback weapon.
* **Broad Axe**: High damage, but slow weapon. Can mine small trees in a single action and large in as many as 4 actions. Replaces the lumber axe and the battle axe.
* **Cleaver**: Larger variant of the sword, with higher damage but lower attack speed. Also may cut parts off mobs such as heads.
* **Scythe**: Large variant of a kama, attacking mobs in larger areas along with harvesting crops and tilling dirt.

### Ranged

These weapons make use of [ranged materials](#ranged) to fire projectiles.

* **Crossbow**: Small variant of bows, firing vanilla and mod added arrows along with fireworks. Supports dual wielding.
* **Longbow**: Large variant of bows, with higher potential velocity and drawspeed.

### Armor

Armor has several sets providing different functionality:

* **Travelers**:
    * Crafted using leather and copper.
    * All around set, with starting defense slots, upgrade slots, and ability slots.
* **Plate**:
    * Crafted using molten metals or ceramics.
    * Defensive set, starting with high defense slots, low upgrade slots, and no ability slots.
    * Contains 2 material parts granting defensive material traits.
    * Before 1.19, did not have material variants and was crafted from cobalt.
* **Slime**
    * Crafted using enderslime and mob parts.
    * Utility set, with no starting defense slots, but high upgrade slots, ability slots, and strong starting traits.

In addition, several shields are available:
* **Travelers Shield**: Low defense shield that does not significantly hinder movement speed when blocking.
* **Plate Shield**: High defense shield that significantly hinders movement speed when blocking.

### Special

* **Flint and Brick**: Modifiable variant of flint and steel, for a Tinkers only tool set.
* **Slime Staffs**: Highly modifiable tool with 4 variants (for each slime type). Starts with 2 ability slots and no functionality, but can receive many useful abilities turning it into a shield alternative, a sling replacement, a ranged weapon, or even a fancy bucket.
* **Shurikens**: Single use throwable item with low damage and mid knockback. Has flint and quartz variant.
* **Copper Cans**: Stackable fluid container holding exactly 1 ingot.

### Modifiers

<div class="hatnote" markdown=1>
For a full list of modifiers in the mod, see the [Design Docs](../design#modifiers).
</div>

Modifiers are now divided into different categories based on the type of slot used:

* **Upgrades**: Common modifier slot for modifiers behaving like Tinkers' 1 modifiers. Tend to be comparable to a single level of a cheaper enchantment like sharpness or efficiency.
* **Abilities**: Stronger modifiers comparable to Tinkers' 2 modifiers. Tend to be stronger and unique, such as silk touch or autosmelt.
* **Defense**: Special modifier slot type available to armor and shields. Used for protection modifiers.
* **Slotless**: Modifiers that don't require a slot type to apply.
* **Traits**: Modifiers applied based on the construction of the tool. May come from tool type, materials, and even other modifiers.

Other notable changes to modifiers:
* Modifiers are no longer mutually exclusive. Any modifiers can be mixed, though some mixes are just not useful.
* Many modifier recipes changed, use JEI or the in game books to find the new recipes.
* Reinforced no longer grants unbreakable at 5 levels. Instead, unbreakable requires an ability slot.
* Autosmelt is once again a modifier instead of a material trait. It also does not have any special interactions with lucky beyond standard loot table.
* Emerald now grants bonuses to modifiers that conditionally boost tool stats.
* Haste is a bit stronger and more in line with efficiency.
* Mending Moss was removed, though is planned to be added back as a material trait.
* Embossments were removed, though are planned to return in a new mechanic.
* Sharpening kits were renamed to "repair kits", no longer allowing mining level changes (use diamond or netherite instead). Still allows tool repair.
* Modifiers can now be removed using the [modifier worktable](#modifier-worktable).

## Smeltery

* Seared stone is no longer craftable by melting down cobblestone, but can be crafted by casting clay on stone. This was done to make it a bit more expensive to be usable as a tool material.
* Smeltery controller now requires casting molten copper on seared bricks, can be obtained using a melter.
* Seared drains now require copper in the recipe.

### Early game and automation

* **Melter**:
    * Mini 2 block early game smeltery, can run off solid or liquid fuel.
    * Required as the first step in making a smeltery, though can also be used instead of a smeltery.
    * Ported over from the 1.12 addon Tinkers' Complement.
    * Supports using a heater for solid fuels.
* **Sand Casts**:
    * Replaces clay casts as a single use cast.
    * Crafted by pressing a tool part into a blank sand cast in a casting table, or in the part builder.
* **Alloyer**:
    * Start of new nether based progression line.
    * Alloys multiple liquids together without needing a smeltery, allowing bypassing the smeltery entirely when used alongside a melter.

### Foundry

* Nether smeltery variant, made from scorched bricks.
* Controller requires casting molten obsidian on a scorched brick, can obtain via a alloyer.
* Aids in nether survival.
* Does not alloy, but can produce byproducts from ores.
* Requires a solid cube (cannot leave out corners) but has increases capacity.

### New Peripherals

* **Ladder**: Climbable smeltery block.
* **Chute**: Allows item input and output into multiblocks.
* **Duct**: Filtered variant of the drain.
* **Soul Glass**: Variant of seared glass that can be walked through.
* **Tinted Glass**: Variant of seared glass that is transparent, but blocks light.
    
### Mechanic changes

* Casting tables and basins can now be filled using a bucket or copper can, instead of just a faucet.
* Faucets can now be kept always active by giving constant redstone power (e.g. a lever).
* Smelteries now use more fuel based on the size of the structure, and don't store hidden fuel between smelting operations.
* Alloying now consumes fuel, allowing preventing alloying by providing no fuel.
* Entity melting now has many more useful recipes, and requires fuel instead of a molten liquid to melt mobs.
* Due to the vanilla changes to metal ores (they now support luck), the ore multiplier default rate was reduced from 2x to 1.3x (that is, every 3 ores gives an extra ingot). Gem blocks continue to produce 2x.
* Maximum size has changed, allowing up to 16x16x65, or a 14x14x64 internal volume.

#### Melting improvements

* Separated time from temperature
    * Temperature requirement remains consistent across a material, meaning if a fuel can melt nuggets it can melt ingots or blocks.
    * Time varies based on fluid volume produced plus some other factors such as ores vs. ingots.
* Multiple fuel options
    * The melter can use a heater for solid fuels, producing a low temperature and rate.
    * Lava returns as the standard fuel, with 1000 C and 1.0x speed.
    * Blazing blood is a new fuel from melting blazes, granting 1500 C for late game recipes, plus 1.5x speed multiplier. Can be obtained in many methods.

### Fluid values

<div class="hatnote" markdown=1>
See also: [Unit Tags](../json/fluid-tooltips#unit-tags).
</div>

Since 1.18, the values of many fluids were changed:

* Metals now are 90mb per ingot instead of 144mb, making a block 810mb and 100 nuggets per bucket.
* Gems are now 100mb, making 900mb a block and 10 gems a bucket.
* Bricks are now 250mb, making 4 bricks a bucket.

## Miscellaneous

* **Improved JEI support**: Many more recipe variants are shown in JEI.
* **Data Pack Support**: Nearly all recipes plus many tool behaviors are controlled in data packs, allowing modpacks a ton of control to reconfigure the mod. See [Documentation](..).