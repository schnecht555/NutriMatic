import styled from "styled-components/native"; // Beachte die native Erweiterung
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from "expo-constants";
const StatusBarHeight = Constants.statusBarHeight;

// Farben
export const Colors = {
  primary: "#fff",
  secondary: "#E5E7EB",
  tertiary: "#1d2939",
  darkLight: "#9CA4AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, brand, tertiary, darkLight, green,red,secondary } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px; /* Korrektur: padding-top */
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${brand};
`;
export const StyledFormArea = styled.View`
 width: 90%;
`;
export const StyledTextInput = styled.TextInput`
  background-color: orange; 
padding: 15px;
padding-left: 55px;
padding-right: 55px;
border-radius: 5px;
font-size: 16px;
height: 60px;
margin-vertical: 3px;
margin-bottom: 10px;
color: blue;
`
export const StyledInputLabel = styled.Text`
color: blue;
font-size: 13px;
text-align: left;
`;

export const LeftIcon= styled.View`
left: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const RightIcon= styled.TouchableOpacity`
right: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
padding: 15px;
background-color: ${brand};
justify-content: center;
align-items: center;
border-radius: 5px;
margin-vertical: 5px;
height: 60px;

${(props) =>  props.google == true && `
  background-color: ${green};
  flex-direction: row;
  justify-content: center;
`}
`;

export const ButtonText = styled.Text`
color: white;
font-size: 16px;

${(props) =>  props.google == true && `
  padding: 25px;
`}
`;

export const MsgBox = styled.Text`
text-align: center;
font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  algin-items:center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content : center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  algin-items:center;
`;

export const TextLinkContent = styled.Text`
 color: ${brand};
 font-size: 15px;
`;