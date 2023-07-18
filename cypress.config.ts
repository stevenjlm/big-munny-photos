import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // baseUrl: 'https://dev.bigmunny.com/',
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
