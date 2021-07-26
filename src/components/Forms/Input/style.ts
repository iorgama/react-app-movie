import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  flex: 1;
`

export const InputForm = styled.input`
  padding: 10px;
  font-size: 1.2rem;  
  color: ${props => props.theme.palette.secondary}; 
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 5px;
`;

export const Error = styled.span`
  color: ${props => props.theme.palette.primary}; 
`