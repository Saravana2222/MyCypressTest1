import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I launch SauceDemo Web portal', () => {
    cy.visit('https://www.saucedemo.com/');
})

When(/^I enter "([^"]*)" and "([^"]*)"$/, (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
})

Then(/^I login to SauceDemo with "([^"]*)"/, (HomepageTxt) => {
    cy.get('#login-button').click();
    cy.get('.app_logo').should('have.text', HomepageTxt); // home
    cy.get('.app_logo').screenshot('.app_logo2');
})