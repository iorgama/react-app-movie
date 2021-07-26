import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.div`
  background-color: ${props => props.theme.palette.primary};   
  display: flex;  
  justify-content: space-between;

  @media screen and (max-width: 720px) {  
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const NavMenu = styled.div`
  padding: 20px;
`;

export const NavLink = styled(Link)`
  color: ${props => props.theme.palette.common}; 
  font-size: 1.2rem;  
  text-decoration: none;
  margin: 5px;
  padding: 10px;
  @media screen and (max-width: 720px) {      
    &:hover {
      color: ${props => props.theme.palette.common};
      opacity: 0.8;
      text-shadow: 0px 0px 13px ${props => props.theme.palette.secondary};
    }  
  }
`;