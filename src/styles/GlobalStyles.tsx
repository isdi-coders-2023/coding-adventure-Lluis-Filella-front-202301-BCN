import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one";
import "@fontsource/roboto";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

:root {
  --main-back-background-color: #1E1E1E;
  --main-text-color: #1E1E1E;
  --main-detail-color: #CCCF18;
  --shady-detail-color: #81831b;
  --main-input-color: #e8e8e8;
  --error-color: #F3949A;

  --secondary-font: "Saira Stencil One"
}

body {
  background-color: var(--main-back-background-color);
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Roboto";

}


a,
a:focus,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

h2 {
  margin: 0;
  font-weight: inherit;
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
