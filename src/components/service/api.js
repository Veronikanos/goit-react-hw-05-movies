import axios from 'axios';

const trendingMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2d95e97f255e7635245c1980eab541d3',
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await trendingMovies.get('/trending/movie/day', {});
    return data.results;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieDetails = async movie_id => {
  try {
    const { data } = await trendingMovies.get(`/movie/${movie_id}`, {
      language: 'en-US',
    });
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getCastById = async movie_id => {
  try {
    const { data } = await trendingMovies.get(`/movie/${movie_id}/credits`, {
      language: 'en-US',
    });
    // console.log(data);
    return data.cast;
  } catch (error) {
    return error.message;
  }
};
