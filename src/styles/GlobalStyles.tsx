import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

:root {
  --main-text-color: #1E1E1E;
  --main-detail-color: #CCCF18;
  --shady-detail-color: #81831b;
}

body {
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
}

a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button,
input  {
  font-family: inherit;
}

button {
  padding: 0;
  border: none;
  outline: none;
  color: inherit;
  background: none
}
`;

export default GlobalStyle;
