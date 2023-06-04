const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xcjcb8',
  blockHosts: ['*.googlesyndication.com', '*.doubleclick.net', "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"],
  viewportHeight:1080,
  viewportWidth:1920,
  chromeWebSecurity: false,
  defaultCommandTimeout:7000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

