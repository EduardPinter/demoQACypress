/// <reference types="Cypress" />


import { webTablesPage } from "../page-objects/webTablesPage";
const data = require("../fixtures/data.json");
const dataArray = [data.webTable.firstName, data.webTable.lastName, data.webTable.email, data.webTable.age, data.webTable.salary, data.webTable.department]

describe('Progress Bar', () => {
  beforeEach(function() {
    cy.visit('https://demoqa.com/webtables')
  })

  it('Edit a Table', () => {
    webTablesPage.assertSingleValueCellNot(0,0, "Edi");
    webTablesPage.clickEditRowBtn(0);
    webTablesPage.enterValueToField("firstName", "Edi");
    webTablesPage.clickSubmitBtn();
    webTablesPage.assertSingleValueCell(0,0, "Edi");
  })
})