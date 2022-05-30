import { RefAttributes } from "react";
import { ViewProps, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Feather';
import { ThemedStyledProps } from "styled-components";
import styled, { DefaultTheme } from "styled-components/native";

import { Text } from 'react-native-animatable';

interface IPropsStyle extends ThemedStyledProps<ViewProps & RefAttributes<View>, DefaultTheme> {
    greyColor?:boolean
}

export const ComponentContainer =  styled.View`
    /* border:1px solid red; */
`;

export const ErrorMessage = styled(Text)`
    color:${({theme}) => theme.colors.error};
    letter-spacing:1px;
    font-family:${({theme}) =>  theme.fonts.poppins_regular};
`;

export const ContainerTextError =  styled.View`
    margin-bottom:${RFPercentage(1.5)}px;
`;

export const InputContainer = styled.View`
    width:100%;
    border-radius:${RFPercentage(1)}px;
    background-color:${(props:IPropsStyle) => props.greyColor ?  props.theme.colors.white_90 : props.theme.colors.background_main};
    flex-direction:row;
    align-items:center;
    padding:${RFPercentage(2)}PX;
    justify-content:space-between;
`
export const Input =  styled.TextInput`
    font-size:${RFPercentage(3)}px;
    width:80%;
    margin-left:${RFPercentage(2)}PX;
    color:${({theme}) => theme.colors.black_90};
`;

export const ContainerAdjunt = styled.View`
    flex-direction:row;
    align-items:center;
`;

export const IconComponent = styled(Icon)`
    font-size:${RFPercentage(3)}px;
    color:${({theme}) => theme.colors.black_90};
`;