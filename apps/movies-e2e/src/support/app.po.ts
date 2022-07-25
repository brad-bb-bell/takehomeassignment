export const getGreeting = () => cy.get('h1');

export const getMovies = () => cy.get('li.movie');
export const getAddMovieButton = () => cy.get('button#add-movie');