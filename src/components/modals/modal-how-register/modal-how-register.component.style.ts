
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ModalHowRegisterComponent = styled.View`
    background-color:${({theme}) => theme.colors.background_secondary};
    border-radius:${RFPercentage(5)}px;
    padding:${RFPercentage(3)}px;
    padding-top:${RFPercentage(6)}px;
    padding-left:${RFPercentage(3)}px;
`;

export const TitleModal = styled.Text`
    color:${({theme}) =>  theme.colors.white_90};
    font-size:${() => RFPercentage(4)}px;
    font-family:${({theme}) => theme.fonts.poppins_medium};
`;

export const ContainerButtons = styled.View`
    margin-top:${RFPercentage(8)}px;
    justify-content:flex-end;
`;
export const SpacingBetweenButton = styled.View`
    margin-bottom:${RFPercentage(3)}px;
`;