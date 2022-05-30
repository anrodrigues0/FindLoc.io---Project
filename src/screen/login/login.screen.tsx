import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HeaderAuth } from '../../components/headers/header-auth/header-auth.component';
import { useUtils } from '../../providers/utils-app.providers';
import { ScrollViewAppComponent } from '../../components/scrollview-app/scrollview-app.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonCommon } from '../../components/buttons/button-common/button-common.component';
import { useTheme } from 'styled-components';
import { ButtonImageOrIcon } from '../../components/buttons/button-with-icon-or-image/button-with-icon-or-image.component';
import {
  LoginScreenContainerMain,
  ImageBackground,
  ContainerContent,
  TitleLogin,
  SubtitleLogin,
  ContainerButton,
  AlignHoriozntalItens,
  ContainerTitleSubtitle,
  Devider,
  ButtonsIconsContainer,
  SpacingBetweenButtons
} from './login.screen.style';

export const LoginScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { useAssets, CommonString } = useUtils();
  const { colors } = useTheme();

  return (
    <ScrollViewAppComponent>
      <LoginScreenContainerMain>
        <ImageBackground source={useAssets.image.MapImage}>
          <AlignHoriozntalItens>
            <HeaderAuth onPress={goBack} />
            <ContainerTitleSubtitle>
              <TitleLogin>{CommonString.login}</TitleLogin>
              <SubtitleLogin>{CommonString.subtitleLogin}</SubtitleLogin>
            </ContainerTitleSubtitle>
          </AlignHoriozntalItens>
        </ImageBackground>
        <ContainerContent>
          <AlignHoriozntalItens>
            <InputComponent
              placeholder={CommonString.inputs.user}
              nameIcon='user'
            />
            <InputComponent
              placeholder={CommonString.inputs.password}
              passwordType
            />
            <ContainerButton>
              <ButtonCommon title={CommonString.buttons.login} color={colors.yellow_100} />
            </ContainerButton>
            <Devider />
            <ButtonsIconsContainer>
              <SpacingBetweenButtons>
                <ButtonImageOrIcon title={CommonString.buttons.withGoogle} typeLogo='google' logo />
              </SpacingBetweenButtons>
              <SpacingBetweenButtons>
                <ButtonImageOrIcon title={CommonString.buttons.withGithub} logo />
              </SpacingBetweenButtons>
            </ButtonsIconsContainer>
          </AlignHoriozntalItens>
        </ContainerContent>
      </LoginScreenContainerMain>
    </ScrollViewAppComponent>
  )
}
