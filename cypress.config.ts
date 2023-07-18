import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://dev.bigmunny.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
