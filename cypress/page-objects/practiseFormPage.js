class PractiseFormPage {

    constructor(){
        //super();
        this.firstNameField = "#firstName";
        this.lastNameField="#lastName";
        this.emailField="#userEmail"; // email field not populated but form passes through?
        this.genderRadioBtns="input[name='gender']";
        this.mobileNumberField="#userNumber";
        this.dateOfBirth = "#dateOfBirthInput";
        this.dateOfBirthPicker = ".react-datepicker__month-container";
        this.subjectsField=".subjects-auto-complete__value-container";
        this.hobbiesCheckboxes="input[type='checkbox']";
        this.pictureInput="#uploadPicture";
        this.currentAddressField = "#currentAddress";
        this.selectStateDropdown="#state";
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
                cy.get(this.subjectsField).clear().type(value+'{enter}');
                break;
            case "address":
                cy.get(this.currentAddressField).clear().type(value);
                break;
            default:
                throw new Error("No field with that name");
        }
    }

    checkGenderByValue(value){
                cy.get(this.genderRadioBtns+"[value="+ value +"]").click();
    }


}
export const practiseFormPage = new PractiseFormPage();