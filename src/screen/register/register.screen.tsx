import React from 'react';

import { ScrollViewAppComponent } from '../../components/scrollview-app/scrollview-app.component';
import { HeaderAuth } from '../../components/headers/header-auth/header-auth.component';
import { useNavigation } from '@react-navigation/native';
import { useUtils } from '../../providers/utils-app.providers';
import { InputComponent } from '../../components/input/input.component';
import { ButtonCommon } from '../../components/buttons/button-common/button-common.component';
import { useTheme } from 'styled-components';
import { ICreateUser } from '../../api/users/interfaces/create-user.interfaces';
import { 
  RegisterContainerMain,
  AjustHorizontalItens,
  ContainerButton,
  ContainterInputs,
  ImageBackground,
  Title,
  ContainerTitle
} from './register.screen.style';

interface ICreateUserConfirm extends ICreateUser {
  confirmPassoword:string
}

const initialState:ICreateUserConfirm = {
  name:'',
  email:'',
  password:'',
  confirmPassoword:'' 
}

const initialStateErrors = {
  notEqualPassword:false,
  invalidEmail: false,
  strongPassword:false
}

export const RegisterScreen: React.FC = () => {
  const [ userInfo , setUserInfo ] = React.useState<ICreateUserConfirm>(initialState);
  const [ hasError,  setHasError ] = React.useState(initialStateErrors);
  const { goBack } = useNavigation();
  const { useAssets ,CommonString, helper } = useUtils();
  const { colors } = useTheme();
  const setUser = {
    setName: (name:string) => setUserInfo({...userInfo, name}),
    setEmail: (email:string) => setUserInfo({...userInfo, email}),
    setPassword: (password:string) => setUserInfo({...userInfo, password}),
    setConfirm: (confirmPassoword:string) => setUserInfo({...userInfo, confirmPassoword})
  };
 
  function hasValidEmail(){
    return helper.ValidateInput.isEmail(userInfo.email,
      () => setHasError({...hasError,invalidEmail:true}), 
      () => setHasError({...hasError,invalidEmail:false}))
  };
  
  function hasEqualPassword(){
    return helper.ValidateInput.isEqualPassoword(userInfo.password, userInfo.confirmPassoword,
      () => setHasError({...hasError,notEqualPassword:true}), 
      () => setHasError({...hasError,notEqualPassword:false})
    )
  };

  function hasStrongPassoword(){
    return helper.ValidateInput.isStrongPassword(userInfo.password,
      () => setHasError({...hasError,strongPassword:true}),
      () => setHasError({...hasError,strongPassword:false})   
      )
  }
  
  return (
    <ScrollViewAppComponent>
      <RegisterContainerMain>
          <ImageBackground source={useAssets.image.MapImage}>
            <AjustHorizontalItens>
              <HeaderAuth onPress={goBack}/>
                <ContainerTitle>
                  <Title>{CommonString.register}</Title>
                </ContainerTitle>
            </AjustHorizontalItens>
          </ImageBackground>
          <ContainterInputs>
            <AjustHorizontalItens>
              <InputComponent 
                nameIcon='user' 
                onChangeText={setUser.setName}
                value={userInfo.name}
                placeholder={CommonString.inputs.name} 
                greyColor
              />
              <InputComponent 
                nameIcon='mail'
                onBlur={hasValidEmail} 
                value={userInfo.email}
                onChangeText={setUser.setEmail}
                placeholder={CommonString.inputs.email} 
                greyColor
                hasError={hasError.invalidEmail}
                errorMessage={CommonString.error.register.email}
              />
              <InputComponent
                value={userInfo.password}
                onBlur={hasStrongPassoword}
                onChangeText={setUser.setPassword}
                placeholder={CommonString.inputs.password}
                hasError={hasError.strongPassword}
                errorMessage={CommonString.error.register.passwordStrong} 
                passwordType 
                greyColor
              />
              <InputComponent 
                value={userInfo.confirmPassoword}
                onBlur={hasEqualPassword}
                onChangeText={setUser.setConfirm}
                placeholder={CommonString.inputs.confirmPassword} 
                passwordType 
                greyColor  
                hasError={hasError.notEqualPassword}
                errorMessage={CommonString.error.register.passwordNotEqual}
              />
            </AjustHorizontalItens>
          </ContainterInputs>
          <ContainerButton>
            <ButtonCommon 
              title={CommonString.register} 
              color={colors.yellow_100} 
              onPress={() => console.warn(userInfo)}
            />
          </ContainerButton>
      </RegisterContainerMain>
    </ScrollViewAppComponent>
  )
}
