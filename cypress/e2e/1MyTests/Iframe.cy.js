///<reference types="cypress" />
import "cypress-iframe"

describe('Iframe', () =>{

    it.skip('Iframe Approach1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');

        let iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('Welcome to Iframe {ctrl+a}');
        cy.get('button[title="Bold"]').click();

    })

    // create custom command
    it.skip('Iframe approach2', ()=> {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.getIframe('#mce_0_ifr').clear().type('Welcome iframe2 {ctrl+a}');
        cy.get('button[title="Bold"]').click();

    })

    // using cypress iframe plugin
    /* 1. npm install -D cypress-iframe
    2. In your cypress/support/commands.js file, add the following: import 'cypress-iframe';
    */
   it('Iframe - approach3 using cypress-iframe plugin', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.frameLoaded(); // load the iframe
    cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}");
    cy.get('button[title="Bold"]').click();

   })
})