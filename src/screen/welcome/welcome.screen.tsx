import React,{useRef} from 'react';
import { ScrollViewAppComponent } from '../../components/scrollview-app/scrollview-app.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { useUtils } from '../../providers/utils-app.providers';
import { useNavigation } from '@react-navigation/native';
import { ButtonCommon } from '../../components/buttons/button-common/button-common.component';
import * as Animatable from 'react-native-animatable';
import { Modalize } from 'react-native-modalize';
import { ModalHowRegister } from '../../components/modals/modal-how-register/modal-how-register.component'
import { UserApi } from '../../api/users/users.api';
import { 
  WelcomeContainerMain, 
  ImageBackground,WelcomeText,
  WelcomeContainerButton
} from './welcome.screen.style';
export const WelcomeScreen: React.FC = () => {

  const modalizeRef = useRef<Modalize>(null);
  const {CommonString, useAssets,grid} = useUtils();
  const {navigate} = useNavigation();
  const onOpen = () => modalizeRef.current?.open();
  const goLoginScreen = () => navigate('Login' as never)
  
  return (
    <ScrollViewAppComponent>
      <WelcomeContainerMain>
        <ImageBackground source={useAssets.image.MapImage}/>
          <LogoComponent />
          <WelcomeText animation={'slideInUp'}>
            {CommonString.welcome}
          </WelcomeText>
      </WelcomeContainerMain>
      <WelcomeContainerButton>
        <Animatable.View animation={'flipInY'} duration={1500} >
          <ButtonCommon
            onPress={goLoginScreen} 
            title={CommonString.buttons.login}
          />
          <grid.VSeparator/>
          <ButtonCommon 
            clean
            title={CommonString.buttons.register}
            onPress={onOpen}
          />
           <grid.VSeparator/>
           <grid.VSeparator/>
        </Animatable.View>
      </WelcomeContainerButton>
      <ModalHowRegister modalizeRef={modalizeRef} />
    </ScrollViewAppComponent>
  )
}
