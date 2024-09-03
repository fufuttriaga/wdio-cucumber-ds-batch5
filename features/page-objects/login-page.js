import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

  get usernameTextBox() {
    return $("#user-name")
  }

  get passwordTextBox() {
    return $("#password")
  }

  get loginButton() {
    return $('//input[@type="submit"]')
  }

  get errorMessege() {
    return $('//*[@id="login_button_container"]/div/form/div[3]/h3')
  }

  async inputUsername(username) {
    await this.usernameTextBox.setValue(username)
  }

  async inputPassword(password) {
    await this.passwordTextBox.setValue(password)
  }

  async clickLoginButton() {
    await this.loginButton.click()
  }

  async login(username, password) {
    await this.inputUsername(username)
    await this.inputPassword(password)
    await this.clickLoginButton()
  }

  async validateWrongPasswordDisplayed(errorMessage) {
    await expect(this.errorMessege).toHaveText(
      expect.stringContaining(errorMessage)
    )
  }

  open() {
    return super.open("") // bisa diisi apa aja atau mengarahkan kemana setelah saucedemo
  }
}

export default new LoginPage();
