import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Box = styled.div`
  position: relative;
  width: 350px;
  height: 450px;  
  background: ${props => props.theme.palette.common}; 
  margin: 10px;
  border-radius: ${props => props.theme.borderRadius}; 
`;

export const ImgBx = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 120px; 
`

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Details = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 100px;
  text-align: center;
`

export const TitleCard = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 1.25rem;
  color: ${props => props.theme.palette.secondary}; 
  text-transform: uppercase;
`

export const SubTitleCard = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.palette.primary}; 
  display: block;
  margin-top: 5px;
`

export const ButtonCard = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;  
  @media screen and (max-width: 720px) {  
    margin-top: -5px;  
  }
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
`

export const CardWrapper = styled.div`
  width: 750px;
  height: 450px;
  background: ${props => props.theme.palette.common}; 
  margin: 10px;
  display: flex;
  border-radius: ${props => props.theme.borderRadius}; 
  padding: 15px;
  
  @media screen and (max-width: 720px) {  
    width: 350px;
    height: 350px;
    flex-direction: column;
    
  }
`

export const ImgCardWrapper = styled.div`
  flex: 1;
  width: 350px;
  height: 420px;  
  box-shadow: 0 10px 20px rgba(0, 0, 0, .19),
0 6px 6px rgba(0, 0, 0, .23);

  @media screen and (max-width: 720px) {  
    width: 300px;
    height: 300px;    
  }
`

export const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  box-shadow: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23);
`

export const InfoWrapper = styled.div`
  display: none;
  @media screen and (max-width: 720px) {  
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
`

export const InfoCardWrapper = styled.div`
  margin-left: 20px;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 720px) {  
    margin: 0px;
    padding: 10px;
    display: none;
  }
`

export const TextCard = styled.p`
  @media screen and (max-width: 720px) { 
    margin-top: 5px;
    color: ${props => props.theme.palette.primary}; 
    font-weight: 600;
  }

`