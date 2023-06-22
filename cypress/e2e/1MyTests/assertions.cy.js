describe('cypress assertions', () => {

    // it ('verify implicit assertions', () => {
    //     cy.visit('https://account.sainsburys.co.uk/gol/login?login_challenge=871dffd8f4e541269bcd54f0d9f9f864');
    //     cy.get('button#onetrust-accept-btn-handler').click();
    //     cy.get('#username').type('saravana.0522@gmail.com');
    //     cy.get('#password').type('*Itsme*0');
    //     cy.get('button[data-testid="log-in"]').click();
    //     cy.get('button#onetrust-accept-btn-handler').click();
    //     cy.get('div.panel.loginPanel>a').click();

    //     //cy.get('button#onetrust-accept-btn-handler').click();
    //     cy.get('#username').type('saravana.0522@gmail.com');
    //     cy.get('#password').type('*Itsme*0');
    //     cy.get('button[data-testid="log-in"]').click();


    //     //Implicit assertions: Should - include, eq, contain, not.include, not.eq, not.contain, exist, value. length
    //     cy.get('p.homepageGreeting')
    //         .invoke('text')
    //         .should('eq', 'Hello Saravanakumar')
    //         // .then((greetingText)=>{
    //         //     cy.log('greetingText: ' + greetingText);
    //         // })
    //     //cy.url().should('eq', 'https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/gb/groceries?storeId=10151&langId=44&krypto=Lj8eMyf1He23ZMOoRid5y8vL8%2FHnqh9n2c54JeZyQHxnL3d4n%2FHlN5dmICaE4rPbh3qYKScFlbkmQCeRkFm3dcoTApFXjv2y6c92RPot2SMUwW4NNFBGtXHIqrv1uhvFucL44MUlhGMRNBFE1JPp%2FxnZBRBn6EpaFd8JBQNS3Yc%3D&ddkey=https%3Agb%2Fgroceries');
    //     cy.url().should('include', 'groceries');
    //     cy.url().should('contain', '/gb');

    //     cy.url().should('include', 'groceries')
    //     .should('contain', '/gb');

    //     cy.url().should('include', 'groceries')
    //     .and('contain', '/gb')
    //     .and('not.contain', '/gooob')

    //     cy.title().should('eq','Sainsbury\'\s online Grocery Shopping and Fresh Food Delivery');

    //     cy.get('.mainLogo > img').should('be.visible')
    //     .should('exist');

    //     cy.get('a[href^="http"]')
    //     //.should('have.length', '297')    //check the no of url present in the page
    //     .invoke('attr','href')
    //     .then((href) => {
    //         cy.log(href.length);
    //         for(let i=0;i<href.length;i++){
    //             cy.log(href[i]);
    //         }
    //     })
    //     cy.get('#search').type('ABCD');
    //     cy.get('#search').should('have.value','ABCD');
    // });

    it('verify the explicit assertions', () => {
        cy.visit('https://account.sainsburys.co.uk/gol/login?login_challenge=871dffd8f4e541269bcd54f0d9f9f864');
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('#username').type('saravana.0522@gmail.com');
        cy.get('#password').type('*Itsme*0');
        cy.get('button[data-testid="log-in"]').click();
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('div.panel.loginPanel>a').click();

        //cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('#username').type('saravana.0522@gmail.com');
        cy.get('#password').type('*Itsme*0');
        cy.get('button[data-testid="log-in"]').click();

        cy.get('.loggedInContactName').click();
        let expText = 'Welcome Saravanakumar';
        cy.get('h1').then((text)=> {
            let actualText = text.text();
            cy.log(actualText);

            //BDD
            expect(actualText).to.eq(expText);
            //expect(actualText).to.not.eq(expText);

            //TDD
            assert.equal(actualText,expText);
            //assert.notEqual(actualText,expText);

        })
        
    })

})