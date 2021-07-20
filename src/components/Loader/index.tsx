import React from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./styles";

export function Loader() {
  return (
    <S.Loading>
      <ActivityIndicator size="large" color="#0000ff" />
    </S.Loading>
  );
}
