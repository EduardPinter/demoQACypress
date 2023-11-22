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
}
export const webTablesPage = new WebTablesPage();