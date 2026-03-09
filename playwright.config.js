// @ts-check
import { defineConfig } from "@playwright/test";

const PORT = process.env.CI ? 3123 : 8788;

export default defineConfig({
  testDir: "tests",
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
  fullyParallel: true,
  webServer: process.env.CI
    ? {
        command: `npx serve _site -l ${PORT}`,
        url: `http://localhost:${PORT}`,
        reuseExistingServer: !process.env.CI,
      }
    : undefined,
});
