const { expect } = require("allure-playwright");

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("https://automationexercise.com/");
  }

  async click(selector, options = {}) {
    await this.page.locator(selector).click(options);
  }

  async fill(selector, text) {
    await this.page.locator(selector).fill(text);
  }

  async waitForNetworkIdle() {
    await this.page.waitForLoadState("networkidle");
  }

  async pause() {
    await this.page.pause();
  }

  async expectTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async expectVisible(selector) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  async textContent(selector) {
    const text = await this.page.locator(selector).textContent();
    return text;
  }

  async containText(selector, text) {
    await expect(this.page.locator(selector)).toContainText(text);
  }

  async selectOption(selector, option) {
    await this.page.selectOption(selector, option);
  }

  async screenshot(options = {}) {
    await this.page.screenshot(options);
  }
}
module.exports = { BasePage };
