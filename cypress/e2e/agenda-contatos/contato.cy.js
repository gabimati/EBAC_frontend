/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 inputs', () => {
        cy.get('input').should('have.length', 3)
    })


    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('gabi mameri')
        cy.get('input[placeholder="E-mail"]').type('gabimameri@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('11999883300')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').clear().type('Gabriela Tinoco')
        cy.get('input[placeholder="E-mail"]').clear().type('gabitinoco@gmail.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11999884040')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})