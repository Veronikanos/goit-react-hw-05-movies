// import { useEffect, useState } from 'react';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { NotFoundPage } from 'pages/NotFoundPage';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Home } from '../pages/Home';
// import { Movies } from '../pages/Movies';
// import { Cast } from './Cast/Cast';
// import { Navigation } from './Navigation/Navigation';
// import { Reviews } from './Reviews/Reviews';

const Home = lazy(() => import('pages/Home'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRef } from 'react';

export const App = () => {
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
