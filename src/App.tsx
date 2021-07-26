import {GlobalStyle} from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { Router } from "./router";


import AppContextProvider from './context/MyContext';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />  
        <AppContextProvider>
          <Router/>
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
