import { defineConfig, devices } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    ["html", { open: "on-failure" }],
    ["junit", { outputFile: "test-results/results.xml" }],
    ["allure-playwright"],
  ],

  use: {
    browserName: "chromium",
    baseURL: "https://automationexercise.com",
    trace: "on-first-retry",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
