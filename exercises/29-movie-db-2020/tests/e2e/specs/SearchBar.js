// https://docs.cypress.io/api/introduction/api.html

describe('Testing search bar', () => {
  beforeEach(() => {
    // runs before each test in the block
    cy.visit('/');
  });
  it('Подсказки появляются после ввода', () => {
    cy.get('[data-cy=searchInput]')
      .type('терм')
      .get('[data-cy=searchSuggestions]')
      .should('be.visible');
  });
  it('Кнопка вниз работает', () => {
    cy.get('[data-cy=searchInput]')
      .type('терм')
      .type('{downarrow}')
      .get('[data-cy=resultLink0]')
      .should('have.class', 'bg-green-700 text-green-100');
  });
  it('Кнопка вверх работает', () => {
    cy.get('[data-cy=searchInput]')
      .type('терм')
      .type('{uparrow}')
      .get('[data-cy=resultLink4]')
      .should('have.class', 'bg-green-700 text-green-100');
  });
});
