/// <reference types="Cypress" />

import { progressBarPage } from "../page-objects/progressBarPage"

describe('Progress Bar', () => {

  beforeEach(function() {
    cy.visit('https://demoqa.com/progress-bar')
  })


  it('Check start stop progress', () => {
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumber(25);
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumber(25);
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumber(50);
    progressBarPage.clickStartStopButton();
  })

  it('Check for full bar', () => {
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumberWithTimeout(12000,100);
  })

  it.only('Check the reset button functionality', () => {
    progressBarPage.clickStartStopButton();
    progressBarPage.checkProgressBarValueNumberWithTimeout(11000,100);
    cy.pause();
    progressBarPage.clickResetBtn();
    progressBarPage.checkProgressBarValueNumberWithTimeout(2000,0);

  })
})