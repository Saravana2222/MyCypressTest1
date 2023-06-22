// Fixtures folder - used to store test data files
// cypress automatically regogonise the files from fixtures folder

describe('Fixtures', () => {

    // it('direct access', () => {
    //     cy.fixture('saucedemo.json').then((data) => {
    //         cy.visit('https://www.saucedemo.com/');
    //         cy.get('#user-name').type(data.username);
    //         cy.get('#password').type(data.password);
    //         cy.get('#login-button').click();
    //         cy.get('.app_logo').should('have.text', data.homepageElement)
    //     })

    // })
    let userData ;
    before(()=> {
        cy.fixture('saucedemo.json').then((data) => {
            userData = data;
        })
    })

    it('access fixture data with hooks 1', () => {
        cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type(userData.username);
            cy.get('#password').type(userData.password);
            cy.get('#login-button').click();
            cy.get('a#item_4_title_link').should('be.visible');
            cy.get('button#react-burger-menu-btn').click();
            cy.get('a#logout_sidebar_link').click();
    })
    it('access fixture data with hooks 2', () => {
        cy.visit('https://www.saucedemo.com/');
            cy.get('#user-name').type(userData.username);
            cy.get('#password').type(userData.password);
            cy.get('#login-button').click();
            cy.get('a#item_0_title_link').should('be.visible');
            cy.get('button#react-burger-menu-btn').click();
            cy.get('a#logout_sidebar_link').click();
    })
})