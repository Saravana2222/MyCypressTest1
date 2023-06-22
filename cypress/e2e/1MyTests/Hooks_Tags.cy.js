//Hooks - Specify pre requisites
//      - Before / after executing any steps
// 1. Before - 
//     Executed only once
//     Before executing any tests
// 2. after
//     Executed only once
//     after executing any tests
// 3. beforeEach
//     Multiple times
//     Before starting each it block
// 4. afterEach 
//     Multiple times
//     After executing each it block

// tags: it.skip, it.only, 

describe('hooks', () => {
    before(()=> {
        cy.visit('https://www.saucedemo.com/');
        cy.log('****before - Laching URL')
    })

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.log('****beforeEach - Login')
    })

    after(()=> {
        cy.wait(1000)
        cy.log('****after - Log Out')
    })

    afterEach(() => {
        cy.log('****After Each')
    })

    it('1st', ()=> {
        cy.get('a#item_4_title_link').should('be.visible');
        cy.get('button#react-burger-menu-btn').click();
        cy.get('a#logout_sidebar_link').click();
    })
    it('2nd', ()=> {
        cy.get('a#item_0_title_link').should('be.visible');
        cy.get('button#react-burger-menu-btn').click();
        cy.get('a#logout_sidebar_link').click();
    })
    it('3rd', ()=> {
        cy.get('a#item_1_title_link').should('be.visible');
        cy.get('button#react-burger-menu-btn').click();
        cy.get('a#logout_sidebar_link').click();
    })
})