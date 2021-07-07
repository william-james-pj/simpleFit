import styled from "styled-components/native";
// import { fonts } from "../../styles/fonts";
import { Ionicons } from "@expo/vector-icons";

export const ModeButtonView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

export const ModeIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.secundary};
`;

export const MenuButtonView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
`;
