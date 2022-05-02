class comprare2e {

    comprandoe2e(quantidade) {
        cy.visit('produtos')
        cy.get('[class="product-block grid"').eq(0).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
        cy.visit('produtos')
        cy.get('[class="product-block grid"').eq(1).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.visit('produtos')
        cy.get('[class="product-block grid"').eq(2).click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.visit('produtos')
        cy.get('[class="product-block grid"').eq(3).click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('[class="input-radio"]').eq(2).check()
        cy.get('[name="terms"]').check()
        cy.get('#place_order').click({force:true})
    }

}

export default new comprare2e()