const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage.js");

test("Basic navigation test", async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.goTo();
    await expect(page).toHaveTitle('Automation Exercise');
});