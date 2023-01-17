import { fetchMovieDetails } from 'components/service/api';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import style from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId).then(details => setMovieDetails(details));
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLink = location.state?.from ?? '/movies';

  return (
    <main>
      <Link to={backLink}>Go Back</Link>
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
              <div className={style.title}>
                <h2>{movieDetails.title}</h2>
                <p>({parseInt(movieDetails.release_date)})</p>
              </div>
              <p>
                User Score: {`${movieDetails.vote_average.toFixed(2)} | 10`}
              </p>
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
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#b92121' : 'inherit',
              })}
              to="cast"
              state={{ from: backLink }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#b92121' : 'inherit',
              })}
              to="reviews"
              state={{ from: backLink }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default MovieDetails;
