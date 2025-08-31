const { BasePage } = require("./BasePage");

const { randFullName, randEmail } = require("@ngneat/falso");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.newUserTitle = ".signup-form > h2";
    this.loginUserTitle = ".login-form > h2";
    this.loginEmail = "form[action*='/login'] input[name*='email']";
    this.loginPassword = "form[action*='/login'] input[name*='password']";
    this.loginBtn = "form[action*='/login'] .btn";
    this.signupName = "form[action*='/signup'] input[name*='name']";
    this.signupEmail = "form[action*='/signup'] input[name*='email']";
    this.signupBtn = "form[action*='/signup'] .btn";
    this.loggedInLabel = "li:nth-child(10) a:nth-child(1)";
    this.deleteAccountBtn = "[href*='/delete_account']";
    this.accountDeletedTitle = ".title > b";
  }

  async register() {
    await this.expectVisible(this.newUserTitle);
    await this.fill(this.signupName, randFullName());
    await this.fill(this.signupEmail, randEmail());
    await this.click(this.signupBtn);
  }

  async loginIn(email, password) {
    await this.expectVisible(this.loginUserTitle);
    await this.fill(this.loginEmail, email);
    await this.fill(this.loginPassword, password);
    await this.click(this.loginBtn);
    await this.containText(this.loggedInLabel, " Logged in as ");
    //await this.click(this.deleteAccountBtn);
    //await this.expectVisible(this.accountDeletedTitle);
  }
}

module.exports = { LoginPage };
