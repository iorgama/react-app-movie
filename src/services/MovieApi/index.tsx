import api from '../ApiConfig/index';

const getMoviesPaginate = async() => {
  try {
    const response = await api.get(`/discover/movie?${process.env.REACT_APP_VERCEL_API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate`);

    if(response.data.results.length > 0){    
      return response.data;
    }

    return {"error" : "Filme não encontrado!"};
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

const getSeriesPaginate = async() => {
  try {
    const response = await api.get(`/discover/tv?${api_key}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate`);

    if(response.data.results.length > 0){    
      return response.data;
    }

    return {"error" : "Filme não encontrado!"};
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}


const getMovies = async (nameMovie: string) => {
  try {
    const response = await api.get(`/search/movie?${api_key}&language=pt-BR&query=${nameMovie}&page=1`);

    if(response.data.results.length > 0){    
      return response.data.results;
    }

    return {"error" : "Filme não encontrado!"};
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

const getSerieById = async (id: string) => {
  try {
    const response = await api.get(`/tv/${id}?${api_key}&language=pt-BR`);
    return response.data;
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

const getMovieById = async (id: string) => {
  try {
    const response = await api.get(`/movie/${id}?${api_key}&language=pt-BR`);
    return response.data;
  } catch (e) {
    console.log('error while fetching pets: ', e);
    throw e;
  }
}

export {
  getMovies,
  getMovieById,
  getSerieById,
  getMoviesPaginate,
  getSeriesPaginate
}