import "styled-components ";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;

      header: string;
      shadow: string;

      interactive: string;

      iconColor: string;
      iconDisabled: string;

      text: string;

      white: string;
      red: string;
    };
  }
}
