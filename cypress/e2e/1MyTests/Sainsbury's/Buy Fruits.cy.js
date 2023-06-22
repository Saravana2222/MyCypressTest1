describe('Automate Sainsbury\'s online ordeer', () => {

    it('place order', () => {
        cy.visit('https://www.sainsburys.co.uk/shop/gb/groceries');
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('.loginRegister>a').click();
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('input#username').type('saravana.0522@gmail.com');
        cy.get('input#password').type('*Itsme*0');
        cy.get('button[data-testid="log-in"]').click();

        //Home page
        cy.get('input#search').type('Apples');
        cy.get('#autoCompleteList>ul>li').each(($el, index, $list) => {
            if(($el.text())=='apples'){
                cy.wrap($el).click();
            }
        });
        cy.get('button[data-test-id="filter-btn"]').click();
        cy.get('input[data-test-id="check-Brand-Sainsbury\'s"]').check({force: true});
        cy.wait(1000);
        cy.get('button[data-test-id="filter-btn"]').click();
        cy.get('input[data-test-id="check-Brand-Sainsbury\'s"]').should('be.checked');
        cy.get('svg.ln-u-margin-left.ln-c-icon').click();

        cy.get('div[data-test-id="product-tile-1244885"]>div>div.pt__wrapper>div.pt__controls').click();
        cy.get('.header-trolley__button.skipto-trolley').click();
        cy.get('button[aria-label="Add Sainsbury\'s Pink Lady Apples x6 to trolley"]>svg').click();
        cy.get('button[aria-label="Add Sainsbury\'s Pink Lady Apples x6 to trolley"]>svg').click();
        cy.get('button[aria-label="Add Sainsbury\'s Pink Lady Apples x6 to trolley"]>svg').click();
        cy.get('button[aria-label="Add Sainsbury\'s Pink Lady Apples x6 to trolley"]>svg').click();



    })
})