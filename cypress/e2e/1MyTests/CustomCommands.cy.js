//Custom command: create your own commands
// create new custom command

// overwrite an existing command

// create a custom command for common function

describe('Custom Commands', ()=> {

    it.skip('create new custom command', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.app_logo').should('have.text', 'Swag Labs');

        cy.clickLink('Sauce Labs Backpack');
        cy.xpath('//button[contains(text(),"Add to cart")]').should('have.text', 'Add to cart');

        cy.xpath('//button[text()="Back to products"]').click();

        cy.clickLink('Sauce Labs Onesie');
        cy.xpath('//button[contains(text(),"Add to cart")]').should('have.text', 'Add to cart');

    })

    it.skip('Overwrite contains command', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.app_logo').should('have.text', 'Swag Labs');

        //cy.clickLink('Sauce Labs Backpack');
        cy.clickLink('SAUCE LABS BACKPACK');
        cy.xpath('//button[contains(text(),"Add to cart")]').should('have.text', 'Add to cart');

        cy.xpath('//button[text()="Back to products"]').click();

        cy.clickLink('Sauce Labs Onesie');
        cy.xpath('//button[contains(text(),"Add to cart")]').should('have.text', 'Add to cart');

    })

    it('create new custom command for common function', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.saucedemoLogin('standard_user', 'secret_sauce');
        cy.get('.app_logo').should('have.text', 'Swag Labs');

        cy.visit('https://www.saucedemo.com/');
        cy.saucedemoLogin('locked_out_user', 'secret_sauce'); 
        cy.get('.error-message-container.error').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })

})