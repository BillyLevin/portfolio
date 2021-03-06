import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Homepage from '../pages/homepage';
import { theme } from '../theme';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%; 
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  overflow-y: scroll;
  background-color: #eee;
}
`;

const Router: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};

export default Router;
