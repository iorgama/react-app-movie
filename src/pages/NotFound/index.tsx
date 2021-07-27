import { Container } from '../../styles/globalStyle';
import { SVG, Wrapper } from './style';
import { useTheme } from 'styled-components';

export const NotFound = () => {
  const Theme = useTheme();
  return (
    <Container>
      <Wrapper>
        <SVG />       
      </Wrapper>
    </Container>
  )
}
