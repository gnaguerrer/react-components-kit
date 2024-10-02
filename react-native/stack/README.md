# Stack Component

The `Stack` component is a flexible container for arranging child components in a row or column with customizable spacing, alignment, and padding. It's designed for use in **React Native** projects.

## Usage

Here's an example of how to use the `Stack` component:

```tsx
import React from "react";
import { Text } from "react-native";
import { Stack } from "./path-to-your-stack-component";

const MyComponent = () => {
  return (
    <Stack
      direction="row"
      spacing={10}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal={15}
      paddingVertical={10}
      background="#f0f0f0"
    >
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
      <Stack
        direction="column"
        spacing={20}
        alignItems="center"
        justifyContent="center"
      >
        <Text>First Item</Text>
        <Text>Second Item</Text>
      </Stack>
    </Stack>
  );
};
```

## Props

The `Stack` component accepts the following props:

| Prop                | Type        | Description                                                                                      |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `spacing`           | `number`    | Gap between child components.                                                                    |
| `direction`         | `string`    | Layout direction (`'row'`, `'column'`, etc.).                                                    |
| `flexWrap`          | `boolean`   | Wrap children to the next line if needed.                                                        |
| `flex`              | `number`    | Flex property to control how the stack should grow or shrink.                                    |
| `flexGrow`          | `number`    | Determines how much the stack should grow relative to its parent.                                |
| `background`        | `string`    | Background color of the stack.                                                                   |
| `alignItems`        | `string`    | Alignment of children along the cross-axis (`'flex-start'`, `'center'`, `'flex-end'`, etc.).     |
| `justifyContent`    | `string`    | Alignment of children along the main axis (`'flex-start'`, `'center'`, `'space-between'`, etc.). |
| `paddingHorizontal` | `number`    | Horizontal padding for the stack.                                                                |
| `paddingVertical`   | `number`    | Vertical padding for the stack.                                                                  |
| `paddingTop`        | `number`    | Top padding for the stack.                                                                       |
| `paddingBottom`     | `number`    | Bottom padding for the stack.                                                                    |
| `overflow`          | `string`    | Determines the overflow behavior of the stack.                                                   |
| `rowLayout`         | `boolean`   | If `true`, aligns children in a row and centers them vertically (`alignItems: 'center'`).        |
| `wfull`             | `boolean`   | Boolean to make the stack take up full width.                                                    |
| `style`             | `ViewStyle` | Custom styles passed to the `View` component.                                                    |
| `children`          | `ReactNode` | Elements to be displayed inside the stack.                                                       |
