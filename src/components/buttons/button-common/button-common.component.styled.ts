import styled, { DefaultTheme,css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedStyledProps } from "styled-components";


interface IPropsStyle extends ThemedStyledProps<TouchableOpacityProps & React.RefAttributes<TouchableOpacity>, DefaultTheme> {
    clean?:boolean
    color?:string
}

const selectedColorButton = (props:IPropsStyle) => {
    if(props.clean){
        return 'rgba(255, 255, 255, 0)'
    }

    if(props.color){
        return props.color;
    }

    return props.theme.colors.black_100
}

export const Button = styled.TouchableOpacity`
    background-color:${selectedColorButton};
    width:100%;
    padding:${RFPercentage(1.5)}px;
    align-items:center;
    border-radius:${RFPercentage(2.5)}px;

`;

export const TitleText = styled.Text`
    color:${(props:IPropsStyle) => props.clean ? props.color || props.theme.colors.yellow_100 :props.theme.colors.white_100};
    font-size:${RFPercentage(3)}px;
    font-family:${({theme}) => theme.fonts.poppins_regular};
`;