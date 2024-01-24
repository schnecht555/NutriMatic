import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { WelcomeImage, Avatar, WelcomeContainer, StyledContainer, InnerContainer, PageLogo, MsgBox, TextLink, TextLinkContent, ExtraView, ExtraText, Line, StyledButton, ButtonText, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, Colors, RightIcon } from './../components/styles';
import { View } from 'react-native';

// Colors
const { primary, brand, tertiary, darkLight, green, red, secondary } = Colors;

// MyTextInput component definition
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

const Welcome = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
              <WelcomeImage resizeMode="cover" source={require('./../assets/img/welcomelogo.webp')} />

      <StatusBar style="dark" />
      <InnerContainer>
        <WelcomeContainer>        
        <PageTitle welcome={true}>Welcome get scammed</PageTitle>
        <SubTitle welcome={true}>Lester Moe</SubTitle>
          <StyledFormArea>
          <Avatar resizeMode="cover" source={require('./../assets/img/logo.png')} />
            <Line />
            <StyledButton onPress={() => { }}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>            
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Welcome;
