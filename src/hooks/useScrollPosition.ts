import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type Response = [
  boolean,
  (event: NativeSyntheticEvent<NativeScrollEvent>) => void
];

export function useScrollPosition(): Response {
  const [activeHeader, setActiveHeader] = useState(false);

  function getScrollPosition(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const positionY = event.nativeEvent.contentOffset.y;
    if (positionY > 50 && !activeHeader) setActiveHeader(true);
    else if (positionY < 20 && activeHeader) setActiveHeader(false);
  }

  return [activeHeader, getScrollPosition];
}
