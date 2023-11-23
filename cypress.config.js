const { defineConfig } = require("cypress");
//const path = require("path");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    env:{
      registration_url: "https://demoqa.com/Account/v1/User",
      login_url: "https://demoqa.com/Account/v1/Login",
      generateToken: "https://demoqa.com/Account/v1/GenerateToken",
      addBook: "https://demoqa.com/BookStore/v1/Books",
      fakerUser:"",
      fakerPassword:"",
      fakerNegPas:"",
      fakerNegUser:"",
      userId: "",
      token: "",
    },
    setupNodeEvents(on, config) {
    },
  },
});
