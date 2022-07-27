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
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
}
`
