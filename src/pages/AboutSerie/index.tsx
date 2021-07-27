import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { getSerieById } from '../../services/MovieApi/getSerieById';
import { Container } from '../../styles/globalStyle';
import { Box, Title } from './style';

interface SeriesProps{
  name: string
  overview: string
  poster_path: string
  first_air_date: string
}

export const AboutSerie = () => {
  const [serie, setSerie] = useState<SeriesProps>();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);  

  useEffect(() => {
    (async () => {
      const result = await getSerieById(id);
      setLoading(false);
      setSerie(result);
    })()
  }, [id]);

  return (    
    <Container >
      {serie && <Title>{serie.name}</Title>}
      <Box>      
        {serie && loading === false &&
          <Card title={serie.name} plot={serie.overview} image={serie.poster_path} year={serie.first_air_date} cardStyle='lg' seriesOrMovies="movies" />} 
      </Box>
    </Container>
  )
}
