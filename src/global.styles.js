import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    background: #17b794;
    color: white;
  }
  ::-moz-selection {
    background: #17b794;
    color: white;
  }

  body {
    -webkit-transition: background-color 0.1s linear;
      -moz-transition: background-color 0.1s linear;
      -o-transition: background-color 0.1s linear;
      -ms-transition: background-color 0.1s linear;
    transition: background-color 0.1s linear;
    overflow-y: scroll;
  }

  #root {
    font-family: 'Inter', sans-serif;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;

    @media screen and (min-width: 768px) {
      width: unset;
      max-width: 48rem;
    }
  }
`;

export const LightThemesStyles = createGlobalStyle`
  body {
    background-color: white !important;
    color: #222831 !important;
  }
`;

export const DarkThemesStyles = createGlobalStyle`
  body {
    background-color: #222831 !important;
    color: #c6d4d4 !important;
  }
`;