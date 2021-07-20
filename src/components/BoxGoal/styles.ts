import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";
import { TextInput } from "react-native";

export const ViewContainer = styled.View`
  width: 95%;
  background: ${(props) => props.theme.colors.interactive};
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;

export const ViewHeader = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputTitle = styled(TextInput)`
  width: auto;
  min-width: 50%;
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.normal};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewContent = styled.View`
  padding: 10px 20px;
`;

export const InputText = styled(TextInput)`
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.sm};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewFooter = styled.View`
  padding: 10px 20px;
  align-items: flex-end;
`;

export const Number = styled.Text`
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.normal};
  color: ${(props) => props.theme.colors.text};
`;
