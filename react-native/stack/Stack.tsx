import React from "react";
import { View, StyleSheet } from "react-native";
import { IStack } from "./types";

export const Stack = (props: IStack) => {
  const {
    gap,
    flexDirection,
    flexWrap,
    flex,
    flexGrow,
    backgroundColor,
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
    marginLeft,
    marginRight,
    borderRadius,
    overflow,
    rowGap,
    rowLayout,
    centered,
    wfull,
    children,
    style,
    rounded,
    position,
    width,
    height,
    borderWidth,
    borderColor,
    ...rest
  } = props;
  const mixedStyles = StyleSheet.flatten([
    {
      gap,
      flexDirection,
      flexWrap,
      flex,
      flexGrow,
      backgroundColor,
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
      marginLeft,
      marginRight,
      overflow,
      borderRadius,
      rowGap,
      position,
      width,
      height,
      borderWidth,
      borderColor,
    },
    rowLayout && {
      flexDirection: "row",
      alignItems: "center",
    },
    centered && {
      alignItems: "center",
      justifyContent: "center",
    },
    wfull && {
      width: "100%",
    },
    rounded && {
      borderRadius: 9999,
    },
    style,
  ]);

  return (
    <View style={mixedStyles} {...rest}>
      {children}
    </View>
  );
};
