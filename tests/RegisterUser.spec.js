const { test, expect } = require("@playwright/test");

const { BasePage } = require("../pages/BasePage.js");
const { HomePage } = require("../pages/HomePage.js");
const { LoginPage } = require("../pages/LoginPage.js");
const { SignupPage } = require("../pages/SignupPage.js");

test("Register User", async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goTo();
  const homePage = new HomePage(page);
  await homePage.navigateToLogin();
  const loginPage = new LoginPage(page);
  //await loginPage.waitForNetworkIdle();
  await loginPage.register();
  const signupPage = new SignupPage(page);
  //await signupPage.waitForNetworkIdle();
  await signupPage.createAccount();
  await signupPage.deleteAccount();
});
