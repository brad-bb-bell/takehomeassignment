import { Express } from 'express';

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
  lastUpdatedAt: string;
  createdAt: string;
}

const movies: Movie[] = [{ title: 'Gremlins', tagline: 'The Gremlins are coming! Dont get him wet, keep him out of bright light, and never feed him after midnight.', rating: MovieRating.FiveStars, lastUpdatedAt: Date(), createdAt: Date() }, { title: 'Forrest Gump', tagline: 'The story of a lifetime.', rating: MovieRating.Terrible, lastUpdatedAt: Date(), createdAt: Date() }];

export function addMovieRoutes(app: Express) {
  app.get('/api/movies', (req, resp) => resp.send(movies));
  app.post('/api/addMovie', (req, resp) => {
    const newMovie = {
      title: `New movie ${Math.floor(Math.random() * 1000)}`,
      tagline: 'Randomly generated new movie',
      rating: MovieRating.ThreeStars,
      lastUpdatedAt: Date(),
      createdAt: Date(),
    };
    movies.push(newMovie);
    resp.send(newMovie);
  });
}