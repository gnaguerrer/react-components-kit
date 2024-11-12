import React from "react";
import { View, StyleSheet } from "react-native";
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
    alignSelf,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingBottom,
    paddingTop,
    paddingLeft,
    paddingRight,
    margin,
    marginHorizontal,
    marginVertical,
    marginBottom,
    marginTop,
    borderRadius,
    overflow,
    rowLayout,
    centered,
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
      alignSelf,
      padding,
      paddingHorizontal,
      paddingVertical,
      paddingBottom,
      paddingTop,
      paddingLeft,
      paddingRight,
      margin,
      marginHorizontal,
      marginVertical,
      marginBottom,
      marginTop,
      overflow,
      borderRadius,
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
