class home {

    elements = {
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]')
        
    }

    typeUsername(user_name) {
        this.elements.username().type(user_name)
    }

    typePassword(pass_word) {
        this.elements.password().type(pass_word)
    }

    clickLogin() {
        this.elements.loginButton().click()
    }



}


module.exports = new home();