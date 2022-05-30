import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const RegisterContainerMain = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.background_main};
    justify-content:space-between;
`;
export const ImageBackground =  styled.ImageBackground`
    height:40%;
`;
export const Title = styled.Text`
    font-family:${({theme}) => theme.fonts.poppins_medium};
    font-size:${RFPercentage(4.5)}px;
    color:${({theme}) =>  theme.colors.black_80};
`;
export const ContainerTitle = styled.View`
    padding-top:${RFPercentage(6)}px;
`;
export const ContainterInputs = styled.View`
    padding-bottom:${RFPercentage(5)}px;
`;

export const ContainerButton = styled.View`
    width:70%;
    align-self:center;
    padding-bottom:${RFPercentage(5)}px;
`;

export const AjustHorizontalItens = styled.View`
    padding-left:${RFPercentage(3)}px;
    padding-right:${RFPercentage(3)}px;
`;