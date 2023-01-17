import { getReviewsById } from 'components/service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    getReviewsById(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);

  return (
    <div>
      <hr />
      {reviews.length > 0 ? (
        <>
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
        </>
      ) : (
        <h3>There are no reviews yet</h3>
      )}
    </div>
  );
}

export default Reviews;
