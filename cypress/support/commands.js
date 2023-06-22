// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import "cypress-iframe";
import 'cypress-file-upload';

Cypress.Commands.add('getIframe', (iFrame) => {
    return cy.get(iFrame)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

//add new command
Cypress.Commands.add('clickLink', (label)=> {
    cy.get('a').contains(label).click();
})

//overwrite contains command
// Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
//     if(typeof text === 'object'){
//         options = text;
//         text = filter;
//         filter = undefined;
//     }
//     options.matchCase = false;

//     return originalFn(subject, filter, text, options)
// })

//Custom command for saucelab login
Cypress.Commands.add('saucedemoLogin', (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
    
})