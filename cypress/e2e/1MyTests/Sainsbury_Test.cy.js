

describe('Test first test', () =>{

    // it('Verify the title tab', () => {
    //     cy.visit('https://www.sainsburys.co.uk/');
    //     cy.title().should('eq', 'Sainsbury\'\s1');
    //     cy.get('button#onetrust-accept-btn-handler').click();
    // })

    // it('login grocery portal', () => {
    //     cy.visit('https://account.sainsburys.co.uk/gol/login');
    //     cy.get('button#onetrust-accept-btn-handler').click();
    
    // })

    it('login sainsbury\'\s grocerry portal using xpath', () => {
        cy.visit('https://account.sainsburys.co.uk/gol/login');
        cy.xpath('//button[@id="onetrust-accept-btn-handler"]').click();
        cy.xpath('//input[@name="username"]').type('saravana.0522@gmail.com');
        cy.xpath('//input[@id="password"]').type('*Itme*0');
        cy.xpath('//button[@data-testid="log-in"]').click();
        cy.xpath('//button[@id="onetrust-accept-btn-handler"]').click();
    })

})
