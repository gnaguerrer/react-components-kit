import React from "react";
import { Text, StyleSheet } from "react-native";
import { ITypography } from "./types";
import { FONT_SIZES, FONT_WEIGHTS } from "./theme";

export const Typography = (props: ITypography) => {
  const {
    size = "md",
    weight = "regular",
    style,
    children,
    color,
    align = "left",
    lineHeight,
    underline = false,
    paddingBottom,
    paddingTop,
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingLeft,
    paddingRight,
    margin,
    marginHorizontal,
    marginVertical,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    ...rest
  } = props;

  const fontWeight = FONT_WEIGHTS[weight];

  const fontSize = FONT_SIZES[size];

  const mixedStyles = StyleSheet.flatten([
    {
      fontSize,
      color: color ?? "#FFFFFF",
      fontWeight,
      textAlign: align,
      lineHeight,
      textDecorationLine: underline ? "underline" : "none",
      paddingBottom,
      paddingTop,
      padding,
      paddingHorizontal,
      paddingVertical,
      paddingLeft,
      paddingRight,
      margin,
      marginHorizontal,
      marginVertical,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      includeFontPadding: false,
    },
    style,
  ]);

  return (
    <Text {...rest} style={mixedStyles}>
      {children}
    </Text>
  );
};
