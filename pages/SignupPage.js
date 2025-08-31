const { BasePage } = require("./BasePage");
const {
  randFirstName,
  randLastName,
  randNumber,
  randCompanyName,
  randStreetAddress,
  randCountry,
  randCity,
  randState,
  randZipCode,
  randPhoneNumber,
  rand,
} = require("@ngneat/falso");

const country = rand([
  "India",
  "United States",
  "Canada",
  "Australia",
  "Israel",
  "New Zealand",
  "Singapore",
]);
class SignupPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountInfoTitle = ".login-form .title:first-child b";
    this.maleRadioBtn = "#uniform-id_gender1";
    this.femaleRadioBtn = "#uniform-id_gender2";
    this.nameTextBox = "#name";
    this.emailTextBox = "#email";
    this.passwordTextBox = "#password";
    this.dayOfBirth = "#days";
    this.monthOfBirth = "#months";
    this.yearOfBirth = "#years";
    this.newsletterCheckbox = "#newsletter";
    this.optinCheckbox = "#optin";
    this.firstnameAddress = "#first_name";
    this.lastnameAddress = "#last_name";
    this.companyAddress = "#company";
    this.address1 = "#address1";
    this.address2 = "#address2";
    this.country = "#country";
    this.state = "#state";
    this.city = "#city";
    this.zipcode = "#zipcode";
    this.mobilNumber = "#mobile_number";
    this.createAccountBtn = "form[action*='/signup'] .btn";
    this.accountCreatedTitle = ".title b";
    this.continueBtn = ".btn.btn-primary";
    this.loggedInLabel = "li:nth-child(10) a:nth-child(1)";
    this.deleteAccountBtn = "[href*='/delete_account']";
    this.accountDeletedTitle = ".title > b";
    this.logoutBtn = "[href*='/logout']";
    this.homeBtn = ".fa-home";
  }

  async createAccount() {
    await this.expectVisible(this.accountInfoTitle);
    await this.click(this.maleRadioBtn);
    await this.fill(this.passwordTextBox, "12300");
    await this.selectOption(
      this.dayOfBirth,
      String(randNumber({ min: 1, max: 30 }))
    );
    await this.selectOption(
      this.monthOfBirth,
      String(randNumber({ min: 1, max: 12 }))
    );
    await this.selectOption(
      this.yearOfBirth,
      String(randNumber({ min: 1900, max: 2021 }))
    );
    await this.click(this.newsletterCheckbox);
    await this.click(this.optinCheckbox);
    await this.fill(this.firstnameAddress, randFirstName({ gender: "male" }));
    await this.fill(this.lastnameAddress, randLastName());
    await this.fill(this.companyAddress, randCompanyName());
    await this.fill(this.address1, randStreetAddress());
    await this.selectOption(this.country, country);
    await this.fill(this.state, randState());
    await this.fill(this.city, randCity());
    await this.fill(this.zipcode, randZipCode());
    await this.fill(this.mobilNumber, randPhoneNumber());
    await this.click(this.createAccountBtn);
    await this.expectVisible(this.accountCreatedTitle);
    await this.click(this.continueBtn);
    await this.containText(this.loggedInLabel, " Logged in as ");
  }

  async deleteAccount() {
    await this.click(this.deleteAccountBtn);
    await this.expectVisible(this.accountDeletedTitle);
  }

  async logout() {
    await this.containText(this.loggedInLabel, " Logged in as ");
    await this.click(this.logoutBtn);
    await this.click(this.homeBtn);
  }
}

module.exports = { SignupPage };
