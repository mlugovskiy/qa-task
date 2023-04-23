import { Page } from '@playwright/test';
import { testConfig } from '../testConfig';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(route: string = "") {
    await this.page.goto(route);
  }
}
