import { TextProps, TextStyle, DimensionValue } from "react-native";

export interface ITypography extends TextProps {
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "semibold" | "bold" | "light" | "extralight";
  style?: TextStyle;
  children: React.ReactNode;
  color?: string;
  align?: "left" | "center" | "right";
  lineHeight?: number;
  underline?: boolean;
  padding?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingBottom?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  margin?: DimensionValue;
  marginHorizontal?: DimensionValue;
  marginVertical?: DimensionValue;
  marginBottom?: DimensionValue;
  marginTop?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
}
