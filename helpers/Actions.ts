import { Basket } from '../components/Basket';
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
export class Actions {
    readonly page: Page;
    readonly loginPage: LoginPage;
    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
      }
    async login(username: string, password: string) {
        await this.loginPage.open();
        await this.loginPage.usernameInput.focus();
        await this.page.keyboard.type(username);
        await this.loginPage.passwordInput.focus();
        await this.page.keyboard.type(password);
        await this.loginPage.loginButton.click();
      }
    async clearBasket() {
        const basket = new Basket(this.page);
        const mainPage = new MainPage(this.page);
        await basket.сountOfProductsBadge.waitFor();
        const productsCount = parseInt(await basket.сountOfProductsBadge.innerText());
        //Воркэроунд для чистки корзины с нечетным количеством товаров, так как есть баг, что корзина не открывается с нечетным количеством товара
        if (productsCount % 2 == 1) {
          await mainPage.buyProductButton.nth(1).click();
          await basket.сountOfProductsBadge.getByText(String(productsCount + 1)).waitFor();
          await basket.basketIcon.click();
          await basket.clearBasketButton.click();
          await basket.сountOfProductsBadge.getByText('0').waitFor();
          return;
        }
        if (productsCount != 0) {
          await basket.basketIcon.click();
          await basket.clearBasketButton.click();
          await basket.сountOfProductsBadge.getByText('0').waitFor();
        }
    }
}