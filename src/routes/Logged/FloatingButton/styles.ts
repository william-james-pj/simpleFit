import styled from "styled-components/native";

import Svg from "react-native-svg";

export const View = styled.View`
  position: relative;
  width: 75px;
  height: 100%;
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity``;

export const ActionButtonView = styled.View`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.secundary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: -20px;
`;

export const SvgStyle = styled(Svg)`
  position: absolute;
  top: 0;
`;
