import React from 'react';
import Router from './routes';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
