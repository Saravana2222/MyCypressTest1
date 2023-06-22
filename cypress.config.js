const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Saravana Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        pally:  ((pallyReport) => {
          console.log(pallyReport)
        }),
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.log(message);
          return null;
        },
      })
    },
    specPattern: "cypress/e2e/BDD/*.feature",
    excludeSpecPattern: ['*.js', '*.md']
    
  },
});
