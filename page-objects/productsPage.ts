import { Page,expect } from "@playwright/test";


export class ProductsPage{
    readonly page: Page
    readonly sortingDropdown;
    readonly itemPrice;
    readonly addBackPack;
    readonly addBikeLight;
    readonly addBoltTshirt;
    readonly removeBackPack;
    readonly removeBikeLight;
    readonly numberOnCart;
    readonly cartIcon;
    readonly burgerMenu;
    readonly logoutButton;

    constructor(page: Page){
        this.page = page
        this.sortingDropdown = page.locator('.product_sort_container')
        this.itemPrice = page.locator('.inventory_item_price')
        this.addBackPack = page.locator('#add-to-cart-sauce-labs-backpack')
        this.addBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light')
        this.addBoltTshirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.removeBackPack = page.locator('#remove-sauce-labs-backpack')
        this.removeBikeLight = page.locator('#remove-sauce-labs-bike-light')
        this.numberOnCart = page.locator('.shopping_cart_badge')
        this.cartIcon = page.locator('.shopping_cart_link')
        this.burgerMenu = page.locator('#react-burger-menu-btn')
        this.logoutButton = page.locator('#logout_sidebar_link')
    }

    async sortingProductsByPrice(){
        await this.sortingDropdown.selectOption('lohi');
        const allPrices = await this.itemPrice.allTextContents();
        const prices = allPrices.map(text => Number(text.replace('$', '')));
        for (let i = 0; i < prices.length - 1; i++) {
         expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
        }
    }

    async addingProductsToCart(){
        await this.addBackPack.click()
        await this.addBikeLight.click()
        await this.addBoltTshirt.click()
    }

    async removingProductsFromCart(){
        await this.addingProductsToCart()
        await this.removeBackPack.click()
        await this.removeBikeLight.click()
        await expect(this.numberOnCart).toHaveText('1')
    }

    async navigatingToCartPage(){
        await this.cartIcon.click()
    }

    async addItemToCart(productName: string): Promise<string> {
    const product = this.page.locator('.inventory_item', { hasText: productName });

    await product.locator('button').click();

    return productName;
  }

    async logout(){
        await this.burgerMenu.click()
        await this.logoutButton.click()
    }

}