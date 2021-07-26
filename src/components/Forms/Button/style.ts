import styled, { StyledProps } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

type Props = StyledProps<{
  border?: string;
  color?: string;
  radius?: string;
  width?: string;
  height?: string;
  fontColor?: string;
  padding ?: string;
}>;

export const ButtonForm = styled.button<Props>`
  ${(props) => `border: ${props.border}`};
  ${(props) => props.radius ? `border-radius: ${props.radius}` : `border-radius: ${props.theme.borderRadius};` };
  ${(props) => `background-color: ${props.color}`};
  ${(props) => `color: ${props.fontColor}`};
  ${(props) => `padding: ${props.padding}px`};
  margin-left: 0.5rem;
  font-size: 1.2rem;  
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    box-shadow: 0 0.5em 1.5em -0.4em ${props => props.theme.palette.primary}; 
  }
  
  @media screen and (max-width: 720px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const IconButton = styled(FaSearch)`
  color: ${props => props.theme.palette.common}; 
  font-size: 1.2rem;
  margin-right: 0.5rem;
`