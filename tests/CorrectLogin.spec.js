const { test, expect } = require("@playwright/test");

const { BasePage } = require("../pages/BasePage.js");
const { HomePage } = require("../pages/HomePage.js");
const { LoginPage } = require("../pages/LoginPage.js");
const testData = JSON.parse(
  JSON.stringify(require("../testData/credentials.json"))
);

test("Correct Login", async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goTo();
  const homePage = new HomePage(page);
  await homePage.navigateToLogin();
  const loginPage = new LoginPage(page);
  //await loginPage.waitForNetworkIdle();
  await loginPage.loginIn(testData.userEmail, testData.password);
});
