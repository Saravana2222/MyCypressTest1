# MyCypressTest1

Cypress configuration::::::::
- add folder to VS Code
- Generate package.json : npm init
- npm install cypress --save-dev
- npx cypress open
- Cypress intellisence: /// <reference types= "cypress" />  - add in command.js file
- xpath plugin: npm install cypress-xpath --save-dev  - add import 'cypress-xpath' in command.js file


Run commands:
npx cypress open	or node_modules/.bin	cypress open

Headed mode: npx cypress run --headed
	npx cypress run --spec cypress/e2e/1MyTests/Sainsbury_Test.cy.js --headed
Headless mode: npx cypress run
	specific file: npx cypress run --spec cypress/e2e/1MyTests/Sainsbury_Test.cy.js
	specific browser: npx cypress run --spec cypress/e2e/1MyTests/Sainsbury_Test.cy.js --browser chrome
	
Hierarchy :
 spec file(*.cy.js) -> describe(test suit) -> it (test)
 

Locators:
	- By default support CSS selector
	- Xpath by installing plug
	
	CSS Selectors:
		tag id (tag is optional) : #input_id1
		tag class: .parent_class001
		tag attribute: [name="search_query1"]
		tag class attribute: 
	
	XPATH:
		- install npm i cypress-xpath --save-dev
		- add /// <reference type = "cypress" /> in spec file or coomand.js to get all cypress commands while typing
		- add /// <reference types="cypress-xpath" /> in the command.js to use xpath in all the spec files
		- add require('cypress-xpath') in e2e.js file
		
Cypress Assertions:
	1) Implicit assertion: Build in assertion supported by cypress directly
		should
		and
	2) Explicit assertion: write explcitly
		expect
		assert
	all assertion are derived from chai library
	cy.url() - get url of the current page
	
	1) Implicit assertion:
		- should [ex: cy.url().should('include', 'sainsbury.com')]
			- include, eq, contain, not.include, not.eq, not.contain, exist, have.length, have.value
	2) Explicit assertion:
		- expect: used in BDD approach
		- assert: Used in TDD approach

it.skip('dropdown test',() => {}) ----- .skip used to skip the block from execution
it.only('',()=>{}) ----------. only used to execute only the selected it block
	
	


============= Naveen labs=================
- Cypress Intelligent Code Completion using IntelliSense:
	IntelliSense is a code completion technique that provides suggestions directly in your IDE while writing Cypress tests. It includes several features:
Autocomplete Commands
Autocomplete Assertions
Signature help (give information about command on hovering)

add the below line at top of your javascript or typescript spec file:
/// <reference types="Cypress" />

Reference type declarations via jsconfig
{
  "include": ["./node_modules/cypress", "cypress/**/*.js"]
}

-------
Cypress error handling:::

- The following error originated from your application code, not from Cypress.
> r(...).popover is not a function
When Cypress detects uncaught errors originating from your application it will automatically fail the current test.
This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception event.

Solution: https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
paste below in e2e.js:
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

- is being covered by another element:
<img src="/_resources/themes/orangehrm/dist/images/OrangeHRM_Logo.svg" alt="OrangeHRM Logo">
Fix this problem, or use {force: true} to disable error checking.

Solution: https://docs.cypress.io/guides/references/error-messages#cy-failed-because-the-element-cannot-be-interacted-with
cy.get('[disabled]').click({force: true}).

- Click button under iframe:
	cy.get('iframe#sp_message_iframe_802595')
    .should('be.visible')
    .then(($iframe) => {
        const $body = $iframe.contents().find('body')

    cy.wrap($body)
    .find('button.message-component.message-button.no-children.focusable.sp_message-accept-button.sp_choice_type_11').click();
})

- cross browser orgin error beacuse of iframe
solution: add below in cypress.config.js file before e2e
			chromeWebSecurity: false,

==================================================================================================================
************************** Practice *********************************#
- Xpath, CSS 
- cpress installation
- //Implicit assertions: Should - include, eq, contain, not.include, not.eq, not.contain, exist, value. length
- //Explicit assertion: expect, assert
- get text. get url, get title
- uncaught exception
- it.skip, it.only
- Intellisense command: /// <reference types="cypress" /> in command.js
- PlugIns: 
	- cypress-xpath
	- cypress-iframe
	- cypress-file-upload
	- @4tw/cypress-drag-drop
- Radio button:																												//** https://www.techlistic.com/p/selenium-practice-form.html
		- check radio button: check()
		- Verfiy the selection: should('be.checked'), should('not.be.checked')
