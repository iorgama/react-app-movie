import React from 'react'
import { Container, Img } from '../../styles/globalStyle'
import devices from '../../assets/images/device-pile.png'
import {ReactComponent as MovieDB} from '../../assets/images/moviedb.svg'
import { Title } from '../../components/Text/Title'
import { useTheme } from 'styled-components';
import { Subtitle } from '../../components/Text/Subtitle'
import { Section, ImageWrapper, TextWrapper } from './style';

export const Aboutapi = () => {
  const Theme = useTheme();
  return (
    <Container>
      <Section>
      <TextWrapper>
        <Title color={Theme.palette.primary} text="Sobre a OMDb API" />
        <Subtitle color={Theme.palette.secondary} text="The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different." size="1.4" />    
        <Img src={devices} alt="Imagem de diversos aparelhos." />  
      </TextWrapper>             
      <ImageWrapper>
        <MovieDB />
      </ImageWrapper>      
      </Section>    
    </Container>
  )
}