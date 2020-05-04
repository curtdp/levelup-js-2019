// https://docs.cypress.io/api/introduction/api.html

describe('Testing home page', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h2', 'Самые популярные фильмы');
  });

  it('Включает украинскую локализацию', () => {
    cy.visit('/')
      .get('[data-cy=ukrLang]')
      .click()
      .get('[data-cy=homeTitle]')
      .contains('Найпопулярніщі фільми');
  });
});
