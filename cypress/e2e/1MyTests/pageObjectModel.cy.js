import saucedemoLogin from '../PageObject/SauceDemoLogin.js'

describe('Page Object Model Pattern', () => {

    it('Page Object Model usage with Saycedemo application', () => {

        cy.fixture('saucedemo.json').then((data) => {
            const sm_ln = new saucedemoLogin();

            cy.visit('https://www.saucedemo.com/');
            sm_ln.setUsername(data.username);
            sm_ln.setPassword(data.password);
            sm_ln.submit();
            sm_ln.verifyHomepage();

        })
    })
})