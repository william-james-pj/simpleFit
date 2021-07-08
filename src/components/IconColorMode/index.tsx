import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

import * as S from "./styles";

export function IconColorMode() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <S.ModeButtonView onTouchStart={toggleTheme}>
      <S.ModeIcon
        name={theme.title === "light" ? "moon" : "sunny"}
        size={25}
        color={"red"}
      />
    </S.ModeButtonView>
  );
}
