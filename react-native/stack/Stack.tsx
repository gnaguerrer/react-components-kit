import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { IStack } from "./types";

export const Stack = (props: IStack) => {
  const {
    spacing,
    direction,
    flexWrap,
    flex,
    flexGrow,
    background,
    alignItems,
    justifyContent,
    paddingHorizontal,
    paddingVertical,
    paddingBottom,
    paddingTop,
    overflow,
    rowLayout,
    wfull,
    children,
    style,
    ...rest
  } = props;
  const mixedStyles = StyleSheet.flatten([
    style,
    {
      gap: spacing,
      flexDirection: direction,
      flexWrap,
      flex,
      flexGrow,
      backgroundColor: background,
      alignItems,
      justifyContent,
      paddingHorizontal,
      paddingVertical,
      paddingBottom,
      paddingTop,
      overflow,
    },
    rowLayout && { flexDirection: "row", alignItems: "center" },
    wfull && {
      width: "100%",
    },
  ]);

  return (
    <View style={mixedStyles} {...rest}>
      {children}
    </View>
  );
};
