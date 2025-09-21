import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';


test.beforeEach(async({page}) =>{
  await page.goto('https://www.saucedemo.com/');
})

test('Login with Valid Credentials', async({page}) =>{
    const loginPage = new LoginPage(page)
    await loginPage.login('standard_user','secret_sauce')
    await expect(page.locator('.title')).toHaveText('Products')
})