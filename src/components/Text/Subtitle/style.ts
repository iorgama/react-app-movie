import styled, {StyledProps} from 'styled-components';


type Props = StyledProps<{
  color : string
  size : string
}>;

export const TEXT = styled.p<Props>`
  ${(props) => `color: ${props.color}`};
  text-align: center;
  line-height: 2rem;
  padding: 20px;
  ${(props) => `font-size: ${props.size}rem`};
`