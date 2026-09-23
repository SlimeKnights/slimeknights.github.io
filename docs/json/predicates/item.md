---
layout: page
title: Item Predicates
breadcrumb: Item
description: Item predicates match item values without any item stack data in JSON.
---

Item predicates match item values (notably not {% include type.html type="item stack" %}, meaning no count or NBT). They are used in some contexts where items are present but not item stacks, preventing usage of a standard {% include type.html type="item ingredient" %}.

The following sections discuss supported serializers.

{% include toc.html %}

## Common Predicates

Item predicates support all [common predicate](..#common-predicates) (including tag predicates).

## Simple Predicates

The following predicates have no extra fields, and are simply defined by their type:

**Since 1.19:**
* **`tconstruct:can_melt`**: Matches any item that has a melting recipe.
* **`tconstruct:arrow`** (since 1.19): Matches any item that extends `ArrowItem`.

**Since 1.20:**
* **`mantle:has_container`**: Matches any item that has a container item.
* **`mantle:may_have_transfer`**: Matches any item which has a registered fluid transfer recipe. Note it may still lack a transfer due to its NBT.
* **`tconstruct:bucket`**: Matches any item that extends `BucketItem`.
* **`tconstruct:map`**: Matches any item that extends `MapItem`.
* **`tconstruct:castable`**: Matches any item that has a casting recipe.

## Item Set

{% include_relative _set-predicate.html name="Item" %}