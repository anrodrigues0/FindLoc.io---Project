import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useUtils } from '../../../providers/utils-app.providers';
import { Button, TitleButton, IconComponent,ImageIcon, AlignTitleWithImageIcon } from './button-with-icon-or-image.component.style';


interface IProps extends TouchableOpacityProps {
    title: string
    logo?: boolean,
    typeLogo?: 'google' | 'github'
};

export const ButtonImageOrIcon: React.FC<IProps> = ({ title,typeLogo, ...rest }) => {
    const {useAssets} = useUtils();
    return (
        <>
            <Button {...rest}>
                <AlignTitleWithImageIcon>
                    {rest.logo ? 
                        typeLogo === 'google' ? 
                        <>
                                <ImageIcon source={useAssets.icon.IconGoogle} />
                            </>
                            :
                            <>
                                <ImageIcon source={useAssets.icon.IconGithub} />
                            </>
                        : 
                        false
                    }
                <TitleButton  {...rest}>{title}</TitleButton>
                </AlignTitleWithImageIcon>
                <IconComponent
                    {...rest}
                    name='arrow-right'
                />
            </Button>
        </>
    )
}