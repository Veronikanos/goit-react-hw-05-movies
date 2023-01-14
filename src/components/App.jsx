// import { useEffect, useState } from 'react';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Navigation } from './Navigation/Navigation';

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
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        <Route path="/movies/:movieId/reviews" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
