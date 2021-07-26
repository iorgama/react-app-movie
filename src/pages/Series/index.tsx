import React, {useState, useEffect} from 'react'
import { Container } from '../../styles/globalStyle'
import { useTheme } from 'styled-components';
import { Section, Box } from './style';
import { getSeriesPaginate } from '../../services/MovieApi';
import { Card } from '../../components/Card';
import { Error } from '../../components/Error';
import { Title } from '../../components/Text/Title';
import { LottieAnimation } from '../../components/Lotties';

interface SeriesProps{
  id: string,
  name: string,
  first_air_date: string,
  poster_path: string,
}

type Status = 'idle' | 'loading' | 'error' | 'fulfilled'

export const Series = () => {
  const [series, setSeries] = useState<SeriesProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [status, setStatus] = useState<Status>("loading");
  const Theme = useTheme();

  useEffect(() => {
    (async () => {
      const result = await getSeriesPaginate();

      if(result.error){
        setErrorMessage(result.error);
        setStatus("error");
      }

      if(result.results.length > 0){
        setSeries(result.results);
        setStatus("fulfilled");
      }
      
    })()
  }, []);

  return (
    <Container>
      <Section>
        <Title color={Theme.palette.primary} text="Lançamentos de Séries" />
        { status === "loading" && <LottieAnimation/> }
        <Box>
          {series!.length > 0 && status === "fulfilled" &&
              series!.map(({ id, name, first_air_date, poster_path}) => (
              <Card key={id} id={id} title={name} year={first_air_date} image={poster_path} showButton={true} cardStyle="md" seriesOrMovies="series"/>
              ))} 
              {status === "error" && <Error msg={errorMessage} />} 
        </Box>
      </Section>    
    </Container>
  )
}