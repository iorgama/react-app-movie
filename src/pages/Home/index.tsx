import React, {useState} from 'react'
import {Container} from '../../styles/globalStyle';
import { useTheme } from 'styled-components';
import { getMovies } from '../../services/MovieApi';
import { MovieSection, MovieBanner,SearchSection, SearchFlex, Box } from './style'
import { Card } from '../../components/Card';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Error } from '../../components/Error';
import { useAppContext } from '../../context/MyContext';

interface MoviesProps{
  id: string,
  title: string,
  release_date: string,
  poster_path: string,
}

type Status = 'idle' | 'loading' | 'error' | 'fulfilled'

export const Home = () => {
  const {movieName, setMovieName} = useAppContext();  
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");

  const Theme = useTheme();

  const handeClick = async () => {
    setStatus("loading");
    if(movieName.trim() !== ""){
      const result = await getMovies(movieName);

      if(result.error){
        setErrorMessage(result.error);
        setStatus("error");
      }

      if(result.length){
        setMovies(result);
        setStatus("fulfilled");
      }
    
      //setMovieName("");
    }
  }

  return (
    <>
      <MovieSection>
        <MovieBanner />
      </MovieSection>
      <SearchSection>
        <Container>
          <SearchFlex>
            <Input
                id="movieName"
                type="text"
                value={movieName} 
                setValue={setMovieName}
                placeholder="Digite seu filme"
                required
              />
              <Button onClick={handeClick} title="Buscar" color={Theme.palette.primary} fontColor={Theme.palette.common} padding="15" showIconButton = {true} />
          </SearchFlex>
          <Box>
          {movies!.length > 0 && status === "fulfilled" &&
            movies!.map(({ id, title, release_date, poster_path}) => (
             <Card key={id} id={id} title={title} year={release_date} image={poster_path} showButton={true} cardStyle="md" seriesOrMovies="movies"/>
            ))} 
            {status === "error" && <Error msg={errorMessage} />}
          </Box>
        </Container>
      </SearchSection>
    </>
  )
}
