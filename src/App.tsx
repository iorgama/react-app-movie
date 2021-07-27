import {GlobalStyle} from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { Router } from "./router";


import AppContextProvider from './context/MyContext';
import ModalContextProvider from './context/ModalContext';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />  
        <AppContextProvider>
          <ModalContextProvider>
            <Router/>
          </ModalContextProvider>
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
