import { getAddMovieButton, getMovies } from '../support/app.po';

describe('movies', () => {
  beforeEach(() => cy.visit('/'));
});

describe('MovieApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display movies', () => {
    getMovies().should((t) => expect(t.length).equal(2));
    getAddMovieButton().click();
    getMovies().should((t) => expect(t.length).equal(3));
  });
});