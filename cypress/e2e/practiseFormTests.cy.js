
/// <reference types="Cypress" />
import { forEach } from "lodash";
import { practiseFormPage } from "../page-objects/practiseFormPage";
const data = require("../fixtures/data.json");
const dataArray = [data.formData.firstName + " " + data.formData.lastName, data.formData.email, data.formData.gender,data.formData.number,data.formData.dateOfBirth, data.formData.subjects[0], "Sports",data.formData.address, data.formData.stateOne.state, , data.formData.stateOne.city[0], "Homer.png"]
const dataArrayFormFields = ["name", "email","gender", "mobile", "dateOfBirth", "subjects", "hobbies", "picture", "address", "stateCity"]
describe("Practise form tests", () => {

    it("Submit data to form and recheck modal window", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        practiseFormPage.enterValueToField("firstName",data.formData.firstName);
        practiseFormPage.enterValueToField("lastName",data.formData.lastName);
        practiseFormPage.enterValueToField("email",data.formData.email);
        practiseFormPage.checkGenderByValue("Male");
        practiseFormPage.enterValueToField("mobile",data.formData.number);
        // TODO - add date
        practiseFormPage.enterValueToField("subjects",data.formData.subjects[0]);
        practiseFormPage.checkHobbyByValue("1"); // TODO - change the hobby method
        practiseFormPage.enterValueToField("address",data.formData.address);
        practiseFormPage.pickStateOption(0);
        practiseFormPage.pickCityOption(0);
        practiseFormPage.uploadPicture("Homer.png");
        practiseFormPage.clickSubmitBtn();
        for(var i = 0; i<dataArrayFormFields.length; i++){
            practiseFormPage.assertSubmittedValues(dataArrayFormFields[i], dataArray[i]);
        }
    
    })
})