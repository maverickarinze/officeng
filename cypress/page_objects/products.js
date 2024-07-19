class products {

    elements = {
        title: () => cy.get('[data-test="title"]'),
        shirtName: () => cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]'),
        shirtImage: () => cy.get('[data-test="item-sauce-labs-bolt-t-shirt-img"]'),
        cartButton: () => cy.get('[data-test="add-to-cart"]'),
        cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
        cartIcon: () => cy.get('[data-test="shopping-cart-link"]'),
        productNameInCart: () => cy.get('[data-test="inventory-item-name"]'),
        cartTitle: () => cy.get('[data-test="title"]'),
        itemQty: () => cy.get('[data-test="item-quantity"]'),
        itemPrice: () => cy.get('[data-test="inventory-item-price"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        checkoutCheck: () => cy.get('[data-test="title"]'),
        checkoutFirstname: () => cy.get('[data-test="firstName"]'),
        checkoutLastname: () => cy.get('[data-test="lastName"]'),
        checkoutPostal: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        orderPageCheck: () => cy.get('[data-test="title"]'),
        shirtDetails: () => cy.get('.cart_item_label'),
        itemTotal: () => cy.get('[data-test="total-label"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        thankYou: () => cy.get('[data-test="complete-header"]'),
        homeButton: () => cy.get('[data-test="back-to-products"]'),
        burgerButton: () => cy.get('#react-burger-menu-btn'),
        logoutButton: () => cy.get('[data-test="logout-sidebar-link"]')

        
    }

    checkProductPage() {
        this.elements.title()
    }

    selectShirt() {
        this.elements.shirtName().click()
    }

    addToCart() {
        this.elements.cartButton().click()
    }

    openCart() {
        this.elements.cartIcon().click()
    }

    clickCheckout() {
        this.elements.checkoutButton().click()
    }

    enterFirstName(fName) {
        this.elements.checkoutFirstname().type(fName)
    }

    enterLastName(lName) {
        this.elements.checkoutLastname().type(lName)
    }

    enterPostalCode(post) {
        this.elements.checkoutPostal().type(post)
    }

    clickContinue() {
        this.elements.continueButton().click()
    }

    clickFinish() {
        this.elements.finishButton().click()
    }

    clickHomeButton() {
        this.elements.homeButton().click()
    }

    logout() {
        this.elements.burgerButton().click()
        this.elements.logoutButton().click()
    }







}

module.exports = new products();