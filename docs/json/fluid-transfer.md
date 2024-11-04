---
layout: page
title: Fluid Transfer
---
By default, any item with a Forge fluid handler capability is able to interact with tanks from SlimeKnights mods, which notably includes buckets and many custom fluid containers such as Tinkers' Construct copper cans.
Some items in gameplay terms should contain fluid, but due to either non-standard implementations or fluids defined as part of a modpack cannot implement a Forge fluid handler. To handle these cases, Mantle (since 1.18.2) allows data packs to specify additional item fluid transfer behavior. In addition, any transfer behavior defined in JSON takes precedence over the Forge fluid handler, allowing modpacks to override broken item fluid handlers for Mantle tanks.

## JSON Format

Fluid transfer JSON are defined under `data/<domain>/mantle/fluid_transfer/<name>.json`, though the ID `<domain>:<name>` has no impact on transfer behavior beyond data pack overrides. Fluid transfer has the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid transfer object.
    * {% include field.html name="conditions" type="list" %} List of conditions that must pass for this fluid transfer to be loaded. If unset, the fluid transfer is always loaded.
        * {% include field.html type="condition" %} A single condition that must pass.
    * {% include field.html name="type" type="resource location" %} Fluid transfer serializer ID.
    * *Any additional fields defined by the fluid transfer serializer*.
</div>

The following sections describe specific fluid transfer serializers that may be used.

## Empty Container

The empty container fluid transfer defines fluid transfer for emptying the fluid out of an item into the target tank and returning an empty container. This transfer has three variants: 

* **`mantle:empty_item`**: ignores the NBT on the input item stack.
* **`mantle:empty_nbt`**: copies the NBT from the input stack onto the output fluid
* **`tconstruct:empty_potion`**: if the NBT on the item  stack is the potion `minecraft:water`, replaces the result with the fluid `minecraft:water`. Otherwise, copies the item stack to the fluid.

All three variants have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid transfer object.
    * {% include field.html name="type" type="resource location" %} Either `mantle:empty_item`, `mantle:empty_nbt`, or `tconstruct:empty_potion`.
    * {% include field.html name="input" type="ingredient" %} Ingredient determining fluid items emptied using this transfer.
    * {% include field.html name="fluid" type="fluid stack" %} Fluid to add to the target tank. Does not support NBT.
    * {% include field.html name="filled" type="item output" %} Item representing the container without `fluid`. Does not support stack size.
</div>

## Fill Container

The fill container fluid transfer defines fluid transfer for filling an item with fluid from the target tank and returning the filled item. This transfer has two variants: `mantle:fill_item` which ignores the NBT on the fluid in the tank, and `mantle:fill_nbt` which copies the NBT from the input fluid onto the output item.

Both variants have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The fluid transfer object.
    * {% include field.html name="type" type="resource location" %} Either `mantle:fill_item` or `mantle:fill_nbt`.
    * {% include field.html name="input" type="ingredient" %} Ingredient determining container items filled using this transfer.
    * {% include field.html name="fluid" type="fluid ingredient" %} Fluid to drain from the target tank. Amount determines how much is drained.
    * {% include field.html name="filled" type="item output" %} Item representing the container with `fluid`. Does not support stack size.
</div>
