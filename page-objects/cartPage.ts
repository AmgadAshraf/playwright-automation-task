import { Page,expect } from "@playwright/test";

export class CartPage{
    readonly page: Page
    readonly checkoutButton;
    readonly title;
    readonly removeBackPack;
    readonly removeBikeLight;
    readonly cartItems;


    constructor(page: Page){
        this.page = page
        this.checkoutButton = page.locator('#checkout')
        this.title = page.locator('.title')
        this.removeBackPack = page.locator('#remove-sauce-labs-backpack')
        this.removeBikeLight = page.locator('#remove-sauce-labs-bike-light')
        this.cartItems = page.locator('.cart_item .inventory_item_name');
    }

    async navigatingToCheckoutFormPage(){
        await this.checkoutButton.click()
    }

   async removingProductsFromCart(){
        await this.removeBackPack.click()
        await this.removeBikeLight.click()
    }

    async verifyItemsMatch(expectedItems: string[]) {
        const cartItemTexts = await this.cartItems.allTextContents();
        for (const item of expectedItems) {
        expect(cartItemTexts).toContain(item);
  }
  }
}