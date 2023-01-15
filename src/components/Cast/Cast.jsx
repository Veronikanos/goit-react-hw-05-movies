import { getCastById } from 'components/service/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    getCastById(movieId).then(cast => {
      setCast(cast);
    });
  }, [movieId]);

  // if (!cast) {
  //   return null;
  // }
  return (
    <>
      <hr />
      <ul className={styles.castList}>
        {cast &&
          cast.map(item => {
            return (
              <li key={item.id}>
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                    width="300"
                  />
                )}
                <p>{item.name}</p>
                <p>
                  <span>Character:</span> {item.character}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );

  // <h1>cast component for movie {movieId}</h1>;
};
