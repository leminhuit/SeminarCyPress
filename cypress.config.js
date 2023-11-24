const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Set up a base url for testing
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
