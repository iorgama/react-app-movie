import api from '../ApiConfig/index';

export const getMoviesPaginate = async() => {
  try {
    const response = await api.get(`/discover/movie?${process.env.REACT_APP_VERCEL_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate`);

    if(response.data.results.length > 0){    
      return response.data;
    }

    return {"message" : "Filme não encontrado!"};
  } catch (e) {
    throw e;
  }
}