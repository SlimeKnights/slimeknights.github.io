#!/bin/bash

compress() {
  tmpfile=$(mktemp --suffix=.png)
  magick "$1" -colors 256 PNG8:"$tmpfile"
  mv "$tmpfile" "$1"
}

shopt -s globstar
for img in **/*.png; do
  colors=$(magick "$img" -format %k info:)
  if magick identify -verbose "$img" | grep -q "Class: DirectClass" && [ "$colors" -lt 256 ]; then
    printf "Compressing: %s (%d colors)\n" "$img" "$colors"
    compress "$img" &
  fi
done

