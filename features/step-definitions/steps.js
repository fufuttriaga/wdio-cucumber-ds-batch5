import { Given, Then, When } from '@wdio/cucumber-framework';
import HomePage from '../page-objects/home-page.js';
import LoginPage from '../page-objects/login-page.js';

Given('use is on login page', async () => {
  await LoginPage.open()
})

Then('user should be redirected to homepage', async () => {
  await HomePage.validateOnHomePage()
})

Then('user should see error message {string}', async (errorMessage) => {
  await LoginPage.validateWrongPasswordDisplayed(errorMessage)
})

When('user login using {string} as username and {string} as password', async (username, password) => {
  await LoginPage.inputUsername(username)
  await LoginPage.inputPassword(password)
  await LoginPage.clickLoginButton()
})














