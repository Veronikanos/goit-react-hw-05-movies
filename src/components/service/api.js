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

export const fetchTrendingMovies = async (searchQuery, page = 1) => {
  try {
    const { data } = await trendingMovies.get('/3/trending/movie/day', {});
    // console.log(data);
    // const images = data.hits.map(
    //   ({ id, webformatURL, tags, largeImageURL }) => ({
    //     id,
    //     webformatURL,
    //     tags,
    //     largeImageURL,
    //   })
    // );
    return data.results;
  } catch (error) {
    return error.message;
  }
};
