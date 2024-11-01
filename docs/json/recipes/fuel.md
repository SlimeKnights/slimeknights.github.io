---
layout: page
title: Fuel Recipes
---
Fuel recipes are used to define valid fluids in the melter, alloyer, smeltery, and foundry.

The rate of fuel consumption varies based on the usage. For the melter and alloyer, 1 fuel "duration" is consumed every 4 ticks, or 1/5 of a second. For the smeltery and foundry, multiple "duration" may will be consumed based on the size of the structure, causing the fuel to not exactly map to seconds.

## Fuel

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:melting_fuel`.
    * {% include field.html name="fluid" type="fluid ingredient" %} Fluid ingredient matching the fuel. Amount determines how much fuel is consumed per operation.
    * {% include field.html name="duration" type="integer" %} Amount of "fuel units" produced per operation. The exact 
    * {% include field.html name="temperature" type="integer" %} Fuel temperature value, used for gating [melting](../item-melting) and [alloying](../alloying) recipes. Additionally, acts as a multiplier on the rate items melt, with 1000 being the baseline.
</div>
