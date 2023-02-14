describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://www.kongsberg.com');

    cy.contains(
      'KONGSBERG specialises in developing advanced technologies'
    );
  });
});
