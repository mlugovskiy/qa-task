import { Page } from '@playwright/test';
import { testConfig } from '../testConfig';
export class Actions {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
      }
    async clearBasket(): Promise<boolean> {
      const response = await this.page.request.get(testConfig.requests.clearBasket);
      return response.ok();
    }
}
