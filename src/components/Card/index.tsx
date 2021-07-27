import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { useTheme } from 'styled-components';
import { Button } from '../Forms/Button';
import {Box, ImgBx, Img, Details, TitleCard, CardWrapper, SubTitleCard, ButtonCard, ButtonLink, ImgCardWrapper, InfoWrapper, ImgCard, InfoCardWrapper, TextCard } from './style';
import imageNotFound from '../../assets/images/image-not-found.png';

interface CardItemProps {
  image ?: string
  title : string
  year : string
  showButton ?: boolean
  id ?: string
  plot ?: string
  cardStyle : string
  seriesOrMovies : string
}

export const Card : FC<CardItemProps> = ({title, cardStyle, plot, id, image, year, showButton, seriesOrMovies}) => {

  const URL_IMAGE = process.env.REACT_APP_VERCEL_IMAGE_API_URL;
  const Theme = useTheme();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  }

  const fixDate = (data:string) =>{
    let databefore = new Date(data);
    let dataFormatada = (databefore.getDate() + "/" + ((databefore.getMonth() + 1)) + "/" + (databefore.getFullYear() )) ;                
    return dataFormatada; 
  }

  const fixWord = (title:string) => {
    if(title.length > 20 ){
      return `${title.substring(0, 20).trim()}(...)` 
    }
    return title
  }

  const fixPlot = (title:string|undefined) => {
    if(title && title.length > 500 ){
      return `${title.substring(0, 500).trim()}(...)` 
    }
    return title
  }
  
  
  return (
    <>
    {cardStyle === 'md' ? (<Box>
      <ImgBx>
        <Img src={image ? URL_IMAGE+image : imageNotFound} alt={title}/>
      </ImgBx>
      <Details>
        <TitleCard data-for="main" data-tip={title}>
          {fixWord(title)} 
        </TitleCard>
        <SubTitleCard>{fixDate(year)}</SubTitleCard>    
        <ReactTooltip
            id="main"
            place="top"
            effect= "float"
            backgroundColor={Theme.palette.primary}
        />
        {showButton && <ButtonCard>
          <ButtonLink to={seriesOrMovies === "movies" ? `/about/${id}` : `/about-series/${id}`}>          
            <Button title={"Mais detalhes"} color={Theme.palette.primary} fontColor={Theme.palette.common} padding="8"/>
           </ButtonLink> </ButtonCard>}     
              
      </Details>
    </Box>)
    : <CardWrapper>
        <ImgCardWrapper>
          <ImgCard src={image ? URL_IMAGE+image : imageNotFound} alt={title}/>
        </ImgCardWrapper>
        <InfoWrapper>
          <TextCard>{fixDate(year)}</TextCard>
        </InfoWrapper>
        <InfoCardWrapper>
          <TitleCard>{title}</TitleCard>
          <SubTitleCard>{fixDate(year)}</SubTitleCard>   
          <TextCard>{fixPlot(plot)}</TextCard> 
          <Button onClick={handleGoBack} title="Voltar"  color={Theme.palette.primary} fontColor={Theme.palette.common} padding="8"/>
        </InfoCardWrapper>
      </CardWrapper>}
    </>
  )
}
