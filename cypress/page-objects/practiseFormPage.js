class PractiseFormPage {

    constructor(){
        //super();
        this.firstNameField = "#firstName";
        this.lastNameField="#lastName";
        this.emailField="#userEmail"; // email field not populated but form passes through?
        this.genderRadioBtns="input[name='gender']";
        this.mobileNumberField="#userNumber";
        this.dateOfBirth = "#dateOfBirthInput"; // clear() crashes the page
        this.dateOfBirthPicker = ".react-datepicker__month-container";
        this.subjectsField=".subjects-auto-complete__value-container";
        this.hobbiesCheckboxes="input[type='checkbox']";
        this.pictureInput="#uploadPicture";
        this.currentAddressField = "#currentAddress";
        this.selectStateDropdown="#state";
        this.stateOptions="div[id*='react-select-3-option']";
        this.cityOptions="div[id*='react-select-4-option']";
        this.selectCityDropdown="#city";
        this.submitBtn="#submit";
        this.formRows="tbody>tr";
        
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
            case "mobile":
                cy.get(this.mobileNumberField).clear().type(value);
                break;
            case "subjects":
                cy.get(this.subjectsField).type(value+'{enter}'); // clear() makes the page crash
                break;
            case "address":
                cy.get(this.currentAddressField).clear().type(value);
                break;
            default:
                throw new Error("No field with that name");
        }
    }

    checkGenderByValue(value){
                cy.get(this.genderRadioBtns+"[value="+ value +"]").click({force:true});
    }

    checkHobbyByValue(value){
        cy.get(this.hobbiesCheckboxes+"[value="+ value +"]").click({force:true});
    }

    pickStateOption(option){
        cy.get(this.selectStateDropdown).scrollIntoView().click();
        cy.get(this.stateOptions).eq(option).click();
    }

    setDate(month,year,day){
        cy.get(this.dateOfBirth).click();
        cy.get(".react-datepicker__year-select").select(year);
        cy.debug();
        cy.get(".react-datepicker__month-select").select(month);
        cy.debug();
        cy.get(".react-datepicker__month").find(".react-datepicker__day").contains(day).click();

    }

    pickCityOption(option){
        cy.get(this.selectCityDropdown).scrollIntoView().click();
        cy.get(this.cityOptions).eq(option).click();
    }

    uploadPicture(path){
        cy.get(this.pictureInput).attachFile(path)
    }

    clickSubmitBtn(){
        cy.get(this.submitBtn).click();
    }

    assertSubmittedValues(value, submittedValue){
        switch(value){
            case "name":
                cy.get(this.formRows).eq(0).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "email":
                cy.get(this.formRows).eq(1).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "gender":
                cy.get(this.formRows).eq(2).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "mobile":
                cy.get(this.formRows).eq(3).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "dateOfBirth":
                cy.get(this.formRows).eq(4).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "subjects":
                cy.get(this.formRows).eq(5).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "hobbies":
                cy.get(this.formRows).eq(6).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "picture":
                cy.get(this.formRows).eq(7).find("td").eq(1).should('have.text', submittedValue);
                break;
            case "address":
                cy.get(this.formRows).eq(8).find("td").eq(1).should('have.text', submittedValue);
                    break;
            case "stateCity":
                cy.get(this.formRows).eq(9).find("td").eq(1).should('have.text', submittedValue);
                    break;
            default:
                throw new Error("no data with that name");
        }
    } 

}
export const practiseFormPage = new PractiseFormPage();