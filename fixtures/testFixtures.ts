import { BasketPage } from '../pages/BasketPage';
import { MainPage } from '../pages/MainPage';
import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Actions } from '../helpers/Actions';
import { Basket } from '../components/Basket';

export const test = base.extend<{
	loginPage: LoginPage;
	mainPage: MainPage;
	basket: Basket;
	basketPage: BasketPage;
	actions: Actions;
}>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	mainPage: async ({ page }, use) => {
		await use(new MainPage(page));
	},
	basketPage: async ({ page }, use) => {
		await use(new BasketPage(page));
	},
	actions: async ({ page }, use) => {
		await use(new Actions(page));
	},
	basket: async ({ page }, use) => {
		await use(new Basket(page));
	},
});
