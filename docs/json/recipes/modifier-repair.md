---
layout: page
title: Modifier Repair Recipes
description: Modifier repair recipes are used to define additional methods to repair a Tinkers' Construct tool that contains a specific modifier.
---
{{page.description}}

{% include toc.html %}

## Item Repair

Item repair recipes allow repairing a tool using the given ingredient provided it has the listed modifier. This recipe has two variants, `tconstruct:modifier_repair` which defines repairing the tool in the tinker station or tinker's anvil and `tconstruct:crafting_modifier_repair` which defines repairing the tool in the crafting table. Both variants have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:modifier_repair` or `tconstruct:crafting_modifier_repair`.
    * {% include field.html name="modifier" type="Modifier ID" %} Modifier required on the tool to use this recipe.
    * {% include field.html name="ingredient" type="ingredient" %} Ingredient used to repair the tool.
    * {% include field.html name="repair_amount" type="integer" %} Amount of durability restored by this recipe.
</div>

## Material Repair
<div class="hatnote">Since 1.18.2</div>

Material repair recipes allow repairing a tool using items matching the given tool material provided it has the listed modifier. This recipe has two variants, `tconstruct:modifier_material_repair` which defines repairing the tool in the tinker station or tinker's anvil using items associated with the material, and `tconstruct:crafting_modifier_material_repair` which defines repairing the tool in the crafting table using repair kits. Both variants have the following format:


<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Either `tconstruct:modifier_material_repair` or `tconstruct:crafting_modifier_material_repair`.
    * {% include field.html name="modifier" type="Modifier ID" %} Modifier required on the tool to use this recipe.
    * {% include field.html name="repair_material" type="material ID" %} Material used for repairing the tool.
    * {% include field.html name="stat_type" type="stat type ID" %} Stat type to use when repairing the tool. Used to fetch the relevant durability value from the material stats.
</div>
