import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ProductsPage } from '../page-objects/productsPage';


test.beforeEach(async({page}) =>{
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page)
  await loginPage.login('standard_user','secret_sauce')
})

test('Remove Products from cart', async({page})=>{
    const productsPage = new ProductsPage(page)
    await productsPage.removingProductsFromCart()
})