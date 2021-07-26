import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { getMovieById } from '../../services/MovieApi';
import { Container } from '../../styles/globalStyle';
import { Box, Title } from './style';

interface MoviesProps{
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
  overview: string
}


export const AboutMovie = () => {
  const [movie, setMovie] = useState<MoviesProps>(); 
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const result = await getMovieById(id);
      setLoading(false);
      setMovie(result);
    })()
  }, [id]);

  return (    
    <Container>
      {movie && loading === false && <Title>{movie.title}</Title>}
      <Box>
        {movie && loading === false &&
          <Card title={movie.title} plot={movie.overview} image={movie.poster_path} year={movie.release_date} cardStyle='lg' seriesOrMovies="movies" />} 
      </Box>
    </Container>
  )
}
