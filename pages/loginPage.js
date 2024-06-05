class LoginPage {
  constructor() {
    this.loginButton = '#login-button';
    this.errorMessage = '//*[@id="login_button_container"]/div/form/div[3]/h3';
  }

  async open() {
    await browser.url('https://www.saucedemo.com/');
  }

  async clickLoginButton() {
    await browser.element(this.loginButton).click();
  }

  async getErrorMessage() {
    return await browser.element(this.errorMessage).getText();
  }
}
