/// <reference types = "cypress" />

describe('validate child element handling with cypress', () => {

    // option 1 using invoke - remove target attribute
    it('use invoke and validate new tab', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').invoke('removeAttr', 'target').click();

        cy.url().should('contain', 'https://the-internet.herokuapp.com/windows/new');

        //go back
        cy.go('back');
    })

    // extract the href value and navigate
    // This option will work only the new url has the same domain. 
    // If the domain is not matching, it will not work. that is a limitation

    it('validate new tab by extracting href value', ()=> {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').then((el)=> {
            let newURL = el.prop('href');
            cy.visit(newURL);
        })
        cy.url().should('contain', 'https://the-internet.herokuapp.com/windows/new');
    })
})