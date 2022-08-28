/// <reference types="cypress" />
const faker = require ('faker-br')
describe('Funcionalidade: Criar perfil', () => {
   
    beforeEach(() => {
        cy.visit('cadastrar')       
        var varName = faker.name.firstName()
        var varEmail = faker.internet.email()
        var varKey = faker.internet.password()
        cy.cadastrar(varName, varEmail,varKey,varKey)       
             
    });  
    it('Preenchimento de todos os dados do perfil', () => {
        cy.preenchimentoTodosDadosPerfil().then(() => {     
          });
    });
    it('Preenchimento do perfil sem dados de rede social', () => {
        cy.preenchimentoPerfilSemDadosRedeSocial().then(() => {                     
          });
    }); 
    it('Preenchimento dos campos obrigatórios do perfil', () => {
        cy.preenchimentoCamposObrigatoriosPerfil().then(() => {                     
        })
    });
});