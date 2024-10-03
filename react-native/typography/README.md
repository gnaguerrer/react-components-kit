# Typography Component

The `Typography` component is a customizable text component for **React Native** that allows you to easily apply various styles, sizes, weights, and alignments to your text. It simplifies the management of text styles across your application.

## Usage

Here's an example of how to use the `Typography` component:

```tsx
import React from "react";
import { View } from "react-native";
import { Typography } from "./path-to-your-component";

const MyComponent = () => {
  return (
    <View>
      <Typography size="lg" weight="bold" color="#000000" align="center">
        Hello, World!
      </Typography>
      <Typography size="md" weight="regular" color="#888888" underline>
        This is an example of the Typography component.
      </Typography>
    </View>
  );
};
```

## Props

The `Typography` component accepts the following props:

| Prop            | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| `size`          | Determines the font size of the text. Default is `"md"`.    |
| `weight`        | Sets the font weight. Default is `"regular"`.               |
| `style`         | Custom styles passed to the `Text` component.               |
| `children`      | The text content to be displayed.                           |
| `color`         | Text color. Default is `"#FFFFFF"` if not specified.        |
| `paddingBottom` | Bottom padding for the text.                                |
| `paddingTop`    | Top padding for the text.                                   |
| `align`         | Text alignment. Default is `"left"`.                        |
| `lineHeight`    | Specifies the line height for the text.                     |
| `underline`     | If `true`, the text will be underlined. Default is `false`. |

## Theme

The component uses predefined font sizes and weights from the `FONT_SIZES` and `FONT_WEIGHTS` constants, which can be customized in the `theme` file.
