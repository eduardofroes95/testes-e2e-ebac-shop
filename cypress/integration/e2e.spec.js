/// <reference types="cypress" />
//importando a massa de dados
const dadosPerfil = require('../fixtures/perfil.json')
const massaDados = require('../fixtures/massaDados.json')
//importando a classe comprare2e e seus métodos
import adcProdutos from '../support/page_objects/adicionarProdutos'
import vendas from '../support/page_objects/finalizarVenda'
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
        cy.login(dadosPerfil.usuario, dadosPerfil.senha)
    })

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
        adcProdutos.adicionarProdutos(massaDados[0].quantidade)
       // cy.get('.sub-title > .woocommerce-Price-amount > bdi').should('contain', 'R$708,00')
    })

    it('Deve finalizar a venda com sucesso', () => {
        vendas.finalizarVenda()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})