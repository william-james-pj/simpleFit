import React from "react";

import * as S from "./styles";

interface IconTabBarProps {
  focused: boolean;
  icon: string;
}

export function IconTabBar({ focused, icon }: IconTabBarProps) {
  return (
    <S.Icon>
      <S.FontAwesome name={icon} size={20} active={focused} />
    </S.Icon>
  );
}
