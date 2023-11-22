/// <reference types="Cypress" />

import { progressBarPage } from "../page-objects/progressBarPage"

describe('Progress Bar', () => {


  it.only('Check start stop progress', () => {
    cy.visit('https://demoqa.com/progress-bar')
    Cypress.on('uncaught:exception', (err, runnable) => { 
      return false
  })
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumber(25);
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumber(25);
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumber(50);
    progressBarPage.clickStartStopButton();
  })

  it('Check for full bar', () => {
    cy.visit('https://demoqa.com/progress-bar')
    Cypress.on('uncaught:exception', (err, runnable) => { 
      return false
  })
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumberWithTimeout(12000,100);
  })

  it('Check the reset button functionality', () => {
    cy.visit('https://demoqa.com/progress-bar')
    Cypress.on('uncaught:exception', (err, runnable) => { 
      return false
  })
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumberWithTimeout(12000,100);
    progressBarPage.clickResetBtn();
    //progressBarPage.checkProgressBarValueNumber(0);

  })
})