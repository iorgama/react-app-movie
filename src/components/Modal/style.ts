import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;
export const StyledModal = styled.div`
  z-index: 100;
  background:  ${props => props.theme.palette.common};   
  position: relative;
  margin: auto;
  border-radius: 8px;
`;
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  color:  ${props => props.theme.palette.primary};   
  align-self: center;
  font-weight: 700;
`;
export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  width: 300px;
  height: 200px;
  padding: 15px;
  margin: 20px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;