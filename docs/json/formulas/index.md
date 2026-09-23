---
layout: page
title: Formulas
description: This page describes the formula system used in many modifiers in Tinkers' Construct. The formula module system was added in 1.18.2 and encodes the formulas for conditional modifiers with more complex behavior.
---

{{page.description}}

## Postfix notation

Modifier formulas are based off [postfix notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) (often called Reverse Polish notation). They work based on a stack of floats, and a list of operations which can either be pushing a value onto the stack, or applying a math operator to values on the stack. At the end of the formula, a single value should remain on the stack, which is the formula result.

## JSON Format

Objects supporting formulas have the following additional keys:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} An object with a formula.
    * {% include field.html name="formula" type="list" %} List of formula operations.
      * {% include field.html type="any" %} List of formula operations. See [operations](#operations) for possible values.
    * {% include field.html name="variables" type="object" %} If supported, mapping of variable names to variable objects. Variables will be fetched using the formula context and included in the formula.
      * {% include field.html name="\<variable\>" type="variable" %} Assigns the name `<variable>` to the given variable.
</div>

### Fallback Formula

Many usages of formulas do not need the full flexibility, so can use a simple fallback formula instead. The exact behavior of the fallback formula varies by usage, but it will typically be some form of scaling the modifier level and combining with the base value.

A formula will use the fallback formula if the key `"formula"` is absent, instead using the following form:

<div class="treeview" markdown=1>
* {% include field.html type="object" %} An object with a formula.
    * {% include field.html name="each_level" type="float" %} Multiplier for the modifier level used in the fallback formula.
    * {% include field.html name="flat" type="float" %} Flat value added to the modifier level for the fallback formula.
</div>

Common fallback formulas include:

* Identity: formula resolves to `flat + each_level * level`. Used in contexts that don't have a base value such as reduce tool damage.
* Add: formula resolves to `value + flat + each_level * level`. Used in contexts that do not use multipliers such as protection.
* Boost: formula resolves to `value + (flat + each_level * level) * multiplier`. Used in contexts such as additive melee damage or mining speed.
* Percent: formula resolves to `value * (1 + flat + each_level * level)`. Used for multiplier modules such as repair factor or adjust damage.

## Operations

Formulas run on a series of operations which are all applied in order to modify the stack.

If the operation is a number, then the operation pushes that number onto the stack. If its a string, one of the following operations is run based on its contents.

### Variables
<div class="hatnote" markdown=1>
See also: [Custom Variables](variables)
</div>

If the operation starts with `$`, it is a variable. The value of the variable with the given name is pushed onto the stack. This variable either comes from a default variable, or if supported in the context a custom variable defined in the JSON.
Note all variables are resolved before the formula runs, so there is no performance loss using a variable multiple times.

All formulas have a number of default variables that are included, even formulas that do not include custom variables in `"variables"`. Common defaults include:

* `level`: Level of the modifier. Resolves as a float, supporting incremental scaling like used by haste.
* `value`: Result before this modifier applies. The formula is required to add or multiply its value as appropiate. Name of this variable may vary to be more context specific (e.g. conditional melee damage calls it `damage`).
* `base_value`: Original value before any modifiers ran. Like `value`, the name of this variable may vary to be more context specific (e.g. conditional melee calls it `base_damage`).
* `multiplier`: Multiplier to apply to additive boosts. May be a mixture of tool multipliers and multipliers from other sources (e.g. conditional mining speed includes the underwater penalty here).

### Binary Operators

These operations remove the top two values and apply a binary operation to them, pushing the result onto the stack. In the descriptions below, the previous top is called `right`, and the second to top is called `left`:

* `+` - addition: produces `left + right`.
* `-` - subtraction: produces `left - right`.
* `!-` - flipped sbtraction: produces `right - left`.
* `*` - multiplication: produces `left * right`.
* `/` - division: if `right` is 0, produces 0, otherwise produces `left / right`. 
* `!/` - flipped division: if `left` is 0, produces 0, otherwise produces `right / left`. 
* `^` - power: produces `left ^ right`. 
* `!^` - flipped power:  produces `right ^ left`.
* `min`: produces `min(left, right)`.
* `max`: produces `max(left, right)`.

### Unary Operators

These operators remove the top value from the stack, perform an operation, and push the result onto the stack. In the descriptions below, the previous top is called `top`:

* `negate`: produces `-top`.
* `sqrt` - square root (since 1.20): produces `square_root(top)`, sometimes written as `top^(1/2)`.
* `abs` - absolute value: if `top` is negative, produces `-top`, otherwise produces `top`. In other words, it removes the sign, making it positive.
* `non-negative`: if `top` is negative, produces 0, otherwise produces `top`. Effectively shorthand for `0, "max"`
* `floor`: produces `top` rounded down to the nearest integer. For example, if `top` is 1.8, produces 1.
* `ceil`: produces `top` rounded up to the nearest integer. For example, if `top` is 1.3, produces 2.
* `percent_clamp`: shorthand for `0, "max", 1, "min"`. Ensures the value is a percentage between 0 and 1:
  * If `top` is less than 0, produces 0.
  * If `top` is greater than 1, produces 1
  * Otherwise produces `top`.

### Logical Operators
<div class="hatnote">Since 1.20</div>

Logical operators remove the top two values and apply a logical operation to them, pushing 1 onto the stack if true and 0 if false. In the descriptions below, the previous top is called `right`, and the second to top is called `left`:

* `==` - equals: produces `left == right`.
* `!=` - not equals: produces `left != right`.
* `<` - less than: produces `left < right`.
* `<=` - less than or equal to: produces `left <= right`.
* `>` - greater than: produces `left > right`.
* `>=` - greater than or equal to: produces `left >= right`.
* `~~` - approximately equal: produces `left - right < 0.00001`. Useful when working with decimals to avoid floating point imprecision.
* `!~` - approximately not equal: produces `left - right >= 0.00001`. Useful when working with decimals to avoid floating point imprecision.

### Stack Operations

These operations directly work with the stack in ways that are hard to express in standard math notation.

* `swap`: Swaps the top two elements of the stack. Effectively flips an upcoming binary operation, or stores a computed value for later use.
* `duplicate`: Duplicates the top element of the stack. Useful to avoid repeated calculations in a formula.