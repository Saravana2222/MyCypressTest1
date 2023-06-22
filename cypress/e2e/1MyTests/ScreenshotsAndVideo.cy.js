// screenshots: 
/*1) Manually - cy.screenshot();
- name the File: cy.screenshot('Homepage')
- screenshot of an element cy.screenshot(css locator)
                
2) Whenever failure -by default cypress handle that when the test are executed in hedless mode */

describe('Screnshots and videos', () => {

    it('Manual screenshots', () => {
        cy.visit('https://www.saucedemo.com/');
        //cy.screenshot('Saucedemo_Homepage');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        //cy.get('#item_4_img_link').screenshot('backpack');
    })

    it('Automation screenshots and video when failure', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_4_img_link').click();
        cy.get('#add-to-cart-sauce-labs-backpack').should('have.text', 'Add');
    })
})