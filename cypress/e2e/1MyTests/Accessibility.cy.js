describe('Accessibility Testing', () => {

    it('Accessibility', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.injectAxe();
        cy.checkA11y(null, null, terminalLog);

    })

    function terminalLog(violations) {
        cy.task('log', `${violations.length} accessibility violation
        ${violations.length === 1? '' : 's'}
        ${violations.length === 1? 'was' : 'were'} detected`);

        // specific key to keep the table readable
        const violationData = violations.map(
            ({id, impact, description, nodes}) => ({
                id, impact, description, nodes: nodes.length
            })
        );
        cy.task('table', violationData);

        //Formate violations and write to csv
        let axeViolations = violations.length;
        let report = violations.valueOf();
        
        let textresult = '';
        textresult = "\n ************** PageName: SauceDemo Home page ******************";

        for(let i=0; i< axeViolations; i++){
            let tempJSON = JSON.parse(JSON.stringify(report[i], ["description", "help", "impact", "tags", "nodes", "failureSummary", "any", "message", "target", "html"], '\t'));

            textresult = textresult + "\n VIOLATION # " + (i+1);
            textresult = textresult + "\n IMPACT: " + tempJSON["impact"];
            textresult = textresult + "\n DESCRIPTION: " + tempJSON["description"];
            textresult = textresult + "\n HELP TEXT: " + tempJSON["help"];
            textresult = textresult + "\n TAGS: " + tempJSON["tags"];
            textresult = textresult + "\n FAILURECOUNT: " + tempJSON["nodes"].length;
            textresult = textresult + "\n ";

            for(let j=0;j< tempJSON["nodes"].length; j++) {
                textresult = textresult + "\n FAILEDCOMPONENT: " + (j+1)+": " + JSON.stringify(tempJSON["nodes"][j]["target"]);
                textresult = textresult + "\n FAILEDCOMPONENTSOURCE: " + (j+1)+": " + JSON.stringify(tempJSON["nodes"][j]["html"]);
                textresult = textresult + "\n FAILEDCOMPONENT FIX: " + (j+1)+": " + JSON.stringify(tempJSON["nodes"][j]["failureSummary"]);
                textresult = textresult + "\n ";
            }
            textresult = textresult + "\n \n";
        }
        cy.writeFile('cypress/Accessibility/violations.csv', textresult , {flag: 'a+'});
    }
})