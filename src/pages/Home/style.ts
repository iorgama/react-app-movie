import styled from 'styled-components';
import movieBanner from "../../assets/images/movieBanner.jpg";

export const MovieSection = styled.section`
  height: 35rem;
  border: 20px solid ${props => props.theme.palette.secondary};
  border-top: none;
`;
export const MovieBanner = styled.img`
  background: url(${movieBanner}) no-repeat; 
  background-size: cover;
  background-position: 25% 75%;
  outline: 1px solid #fff;
  outline-offset: -20px;
  height: 100%;
  width: 100%;  
  filter: brightness(70%); 
`

export const SearchSection = styled.section`
  background-color: ${props => props.theme.palette.secondary}; 
  padding: 40px 0;  
`;

export const SearchFlex = styled.div`
  display: flex;  
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  margin: 20px;
`
