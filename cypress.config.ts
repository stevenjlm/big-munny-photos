import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.bigmunny.com/',
    // baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
