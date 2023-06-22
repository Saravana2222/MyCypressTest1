class saucedemoLogin {

    sm_username = '#user-name';
    sm_password = '#password';
    sm_submit = '#login-button';
    sm_homeLogo = '.app_logo';



    setUsername(username){
        cy.get(this.sm_username).type(username);
    }

    setPassword(password){
        cy.get(this.sm_password).type(password);
    }

    submit(){
        cy.get(this.sm_submit).click();
    }

    verifyHomepage(){
        cy.get(this.sm_homeLogo).should('have.text', 'Swag Labs');
    }


}

export default saucedemoLogin;