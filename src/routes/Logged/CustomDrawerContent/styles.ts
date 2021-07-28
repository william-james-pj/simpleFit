import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { fonts } from "../../../styles/fonts";

import { FontAwesome5 } from "@expo/vector-icons";

export const ViewContainer = styled.View`
  padding-top: ${getStatusBarHeight() + "px"};
  background: ${(props) => props.theme.colors.primary};
`;

export const ViewHeader = styled.View`
  display: flex;
  align-items: center;
  padding: 40px 0 20px;
`;

export const ViewAvatar = styled.View`
  width: 80px;
  height: 80px;
  background: gray;
  border-radius: 50px;
  overflow: hidden;

  align-items: center;
  justify-content: flex-end;
`;

export const FontAwesome = styled(FontAwesome5)`
  color: ${(props) => props.theme.colors.primary};
  bottom: -5px;
`;

export const TextName = styled.Text`
  margin-top: 20px;
  font-size: ${fonts.size.lg};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewButtonProfile = styled.View`
  margin-top: 20px;
  width: 80%;
  height: 55px;
  border-radius: 8px;
  border: 1px;
  border-color: ${(props) => props.theme.colors.iconDisabled};
  overflow: hidden;
`;

export const TextButton = styled.Text`
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewContent = styled.View`
  flex: 1;
`;

export const ViewFooter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0 30px;
`;

export const ViewButtonFooter = styled(ViewButtonProfile)``;
