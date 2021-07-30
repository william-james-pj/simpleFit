import { useContext } from "react";
import { ScreenContext } from "../contexts/CurrentScreenContext";

export function useCurrentScreen() {
  const value = useContext(ScreenContext);

  return value;
}
