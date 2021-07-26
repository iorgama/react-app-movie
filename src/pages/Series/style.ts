import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px ;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`

export const Box = styled.div`
  margin-top: 20px;
  background-color: black;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 
`