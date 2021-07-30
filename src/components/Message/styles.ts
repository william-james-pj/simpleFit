import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { Fontisto } from "@expo/vector-icons";

interface IActive {
  active: boolean;
}

export const ViewContainer = styled.View<IActive>`
  width: 100%;
  height: ${(props) => (props.active ? "70px" : "100px")};
  margin: 4px 0 5px;
  padding: 20px 30px;
  background: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.header};
  overflow: hidden;
  flex-direction: row;
`;

export const ViewText = styled.View`
  flex: 5;
`;

export const Text = styled.Text<IActive>`
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.sm};
  color: ${(props) => props.theme.colors.text};
  display: ${(props) => (props.active ? "none" : "flex")};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.md};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewIcon = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Fontisto)<IActive>`
  color: ${(props) => props.theme.colors.iconColor};
  display: ${(props) => (props.active ? "none" : "flex")};
`;
