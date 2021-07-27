import api from '../ApiConfig/index';

export const getMovieById = async (id: string) => {
  try {
    const response = await api.get(`/movie/${id}?${process.env.REACT_APP_VERCEL_API_KEY}&language=pt-BR`);
    return response.data;
  } catch (e) {
    throw e;
  }
}