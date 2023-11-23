import { faker } from "@faker-js/faker";
const data = require("../fixtures/data.json");

describe('API registration/login tests positive', () => {

    it('Registration happy flow', () => {
        var pass = faker.internet.password({ length: 20 , prefix: "!"});
        var user = faker.internet.userName();
        cy.log(pass);
        cy.log(user);
        cy.request({
            method: 'POST',
            url: Cypress.env("registration_url"),
            body: {
                password: Cypress.env("fakerPassword", pass),
                userName: Cypress.env("fakerUsername", user)
            }
          }).then((response) => {
            expect(response.status).to.eq(201);
          })
      })


    it('Login happy flow', () => {
      cy.request({
        method: 'POST',
        url: Cypress.env("login_url"),
        headers:{
            'Content-type': 'application/json'
        },
        body: {
            password: data.apiData.validPassword,
            userName: data.apiData.validUsername
        }
      }).then((response) =>{
        cy.log(response.body);
        Cypress.env('userId', response.body.userId);
        Cypress.env('token', response.body.token);
      })
    })

})

describe('API registration/login tests negative', () => {

    it('Registration no username', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env("registration_url"),
            failOnStatusCode: false,
            body: {
                password: Cypress.env("fakerNegPas", faker.internet.password),
                userName: ""
            }
          }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eq(data.apiData.messageRegNeg)
          })
      })

      it('Registration not valid password', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env("registration_url"),
            failOnStatusCode: false,
            body: {
                password: "Test1233",
                userName: Cypress.env("fakerNegUser", faker.internet.userName),
            }
          }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eq(data.apiData.messageRegNeg)
          })
      })

      it('Login wrong password', () => {
        cy.request({
          method: 'POST',
          url: Cypress.env("generateToken"),
          headers:{
              'Content-type': 'application/json'
          },
          body: {
              password: "Test123",
              userName: "ep"
          }
        }).then((response) =>{
          cy.log(response.body);
          expect(response.body.result).to.eq(data.apiData.result)
          expect(response.status).to.eq(401);
        })
      })

})