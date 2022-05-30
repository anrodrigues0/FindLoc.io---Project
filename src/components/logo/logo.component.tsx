import React from 'react';
import {LogoText,LogoTextYellow,ContainerLogo} from './logo.component.style';

interface Props {
    small?:boolean
}

export const LogoComponent: React.FC<Props> = ({children,...rest}) => (
    <ContainerLogo>
        <LogoText {...rest}>FindLoc</LogoText>
        <LogoTextYellow {...rest}>.io</LogoTextYellow>
    </ContainerLogo>     
)

