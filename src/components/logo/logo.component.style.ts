import styled, { DefaultTheme } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { RefAttributes } from "react";
import { TextProps } from "react-native";
import { ThemedStyledProps } from "styled-components";

interface IPropsStyle extends ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme> {
    small?:boolean
}

export const LogoText = styled.Text`
    font-size:${(props:IPropsStyle) => props.small ? RFPercentage(3.5) : RFPercentage(9)}px;
    font-family:${({theme}) => theme.fonts.poppins_medium};
    color:${({theme}) => theme.colors.black_90};
`;

export const LogoTextYellow = styled.Text`
    font-size:${(props:IPropsStyle) => props.small ? RFPercentage(3.5) : RFPercentage(9)}px;
    font-family:${({theme}) => theme.fonts.poppins_medium};
    color:${({theme}) => theme.colors.yellow_100};
`;

export const ContainerLogo =  styled.View`
    flex-direction:row;
`;