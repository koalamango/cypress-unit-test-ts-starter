import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 16px;
    text-align: center;
    height: 100%;
    margin: 0;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  main {
    width: 100%;
  }
`;

export default GlobalStyle;
