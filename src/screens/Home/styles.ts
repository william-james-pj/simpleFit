import styled from "styled-components/native";
// import { fonts } from "../../styles/fonts";
import { FlatList } from "react-native";
import { IItem } from "../../utils/Interfaces";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.primary};
  flex: 1;
`;

export const FlatListS = styled(FlatList as new () => FlatList<IItem>)`
  flex: 1;
  margin-bottom: 60px;
`;

export const Separator = styled.View`
  height: 16px;
`;
