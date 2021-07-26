import React from 'react'
import { useAppContext } from '../../context/MyContext'
import {Container, NavLink, NavMenu} from './style'

export const Footer = () => {
  const {movieName} = useAppContext();
  return (
    <Container>
      <NavMenu>
        <NavLink to="/"> {movieName} </NavLink> 
      </NavMenu>
      <NavMenu>
        <NavLink to="/"> Saiba mais </NavLink> 
        <NavLink to="/"> Sobre nós </NavLink> 
        <NavLink to="/api"> API </NavLink>     
      </NavMenu>  
    </Container>
  )
}
