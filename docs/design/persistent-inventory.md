---
layout: page
title: Persistent Inventory Crafting Blocks
description: One of the features Tinkers' Construct provides is persistent inventory crafting blocks. In other words, the items in the crafting station remain in the block when closing the UI. To do this effectively, all crafting logic was moved into the tile entity, with a couple of hooks in the container to actually take the result. This design overall has led to far simpler code and and reduced duplication bugs when multiple players are both accessing the table, but can cause challenges with unconventional crafting recipes. This page details how the system works to help authors overcome those challenge.
---

{{page.description}}

One side-effect of this design is all players share the same crafting UI including the same items and the same result, rather than having a copy per player. This means a couple things that affect gameplay:

* Crafting recipes cannot be individually hidden
    * Tinkers' works around this by not allowing players to take the result if they lack access to the recipe
    * If the player attempts to take a recipe to which they lack access, a message is displayed
* Displayed crafting results are not individual to each player
    * The only way this was possible was by using access transformers anyways

## Creating a player sensitive recipe

One method of accessing the player in vanilla crafting table recipes was an access transformer to the private event handler container from `CraftingInventory`. This will not work with the crafting station as we do not use that event handler, thus it is null. Additionally, as mentioned before, the original crafting hooks are not player sensitive. Since we understand some mods may wish to make player sensitive recipes, we do provide player access when the recipe result is removed.

If you want to simply prevent crashes with the crafting station, just make your recipe `matches` return false if the container is missing. This will effectively group the crafting station with auto-crafters that lack player access.

To create player sensitive crafting recipes that work with the crafting station:
* When the player tries to take the item, we set the player to `ForgeHooks.setCraftingPlayer()`
    * After doing so, we call both `matches` and `getCraftingResult` a second time to get the final result for the recipe
    * Within your logic, you can retrieve the player using `ForgeHooks.getCraftingPlayer()` to add player information
* Instead of getting the player from the container in `matches` and `getCraftingResult`, you should use `ForgeHooks.getCraftingPlayer()` to get the player. You can check if the container field is null to know if you should call the Forge hook.
* Note that if multiple players are viewing the table, `matches` will only receive one of the two players (not entirely sure how the player is determined). `getCraftingResult` will have the player actually trying to craft the item.

## Player sensitive recipes in other blocks

The crafting station code ended up being quite convoluted in order to add player support. As a result, we have no plans to add similar player access in our custom crafting blocks. This will make it incompatible with concepts such as game stages, but unfortunately there is no easy way to solve this without greatly complicating our code.