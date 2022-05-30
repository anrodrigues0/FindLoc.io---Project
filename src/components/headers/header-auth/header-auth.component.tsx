import React from 'react';
import {LogoComponent} from '../../logo/logo.component';
import { TouchableOpacity,TouchableOpacityProps } from 'react-native';
import {HeaderAuthContainerMain , IconReturn} from './header-auth.component.style';

interface IProps extends TouchableOpacityProps {};

export const HeaderAuth: React.FC<IProps> = ({children, ...rest}) => {
  return (
    <HeaderAuthContainerMain>
        <TouchableOpacity {...rest}>
            <IconReturn name='arrow-left'/>
        </TouchableOpacity>
        <LogoComponent small/>
    </HeaderAuthContainerMain>
  )
}
