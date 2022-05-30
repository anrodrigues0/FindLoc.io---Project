import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather';
import { ThemedStyledProps } from "styled-components";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RefAttributes } from "react";


interface IPropsStyle extends ThemedStyledProps<TouchableOpacityProps & RefAttributes<TouchableOpacity>, DefaultTheme> {
    logo?:boolean
}

export const Button = styled.TouchableOpacity`
    background-color:${(props:IPropsStyle) => props.logo ? props.theme.colors.background_main : props.theme.colors.yellow_100};
    border-radius:${RFPercentage(2.5)}px;
    padding:${RFPercentage(2)}px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const TitleButton = styled.Text`
    font-family:${({theme}) => theme.fonts.poppins_medium};
    font-size:${() => RFPercentage(2.5)}px
    margin-top:${() => RFPercentage(0.5)}px;
    color:${(props:IPropsStyle) => props.logo ? props.theme.colors.black_80 : props.theme.colors.background_main};
`;

export const IconComponent = styled(Icon)`
    font-size:${RFPercentage(4)}px;
    margin-top:${() => RFPercentage(0.5)}px;
    color:${(props:IPropsStyle) => props.logo ? props.theme.colors.yellow_100 : props.theme.colors.background_main};
`; 

export const ImageIcon =  styled.Image`
    margin-right:${RFPercentage(2)}px;
`;

export const AlignTitleWithImageIcon = styled.View`
    flex-direction:row;
    align-items:center;
`;