/// <reference types="cypress" />



describe('US0001 - Funcionalidade: Login', () =>{

beforeEach(() => {
    cy.visit('login')
});


    it ('Deve fazer login com sucesso', () =>{

       
        cy.login('tiago.goncalves-ext@viavarejo.com.br', '123456')      
        cy.get('[data-test="dashboard-welcome"]').contains('Tiago Souza')
       
    });    
    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {
        cy.login('tiago.goncalves-ext@viavarejo.com.br', 'testefddfd@123')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });
});




/*

    Funcionalidade: Login

    Eu como usuário das Conexao QA

    Quero Fazer o login

    Para editar meu perfil



    Cenário: login com sucesso

   

*/