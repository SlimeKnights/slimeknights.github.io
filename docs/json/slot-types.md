---
layout: page
title: Modifier Slot Types
---

Modifier slot types are used in [modifier recipes](../recipes/modifiers) in Tinkers' Construct to allow limiting some more powerful modifier while leaving other, weaker modifiers a large number of slots.
All modifiers added to a tool must select a slot type.

{% include toc.html %}

## Default Types

By default, the following slot types are available:

* `upgrades`: Common modifier slot for low cost modifier recipes. Tools have many upgrade slots and can receive many more.
* `abilities`: Rare modifier slot for high cost or high impact modifiers. Tools have few ability slots and adding more is expensive.
* `defense`: Uncommon modifier slots available on most forms of armor. While armor tends to have more defense slots than ability slots, there is only 1 way to gain an additional defense slot.

Beyond the default types, modpacks can freely define additional slot types, provided they also define a way to obtain the slots on tools using modifiers or tool starting slots.

## Slot Count

Slot types are commonly used in slot count objects, to define the count for various slots. This may be used for a slot requirement or a slot reward. Typically, it has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="Slot Count" link="#slot-count" %} Slot count object.
    * {% include field.html name="\<slot\>" type="integer" %} Number of slots of the [slot type](#slot-types) `<slot>`.
</div>

For example, `{ "upgrades": 3 }` represents a slot count of 3 upgrades. In most cases, a slot count may only have 1 type of slot specified, and leaving the object out represents no slots.
