describe('API', () => {

    after(function() {
        cy.request("DELETE", "https://demoqa.com/Account/v1/User/");
    })

      it('Post Books', () => {
        webTablesPage.assertSingleValueCellNot(0,0, "Edi");
        webTablesPage.clickEditRowBtn(0);
        webTablesPage.enterValueToField("firstName", "Edi");
        webTablesPage.clickSubmitBtn();
        webTablesPage.assertSingleValueCell(0,0, "Edi");
      })

      it('Delete All Books', () => {
        webTablesPage.assertSingleValueCellNot(0,0, "Edi");
        webTablesPage.clickEditRowBtn(0);
        webTablesPage.enterValueToField("firstName", "Edi");
        webTablesPage.clickSubmitBtn();
        webTablesPage.assertSingleValueCell(0,0, "Edi");
      })

  })