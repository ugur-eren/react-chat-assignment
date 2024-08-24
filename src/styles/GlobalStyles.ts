import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
  }
  @supports (font-variation-settings: normal) {
    * { font-family: InterVariable, sans-serif; }
  }

  html, body, #root {
    height: 100%;
  }

  html {
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.background};
  }

  body {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
