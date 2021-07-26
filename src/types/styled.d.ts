import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: string,
      primary: string,
      secondary: string
    }
  }
}