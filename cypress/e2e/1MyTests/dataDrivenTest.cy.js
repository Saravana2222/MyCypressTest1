

describe('Data Driven Test', () => {

    it('data driven test', () => {
        

        cy.fixture('testdata.json').then((data) => {


            data.forEach( (userdata) => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type(userdata.username);
            cy.get('#password').type(userdata.password);
            cy.get('#login-button').click();

            if(userdata.username == 'standard_user'){
                cy.get('.app_logo').should('have.text', userdata.homepageElement);
            }
            else {
                cy.get('.error-message-container.error').should('have.text', userdata.homepageElement);
            }

            })

        })

    })
})