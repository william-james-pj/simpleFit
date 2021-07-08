import styled from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons";

interface FontAwesomeProps {
  active: boolean;
}

export const Icon = styled.View`
  position: absolute;
  top: 30%;
`;

export const FontAwesome = styled(FontAwesome5)<FontAwesomeProps>`
  color: ${(props) =>
    props.active
      ? props.theme.colors.iconColor
      : props.theme.colors.iconDisabled};
`;
