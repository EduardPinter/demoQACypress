/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");
const data = require("../fixtures/data.json");
const user = {
  password: data.apiData.validPassword,
  username: data.apiData.validUsername,
}
const books =[
  {
    isbn: data.apiData.isbnOne,
  },
  {
    isbn: data.apiData.isbnTwo,
  }
]

describe("Post Books API", ()=>{
    before("Login via API", () =>{
        cy.authenticate(user);
      });

      it("Post books to profile", ()=>{
        cy.getCookie('token').then(($token) => {
            const token = $token.value;
        
            cy.getCookie('userID').then(($id) => {
              const userId = $id.value;
        
              cy.request({
                method: 'POST',
                url: Cypress.env("addBook"),
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                body: {
                  userId,
                  books,
                },
              }).then(($response) => {
                expect($response.status).to.eq(201);
              });
            });
          })
      })
})