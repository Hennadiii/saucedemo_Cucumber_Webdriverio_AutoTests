// Варіант1
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('User is located on the main page of saucedemo website', async () => {
  await browser.url('https://www.saucedemo.com/');
});

When('User clicks the "Login" button', async () => {
  await $('#login-button').click();
});

Then(
  'User should see "Epic sadface: Username is required" error message',
  async () => {
    const errorMessage = await $(
      '//*[@id="login_button_container"]/div/form/div[3]/h3'
    ).getText();
    expect(errorMessage).toBe('Epic sadface: Username is required');
  }
);
// Варіант2
/*const { Given, When, Then } = require('@wdio/cucumber-framework');
const {
  LoginPage,
} = require('C:/Users/User/saucedemo_Cucumber_Webdriverio_AutoTests_POM/pages/loginPage.js');

const loginPage = new LoginPage();

Given('User is on the main page of saucedemo website', async () => {
  await loginPage.open(); // Викличте метод open з loginPage.js
});

When('User clicks the "Login" button', async () => {
  await loginPage.clickLoginButton(); // Викличте метод clickLoginButton
});

Then(
  'User should see "Epic sadface: Username is required" error message',
  async () => {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe('Epic sadface: Username is required');
  }
);*/
