---
layout: page
title: Ingredients
---

Ingredients are used in many different JSON formats to represent an input which also has the ability to display a full list of matching inputs (unlike [predicates](../predicates)).

{% include toc.html %}

## Item Ingredients

<div class="hatnote" markdown=1>
See also: [Forge Read the Docs](https://docs.minecraftforge.net/en/1.19.x/resources/server/recipes/ingredients/).
</div>

Item ingredients, often called simply "ingredients", represent an input that matches item stacks. Ingredients can match based on both item properties and item stack NBT, and typically should ignore item stack size.

Item ingredients can be represented in several forms, as covered by the following subsections.

### Basic

Basic ingredients as defined by Minecraft are represented as an object with either an item or a tag. They have the following form:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="item" type="Item ID" %} If set, this ingredient matches the specified item. Cannot be set alongside `tag`.
    * {% include field.html name="tag" type="Item tag" %} If set, this ingredient matches the specified tag. Cannot be set alongside `item`.
</div>

### Compound

A compound ingredient matches if any of the nested ingredients matches. Unlike other ingredient types, compound ingredients are represented as an array instead of an object.

<div class="treeview" markdown=1>
* {% include field.html type="list" %} The ingredient list.
    * {% include field.html type="object" %} An ingredient object.
        * *Fields from either of the above ingredient forms.*
</div>

### Custom

Forge allows mods to define custom item ingredient types which override the vanilla serializer for ingredients. This allows matching items on more complex conditions than item type or tag, and allows matching item stacks based on NBT. The basic form for a custom is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Type of the ingredient, as defined in the [Forge registry](https://docs.minecraftforge.net/en/1.19.x/resources/server/recipes/ingredients/#custom-ingredients).
    * *Other fields based on the ingredient type.*
</div>

The rest of this section covers various custom ingredient types added by Forge, Mantle, and Tinkers' Construct.

#### Intersection

Intersection ingredients are a Forge ingredient that matches if all of the children in the ingredient match. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `forge:intersection`.
    * {% include field.html name="children" type="list" %} A list of ingredients, matches if all ingredient in the list matches.
        * {% include field.html type="ingredient" %} Item ingredient to match.
</div>

#### Difference

Difference ingredients are a Forge ingredient that matches if the first ingredient matches, but the second does not, allowing for a set subtraction. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `forge:difference`.
    * {% include field.html name="base" type="ingredient" %} Item ingredient that must match.
    * {% include field.html name="subtracted" type="ingredient" %} Item ingredient that must not match.
</div>

#### Strict NBT

Strict NBT ingredients are a Forge ingredient that matches if the given NBT matches the item stack exactly. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="item" type="Item ID" %} Item that must match.
    * {% include field.html name="nbt" type="object" %} Exact NBT on the item stack, represented as a JSON object.
    * {% include field.html name="nbt" type="string" %} Exact NBT on the item stack, represented as a string.
</div>

The ingredient will not match if the item has any NBT beyond that which is specified here.

#### Partial NBT

Partial NBT ingredients are a Forge ingredient that matches if the given NBT matches the item stack, ignoring any fields not specified in the NBT. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="item" type="Item ID" %} Item that must match. Cannot be set alongside `items`.
    * {% include field.html name="items" type="list" %} List of items, item must match any of them. Cannot be set alongside `item`.
        * {% include field.html type="Item ID" %} A single item option.
    * {% include field.html name="nbt" type="object" %} Partial NBT on the item stack, represented as a JSON object.
    * {% include field.html name="nbt" type="string" %} Partial NBT on the item stack, represented as a string.
</div>

The ingredient will ignore any NBT on the item beyond that which is specified in the `nbt` field.

#### Fluid Container

Fluid container ingredients are a Mantle ingredient that matches if the given item stack is a fluid container and contains the specified fluid exactly. In addition, the item stack's "craft remainder" must exactly match the item when drained of the specified fluid. This restriction is due to the fact most recipes that support ingredients do not support callbacks to specify how an ingredient is consumed, limiting this ingredient to match only exact fluid amounts. It is typically most useful to mimic bucket-like containers that only support a single size of fluid, rather than dynamic containers that can be partially drained.

The fluid container ingredient has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:fluid_container`.
    * {% include field.html name="fluid" type="fluid ingredient" %} Item must contain fluid matching this ingredient exactly.
    * {% include field.html name="display" type="ingredient" %} If set, this ingredient will be used for the display item stacks in recipe viewers. If unset, the display item stacks will be empty.
</div>

Alternatively, the fluid container ingredient can be written in the following compact form when matching a single fluid or Fluid tag:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `mantle:fluid_container`.
    * {% include field.html name="fluid" type="Fluid ID" %} If set, this ingredient matches items containing the specified fluid. Cannot be set alongside `tag`.
    * {% include field.html name="tag" type="Fluid tag" %} If set, this ingredient matches items containing the specified Fluid tag. Cannot be set alongside `fluid`.
    * {% include field.html name="amount" type="integer" %} Item must contain exactly this much fluid.
    * {% include field.html name="name" type="Fluid ID" %} Used in 1.18.2 and before to set a specific fluid to match; was renamed to `fluid` in 1.19.2. Still supported but deprecated, may be removed in a future version of Mantle.
</div>

#### Block Tag

Block tag ingredients are added by Tinkers' Construct, and match any item whose block form matches the given block tag. It will fail to match if the block form does not match the tag or if the item has no block form. They have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:block_tag`.
    * {% include field.html name="tag" type="Block tag" %} The block form of the item must match the given tag.
</div>

#### No Container

