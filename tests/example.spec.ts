import { test, expect } from '@playwright/test';

test('1. Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  const title = page.locator('[data-test="title"]')
  await expect(title).toHaveText('Products')

});

test('2. Product Sorting', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  

  const sorting = page.locator('[data-test="product-sort-container"]')
  await sorting.selectOption('lohi')

  const itemPrice = await page.locator('.inventory_item_price').allTextContents()
  const prices = itemPrice.map(text => Number(text.replace('$', '')));

  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }

  //missing loop + verifying sorting 
});

test('3. Add Products', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    await page.locator('[data-test="data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()


  const numberOnCart = page.locator('[data-test="shopping-cart-badge"]')
  await expect(numberOnCart).toHaveText('3')

});

test('4. Remove Products', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()


  const numberOnCart = page.locator('[data-test="shopping-cart-badge"]')
  await expect(numberOnCart).toHaveText('1')
});

test('5. View Cart', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()


  const numberOnCart = page.locator('[data-test="shopping-cart-badge"]')
  await numberOnCart.click()
});

test('6. Checkout form', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()


  const numberOnCart = page.locator('[data-test="shopping-cart-badge"]')
  await numberOnCart.click()
  await page.locator('#checkout').click()
  await page.locator('#first-name').fill('John')
  await page.locator('#last-name').fill('Doe')
  await page.locator('#postal-code').fill('11865')
  await page.locator('#continue').click()

});

test('7. Cancel Checkout', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()


  const numberOnCart = page.locator('[data-test="shopping-cart-badge"]')
  await numberOnCart.click()
  await page.locator('#checkout').click()
  await page.locator('#first-name').fill('John')
  await page.locator('#last-name').fill('Doe')
  await page.locator('#postal-code').fill('11865')
  await page.locator('#continue').click()
  await page.locator('#cancel').click()


});

test('8. Remove Products from Cart', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

  const numberOnCart = page.locator('[data-test="shopping-cart-badge"]')
  await numberOnCart.click()
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()
});

test('9. Empty Cart Checkout', async({page}) => {
await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const numberOnCart = page.locator('[data-test="shopping-cart-link"]')
  await numberOnCart.click()
  await page.locator('#checkout').click()
  await page.locator('#first-name').fill('John')
  await page.locator('#last-name').fill('Doe')
  await page.locator('#postal-code').fill('11865')
  await page.locator('#continue').click()

  const cartItems = await page.locator('.cart_item').count();
  expect(cartItems).toBe(0);

});

test('10. Logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

  await page.locator('#react-burger-menu-btn').click()
  await page.locator('#logout_sidebar_link').click()

  await expect(page).toHaveURL('https://www.saucedemo.com/')
});