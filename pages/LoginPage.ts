import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { testConfig } from "../testConfig";

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('#loginform-username');
  readonly passwordInput = this.page.locator('#loginform-password');
  readonly loginButton = this.page.locator('button[name="login-button"]');

  async open() {
    await super.open(testConfig.routes.login);
  }
}
