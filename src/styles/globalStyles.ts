import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: radial-gradient(circle closest-corner at 50% 50%, #644367 0%, #310f34 100%);
    height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }

  img {
    display: block;
    width: 100%;
  }
`;
