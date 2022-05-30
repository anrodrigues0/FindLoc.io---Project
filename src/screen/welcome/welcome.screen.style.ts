import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';


export const WelcomeContainerMain = styled.View`
    background-color:${({theme}) =>  theme.colors.background_main};
    align-items:center;
    flex:1;
`
export const ImageBackground = styled.Image`
    width:100%;
    height:50%;
`;

export const WelcomeText = styled(Animatable.Text)`
    color:${({theme}) => theme.colors.yellow_100};
    font-family:${({theme}) => theme.fonts.poppins_medium};
    font-size:${RFPercentage(3.5)}px;
`;

export const WelcomeContainerButton = styled.View`
    width:100%;
    padding-left:${RFPercentage(10)}px;
    padding-right:${RFPercentage(10)}px;
    background-color:${({theme}) =>  theme.colors.background_main};
`;
