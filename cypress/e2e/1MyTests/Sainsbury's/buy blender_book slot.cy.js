describe('Automate Sainsbury\'s online order', () => {
    let header=[];
    it.only('add to cart and book slot', () => {
        cy.fixture('sainsbury').then((testdata) => {

        cy.visit('https://www.sainsburys.co.uk/shop/gb/groceries');
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('.loginRegister>a').click();
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('input#username').type(testdata.username);
        cy.get('input#password').type(testdata.password);
        cy.get('button[data-testid="log-in"]').click();

        //Home page - search and find product
        cy.get('input#search').type(testdata.SearchName);
        cy.get('#autoCompleteList>ul>li').each(($el, index, $list) => {
            if(($el.text())== testdata.SearchSelectName){
                cy.wrap($el).click();
            }
        });
            // apply brand filter
            cy.wait(2000)
        cy.get('button[data-test-id="filter-btn"]').click();
        cy.xpath('//li[@data-test-id="category-filter"]//a[text()="Drinks"]').click({force:true});
        cy.get('button[data-test-id="filter-btn"]').click();
        cy.xpath('//input[@id="glenfiddich"]/parent::div').click();
            // sort
        cy.wait(2000);
        cy.get('select[data-test-id="product-controls-sort-dropdown"]').select('Price - High to Low');
            // select product
        cy.wait(2000);
        cy.xpath('//a[text()="'+ testdata.ProductName+'"]').click();
        //Product page
            // add to cart
            cy.wait(2000)
        cy.get('div.pd__controls>div>button').click();
            // go to tolley
        cy.get('div.header-trolley>button').click();
        //Book slot
        cy.get('div.trolley__cta-button-container>button').click();
        cy.xpath('//a[contains(text(),"Choose a time slot")]').click();
        //cy.get('button.ln-c-button.ln-c-button--filled.trolley__cta-button').click();
        cy.get('table#slot-table>tbody>tr:nth-of-type(13)>td:nth-of-type(4)>button').should('have.text', '£4')
        .click();
        cy.xpath('//button[text()="Reserve slot"]').click();

        })
    })

    it('Book slot - delivery', () => {
        cy.fixture('sainsbury').then((testdata) => {

        cy.visit('https://www.sainsburys.co.uk/shop/gb/groceries');
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('.loginRegister>a').click();
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('input#username').type(testdata.username);
        cy.get('input#password').type(testdata.password);
        cy.get('button[data-testid="log-in"]').click();

        //book slot
        cy.xpath('//div/a[contains(text(),"Book delivery")]').click();
        cy.xpath('//a[contains(text(),"Choose a time slot")]').click();
        cy.get('table#slot-table>tbody>tr:nth-of-type(13)>td:nth-of-type(4)>button').should('have.text', '£4')
        .click();
        cy.xpath('//button[text()="Reserve slot"]').click();

        })
    })

    it('Book delivery - by the input', () => {
        cy.fixture('sainsbury').then((testdata) => {

        cy.visit('https://www.sainsburys.co.uk/shop/gb/groceries');
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('.loginRegister>a').click();
        cy.get('button#onetrust-accept-btn-handler').click();
        cy.get('input#username').type(testdata.username);
        cy.get('input#password').type(testdata.password);
        cy.get('button[data-testid="log-in"]').click();

        //book slot
        cy.xpath('//div/a[contains(text(),"Book delivery")]').click();
        cy.xpath('//a[contains(text(),"Choose a time slot")]').click();
            //get no of columns
            
            cy.get('table#slot-table>thead>tr>').each(($text)=> {
                //cy.log($text.text());
                let m = cy.wrap($text).text();
                header.push(m);
                cy.log(header);
            })
            cy.log(header.length);
            cy.log(header);
            header.forEach((element) => {
                cy.log(element)
            })
            cy.log(header.indexOf('Sat 24 Jun'));
    
        
        
        
        //cy.xpath('//button[text()="Reserve slot"]').click();

        })
    })
})