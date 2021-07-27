import styled from 'styled-components';
import {ReactComponent as PageNotFound} from '../../assets/images/undraw_page_not_found.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const SVG = styled(PageNotFound)`
  width: 400px;
  height: 400px;

`;