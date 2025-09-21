import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ProductsPage } from '../page-objects/productsPage';
import { CartPage } from '../page-objects/cartPage';


test.beforeEach(async({page}) =>{
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page)
  await loginPage.login('standard_user','secret_sauce')
})

test('View Cart Content', async({page})=>{
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const selectedItems = [
    await productsPage.addItemToCart('Sauce Labs Backpack'),
    await productsPage.addItemToCart('Sauce Labs Bike Light')
    ]
    await productsPage.navigatingToCartPage()
    await cartPage.verifyItemsMatch(selectedItems)
})