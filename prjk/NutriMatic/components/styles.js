import styled from "styled-components/native"; // Beachte die native Erweiterung

import Constants from "expo-constants";
const StatusBarHeight = Constants.statusBarHeight;

// Farben
export const Colors = {
  primary: "#fff",
  secondary: "#E5E7EB",
  tertiary: "#1D2937",
  darkLight: "#9CA4AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, brand } = Colors;

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
