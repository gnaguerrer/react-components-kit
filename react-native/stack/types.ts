import type {
  ColorValue,
  DimensionValue,
  FlexAlignType,
  FlexStyle,
  ViewProps,
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
  paddingHorizontal?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingBottom?: DimensionValue;
  paddingTop?: DimensionValue;
  overflow?: "visible" | "hidden";
  rowLayout?: boolean;
  wfull?: boolean;
}
