describe('Mouse Operations', () => {

    it.skip('Mouse hover', () => {
        cy.visit('https://demo.opencart.com/');
        cy.get('li.nav-item.dropdown:nth-of-type(2)').trigger('mouseover').click();

        cy.get('div.dropdown-menu.show>div>ul>li:last-of-type').should('be.visible');
    })

    it.skip('right click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');

        // approach 1
        // cy.get('span.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // cy.get('li[class="context-menu-item context-menu-icon context-menu-icon-edit"]').click();
        // cy.on('window:alert', (t) => {
        //     expect(t).to.eq('clicked: edit');
        // })

        //approach 2
        cy.get('span.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('li[class="context-menu-item context-menu-icon context-menu-icon-edit"]').click();
        cy.on('window:alert', (t) => {
            expect(t).to.eq('clicked: edit');
        })

    })

    it.skip('Double click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');

        //approach 1
        // cy.get('button[ondblclick="myFunction()"]').trigger('dblclick');
        // cy.on('window:alert', (t) => {
        //     expect(t).to.eq('You double clicked me.. Thank You..');
        // })

         //approach 2
         cy.get('button[ondblclick="myFunction()"]').dblclick();
         cy.on('window:alert', (t) => {
             expect(t).to.eq('You double clicked me.. Thank You..');
         })
    })

    // npm install --save-dev @4tw/cypress-drag-drop
    // add import '@4tw/cypress-drag-drop' to e2e.js
    it.skip('Drag and drop plugin', () => {

        cy.visit('https://demo.guru99.com/test/drag_drop.html')
        cy.get('div#products>div>ul>li:nth-of-type(2)').drag('#amt7',{force: true}); // add {force: true} if get element hidden error
    })

    it('scroll page', () => {
        cy.visit('https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags');
        cy.get('img[alt="India"]').scrollIntoView({duration: 2000});
        cy.get('img[alt="India"]').should('be.visible');

        cy.get('img[alt="Cyprus"]').scrollIntoView({duration: 1000});
        cy.get('img[alt="Cyprus"]').should('be.visible');

        cy.get('img[alt="Yemen"]').scrollIntoView({duration: 1000});
        cy.get('img[alt="Yemen"]').should('be.visible');
    })

})