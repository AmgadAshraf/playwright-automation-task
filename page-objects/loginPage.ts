import { Page,expect } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly productsTitle;

    constructor(page: Page){
        this.page = page
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.productsTitle = page.locator('.title')
    }

    async login(username: string, password: string){
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click('#login-button');
      await expect(this.productsTitle).toHaveText('Products')
    }
}