import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button,TitleText } from './button-common.component.styled';

interface IProps extends TouchableOpacityProps {
    title:string;
    clean?:boolean;
    color?:string;
}

export const ButtonCommon: React.FC<IProps> = ({title, ...rest}) => (
    <Button  {...rest}>
        <TitleText {...rest} >{title}</TitleText>
    </Button>
)
