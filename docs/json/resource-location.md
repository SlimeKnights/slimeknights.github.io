---
layout: page
title: Resource Locations
---

String representing the registry name of an object in the game. Format is always `<domain>:<name>`, where `<domain>` typically represents a mod or datapack ID, and `<name>` is the specific name for this object. Valid characters are any lowercase letter, any number, `-`, `_`, and `/`. A single `:` is allowed between the domain and name.

Note that when creating new content, it is always advised to use a custom domain for your content over that of an existing mod such as `tconstruct` to minimize potential for conflict and to properly show the user the source of the content.

### Registry IDs

A common application of resource locations is an ID of a value in a registry. Unlike regular resource locations, registry IDs are often validated against the registry contents to ensure a matching ID exists.