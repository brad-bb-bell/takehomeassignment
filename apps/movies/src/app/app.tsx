import { useEffect, useState } from 'react';

enum MovieRating {
  FiveStars = '*****',
  FourStars = '****',
  ThreeStars = '***',
  TwoStars = '**',
  OneStar = '*',
  Terrible = '👎'
}

interface Movie {
  title: string;
  tagline: string;
  rating: MovieRating;
  lastUpdatedAt: number;
  createdAt: number;
}

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([
    { title: 'Gremlins', tagline: 'The Gremlins are coming! Dont get him wet, keep him out of bright light, and never feed him after midnight.', rating: MovieRating.FiveStars, lastUpdatedAt: 1, createdAt: 1 },
    { title: 'Forrest Gump', tagline: 'The story of a lifetime.', rating: MovieRating.Terrible, lastUpdatedAt: 1, createdAt: 1 },
  ]);

  useEffect(() => {
    fetch('/api/movies')
      .then((_) => _.json())
      .then(setMovies);
  }, []);

  function addMovie() {
    fetch('/api/addMovie', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newMovie) => {
        setMovies([...movies, newMovie]);
      });
  }
  return (
    <>
      <h1>Movies</h1>
      <ul>
        {movies.map((t) => (
          <div>
          <h2 className={'movie'}>{t.title} </h2>
          <p>{t.tagline}</p>
          <p>Rating: {t.rating}</p>
          <p>Created At: {t.createdAt}</p>
          <p>Updated At: {t.lastUpdatedAt}</p>
          </div>
        ))}
      </ul>
      <button id={'add-movie'} onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
};

export default App;