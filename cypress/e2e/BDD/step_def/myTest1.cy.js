import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given('My first Cypress BDD', () => {
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