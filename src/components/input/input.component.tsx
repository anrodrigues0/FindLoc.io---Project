import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { 
    Input,
    InputContainer, 
    IconComponent, 
    ContainerAdjunt, 
    ComponentContainer,
    ErrorMessage,
    ContainerTextError
} from './input.component.style';

interface IProps extends TextInputProps {
    nameIcon?: string
    passwordType?: boolean,
    greyColor?: boolean;
    errorMessage?:string;
    hasError?:boolean
}

export const InputComponent: React.FC<IProps> = ({ nameIcon, hasError ,greyColor,errorMessage, passwordType, ...rest }) => {
    const [visible, setVisible] = useState(true);
    const handleSetVisible = () => setVisible(!visible)
    return (
        <ComponentContainer>
            <InputContainer greyColor={greyColor} >
                {!passwordType ?
                    <ContainerAdjunt>
                        <IconComponent name={nameIcon || ''} />
                        <Input {...rest} />
                    </ContainerAdjunt>
                    :
                    <>
                        <ContainerAdjunt>
                            <IconComponent name={'lock'} />
                            <Input {...rest} secureTextEntry={visible} />
                        </ContainerAdjunt>
                        <TouchableOpacity onPress={handleSetVisible}>
                            <IconComponent name={!visible ? 'eye-off' : 'eye'} />
                        </TouchableOpacity>
                    </>
                }

            </InputContainer>
            <ContainerTextError>
             <ErrorMessage animation={hasError ? 'shake' : ''}>
                {hasError ? errorMessage: ''}
             </ErrorMessage>
            </ContainerTextError>
        </ComponentContainer>
    )

}

