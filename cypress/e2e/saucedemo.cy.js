describe('SauceDemo - end-to-end application tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC01 - logs in with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce', { log: false });
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });

  it('TC02 - displays an error for an invalid password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('incorrect_password', { log: false });
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match');
  });

  it('TC03 - prevents a locked-out user from logging in', () => {
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').type('secret_sauce', { log: false });
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'locked out');
    cy.url().should('not.include', '/inventory.html');
  });

  it('TC04 - validates empty login fields', () => {
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });

  it('TC05 - adds a product to the shopping cart', () => {
    cy.login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
  });

  it('TC06 - removes a product from the shopping cart', () => {
    cy.login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should('not.exist');
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('TC07 - sorts products from low price to high price', () => {
    cy.login();

    cy.get('[data-test="product-sort-container"]').select('lohi');
    cy.get('.inventory_item_price').then(($priceElements) => {
      const actualPrices = [...$priceElements].map((element) =>
        Number(element.innerText.replace('$', ''))
      );
      const sortedPrices = [...actualPrices].sort((a, b) => a - b);

      expect(actualPrices).to.deep.equal(sortedPrices);
    });
  });

  it('TC08 - displays a validation error when checkout information is missing', () => {
    cy.login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'First Name is required');
  });

  it('TC09 - completes checkout and displays order confirmation', () => {
    cy.login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('Test');
    cy.get('[data-test="lastName"]').type('Student');
    cy.get('[data-test="postalCode"]').type('560001');
    cy.get('[data-test="continue"]').click();

    cy.get('.cart_item').should('have.length', 1);
    cy.get('[data-test="finish"]').click();

    cy.get('.complete-header')
      .should('be.visible')
      .and('contain.text', 'Thank you for your order!');
    cy.get('[data-test="back-to-products"]').should('be.visible');
  });
});
