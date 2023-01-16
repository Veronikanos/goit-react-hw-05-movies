import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    // <>{console.log(movies)}</>
    <>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
