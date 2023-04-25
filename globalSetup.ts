import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { testConfig } from './testConfig';

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  await page.goto(baseURL! + testConfig.routes.login);
  await page.waitForTimeout(10000);
  await loginPage.usernameInput.focus();
  await page.keyboard.type('test');
  await loginPage.passwordInput.focus();
  await page.keyboard.type('test');
  await loginPage.loginButton.click();
  await page.waitForResponse(baseURL + '/login');
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;