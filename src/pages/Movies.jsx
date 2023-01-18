import { searchMovieByTitle } from '../components/service/api';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieToSearch) return;

    // console.log(searchedMovies);
    searchMovieByTitle(movieToSearch).then(data =>
      setSearchedMovies(data.results)
    );
  }, [movieToSearch]);

  const handleSubmit = async newQuery => {
    // console.log(newQuery);
    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <header>
        <SearchBar onSubmit={handleSubmit} />
      </header>
      <main>{searchedMovies && <MovieList movies={searchedMovies} />}</main>
    </>
  );
}

export default Movies;
