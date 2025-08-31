const { BasePage } = require("./BasePage");

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginBtn = "a[href*='login']";
  }

  async navigateToLogin() {
    await this.click(this.loginBtn);
  }
}

module.exports = { HomePage };
