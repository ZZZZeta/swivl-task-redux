import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface ThemeType extends DefaultTheme {
  colors: {
    main: string;
    primary: string;
    secondary: string;
    black: string;
    white: string;
  };
}

interface Styles {
  theme: ThemeType;
}

export const theme = {
  colors: {
    main: '#f5f4f4',
    primary: '#e0f6ef',
    secondary: '#cdac81',
    dark_blue: '#00303f',
    white: 'white',
  },
};

export const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
   font-family: Arial, sans-serif;
}
 
 body {
   margin: 0;
   padding: 0;
   background-color: ${({ theme }: Styles) => theme.colors.main};
 }
 
 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;