No container ingredients are an ingredient added by Tinkers' Construct, matching items that have no craft remainder item (sometimes called a container). Practically, this ingredient is useful with a fluid container to match only the empty form of the container rather than filled forms. This ingredient has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:no_container`.
    * {% include field.html name="item" type="Item ID" %} If set, this ingredient matches the specified item.
    * {% include field.html name="tag" type="Item tag" %} If set, this ingredient matches the specified tag.
    * {% include field.html name="match" type="ingredient" %} Item ingredient to match.
</div>

Note that a no container ingredient may only set one of `item`, `tag`, and `match`.

#### Material

Material ingredients are an ingredient added by Tinkers' Construct, matching a [material](../materials) on an item stack. Alternatively, they are often used without setting the material or material tag to simply display an item stack with all its material variants in recipes.

Material ingredients have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:material`.
    * {% include field.html name="item" type="Item ID" %} If set, this ingredient matches the specified item.
    * {% include field.html name="tag" type="Item tag" %} If set, this ingredient matches the specified tag.
    * {% include field.html name="match" type="ingredient" %} Item ingredient to match.
    * {% include field.html name="material" type="material variant" %} If set, item's material must match the specified material.
    * {% include field.html name="material_tag" type="material tag" %} If set, the item's material must match any of the materials in the tag.
</div>

Note that a material ingredient may only set one of `item`, `tag`, and `match`. In addition, it is never useful to set both `material` and `material_tag`. 

#### Tool Hook

Tool hook ingredients are ingredients added by Tinkers' Construct that match tools supporting a particular tool hook in their tool definition. This ingredient is notably used for the trait variant of the rebalanced modifier to ensure its only craftable if the tool actually has a rebalanced trait. This ingredient has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The ingredient object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:tool_hook`.
    * {% include field.html name="tag" type="Item tag" %} Item tag that must match on the tool. If unset, defaults to `tconstruct:modifiable`.
    * {% include field.html name="hook" type="Tool Hook ID" %} Tool hook that must match.
</div>

### Sized

A sized ingredient is a special type of item ingredient added by Mantle. It is used in many recipe types to allow an ingredient to have size based inputs, matching if the item stack size is larger than or equal to the specified size. Unlike other variants of item ingredients, sized ingredients only work in contents that specifically support sized ingredients; it is not possible to make an ingredient sized unless the recipe format requests sized ingredients.

A sized ingredient has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The sized ingredient object.
    * {% include field.html name="ingredient" type="ingredient" %} Item ingredient to match.
    * {% include field.html name="amount_needed" type="integer" %} The minimum stack size for the input item stack. If unset, defaults to 1.
</div>

A sized ingredient can also be represented more compactly in one of the following forms:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The sized ingredient object.
    * {% include field.html name="item" type="Item ID" %} If set, this ingredient matches the specified item. Cannot be set alongside `tag`.
    * {% include field.html name="tag" type="Item tag" %} If set, this ingredient matches the specified tag. Cannot be set alongside `item`.
    * {% include field.html name="amount_needed" type="integer" %} The minimum stack size for the input item stack. If unset, defaults to 1.
</div>

For custom ingredient types, this compact form is only allowed if the custom type does not use `amount_needed` as one of its fields:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The sized ingredient object.
    * {% include field.html name="type" type="resource location" %} Type of the ingredient, see [custom ingredients](#custom).
    * {% include field.html name="amount_needed" type="integer" %} The minimum stack size for the input item stack. If unset, defaults to 1.
    * *Other fields based on the ingredient type.*
</div>

## Fluid Ingredients

Fluid ingredients are a type of ingredient added by Mantle, matching fluid inputs in recipes. Unlike [item ingredients](#item-ingredients), they do not support checking the NBT of a fluid stack, but they do support matching the fluid stack size. The most basic form of a fluid ingredient is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid ingredient object.
    * {% include field.html name="fluid" type="Fluid ID" %} If set, this ingredient matches the specified fluid. Cannot be set alongside `tag`.
    * {% include field.html name="tag" type="Fluid tag" %} If set, this ingredient matches the specified tag. Cannot be set alongside `fluid`.
    * {% include field.html name="amount" type="integer" %} Minimum fluid amount. The fluid stack must have an equal or greater amount to match.
    * {% include field.html name="name" type="Fluid ID" %} Used in 1.18.2 and before to set a specific fluid to match; was renamed to `fluid` in 1.19.2. Still supported but deprecated, may be removed in a future version of Mantle.
</div>

Alternatively, a fluid ingredient can be expressed as a list to match multiple fluid ingredients under an "or" condition:

<div class="treeview" markdown=1>
* {% include field.html type="list" %} A list of fluid ingredients, any of which must match. The amount is determined by the first match.
    * {% include field.html type="fluid ingredient" %} A fluid ingredient to match.
</div>

## Entity Ingredients

Entity ingredients are a type of ingredient added by Mantle, matching entity type inputs in recipes. They do not support matching on any properties beyond the entity type. Entity ingredients are defined with one of the following three mutually exclusive keys:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid ingredient object.
    * {% include field.html name="type" type="Entity ID" %} If set, this ingredient matches the specified entity types.
    * {% include field.html name="types" type="list" %} If set, this ingredient matches any of the specified entity types.
        * {% include field.html type="Entity ID" %} An entity type to match.
    * {% include field.html name="tag" type="Entity Type tag" %} If set, this ingredient matches the specified tag.
</div>

Alternatively, an entity ingredient can be expressed as a list to match multiple entity ingredients under an "or" condition:

<div class="treeview" markdown=1>
* {% include field.html type="list" %} A list of entity ingredients. Matches if any entry in the list matches.
    * {% include field.html type="entity ingredient" %} An entity ingredient to match.
</div>
