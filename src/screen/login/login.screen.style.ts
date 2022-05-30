import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const LoginScreenContainerMain = styled.View`
    justify-content:space-between;
    flex:1;
    background-color:${({theme}) => theme.colors.background_main};
`;

export const ImageBackground = styled.ImageBackground`
   height:40%;
`;

export const ContainerContent = styled.View`
    background-color:${({theme}) => theme.colors.background_secondary};
    width:100%;
    height:100%;
    padding-top:${RFPercentage(4)}px;
    padding-bottom:${RFPercentage(3)}px;
    border-radius:${RFPercentage(3)}px;

`;

export const TitleLogin = styled.Text`
    font-family:${({theme}) => theme.fonts.poppins_medium};
    font-size:${RFPercentage(5.3)}px;
    color:${({theme}) => theme.colors.black_80};
`;
export const SubtitleLogin = styled.Text`
    font-family:${({theme}) => theme.fonts.poppins_regular};
    font-size:${RFPercentage(2.2)}px;
    color:${({theme}) => theme.colors.black_80};
`

export const ContainerButton = styled.View`
    width:70%;
    align-self:center; 
    padding-top:${RFPercentage(2)}px;
    padding-bottom:${RFPercentage(2)}px;
`;

export const AlignHoriozntalItens = styled.View`
    padding-left:${RFPercentage(3)}px;
    padding-right:${RFPercentage(3)}px;
`;

export const ContainerTitleSubtitle = styled.View`
    padding-bottom:${RFPercentage(1)}px;
    padding-top:${RFPercentage(3)}px;
`;

export const Devider = styled.View`
    background-color:${({theme}) => theme.colors.gray_100};
    height:${RFPercentage(0.2)}px;
`;

export const ButtonsIconsContainer = styled.View`
    padding-top:${RFPercentage(2.5)}px;
`;  

export const SpacingBetweenButtons = styled.View`
    margin-bottom:${RFPercentage(2)}px;
`;