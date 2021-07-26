import { FaBars, FaTimes } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { GiPodium } from 'react-icons/gi';
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  background: ${props => props.theme.palette.secondary}
`;

export const NavContainer = styled.div`${props => props.theme.palette.primary};
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1300px;  
  width: 100%;
  padding: 0 1rem;
  align-items: center;
`;

export const NavLogo = styled.div`
  color: ${props => props.theme.palette.common};
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const TxtLogo = styled.span`
  font-size: 2rem;
  font-weight: 900;
`;

export const IconLogo = styled(BiCameraMovie)`
  margin-right: 0.5rem;
  font-size: 3rem;
`;

const iconStyle = css`
  display: none;
  color: ${props => props.theme.palette.common};
  @media screen and (max-width: 720px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer; 
  }
`;

export const NavIconBars = styled(FaBars)`${iconStyle}`
export const NavIconTimes = styled(FaTimes)`${iconStyle}`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.common};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    border-bottom: 6px solid ${props => props.theme.palette.primary};
  }  

  @media screen and (max-width: 720px) {      
    &:hover {
      color: ${props => props.theme.palette.primary};
      border: none;
      opacity: 0.8;
      text-shadow: 0px 0px 13px ${props => props.theme.palette.common};
    }  
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: 720px) {
    flex-direction: column;    
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.palette.secondary};    
    position: absolute;    
    top: 80px;       
    left: 0;
    transition: all 0.6s ease;    
  }
`;

export const IconLink = styled(GiPodium)`
  color: ${props => props.theme.palette.common};   
  font-size: 2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled.a`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.primary};
  padding: 10px 22px;
  color: ${props => props.theme.palette.common};
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: ${props => props.theme.palette.common};
    color: ${props => props.theme.palette.secondary};
  }
  
  @media screen and (max-width: 720px) {
    margin-bottom: 1rem;
  }
`;