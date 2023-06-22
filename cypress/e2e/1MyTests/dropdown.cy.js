/// <reference types="cypress" />


describe('verify dropdown', ()=> {

    // select dropdown
  it.skip('verify select dropdown dropdown with cypress', () => {
    cy.visit('https://www.zoho.com/commerce/free-demo.html');
    cy.get('#zcf_address_country')
    .select('India')
    .should('have.value', 'India')

  });

  // Dropdown without select - Bootstrap drop down
  it.skip('verify dropdown without select  with cypress', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-applic ation/');
    cy.get('#select2-billing_country-container').click();
    cy.get('input.select2-search__field').type('Russia').type('{enter}');
    cy.get('#select2-billing_country-container').should('have.text', 'Russia');

  });

  // Auto suggest dropdown
  it.skip('verify Auto Suggest dropdown', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('input#searchInput').type('Tamil');
    cy.get('#typeahead-suggestions').contains('Tamil Nadu').click();
  });

  //Dynamic drop downs
  it('Dynamic dropdown', () => {
    cy.visit('https://www.google.com/');
    cy.get('#L2AGLb>div').click();
    cy.get('textarea[title="Search"]').type('Tamil Nadu');
    cy.wait(3000);
    cy.get('div.wM6W7d>span').should('have.length', 12);
    cy.get('div.wM6W7d>span').each(($el, index, $list) => {  // Jquery method to get all the attribute: $el- element, index - index value, $list - array to store the attribute
        if(($el.text()) === 'tamil nadu premier league live'){
            cy.wrap($el).click();
        }
        // cy.log($el.text()); //---- to print all the text attribute value
    })
    cy.get('#APjFqb').should('have.value', 'tamil nadu premier league live');
  });
})