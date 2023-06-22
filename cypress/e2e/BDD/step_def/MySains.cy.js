import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(/^I launch Sainsbury portal and login with valid "([^"]*)" and "([^"]*)"$/,(username , password) => {
    cy.visit('https://www.sainsburys.co.uk/shop/gb/groceries');
    cy.get('button#onetrust-accept-btn-handler').click();
    cy.get('.loginRegister>a').click();
    cy.get('button#onetrust-accept-btn-handler').click();
    cy.get('input#username').type(username);
    cy.get('input#password').type(password);
    cy.get('button[data-testid="log-in"]').click();
})

Then(/^Search "([^"]*)" in home page and click the "([^"]*)"$/, (keyword, dropdownValue) =>{
    cy.get('input#search').type(keyword);
        cy.get('#autoCompleteList>ul>li').each(($el, index, $list) => {
            if(($el.text())== dropdownValue){
                cy.wrap($el).click();
            }
        });
})

And(/^Apply filter on Brand "([^"]*)"$/, (brandName) => {
    cy.wait(2000)
    cy.get('button[data-test-id="filter-btn"]').click();
    cy.xpath('//li[@data-test-id="category-filter"]//a[text()="Drinks"]').click({force:true});
    cy.get('button[data-test-id="filter-btn"]').click();
    cy.xpath('//input[@id="'+brandName+'"]/parent::div').click();
})

Then(/^Sort the product with "([^"]*)"$/, (sortType) => {
    cy.wait(2000);
    cy.get('select[data-test-id="product-controls-sort-dropdown"]').select(sortType);
})

And (/^Select the product "([^"]*)"$/, (productName) =>{
    cy.wait(3000);
    cy.xpath('//a[text()="'+ productName+'"]').click();

})

Then(/^Add the product to cart$/, ()=>{
    cy.wait(2000)
        cy.get('div.pd__controls>div>button').click();
            // go to tolley
        cy.get('div.header-trolley>button').click();
})
