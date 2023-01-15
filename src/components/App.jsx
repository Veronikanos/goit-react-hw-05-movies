// import { useEffect, useState } from 'react';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Cast } from './Cast/Cast';
import { Navigation } from './Navigation/Navigation';
import { Reviews } from './Reviews/Reviews';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRef } from 'react';

export const App = () => {
  //   useEffect(() => {
  //     const onFetchImage = async () => {
  //       setIsLoading(true);
  //       try {
  //         const { images: result, totalImages: totalImg } = await fetchGallery(
  //           query,
  //           page
  //         );
  //         setResults([...results, ...result]);
  //         setTotalImages(totalImg);
  //       } catch (err) {
  //         setError(err.message);
  //         console.log(error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     query && onFetchImage();
  //     isFirstLoading.current = false;
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [query, page]);

  //   const startNewQuery = newQuery => {
  //     setQuery(newQuery);
  //     setPage(1);
  //     setResults([]);
  //     setTotalImages(0);
  //   };

  //   const onSubmitSearch = newQuery => {
  //     if (query === newQuery) {
  //       toast('The same query, try another one!');
  //       return;
  //     }
  //     startNewQuery(newQuery);
  //   };

  //   const onLoadMoreClick = () => {
  //     setPage(page + 1);
  //   };

  //   const getLargeImageURL = modalData => {
  //     setModalImg(modalData);
  //   };

  //   const closeModal = () => {
  //     setModalImg(null);
  //   };

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
