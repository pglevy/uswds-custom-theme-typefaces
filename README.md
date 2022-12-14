# USWDS Custom Theme Typefaces

The purpose of this project is to provide theme settings and related files to make it easier to incorporate some of the best [Google Fonts](https://fonts.google.com/) typefaces into your [U.S. Web Design System](https://designsystem.digital.gov/) sites and expand the typographic diversity of the gov site ecosystem

## Check it out

1. [Open uswds-custom-theme-typefaces in Gitpod](https://gitpod.io/#https://github.com/pglevy/uswds-custom-theme-typefaces) to run the project.

1. Uncomment one of these @forward statements in `assets/uswds/dist/theme/styles.scss` and refresh the preview site to see the site with that typeface.

```
// @forward "typeface-libre-baskerville";
// @forward "typeface-lora";
// @forward "typeface-poppins";
@forward "uswds";
@forward "uswds-theme-custom-styles";
```

You can also view the type specimen page, which is currently the [homepage for the compiled site](https://pglevy.github.io/uswds-custom-theme-typefaces/) hosted here on GitHub Pages.

## How to add to your project

### 1. Copy settings tokens

If you're already using theme settings (in a `_uswds-theme.scss` file, for example), copy the token settings content from one of the typeface files (for example: `assets/uswds/dist/theme/_typeface-lora.scss`). Be sure to leave out the `@use "uswds-core" with` because it's already in your theme file.

If you're not using other theme settings, you can alternatively add one of these @forward statements to your `styles.scss` file (or whatever your main sass file is).

```
// @forward "typeface-libre-baskerville";
// @forward "typeface-lora";
// @forward "typeface-poppins";
@forward "uswds-theme";
@forward "uswds";
@forward "uswds-theme-custom-styles";
```

### 2. Copy font files

Copy the files for the typefaces you want to use from `assets/uswds/dist/fonts/custom`. If you put them in a different place in your project, update the `dir` setting in the `$theme-font-serif-custom-src` token.

## Typefaces

Included:

- Bitter
- Inter
- Lato
- Libre Baskerville
- Lora
- Noto Sans
- Noto Serif
- Playfair Display
- Poppins
- Work Sans

## Helpful Tools

- [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts)
- [System Font Stack](https://systemfontstack.com/)
- [FontDrop!](https://fontdrop.info/)
- [otf2ttf](https://github.com/awesometoolbox/otf2ttf)
