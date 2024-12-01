---
layout: page
title: Station Slot Layouts
description: Station slot layouts are used in Tinkers' Construct since 1.16 to define arrangements of buttons in the tinker station and tinker's anvil. The primary purpose is for in game documentation on how to craft tools, though this format is also used to define the default "repair and modify tool" layouts for the tinker station and tinker's anvil.
---
<div class="hatnote" markdown=1>
This page is about the JSON defining the layout buttons in the tinker station and tinker's anvil. For the recipes defining tool crafting, see [Tool Building Recipes](../recipes/tools#tool-building).
</div>

{{page.description}}

Note that a station slot layout *does not* make a tool craftable, its purely a cosmetic arrangement of slots in the tinker station or anvil. Making a tool craftable is done through the [tool definition](../tool-definitions) and [tool recipes](../recipes/tools#tool-building).

The station slot layout with ID `<domain>:<name>` is located at `data/<domain>/tinkering/station_layouts/<name>.json`.

## Format

The JSON format for a station slot layout is as follows:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The station slot layout object.
    * {% include field.html name="translation_key" type="string" %} Translation key of the display name for this layout, used for the tooltip and the title on the info panel. In addition, suffixing this translation key with `.description` produces the key of the descriptive text displayed in the info panel when clicking the button.
    * {% include field.html name="sortIndex" type="integer" %} Order this layout is shown in the list of buttons on the side of the tinker station or tinkers anvil. If unset, this layout is not shown (used for [required layouts](#required-layouts)).
    * {% include field.html name="icon" type="object" %} Icon to display for the slot.
        * {% include field.html name="pattern" type="pattern" %} Pattern to display. May not be set alongside `item`.
        * {% include field.html name="item" type="item ID" %} Item to display, may not be set alongside `pattern`.
        * {% include field.html name="nbt" type="object" %} NBT for the display item, represented as a JSON object. If unset, the output has no NBT. Unused if `item` is not set.
        * {% include field.html name="nbt" type="string" %} NBT for the display item, represented as a string. If unset, the output has no NBT. Unused if `item` is not set.
    * {% include field.html name="tool_slot" type="Layout Slot" link="#layout-slots" %} The slot definition for the primary tool slot. If unset, the tool slot will be hidden.
    * {% include field.html name="input_slots" type="list" %} List of input slots to display. If larger than the number of slots supported by the table, this layout will not be displayed in that table. If smaller than the number of slots supported by the table, extra slots will be hidden.
        * {% include field.html type="Layout Slot" link="#layout-slots" %} An input slot.
    
</div>

### Layout Slots

Within the station slot layout are multiple layout slots, which have the following format:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} The layout slot object.
    * {% include field.html name="translation_key" type="string" %} Translation key of the slot. Used for the list of requirements in the info panel. Unused for the `tool_slot`.
    * {% include field.html name="icon" type="pattern" %} Pattern icon to display when the slot is empty.
    * {% include field.html name="x" type="int" %} Location in pixels to display the slot from the left.
    * {% include field.html name="y" type="int" %} Location in pixels to display the slot from the top.
    * {% include field.html name="filter" type="ingredient" %} Slot filter ingredient. Any items not matching this ingredient may not be placed in the slot.    
</div>

## Removing Layouts

To remove a layout from the screen, simply create a `.json` at the relevant location containing just an empty JSON object `{}`. This will cause that layout to skip loading.

## Required Layouts

The following station layouts have special behavior beyond simply displaying a tool recipe, and thus are required:

* `tconstruct:tinker_station`: defines the default layout of buttons in the tinker station.
* `tconstruct:tinkers_anvil`: defines the default layout of buttons in the seared tinker's anvil.
* `tconstruct:scorched_anvil`: defines the default layout of buttons in the scorched tinker's anvil.