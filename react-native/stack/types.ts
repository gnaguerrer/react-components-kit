import type {
  ColorValue,
  DimensionValue,
  FlexAlignType,
  FlexStyle,
  ViewProps,
  AnimatableNumericValue,
} from "react-native";

export interface IStack extends ViewProps {
  spacing?: Number | string;
  direction?: FlexStyle["flexDirection"];
  flexWrap?: FlexStyle["flexWrap"];
  flex?: FlexStyle["flex"];
  flexGrow?: FlexStyle["flexGrow"];
  background?: ColorValue;
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
  borderRadius?: AnimatableNumericValue | string;
  overflow?: "visible" | "hidden";
  rowLayout?: boolean;
  centered?: boolean;
  wfull?: boolean;
}
