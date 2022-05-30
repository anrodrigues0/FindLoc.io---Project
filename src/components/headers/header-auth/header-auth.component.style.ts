import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather';
import { RFPercentage } from "react-native-responsive-fontsize";

export const HeaderAuthContainerMain = styled.View`
    width:100%;
    flex-direction:row;
    margin-top:${RFPercentage(6.5)}px;
    justify-content:space-between;
    align-items:center;
`;

export const IconReturn =  styled(Icon)`
    font-size:${RFPercentage(4.5)}px;
    color:${({theme}) => theme.colors.yellow_100};
`;