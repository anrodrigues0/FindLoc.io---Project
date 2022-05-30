import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export enum JustifyContent {
    CENTER = 'center',
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    SPACE_AROUND = 'space-around',
    SPACE_BETWEEN = 'space-between',
    SPACE_EVENLY = 'space-evenly'
  }
  
  export enum AlignItems {
    BASELINE = 'baseline',
    CENTER = 'center',
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    STRETCH = 'stretch'
  }
  
  interface IBoxProps {
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
  }
  
  type ICBoxProps = IBoxProps
  export const CenterBox = styled.View<ICBoxProps>`
    align-items: ${({ alignItems }) => alignItems ?? AlignItems.CENTER};
    justify-content: ${({ justifyContent }) => justifyContent ?? JustifyContent.FLEX_START};
  `;
  
  type IVSeparatorProps = {large?: boolean;}
  export const VSeparator = styled.View<IVSeparatorProps>`
    height: ${({ large }) => (large ? RFValue(24) : RFValue(12))}px;
  `;

  