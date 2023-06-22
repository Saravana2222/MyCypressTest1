// beforeEach - is a hook. it will be executed before each it block

describe('Validate web table elements', () => {
    beforeEach('Login', () => {
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('.btn.btn-primary').click();
        cy.get('.btn-close').click();
        cy.get('#menu-customer').click();
        cy.get('#menu-customer>ul>li:first-of-type').click();
    })

    it('calculate number of rows and columns', () => {
       cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', 10); // No. of rows
       cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', 7); // No .of column
    })

    it('validate cell data from specific row and column', ()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-of-type(6)>td:nth-of-type(3)').should('have.text', 'princytrainings4@gmail.com')
    })

    it('read all row and column value in first pasge', ()=> {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows)=>{                       // read all rows
            cy.wrap($row).within(()=> {                     // within - method to navigate inside the row
                cy.get('td').each(($col, index, $cols) => { // read all column
                    cy.log($col.text());
                })
            })
        })
    })

    it.only('pagination', () => {

        
        cy.get('.col-sm-6.text-end').then((e) => {
            let text = e.text();
            let pageNumString = text.split('(');
            let pageNum = pageNumString[1].split(' ');
            let totalPages = pageNum[0];

        for(let p=1; p<= totalPages; p++){
            if(totalPages>1){
                cy.log('Active page number is :::::::::::: '+ p);
                if((p % 10) == 0){
                    cy.get('ul.pagination>li:nth-of-type(10)').click();
                    cy.wait(2000);
                    cy.get('ul.pagination>li:nth-of-type('+ p +')').click();
                }
                else{
                    cy.get('ul.pagination>li:nth-of-type('+ p +')').click();
                    cy.wait(2000);
                }
                
                cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-of-type(1)')
                .each(($row, index, $rows) => {
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-of-type(3)').each(($col, index, $cols) => {
                            cy.log($col.text())
                        })
                    })
                })
            }
        }
            
        })
        // let totalPages = 6;
        // for(let p=1; p<= totalPages; p++){
        //     if(totalPages>1){
        //         cy.log('Active page number is :::::::::::: '+ p);
        //         cy.get('ul.pagination>li:nth-of-type('+ p +')').click();
        //         cy.wait(1000);

        //         cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        //         .each(($row, index, $rows) => {
        //             cy.wrap($row).within(()=>{
        //                 cy.get('td:nth-of-type(3)').each(($col, index, $cols) => {
        //                     cy.log($col.text())
        //                 })
        //             })
        //         })
        //     }
        // }


    })

});
