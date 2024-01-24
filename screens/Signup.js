import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { StyledContainer, InnerContainer, PageLogo, MsgBox, TextLink, TextLinkContent, ExtraView, ExtraText, Line, StyledButton, ButtonText, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, Colors, RightIcon } from './../components/styles';
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

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>NutriMatic</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        

        <Formik
          initialValues={{ username: '', dateOfBirth: '', confirmPassword: '', email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="andy@wand.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Username"
                icon="person"
                placeholder="AndyWand"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('Username')}
                onBlur={handleBlur('Username')}
                value={values.email}
              />

              <MyTextInput
                label="Age"
                icon="calendar"
                placeholder="1-99"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.date}
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MyTextInput
                label="Confim Password"
                icon="lock"
                placeholder="password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Signup</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>

            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Signup;