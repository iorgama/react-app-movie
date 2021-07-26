import styled, {StyledProps} from 'styled-components';


type Props = StyledProps<{
  color?: string;
}>;

export const H1 = styled.h1<Props>`
  ${(props) => `color: ${props.color}`};
  padding: 20px;
  margin-top: 25px;
  text-align: center;
  font-size: 1.8rem;  
`