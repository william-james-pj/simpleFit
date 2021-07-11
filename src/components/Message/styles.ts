import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { Fontisto } from "@expo/vector-icons";

export const ViewContainer = styled.View`
  width: 100%;
  height: 88%;
  margin: 4px 0 5px;
  padding: 20px 30px;
  background: ${(props) => props.theme.colors.header};
  overflow: hidden;
  flex-direction: row;
`;

export const ViewText = styled.View`
  flex: 5;
`;

export const Text = styled.Text`
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.sm};
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.Text`
  margin-top: 8px;
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.md};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewIcon = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Fontisto)`
  color: ${(props) => props.theme.colors.iconColor};
`;
