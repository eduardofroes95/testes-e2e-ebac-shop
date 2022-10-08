class vendas {

    finalizarVenda() {
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()
        cy.get('[class="input-radio"]').eq(2).check()
        cy.get('[name="terms"]').check()
        cy.get('#place_order').click({force:true})
    }


}

export default new (vendas)