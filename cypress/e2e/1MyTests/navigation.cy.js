// go() : back, forward
            -1, 1
// reload()

describe('navigations', () => {

    it('go back reload', () => {

            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('.app_logo').should('have.text', 'Swag Labs'); // home

            cy.get('#item_4_title_link').click();
            cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart'); //product

            cy.go('back');
            cy.get('.app_logo').should('have.text', 'Swag Labs'); // home

            cy.go('forward');
            cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart'); //product

            cy.go('back');
            cy.get('.app_logo').should('have.text', 'Swag Labs'); // home
            cy.reload();

    })
})