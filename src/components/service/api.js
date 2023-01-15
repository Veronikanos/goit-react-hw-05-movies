import axios from 'axios';

const trendingMovies = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: {
    api_key: '2d95e97f255e7635245c1980eab541d3',
    // image_type: 'photo',
    // orientation: 'horizontal',
    // per_page: 12,
  },
});

// const movieDetails =

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await trendingMovies.get('/3/trending/movie/day', {});
    return data.results;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieDetails = async movie_id => {
  try {
    const { data } = await trendingMovies.get(
      `3/movie/${movie_id}, {language: "en-US"}`
    );
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};
