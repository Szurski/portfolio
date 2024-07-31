const { test, expect } = require('@playwright/test')
import { LoginPage, InventoryPage } from '../views';

exports.expect = expect

exports.test = test.extend({
inventoryPage: async({page}, use) =>{
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.usernameInput.fill(process.env.STANDARD_USER);
  await loginPage.passwordInput.fill(process.env.PASS);
  await loginPage.loginButton.click();
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.headingLabel).toBeVisible();
  await use (inventoryPage)
} 
})
export { test, expect };

