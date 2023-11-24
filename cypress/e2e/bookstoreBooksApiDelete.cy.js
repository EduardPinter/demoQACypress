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

describe("Delete all books", () => {
  beforeEach("Login via API", () =>{
    cy.authenticate(user);
    cy.addBooks(books);
  });

  it("Delete All books positive", ()=>{
    cy.getCookie('token').then(($token) => {
      const token = $token.value;

      cy.getCookie('userID').then(($id) => {
        const userId = $id.value;

        cy.request({
          method: 'DELETE',
          url: Cypress.env("addBook")+`?UserId=${userId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(($response) => {
          expect($response.status).to.eq(204);
        });
      });
    });
  })

  describe("Delete all books negative", () => {
    afterEach("Delete all books", ()=>{
      cy.deleteAllBooks();
    })
  
    it("Delete All books with wrong user id", () => {
      cy.getCookie('token').then(($token) => {
        const token = $token.value;
  
        cy.request({
          method: 'DELETE',
          url: Cypress.env("addBook") + `?UserId=` + faker.number.bigInt(),
          headers: {
            Authorization: `Bearer ${token}`,
          },
          failOnStatusCode: false,
        }).then(($response) => {
          expect($response.status).to.eq(401);
        });
      });
    })

    it("Delete all books without a token", ()=> {
      cy.getCookie('userID').then(($id) => {
        const userId = $id.value;
  
        cy.request({
          method: 'DELETE',
          url: Cypress.env("addBook") + `?UserId=${userId}`,
          headers: {
            Authorization: null,
          },
          failOnStatusCode: false,
        }).then(($response) => {
          expect($response.status).to.eq(401);
        });
      });
    })
  })

})


