# Contributing

Here's how to add a new typeface to this project:

1. Download the font files from Google Fonts or the source repo if available.
    - You at least need the .ttf files.
    - Variable fonts should also include some "static" files.
1. Install the font on your machine.
1. Use the Sketch template to measure the height of the capital `N` in pixels.
    - Note the version of Sketch and your operating system used measure the cap-height.
1. Use [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts) to generate the `.woff` and `.woff2` web font files.
    - Generate all available weights since unneeded ones can be disabled with the theme settings.
1. Rename the `.woff` and `.woff2` files according to the Google Fonts naming convention: `FontName-FontWeight.xxx` (Title case with no spaces and name and weight separated by a hyphen).
    - You can discard the other file formats.
1. Create a settings file using this naming format: `_typeface-font-name.scss`
1. Set the following theme tokens:
    - $theme-typeface-tokens
    - $theme-font-type-XXX
    - $theme-font-role-XXX
    - $theme-font-XXX-custom-src
    - $theme-font-XXX-custom-stack
    - $theme-generate-all-weights (or individual weights if there is a limited set available)
    - Optionally include $theme-body-font-XXX settings to make it easier to preview.
1. Create a new pull request with the name of the font that includes the following:
    - settings file
    - font files (ttf, woff, woff2)
1. Add a comment to the PR with the Sketch file used to measure the cap-height measurement, along with the Sketch and OS version numbers.
    - This is just for verification that we have the right pixel settting; the file doesn't need to be added to the repo.
    