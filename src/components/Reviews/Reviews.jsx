import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  return <h1>Reviews component for movie {movieId}</h1>;
};
