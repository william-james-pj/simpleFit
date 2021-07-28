import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

export const ViewContainer = styled.View`
  width: 95%;
  background: ${(props) => props.theme.colors.interactive};
  margin: 0 0 0 auto;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
`;

export const ViewHeader = styled.View`
  padding: 20px 20px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.normal};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewContent = styled.View`
  padding: 0px 20px 20px;
`;

export const Text = styled.Text`
  font-family: ${fonts.type.text400};
  font-size: ${fonts.size.sm};
  color: ${(props) => props.theme.colors.text};
`;
