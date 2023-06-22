//1. JavaScript alert: It will have some text and 'OK' button
//2. JavaScript confirm alert: It will have some text and 'OK' and 'Cancel' button
//3. JavaScript prompt alert: It will have some text  with atext box for user input along with 'OK' and 'Cancel' button
//4) Authentication alert

// Cypress by default will handle the alerts
// In case of validation of alert details the we need to trigger some event


describe('validate alerts', () => {

    //1. JavaScript alert: It will have some text and 'OK' button
    it ('validate simple alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsAlert()"]').click();

        cy.on('window:alert', (t)=> {
            expect(t).to.contains('I am a JS Alert');
        })
    });


    //2. JavaScript confirm alert: It will have some text and 'OK' and 'Cancel' button
    it('confirmation alert - using OK button', ()=> {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')

        })
        cy.get('p#result').should('have.text', 'You clicked: Ok');
    })

    //2. JavaScript confirm alert: It will have some text and 'OK' and 'Cancel' button - CANCEl button
    it('confirmation alerts using Cancelbutton', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsConfirm()"]').click();

        cy.on('window:confirm', (t) => false); //cancel will be clicked
        cy.get('p#result').should('have.text', 'You clicked: Cancel');
    });

    //3. JavaScript prompt alert: It will have some text  with atext box for user input along with 'OK' and 'Cancel' button
    it('prompt alert - enter text an click OK', () =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((win) => {

            cy.stub(win, 'prompt').returns('Welcome to Cypress');
        })
        
        cy.get('button[onclick="jsPrompt()"]').click();
        // by default cypress will click OK
       
        cy.get('p#result').should('have.text', 'You entered: Welcome to Cypress')

    })

    //3. JavaScript prompt alert: It will have some text  with atext box for user input along with 'OK' and 'Cancel' button
    it('prompt alert - clcik cancel', () =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((win) => {

            cy.stub(win, 'prompt').callsFake(() => null);
        })
        
        cy.get('button[onclick="jsPrompt()"]').click();
        // by default cypress will click OKcancel wil be clicked
       
        cy.get('p#result').should('have.text', 'You entered: null')

    })

    //4) Authentication alert
    it.only('Authentication alert', ()=> {
        //approach 1
        //cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {username: 'admin', password: 'admin'}});

        //approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');

        cy.get('.example>p').should('contain', 'Congratulations! You must have the proper credentials.')
    })
    
})