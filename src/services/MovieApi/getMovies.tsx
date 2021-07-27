import api from '../ApiConfig/index';

export const getMovies = async (nameMovie: string) => {
  try {
    const response = await api.get(`/search/movie?${process.env.REACT_APP_API_KEY}&language=pt-BR&query=${nameMovie}&page=1`);

    if(response.data.results.length > 0){    
      return response.data.results;
    }

    return {"message" : "Filme não encontrado!"};
  } catch (e) {
    throw e;
  }
}