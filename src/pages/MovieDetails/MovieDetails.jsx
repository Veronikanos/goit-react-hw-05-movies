import { fetchMovieDetails } from 'components/service/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import style from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  // console.log(res);

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId).then(details => setMovieDetails(details));
  }, [movieId]);

  // if (!movieDetails) {
  //   return null;
  // }

  return (
    <div className={style.wrapper}>
      {movieDetails && (
        <div className={style.container}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              // width="500"
            />
          </div>

          <div>
            <h2>{movieDetails.title}</h2>
            <p>{parseInt(movieDetails.release_date)}</p>
            <p>User Score: {`${movieDetails.vote_average.toFixed(2)} | 10`}</p>
            <h3>Overview</h3>
            <p>{`${movieDetails.overview}`}</p>
            <h3>Genres</h3>
            <p>{`${movieDetails.genres
              .map(genre => genre.name)
              .join(' / ')}`}</p>
          </div>
        </div>
      )}
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
