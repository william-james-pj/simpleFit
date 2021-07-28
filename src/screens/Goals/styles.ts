import styled from "styled-components/native";
// import { fonts } from "../../styles/fonts";
import { FlatList } from "react-native";
import { IItemGoals } from "../../@types/types";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.primary};
  flex: 1;
`;

export const FooterView = styled.View`
  background: transparent;
  width: 100%;
  height: 40px;
`;

export const FlatListS = styled(FlatList as new () => FlatList<IItemGoals>)`
  flex: 1;
`;

export const Separator = styled.View`
  height: 16px;
`;
