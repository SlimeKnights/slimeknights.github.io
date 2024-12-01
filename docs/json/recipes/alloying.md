---
layout: page
title: Alloying Recipes
description: Alloying recipes are used to define how fluids mix in the smeltery or alloyer in Tinkers' Construct.
---
{{page.description}}

Alloying recipes typically run every 4 ticks, or 1/5 of a second, meaning if you multiply recipe sizes by 5 you can get the amount alloyed per second.

## Alloying

Alloying recipes are used to mix multiple fluid ingredients into a single fluid output. Alloying recipes have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The recipe object.
    * {% include field.html name="type" type="resource location" %} Always `tconstruct:alloy`.
    * {% include field.html name="inputs" type="list" %} List of fluid ingredients to alloy together. Sizes indicate the amount consumed in a single alloying operation, which is also the the minimum input size.
        * {% include field.html type="fluid ingredient" %} A single fluid ingredient input.
    * {% include field.html name="result" type="fluid stack" %} Alloy result. Size indicates the amount produced in a single alloying operation. Does not support NBT.
    * {% include field.html name="temperature" type="integer" %} Minimum fuel temperature to perform this alloy recipe.
</div>

Note that the inputs are all checked in order, and a single fluid in the smeltery cannot match multiple inputs. If your desired alloy recipe has multiple inputs that can both match the same fluid (due to one being a superset of the other), ensure the most strict ingredient is first in the input array.

In addition, the output of the alloy recipe must not match any of the input ingredients; this prevents hard to debug issues with recipes that have no practical benefit.