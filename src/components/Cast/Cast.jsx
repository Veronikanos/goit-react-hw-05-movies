import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  return <h1>cast component for movie {movieId}</h1>;
};
