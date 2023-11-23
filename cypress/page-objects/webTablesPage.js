import { forEach } from "lodash";

class WebTablesPage {

    constructor(){
        this.addBtn = "#addNewRecordButton";
        this.firstNameField="#firstName";
        this.lastNameField="#lastName";
        this.emailField="#userEmail";
        this.ageField="#age";
        this.salaryField="#salary";
        this.departmentField="#department";
        this.submitBtn="#submit";
        this.deleteRowBtn="span[title='Delete']";
        this.rows="div[role='rowgroup']";
        this.registrationForm=".modal-content";

    }

clickAddBtn(){
    cy.get(this.addBtn).click();
}

assertSubmittedValues(rowNum, submittedValue){

            cy.get(this.rows).eq(rowNum).find("div[role='gridcell']").eq(0).should('have.text', submittedValue[0]);
            cy.get(this.rows).eq(rowNum).find("div[role='gridcell']").eq(1).should('have.text', submittedValue[1]);
            cy.get(this.rows).eq(rowNum).find("div[role='gridcell']").eq(2).should('have.text', submittedValue[2]);
            cy.get(this.rows).eq(rowNum).find("div[role='gridcell']").eq(3).should('have.text', submittedValue[3]);
            cy.get(this.rows).eq(rowNum).find("div[role='gridcell']").eq(4).should('have.text', submittedValue[4]);
            cy.get(this.rows).eq(rowNum).find("div[role='gridcell']").eq(5).should('have.text', submittedValue[5]);
} 

assertPresenceOfFormWindow(){
    cy.wait(2000);
    cy.get(this.registrationForm).should('exist');
}

enterValueToField(fieldName, value){
    switch(fieldName){
        case "firstName":
            cy.get(this.firstNameField).clear().type(value);
            break;
        case "lastName":
            cy.get(this.lastNameField).clear().type(value);
            break;
        case "email":
            cy.get(this.emailField).clear().type(value);
            break;
        case "age":
            cy.get(this.ageField).clear().type(value);
            break;
        case "salary":
            cy.get(this.salaryField).clear().type(value);
            break;
        case "department":
            cy.get(this.departmentField).clear().type(value);
            break;
        default:
            throw new Error("No field with that name");
    }
}

clickSubmitBtn(){
    cy.get(this.submitBtn).click();
}
}
export const webTablesPage = new WebTablesPage();