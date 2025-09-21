import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ProductsPage } from '../page-objects/productsPage';


test.beforeEach(async({page}) =>{
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page)
  await loginPage.login('standard_user','secret_sauce')
})

test('Successful Logout', async({page})=>{
    const productsPage = new ProductsPage(page)
    await productsPage.logout()
    await expect(page).toHaveURL('https://www.saucedemo.com/')
})