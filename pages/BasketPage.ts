import { BasePage } from './BasePage';

export class BasketPage extends BasePage {
    readonly siteError = this.page.locator('.site-error');
}