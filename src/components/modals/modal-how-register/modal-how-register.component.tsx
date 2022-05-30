import React from 'react';
import { Modalize } from 'react-native-modalize';
import { IHandles } from 'react-native-modalize/lib/options';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useUtils } from '../../../providers/utils-app.providers';
import { ButtonImageOrIcon } from '../../buttons/button-with-icon-or-image/button-with-icon-or-image.component';
import { ModalHowRegisterComponent,TitleModal,ContainerButtons,SpacingBetweenButton } from './modal-how-register.component.style';
interface IProps {
    modalizeRef: React.RefObject<IHandles>
}

const MODAL_HEIGHT = Dimensions.get('window').height / 1.5

export const ModalHowRegister: React.FC<IProps> = ({modalizeRef}) =>  {    
    const {colors} = useTheme();
    const {CommonString} = useUtils();
    const {navigate} =  useNavigation();
    const handleRegisterUser = () => navigate('Register' as never)
    
    return (
        <Modalize
            snapPoint={MODAL_HEIGHT}
            modalHeight={MODAL_HEIGHT} 
            ref={modalizeRef}
            modalStyle={{backgroundColor:colors.background_secondary}}
            >
            
          <ModalHowRegisterComponent>
                <TitleModal>{`Cadastrar-se\ncom`}</TitleModal>
                <ContainerButtons>
                    <SpacingBetweenButton>
                        <ButtonImageOrIcon title={CommonString.buttons.withGoogle} logo typeLogo='google'/>
                    </SpacingBetweenButton>
                    <SpacingBetweenButton>
                        <ButtonImageOrIcon title={CommonString.buttons.withGithub} logo />
                    </SpacingBetweenButton>
                    <SpacingBetweenButton>
                        <ButtonImageOrIcon title={CommonString.buttons.register} onPress={handleRegisterUser} />
                    </SpacingBetweenButton>
                </ContainerButtons>
          </ModalHowRegisterComponent>
        </Modalize>
    )
}

