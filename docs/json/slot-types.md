---
layout: page
title: Modifier Slot Types
---

Modifier slot types are used in [modifier recipes](../recipes/modifiers) in Tinkers' Construct to allow limiting some more powerful modifier while leaving other, weaker modifiers a large number of slots.
All modifiers added to a tool must select a slot type.

{% include toc.html %}

## Slot Types

By default, the following slot types are available:

* `upgrades`: Common modifier slot for low cost modifier recipes. Tools have many upgrade slots and can receive many more.
* `abilities`: Rare modifier slot for high cost or high impact modifiers. Tools have few ability slots and adding more is expensive.
* `defense`: Uncommon modifier slots available on most forms of armor. While armor tends to have more defense slots than ability slots, there is only 1 way to gain an additional defense slot.
* `soul`: Currently unused slot type intended for future content.

In addition, many contexts refer to a slot type of "slotless", which is used for recipes that require no slots.

Slot IDs are intentionally not namespaced to encourage reuse among addons and datapacks. If you make an addon with a custom slot type, discuss it with us and we can mention it on this page.

### Custom Slots

Beyond the default types, both addons and data packs can freely define additional slot types, provided they also define a way to obtain the slots on tools using modifiers or tool starting slots.

For addons, slots can be defined using the methods in `SlotType`:
* `create(String name, int color)`: Defines a new slot type. Name should only consistent of lowercase letters, numbers, and underscores. If two slots are declared with the same name, the first instance is returned.
* `getOrCreate(String name)`: Same as above, but if the slot is undefined, uses white as the color.
* `getIfPresent(String name)`: Returns the slot if any mod declared it, or null if undeclared.

For data packs, a slot is defined simply by using it in any relevant context, such as [modifier recipes](../recipes/modifiers) or [modifiers](../modifiers).

### Language keys

Whichever method used, language keys are consistent. To make a custom slot properly show up in translations, three language file keys are needed. In all examples, `<id>` should be replaced with the actual ID of the trait.

* `item.tconstruct.creative_slot.<id>`: Name of the creative modifier to add an extra slot of this type.
* `stat.tconstruct.slot.prefix.<id>`: Slot name for remaining slots in tooltips. Should end in a colon and space for consistency.
* `stat.tconstruct.slot.display.<id>`: Slot name for formatting in tooltips. Inserted into several translation strings that describe slot types.

For example, for upgrades:
```json
{
  "item.tconstruct.creative_slot.upgrades": "Creative Upgrade Slot",
  "stat.tconstruct.slot.prefix.upgrades": "Upgrades: ",
  "stat.tconstruct.slot.display.upgrades": "upgrade"
}
```

### Textures

Slot types require a texture which is used both for the creative slot modifier, and in JEI integration to show slot cost. If a texture is not defined, it will fallback to the slotless book icon. Internally, JEI integration uses the textures from the item model to define.

For a datapack, its easiest to create a resource pack to override the default icons. These are defined in `assets/tconstruct/models/item/creative_slot.json`. The textures JSON object contains a mapping from slot ID to texture in the standard resource pack format. Copying this file and adding the additional textures will allow these slots.

For addons, more textures can be added via Mantle's `NBTKeyModel.registerExtraTexture(ResourceLocation key, String textureName, ResourceLocation texture)`. The following parameters are wanted:
* `key` should be passed as `tconstruct:creative_slot`
* `textureName` should be the ID of your modifier slot
* `texture` should be the texture path in standard model resource pack format.




## Slot Count

Slot types are commonly used in slot count objects, to define the count for various slots. This may be used for a slot requirement or a slot reward. Typically, it has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="Slot Count" link="#slot-count" %} Slot count object.
    * {% include field.html name="\<slot\>" type="integer" %} Number of slots of the [slot type](#slot-types) `<slot>`.
</div>

For example, `{ "upgrades": 3 }` represents a slot count of 3 upgrades. In most cases, a slot count may only have 1 type of slot specified, and leaving the object out represents no slots.
