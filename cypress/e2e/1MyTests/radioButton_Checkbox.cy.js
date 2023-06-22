describe('verify radio button and check boxes with cypress', () => {

    it('verify raio buttons', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');

        cy.get('input#female').should('be.visible');
        cy.get('input#male').should('be.visible');

        // checking radio buttons
        cy.get('input#female').check().should('be.checked');
        cy.get('input#male').should('not.be.checked');

        cy.get('input#male').check().should('be.checked');
        cy.get('input#female').should('not.be.checked');
    });

    it('verify the check boxes with cypress', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
        cy.get('input#monday').should('be.visible');

        //select check box
        cy.get('input#monday').check().should('be.checked');

        // un select check box
        cy.get('input#monday').uncheck().should('not.be.checked');

        //select all check boxes - find a css locator which matches all the checkbox
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked');
        //unselect all check boxes 
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked');
        //select first check box from all check boxes
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked');
        //select last check box from all check boxes
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked');

    })
});