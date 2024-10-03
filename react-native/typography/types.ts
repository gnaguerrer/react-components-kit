import { TextProps, TextStyle } from "react-native";

export interface ITypography extends TextProps {
  size?: "sm" | "md" | "lg";
  weight?: "regular" | "semibold" | "bold" | "light" | "extralight";
  style?: TextStyle;
  children: React.ReactNode;
  color?: string;
  paddingBottom?: number;
  paddingTop?: number;
  align?: "left" | "center" | "right";
  lineHeight?: number;
  underline?: boolean;
}
