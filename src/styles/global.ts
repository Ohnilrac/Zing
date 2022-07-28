import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --background: #FFFFFF;
  --text: #112B3C;
  --sub-text: #828282;
  --orange: #F66B0E;
  --light-gray: #BDBDBD;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
}

body{
  background: var(--background);
  font-family: 'Source Sans Pro', sans-serif;
}

ul{
  list-style: none;
}
`