- Check box
	- Check: check()
	- Un check: uncheck()
	- verify: should('be.checked'), should('not.be.checked')
	- check all: find a css locator which matches all the checkbox and use check()
	- un check all: find a css locator which matches all the checkbox and use uncheck()
	- check first: .first().check()
	- check last: .last().check()
- Drop Down
	- select dropdown: .select(value)
	- Dropdown without select - Bootstrap drop down: .type('Russia').type('{enter}')
	- Auto suggest dropdown: use .contains('Tamil Nadu').click()
	- Dynamic drop downs: use .each() and cy.wrap():
				cy.get().each(($el, index, $list) => {
					if(($el.text()) == 'Tamil'){
						cy.wrap($el).click();
					}
				})

- Alerts																											///*** https://demoqa.com/alerts
	- Alert with OK button: cy.on('window:alert', (t) => {};  use expect() to validate the alert message-button
	- Confirmation alert: cy.on('window:confirm', (t) => (); use expect() to validate the alert message-button; => false to cancel
	- Prompt alert: 
		ok:  cy.window().then((win) => { cy.stub(win, 'prompt').returns('Welcome to Cypress');})
				then trigger alert
		cancel: cy.window().then((win) => {cy.stub(win, 'prompt').callFake(() => null)})
	- Authentication alerts:
		cy.visit('url', {auth:{username: 'sara2322', password: 'pass1233'}} );
		cy.visit('https://sara2322:pass1233@url');

- Iframe: cypress-iframe plugin	  , place commad in command.js																					/*** https://demoqa.com/frames
	 cy.frameLoaded();
	 cy.iframe(css).find(css)

- handling new tabs:																								/*** https://demoqa.com/browser-windows
	- .invoke('removeAttr', 'target').click();  if it has target attribute
	- extract href: .then((el) => { cy.visit( el.prop('href') ) })
- Mouse operation:																									/*** https://demoqa.com/droppable 
	- mouseover: .trigger('mouseover').click();
	- right click:
					- .rightclick();
					- .trigger('contectmenu');
	- double click:
					- .dblclick();
					- .trigger('dblclick');
					
	- drag and drop: install '@4tw/cypress-drag-drop' and add import '@4tw/cypress-drag-drop' to command.js / e2e.js (TBC)
						.drag(CSS targeteleemnet);
						.drag(CSS targeteleemnet, {force: true}); // if the eelement get hidden err
	- Scroll page:
					.scrollIntoView();
					.scrollIntoView({duration: 2000}) - scroll slow
					
- File Upload
			install 'cypress-file-upload' and add import 'cypress-file-upload' to command.js
			Place files in fixture folder
			- Single file upload: if attribute type = file; .attachFile('myFile.txt');
			- Single file upload rename: .attachFile(filePath: 'myfile.txt', fileName: 'renamed file.txt');
			- drag and drop: .attachFile('myfile.txt', {subjectType: 'drag-n-drop'});
			- Multiple file: .attachFile('file.txt', 'file2.docx');
			- shadow DOM: cy.get( css, {includeShadowDom}).attachFile('file.txt');
- web table:
			- calculate no of rows: >tbody>tr').length;
			  calculate no of Cols: >tbody>tr>td').length;
			- validate specific cell data: cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-of-type(6)>td:nth-of-type(3)').should('have.text', 'text');
			- Read all rows and colums:
				cy.get(tbody>tr).each(($row, index, $rows)=>{		// read all rows
					cy.wrap($row).within(()=>{						// navigate inside the row
						cy.get('td').each(($col, index, $cols) => { // read all cols
							cy.log($col.text());
						})
					})
				})
			
			
			
- mochawesome report
	- npm i --save-dev cypress-mochawesome-reporter
	- Edit config file (cypress.config.js by default)
			const { defineConfig } = require('cypress');
				module.exports = defineConfig({
				  reporter: 'cypress-mochawesome-reporter',
				  e2e: {
					setupNodeEvents(on, config) {
					  require('cypress-mochawesome-reporter/plugin')(on);
					},
				  },
				});
	- Add to cypress/support/e2e.js
			import 'cypress-mochawesome-reporter/register';
	- run test in headless mode

- Accessibility Testing:
	- npm install --save-dev cypress-axe
	- Install peer dependencies: npm install --save-dev cypress axe-core
	- Include the command ij e2e.js: import 'cypress-axe'
	- add below in cypress.configure.js:
		      on('task', {
					pally: pally((pallyReport) => {
					console.log(pallyReport)
					})	
				})
				
- Page Object Method Pattern:
	- Create a folder 'PageObject' and create class and method inside
	- export the class: export default Login;
	- import the class in test script file: import Login from "../PageObject/LoginPage.js";
	- Create object reference variable for Login class
		const ln = new Login();
	- use locators with .this keywords
	
- Hooks and tags:
		Hooks - Specify pre requisites
		      - Before / after executing any steps
		1. Before - before(()=> {})
		     Executed only once
		     Before executing any tests
		2. after - after(()=> {})
		     Executed only once
		     after executing any tests
		3. beforeEach - beforeEach(()=>{})
		    Multiple times
		    Before starting each it block
		4. afterEach - afterEach(() => {})
		     Multiple times
		     After executing each it block

		tags: it.skip, it.only, 
- Fixture
	- Fixtures folder - used to store test data files
	- Cypress automatically regogonise the files from fixtures folder
		- cy.fixture('saucedemo.json').then((data) => {
- Data Driven Testing:
	- Add multiple set of data in the test data file and execute same tests
	[
    {
        "username": "standard_user",
        "password": "secret_sauce",
        "homepageElement" : "Swag Labs"
    },
    {
        "username": "locked_out_user",
        "password": "secret_sauce",
        "homepageElement" : "Epic sadface: Sorry, this user has been locked out."
    }
	]

- Custom commands:
		Custom command: create your own commands
		create new custom command
		overwrite an existing command
		create a custom command for common function
	command.js file
		- //add new command
			Cypress.Commands.add('clickLink', (label)=> {
				cy.get('a').contains(label).click();
			})
			
			usage: cy.clickLink('Sauce Labs Backpack');
			
		 //Custom command for saucelab login
			Cypress.Commands.add('saucedemoLogin', (username, password) => {
			cy.get('#user-name').type(username);
			cy.get('#password').type(password);
			cy.get('#login-button').click();
			})	

			usage:  cy.saucedemoLogin('standard_user', 'secret_sauce');
			
- Browser navigation:
	- cy.go('back');		cy.go(-1);
	- cy.go('forward');     cy.go(1);
	
- screenshots: 
		/*1) Manually - cy.screenshot();
		- name the File: cy.screenshot('Homepage')
		- screenshot of an element cy.get('#item_4_img_link').screenshot('backpack');
						
		2) Whenever failure -by default cypress handle that when the test are executed in hedless mode */
=========================================================================================================================================================
*************** Cypress with Cucumber *****************************
- npm install -D cypress-cucumber-preprocessor
- Update the below in cypress.config.js
	const cucumber = require('cypress-cucumber-preprocessor').default;
	
	under e2e: setUpNodeEvents ()::::
		on('file:preprocessor', cucumber())
		},
		specPattern: "cypress/e2e/BDD/*.feature",
		excludeSpecPattern: ['*.js', '*.md'],
	in package.json:::
		"cypress-cucumber-preprocessor": {
			"nonGlobalStepDefinitions": true,    // read step defenition mentioned outside of below folder
			"step_definitions": "cypress/e2e/BDD"
		}
	in step defenition file:::
		import {Give, When, Then} from 'cypress-cucumber-preprocessor/steps'
		
		Given('My first Cypress BDD', () => {})
		
- Feature file structure:
	Feature: Functinality name
	Scenario: Individual scenario 
	Scenario Outline: used when diff paameter for same set of tests
	Examples: Need use this when Sceanrio Outline is defines
	Background: Run steps which are common to all scenarios
# is used to comment the line

- tags:
	Feature level tag
	scenario level tag
	sample level tag
	
=========================================================================================================================================================
*************** Cypress API Automation *****************************
- Setup:	
	- create package.json file: npm init
	- intsall cypress: npm install cypress --save -dev : another dev is going to use this, they dont need to download the cypress again
	- 
	
	
============================================================
- npm install --save-dev::

	npm install saves any specified packages into dependencies by default. Additionally, you can control where and how they get saved with some additional flags:
		-P, --save-prod: Package will appear in your dependencies. This is the default unless -D or -O are present.
		-D, --save-dev: Package will appear in your devDependencies.
		-O, --save-optional: Package will appear in your optionalDependencies.
		--no-save: Prevents saving to dependencies.

	The difference between dependencies and devdependencies, are that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

	To save a dependency as a devDependency on installation we need to do an npm install --save-dev, instead of just an npm install --save. A nice shorthand for installing a devDependency that I like to use is npm i -D. The shorthand for saving a regular dependency is -S instead of -D.

	Some good examples of dependencies which would be required at runtime include React, Redux, Express, and Axios.

	Some good examples of when to install devDependencies would be Nodemon, Babel, ESLint, and testing frameworks like Chai, Mocha, Enzyme, etc…
