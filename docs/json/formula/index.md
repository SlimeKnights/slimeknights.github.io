---
layout: page
title: Formulas
description: This page describes the formula system used in many modifiers. The formula module system was added in 1.19.2 and encodes the formulas for conditional modifiers with more complex behavior.
---

{{page.description}}

## Postfix notation

Modifier formulas are based off [postfix notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) (often called Reverse Polish notation). They work based on a stack of floats, and a list of operations which can either be pushing a value onto the stack, or applying a math operator to values on the stack. At the end of the formula, a single value should remain on the stack, which is the formula result.

## JSON Format

{% include construction.html %}