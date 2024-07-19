import home from "../page_objects/home";
import products from "../page_objects/products";

describe('OfficeNG Assessment', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        home.typeUsername('standard_user')
        home.typePassword('secret_sauce')
        home.clickLogin()

        //Verify that login is successful
        products.elements.title().should('have.text', 'Products')
    })

    it('Should Buy a TShirt', () => {
        products.selectShirt()
        products.elements.shirtImage().should('be.visible')

        //Add to Cart
        products.addToCart()
        products.elements.cartBadge().should('be.visible')

        //Open Cart
        products.openCart()
        products.elements.cartTitle().contains('Your Cart')
        products.elements.productNameInCart().should('have.text', "Sauce Labs Bolt T-Shirt")
        products.elements.itemPrice().should('be.visible')
        products.elements.itemQty().should('be.visible')
        products.clickCheckout()

        //Checkout Page
        products.elements.checkoutCheck().contains('Checkout: Your Information')
        products.enterFirstName('John')
        products.enterLastName('Doe')
        products.enterPostalCode('20245')
        products.clickContinue()

        //Finalize Checkout Page
        products.elements.orderPageCheck().should('have.text', 'Checkout: Overview')
        products.elements.shirtDetails().should('be.visible').contains('Sauce Labs Bolt T-Shirt')
        products.elements.itemTotal().should('be.visible')
        products.clickFinish()
        products.elements.thankYou().should('have.text', 'Thank you for your order!').should('be.visible')

        //Logout from the Website
        products.clickHomeButton()
        products.logout()

        //Verify that user is logged out
        home.elements.username().should('be.visible')
    })
})