import { IProductInfo } from '../pages/MainPage';
import { expect } from '@playwright/test';
import { test } from '../fixtures/testFixtures';

import { testConfig } from '../testConfig';

test.describe('Тестовый набор 1. Переход в корзину', () => {
  test.beforeEach(async ({actions}) => {
    await actions.login('test', 'test');
    await actions.clearBasket();
  });
  test('Тест-кейс 1. Переход в пустую корзину', async ({ page, basket }) => {
    await expect(basket.сountOfProductsBadge).toHaveText('0');
    await basket.basketIcon.click();
    await expect(basket.basketDropDownWindow).toBeVisible();
    await basket.followToBasketButton.click();
    await expect(page).toHaveURL(testConfig.routes.basket);
  });
  test('Тест-кейс 2. Переход в корзину с 1 неакционным товаром', async ({ page, mainPage, basket }) => {
    const productsInBasket: IProductInfo[] = [];
    await mainPage.addProductToBasket(1, productsInBasket);
    await page.waitForResponse(testConfig.requests.basketGet);
    await expect(basket.сountOfProductsBadge).toHaveText('1');
    await basket.basketIcon.click();
    await expect(basket.basketDropDownWindow).toBeVisible();
    await expect(basket.allProductsListItems).toHaveCount(1);
    await expect(basket.productCount).toHaveText('1');
    await expect(basket.productTitle).toHaveText(productsInBasket[0].title);
    await expect(basket.productPrice).toHaveText(productsInBasket[0].priceFormatted);
    await expect(basket.totalPrice).toHaveText(productsInBasket[0].price.toString());
    await basket.followToBasketButton.click();
    await expect(page).toHaveURL(testConfig.routes.basket);
  });
  test('Тест-кейс 3. Переход в корзину с 1 акционным товаром', async ({ page, mainPage, basket }) => {
    const productsInBasket: IProductInfo[] = [];
    await mainPage.addProductToBasket(0, productsInBasket);
    await page.waitForResponse(testConfig.requests.basketGet);
    await expect(basket.сountOfProductsBadge).toHaveText('1');
    await basket.basketIcon.click();
    await expect(basket.basketDropDownWindow).toBeVisible();
    await expect(basket.allProductsListItems).toHaveCount(1);
    await expect(basket.productCount).toHaveText('1');
    await expect(basket.productTitle).toHaveText(productsInBasket[0].title);
    await expect(basket.productPrice).toHaveText(productsInBasket[0].priceFormatted);
    await expect(basket.totalPrice).toHaveText(productsInBasket[0].price.toString())
    await basket.followToBasketButton.click();
    await expect(page).toHaveURL(testConfig.routes.basket);
  });
  test('Тест-кейс 4. Переход в корзину с 9 разными товарами', async ({ page, mainPage, basket }) => {
    const productsInBasket: IProductInfo[] = [];
    await mainPage.addProductToBasket(0, productsInBasket); //добавление акционного товара
    await mainPage.addProductsToBasket([1, 2, 3, 4, 5, 6, 7], productsInBasket);
    await mainPage.secondPageButton.click();
    await mainPage.productCardTitle.getByText('Little Red Riding Hood').waitFor();
    await mainPage.addProductToBasket(0, productsInBasket);
    const totalPrice: string = productsInBasket.reduce((acc, product) => acc + product.price, 0).toString();
    await page.waitForResponse(testConfig.requests.basketGet);
    await expect(basket.сountOfProductsBadge).toHaveText('9');
    await basket.basketIcon.click();
    await expect(basket.basketDropDownWindow).toBeVisible();
    await expect(basket.allProductsListItems).toHaveCount(9);
    await expect(basket.productCount).toHaveText(['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']);
    await expect(basket.productTitle).toHaveText(productsInBasket.map(product => product.title));
    await expect(basket.productPrice).toHaveText(productsInBasket.map(product => product.priceFormatted));
    await expect(basket.totalPrice).toHaveText(totalPrice);
    await basket.followToBasketButton.click();
    await expect(page).toHaveURL(testConfig.routes.basket);
  });

  test('Тест-кейс 5. Переход в корзину с 9 акционными товарами одного наименования', async ({ page, basket, mainPage }) => {
    const productsInBasket: IProductInfo[] = [];
    await mainPage.productCardEnterCount.nth(0).clear();
    await mainPage.productCardEnterCount.nth(0).fill('9');
    await mainPage.addProductToBasket(0, productsInBasket)
    const totalPrice = String(productsInBasket[0].price*9);
    const productPriceInBasketExpected = ` - ${totalPrice} р.`;
    await page.waitForResponse(testConfig.requests.basketGet);
    await expect(basket.сountOfProductsBadge).toHaveText('9');
    await basket.basketIcon.click();
    await expect(basket.basketDropDownWindow).toBeVisible();
    await expect(basket.allProductsListItems).toHaveCount(1);
    await expect(basket.productCount).toHaveText('9');
    await expect(basket.productTitle).toHaveText(productsInBasket[0].title);
    await expect(basket.productPrice).toHaveText(productPriceInBasketExpected);
    await expect(basket.totalPrice).toHaveText(totalPrice);
    await basket.followToBasketButton.click();
    await expect(page).toHaveURL(testConfig.routes.basket);
  });
});
