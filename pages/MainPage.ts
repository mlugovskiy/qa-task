import { testConfig } from '../testConfig';
import { BasePage } from './BasePage';

export interface IProductInfo {
  index: number;
  title: string;
  price: number;
  priceFormatted: string;
}

export class MainPage extends BasePage {
  readonly buyDiscountProduct1Button = this.page.locator('.actionBuyProduct').nth(0);
  readonly buyNonDiscountProduct4Button = this.page.locator('.actionBuyProduct').nth(3);
  readonly buyProductButton = this.page.locator('.actionBuyProduct');
  readonly firstPageButton = this.page.locator('a[data-page-number="1"]');
  readonly secondPageButton = this.page.locator('a[data-page-number="2"]');
  readonly secondPageIndexActive = this.page.locator('.page-item.active');
  readonly productCard = this.page.locator('.note-list div[data-product]');
  readonly productCardPrice = this.productCard.locator('.product_price');
  readonly productCardTitle = this.productCard.locator('.product_name');
  readonly productCardEnterCount = this.page.locator('.note-list [name="product-enter-count"]');
  
  async getProductInfo(indexOfProductCard: number): Promise<IProductInfo> {
    const price = +((await this.productCardPrice.nth(indexOfProductCard).innerText())?.match(/^\S*/g)?.[0] || '');
    return {
      index: indexOfProductCard,
      title: await this.productCardTitle.nth(indexOfProductCard).innerText(),
      price: price,
      priceFormatted: ' - ' + price + ' р.',
    }
  }

  async addProductToBasket(index: number, productsInBasket: IProductInfo[]) {
    await this.buyProductButton.nth(index).click();
    productsInBasket.push(await this.getProductInfo(index));
  }

  async addProductsToBasket(indexes: number[], productsInBasket: IProductInfo[]) {
    for (let i = 0; i < indexes.length; i++) {
        await this.addProductToBasket(indexes[i], productsInBasket);
    }
  }

  async open() {
    await super.open(testConfig.routes.main);
  }
}
