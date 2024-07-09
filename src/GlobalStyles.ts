import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #333;
  --color-yellow: yellowgreen;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 960px) {
    font-size: 50%;
  }
  body {
    font-size: 1.6rem;
  }
}
`;
