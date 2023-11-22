/// <reference types="Cypress" />

describe('template spec', () => {
  it('Check start stop progress', () => {
    cy.visit('https://demoqa.com/progress-bar')
    Cypress.on('uncaught:exception', (err, runnable) => { 
      return false
  })
    cy.contains("Start").click();
    
  })
})