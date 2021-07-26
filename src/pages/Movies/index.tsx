import {useState, useEffect} from 'react'
import { Container } from '../../styles/globalStyle'
import { useTheme } from 'styled-components';
import { Section, Box } from './style';
import { getMoviesPaginate } from '../../services/MovieApi';
import { Card } from '../../components/Card';
import { Error } from '../../components/Error';
import { Title } from '../../components/Text/Title';
import { LottieAnimation } from '../../components/Lotties';

interface MoviesProps{
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
}

type Status = 'idle' | 'loading' | 'error' | 'fulfilled'

export const Movies = () => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [status, setStatus] = useState<Status>("loading");
  const Theme = useTheme();

  useEffect(() => {
    (async () => {
      const result = await getMoviesPaginate();

      if(result.error){
        setErrorMessage(result.error);
        setStatus("error");
      }

      if(result.results.length > 0){
        setMovies(result.results);
        setStatus("fulfilled");
      }
      
    })()
  }, []);

  return (
    <Container>
      <Section>
        <Title color={Theme.palette.primary} text="Lançamentos de filmes" />
        { status === "loading" && <LottieAnimation/> }
        <Box>
          {movies!.length > 0 && status === "fulfilled" &&
              movies!.map(({ id, title, release_date, poster_path}) => (
              <Card key={id} id={id} title={title} year={release_date} image={poster_path} showButton={true} cardStyle="md" seriesOrMovies="movies"/>
              ))} 
              {status === "error" && <Error msg={errorMessage} />} 
        </Box>
      </Section>    
    </Container>
  )
}