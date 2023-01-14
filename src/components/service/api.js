import axios from 'axios';

const galleryApiService = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  params: {
    key: '2d95e97f255e7635245c1980eab541d3',
    // image_type: 'photo',
    // orientation: 'horizontal',
    // per_page: 12,
  },
});

export const fetchMovie = async (searchQuery, page = 1) => {
  try {
    const { data } = await galleryApiService.get('', {
      params: { q: searchQuery, page },
    });
    // const images = data.hits.map(
    //   ({ id, webformatURL, tags, largeImageURL }) => ({
    //     id,
    //     webformatURL,
    //     tags,
    //     largeImageURL,
    //   })
    // );
    return ();
  } catch (error) {
    return error.message;
  }
};

https://api.themoviedb.org/3/movie/550?api_key=2d95e97f255e7635245c1980eab541d3