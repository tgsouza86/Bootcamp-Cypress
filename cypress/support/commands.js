// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
const faker = require ('faker-br')

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})
Cypress.Commands.add("login", (email, senha) => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="login-submit"]').click()
 })


 Cypress.Commands.add("cadastrar", (name, email, key, checkKey) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(key)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(checkKey)
    cy.get('[data-test="register-submit"]').click()
 })

 Cypress.Commands.add("preenchimentoTodosDadosPerfil", () => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    cy.get('.MuiMenu-list li')
    .then(($li) => {
    const items = $li.toArray()
    return Cypress._.sample(items)
}).click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.address.city() + ' - ' + faker.address.state() )
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.random.word() +', ' + faker.random.word() +', ' + faker.random.word() +', ' + faker.random.word())
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('www.github.com')
    cy.get('[rows="1"]').type(faker.lorem.sentence(1))
    cy.get('[data-test="profile-socials"]').click()
    cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-facebook"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-youtube"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-instagram"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-medium"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-submit"]').click() 
    cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
    cy.get('.large').should('contain', 'Dashboard')
    cy.get('[data-test="dashboard-editProfile"]').should('contain', 'Editar Perfil')
    cy.get('[data-test="dashboard-addExperience"]').should('contain', 'Adicionar Experiência')
    cy.get('[href="/adicionar-formacao"]').should('contain', 'Adicionar Formação Acadêmica')
    cy.get('.container > :nth-child(5)').should('contain', 'Experiências')
    cy.get(':nth-child(6) > thead > tr > :nth-child(1)').should('contain', 'Empresa')
    cy.get(':nth-child(6) > thead > tr > :nth-child(2)').should('contain', 'Posição')
    cy.get(':nth-child(6) > thead > tr > :nth-child(3)').should('contain', 'Período')
    cy.get('.container > :nth-child(7)').should('contain', 'Formações Acadêmicas')
    cy.get(':nth-child(8) > thead > tr > :nth-child(1)').should('contain', 'Escola')
    cy.get(':nth-child(8) > thead > tr > :nth-child(2)').should('contain', 'Grau')
    cy.get(':nth-child(8) > thead > tr > :nth-child(3)').should('contain', 'Período')        
 })

 Cypress.Commands.add("preenchimentoPerfilSemDadosRedeSocial", () => {
    cy.get('[data-test="dashboard-createProfile"]').click()       
    cy.get('#mui-component-select-status').click()        
    cy.get('.MuiMenu-list li')
        .then(($li) => {
        const items = $li.toArray()
        return Cypress._.sample(items)
    }).click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.company.companyName())
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.url())
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.address.city() + ' - ' + faker.address.state() )
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.random.word() +', ' + faker.random.word() +', ' + faker.random.word() +', ' + faker.random.word())
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('www.github.com')
    cy.get('[rows="1"]').type(faker.lorem.sentence(1))
    cy.get('[data-test="profile-submit"]').click() 
    cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
    cy.get('.large').should('contain', 'Dashboard')
    cy.get('[data-test="dashboard-editProfile"]').should('contain', 'Editar Perfil')
    cy.get('[data-test="dashboard-addExperience"]').should('contain', 'Adicionar Experiência')
    cy.get('[href="/adicionar-formacao"]').should('contain', 'Adicionar Formação Acadêmica')
    cy.get('.container > :nth-child(5)').should('contain', 'Experiências')
    cy.get(':nth-child(6) > thead > tr > :nth-child(1)').should('contain', 'Empresa')
    cy.get(':nth-child(6) > thead > tr > :nth-child(2)').should('contain', 'Posição')
    cy.get(':nth-child(6) > thead > tr > :nth-child(3)').should('contain', 'Período')
    cy.get('.container > :nth-child(7)').should('contain', 'Formações Acadêmicas')
    cy.get(':nth-child(8) > thead > tr > :nth-child(1)').should('contain', 'Escola')
    cy.get(':nth-child(8) > thead > tr > :nth-child(2)').should('contain', 'Grau')
    cy.get(':nth-child(8) > thead > tr > :nth-child(3)').should('contain', 'Período')
 })

 Cypress.Commands.add("preenchimentoCamposObrigatoriosPerfil", () => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    //Seleção de status random
    cy.get('.MuiMenu-list li')
        .then(($li) => {
        const items = $li.toArray()
        return Cypress._.sample(items)
    }).click()
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.random.word() +', ' + faker.random.word() +', ' + faker.random.word() +', ' + faker.random.word())
    cy.get('[data-test="profile-submit"]').click()
    cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
    cy.get('.large').should('contain', 'Dashboard')
    cy.get('[data-test="dashboard-editProfile"]').should('contain', 'Editar Perfil')
    cy.get('[data-test="dashboard-addExperience"]').should('contain', 'Adicionar Experiência')
    cy.get('[href="/adicionar-formacao"]').should('contain', 'Adicionar Formação Acadêmica')
    cy.get('.container > :nth-child(5)').should('contain', 'Experiências')
    cy.get(':nth-child(6) > thead > tr > :nth-child(1)').should('contain', 'Empresa')
    cy.get(':nth-child(6) > thead > tr > :nth-child(2)').should('contain', 'Posição')
    cy.get(':nth-child(6) > thead > tr > :nth-child(3)').should('contain', 'Período')
    cy.get('.container > :nth-child(7)').should('contain', 'Formações Acadêmicas')
    cy.get(':nth-child(8) > thead > tr > :nth-child(1)').should('contain', 'Escola')
    cy.get(':nth-child(8) > thead > tr > :nth-child(2)').should('contain', 'Grau')
    cy.get(':nth-child(8) > thead > tr > :nth-child(3)').should('contain', 'Período')
 })