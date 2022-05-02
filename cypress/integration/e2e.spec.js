/// <reference types="cypress" />
//importando a massa de dados
const dados = require('../fixtures/perfil.json')
const massaDados = require('../fixtures/massaDados.json')
//importando a classe comprare2e e seus métodos
import comprare2e from '../support/page_objects/comprandoe2e'
// Olá professor Fábio!

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    before(() => {
        cy.visit('minha-conta')
        cy.login(dados.usuario, dados.senha)
    })

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
        comprare2e.comprandoe2e(massaDados[0].quantidade)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    })


})