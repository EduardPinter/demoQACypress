const { defineConfig } = require("cypress");
//const path = require("path");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
    },
  },
});
