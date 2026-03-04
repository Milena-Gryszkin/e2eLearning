
/// <reference types="Cypress" />

describe('My first test', () => {
  it('Gets, types, and asserts', () => {
    //Arrange 

    cy.visit('https://example.cypress.io')
cy.contains('type').click()
cy.url().should('include', '/commands/actions')

//Act
cy.get('.action-email').type('fake@email.com')

 //Asserts
  cy.get('.action-email').should('contain.value', '@email.com')
  })
  
})
describe('My second test', () => {
  it('Localhost', () => {
cy.log('Visiting localhost')
    cy.visit('http://localhost:3000')
  })
  
})