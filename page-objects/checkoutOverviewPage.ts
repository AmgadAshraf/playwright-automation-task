import { Page,expect } from "@playwright/test";

export class CheckoutOverviewPage{
    readonly page: Page
    readonly finishButton;
    readonly cancelButton;

    constructor(page: Page){
        this.page = page
        this.finishButton = page.locator('#finish')
        this.cancelButton = page.locator('#cancel')
    }


    async cancelCheckout(){
        await this.cancelButton.click()
    }

    async finishCheckout(){
        await this.finishButton.click()
    }

}