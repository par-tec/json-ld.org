// @ts-check
import { defineConfig } from "@playwright/test";

const PORT = 3123;

export default defineConfig({
  testDir: "tests",
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
  webServer: {
    command: `npx serve _site -l ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
  },
});
