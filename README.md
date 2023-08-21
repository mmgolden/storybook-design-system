# Storybook Design System

## Install

`npm install @mmgolden/storybook-design-system`

## Usage

```
// MyComponent.vue
import { Button } from '@mmgolden/storybook-design-system'
```

To override Sass variables, replace the default variables with your variables:

```
// assets/scss/main.scss
@use "@mmgolden/storybook-design-system/dist/components/button/Button.scss" with (
  $color-background-primary: $green,
  $color-background-primary-hovered: $dark-green
);
```
