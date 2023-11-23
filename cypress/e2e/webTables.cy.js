/// <reference types="Cypress" />


import { webTablesPage } from "../page-objects/webTablesPage";
const data = require("../fixtures/data.json");
var enterDataArray = [];
const enterDataArrayFormFields = ["firstName", "lastName","email", "age", "salary", "department"];
const checkDataArray = [data.webTable.firstName, data.webTable.lastName, data.webTable.age, data.webTable.email, data.webTable.salary, data.webTable.department]

describe('Progress Bar', () => {

  beforeEach(function() {
    cy.visit('https://demoqa.com/webtables')
  })

  it('Add table happy flow', () => {
    enterDataArray = [data.webTable.firstName, data.webTable.lastName, data.webTable.email, data.webTable.age, data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertSubmittedValues(3, checkDataArray)
  })

  it('Add table wrong email format #1', () => {
    enterDataArray = [data.webTable.firstName, data.webTable.lastName, data.webTable.wrongEmailOne, data.webTable.age, data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();
  })

  it('Add table wrong email format #2', () => {
    enterDataArray = [data.webTable.firstName, data.webTable.lastName, data.webTable.wrongEmailTwo, data.webTable.age, data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();
  })

  it('Numbers in First Name field', () => {
    enterDataArray = [1, data.webTable.lastName, data.webTable.email, data.webTable.age, data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();

  })

  it('Special characters in First Name field', () => {
    enterDataArray = ["#", data.webTable.lastName, data.webTable.email, data.webTable.age, data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();

  })

  it('Numbers in Last Name field', () => {

    enterDataArray = [data.webTable.firstName, 2, data.webTable.email, data.webTable.age, data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();

  })

  it('Special characters in Last Name field', () => {

    enterDataArray = [data.webTable.firstName, "#", data.webTable.email, data.webTable.age, data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();

  })

  it('Special characters in Age field', () => {

    enterDataArray = [data.webTable.firstName, data.webTable.lastName, data.webTable.email, "#", data.webTable.salary, data.webTable.department]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();

  })

  it('Numbers in Department field', () => {

    enterDataArray = [data.webTable.firstName, data.webTable.lastName, data.webTable.email, data.webTable.age, data.webTable.salary, 3]
    webTablesPage.clickAddBtn();
    for(var i = 0; i<enterDataArray.length; i++){
      webTablesPage.enterValueToField(enterDataArrayFormFields[i], enterDataArray[i]);
  }
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertPresenceOfFormWindow();

  })
})