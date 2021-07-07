import styled from "styled-components/native";
// import { fonts } from "../../styles/fonts";

export const ActionView = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity``;

export const ActionButtonView = styled.View`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.secundary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 30px;
`;

export const Icon = styled.View`
  position: absolute;
  top: 30%;
`;
