import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";
import { ViewProps } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Ionicons } from "@expo/vector-icons";

interface ViewProp extends ViewProps {}

export const ViewContainer = styled.View<ViewProp>`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.colors.primary};
  padding: 0 20px;
  padding-top: ${getStatusBarHeight() + "px"};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.normal};
  color: ${(props) => props.theme.colors.text};
`;

export const TouchableOpacity = styled.TouchableOpacity``;

export const Icon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.iconColor};
`;
