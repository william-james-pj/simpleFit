import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background: rgba(0, 0, 0, 0);
`;

export const ModalView = styled.View`
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Icon = styled(FontAwesome5)`
  color: ${(props) => props.theme.colors.white};
`;

export const Content = styled.View`
  align-items: center;
  padding: 30px 20px;
`;

export const Titulo = styled.Text`
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.normal};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 30px;
`;

export const Text = styled.Text`
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.sm};
  color: ${(props) => props.theme.colors.iconDisabled};
  text-align: center;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 50px;
`;

export const Button = styled.View`
  padding: 10px 20px;
  background: ${(props) => props.theme.colors.red};
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextBottom = styled.Text`
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;

export const ButtonCancel = styled.View`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextCancel = styled.Text`
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  color: ${(props) => props.theme.colors.iconDisabled};
`;
