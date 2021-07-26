import { useState } from 'react';
import { Nav, NavLogo, IconLogo, TxtLogo, NavLink, IconLink, NavMenu, NavIconTimes, NavIconBars, NavBtn, NavBtnLink, NavContainer  } from './styles';
import useBreakpoint from '../../_customHooks/useBreakpoint';

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleClick = () => setMobileMenu(!mobileMenu);
  const point = useBreakpoint();
  
  return (
    <>
      <Nav>
        <NavContainer>
        <NavLogo>
          <NavLink to="/"> 
            <IconLogo />
            <TxtLogo>Popcorn</TxtLogo> 
          </NavLink>
        </NavLogo>
        {mobileMenu ? <NavIconTimes onClick={handleClick}/> : <NavIconBars onClick={handleClick}/>}
        {mobileMenu || (point && ['lg', 'md'].indexOf(point) > -1) ? ( <NavMenu>
          <NavLink to="/"> 
            <IconLink /> TopFilmes 
          </NavLink>
          <NavLink to="/movies"> 
            Filmes 
          </NavLink>    
          <NavLink to="/series"> 
            Seriados 
          </NavLink>     
          <NavBtn>
            <NavBtnLink> Login </NavBtnLink>
          </NavBtn>          
        </NavMenu>) : null}
        </ NavContainer>
      </Nav>
      
    </>
  );
};