import "styled-components ";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      interactive: string;
      disabled: string;

      text: string;

      white: string;
      red: string;
    };
  }
}
