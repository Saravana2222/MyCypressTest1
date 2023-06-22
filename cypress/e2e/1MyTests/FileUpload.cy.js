// Need to install file upload pacakge
// npm install --save-dev cypress-file-upload
// To be able to use any custom command you need to add it to cypress/support/commands.js like this: import 'cypress-file-upload';

describe('File Upload', ()=> {

    //Inspect File upload element. If type=file available, use attachFile() method
    // all files needs to be placed under fixture folder for attachFile() method
    it.skip('single file upload', ()=> {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('input#file-upload').attachFile('MyWord test.docx');
        cy.get('input#file-submit').click();
        cy.get('div.example>h3').should('have.text', 'File Uploaded!')
    })

    it.skip('single file upload - Rename file', ()=> {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('input#file-upload').attachFile({filePath: 'MyWord test.docx', fileName: 'renamed file.docx'});
        cy.get('input#file-submit').click();
        cy.get('div.example>h3').should('have.text', 'File Uploaded!')
    })

    it.skip('File upload - Drag and drop', ()=> {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('MyWord test.docx', {subjectType:'drag-n-drop'});
        cy.wait(4000);
        cy.get('div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"]>div.dz-details>div')
        .contains('MyWord test.docx');

    })

    it.skip('Upload multiple files', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('input#filesToUpload').attachFile(['myText.txt', 'MyWord test.docx']);
    })

    //Shadow DOM : DOM contains another dom
    // file upload option present under Shadow DOM
    it('File upload -Shadow DOM', ()=> {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('input.smart-browse-input', {includeShadowDom: true}).attachFile('myText.txt');
        cy.get('.smart-item-name', {includeShadowDom: true}).contains('myText.txt')
    })
})