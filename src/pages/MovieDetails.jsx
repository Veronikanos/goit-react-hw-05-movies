import { fetchMovieDetails } from 'components/service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  // console.log(res);

  useEffect(() => {
    fetchMovieDetails(movieId).then(details => setMovieDetails(details));
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width=""
              height=""
            />
          </div>

          <div>
            <h2>{movieDetails.title}</h2>
            <p>User Score: {`${movieDetails.vote_average * 10}`}</p>
            <h3>Overview</h3>
            <p>{`${movieDetails.overview}`}</p>
            <h3>Genres</h3>
            <p>{`${movieDetails.genres
              .map(genre => genre.name)
              .join(' / ')}`}</p>
          </div>
        </div>
      )}
      <p>Additional information</p>
    </>
  );
};
