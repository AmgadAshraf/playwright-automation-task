import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ProductsPage } from '../page-objects/productsPage';
import { CartPage } from '../page-objects/cartPage';
import { CheckoutInformationPage } from '../page-objects/checkoutInformationPage';
import { CheckoutOverviewPage } from '../page-objects/checkoutOverviewPage';


test.beforeEach(async({page}) =>{
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page)
  await loginPage.login('standard_user','secret_sauce')
})

test('Empty Cart Checkout', async({page})=>{
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const checkoutInformationPage = new CheckoutInformationPage(page)
    const checkoutOverviewPage = new CheckoutOverviewPage(page)

    await productsPage.navigatingToCartPage()
    await cartPage.navigatingToCheckoutFormPage()
    await checkoutInformationPage.fillingCheckoutInformation('test','test','11111')
    await checkoutInformationPage.continueCheckout()
    await checkoutOverviewPage.finishCheckout()
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!')
})