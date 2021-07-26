import styled from 'styled-components';

export const Title = styled.h1`
  padding: 30px 0;
  margin-top: 10px;
  text-align: center;
  color: ${props => props.theme.palette.primary}; 
`

export const Box = styled.div`
  background-color: ${props => props.theme.palette.secondary}; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
`
