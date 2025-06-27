import type {
  ColorValue,
  DimensionValue,
  FlexAlignType,
  FlexStyle,
  ViewProps,
  AnimatableNumericValue,
} from "react-native";

export interface IStack extends ViewProps {
  gap?: number | string;
  flexDirection?: FlexStyle["flexDirection"];
  flexWrap?: FlexStyle["flexWrap"];
  flex?: FlexStyle["flex"];
  flexGrow?: FlexStyle["flexGrow"];
  backgroundColor?: ColorValue;
  alignItems?: FlexAlignType;
  justifyContent?: FlexStyle["justifyContent"];
  alignSelf?: FlexStyle["alignSelf"];
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
  borderRadius?: AnimatableNumericValue | string;
  overflow?: "visible" | "hidden";
  rowGap?: number | string;
  rowLayout?: boolean;
  centered?: boolean;
  wfull?: boolean;
  rounded?: boolean;
  position?: FlexStyle["position"];
  width?: DimensionValue;
  height?: DimensionValue;
  borderWidth?: number;
  borderColor?: ColorValue;
}
