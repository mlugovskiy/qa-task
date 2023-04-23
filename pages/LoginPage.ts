import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { testConfig } from "../testConfig";

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('#loginform-username');
  readonly passwordInput = this.page.locator('#loginform-password');
  readonly loginButton = this.page.locator('button[name="login-button"]');
//   readonly searchResultsItemContent = this.page.locator('[class="SearchResults__item--content"]');
//   readonly foodCategory = this.page.locator('[class^="CategoriesMainMenu"]:text-is("Еда")');
//   readonly restaurantsSubCategory = this.page.locator('[class^="CategoriesSubMenu"]:text-is("Рестораны")');

//   constructor (page: Page){
//     super(page);
//   }

  async open() {
    await super.open(testConfig.routes.login);
  }
}
