---
layout: page
title: Basic Types
redirect_from:
  - /docs/json/resource-location/
---

## Resource Location

String representing the registry name of an object in the game. Format is always `<domain>:<name>`, where `<domain>` typically represents a mod or datapack ID, and `<name>` is the specific name for this object. Valid characters are any lowercase letter, any number, `-`, `_`, and `/`. A single `:` is allowed between the domain and name.

Note that when creating new content, it is always advised to use a custom domain for your content over that of an existing mod such as `tconstruct` to minimize potential for conflict and to properly show the user the source of the content.

### Registry IDs

A common application of resource locations is an ID of a value in a registry. Unlike regular resource locations, registry IDs are often validated against the registry contents to ensure a matching ID exists.

## Color

Many JSON contain colors expressed as 6 or 8 digit hex color strings. 6 digit RGB strings use the format of `"RRGGBB"`, while 8 digit ARGB strings use the format of `"AARRGGBB"`. `AA`, `RR`, `GG`, and `BB` are hex numbers between 0 (`00`) and 255 (`FF`) representing the intensity of the color in (case insensitive) hexadecimal, with higher values meaning more of that color is present. On ARGB strings, if only 6 digits are provided then `AA` is set to 255.

For example, `"FF00000"` represents a bright red, as `RR` is 255 and both `GG` and `BB` are 0. If this was an ARGB color, then `AA` would be set to 255 (fully opaque).