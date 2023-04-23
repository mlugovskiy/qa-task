import { Locator, Page } from '@playwright/test';

export class Basket {
  readonly page: Page;
  readonly followToBasketButton: Locator;
  readonly clearBasketButton: Locator;
  readonly basketDropDownWindow: Locator;
  readonly basketIcon: Locator;
  readonly allProductsListItems: Locator;
  readonly productTitle: Locator;
  readonly productPrice: Locator;
  readonly totalPrice: Locator;
  readonly productCount: Locator;
  readonly сountOfProductsBadge: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.followToBasketButton = this.page.locator('a', { hasText: 'Перейти в корзину' });
    this.clearBasketButton = this.page.locator('a', { hasText: 'Очистить корзину' });
    this.basketIcon = this.page.locator('#dropdownBasket');
    this.сountOfProductsBadge = this.page.locator('span.basket-count-items');
    this.basketDropDownWindow = this.page.locator('div[aria-labelledby="dropdownBasket"]');
    this.allProductsListItems = this.page.locator('ul.list-group-flush > li');
    this.productTitle = this.allProductsListItems.locator('.basket-item-title');
    this.productPrice = this.allProductsListItems.locator('.basket-item-price');
    this.productCount = this.allProductsListItems.locator('.basket-item-count');
    this.totalPrice = this.page.locator('.basket_price');
  }
}
