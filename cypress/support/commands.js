// Reusable login helper for SauceDemo.
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.get('[data-test="username"]').should('be.visible').type(username);
  cy.get('[data-test="password"]').type(password, { log: false });
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
});
