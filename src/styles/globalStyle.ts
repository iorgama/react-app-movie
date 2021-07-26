import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle `
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Nunito', sans-serif;
   }
`

export const Container = styled.div`
   width: 100%;
   max-width: 1300px;
   margin-right: auto;
   margin-left: auto;
   padding-right: 50px;
   padding-left: 50px;
`

export const Img = styled.img`
   display: block;
   max-width: 100%;
`