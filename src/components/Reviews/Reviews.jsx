import { getReviewsById } from 'components/service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    getReviewsById(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);
  return (
    <>
      <hr />
      {reviews && (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
