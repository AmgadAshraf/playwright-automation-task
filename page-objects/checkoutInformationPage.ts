import { Page,expect } from "@playwright/test";

export class CheckoutInformationPage{
    readonly page: Page
    readonly firstName;
    readonly lastName;
    readonly postalCode;
    readonly continueButton;
    readonly cancelButton;

    constructor(page: Page){
        this.page = page
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
        this.cancelButton = page.locator('#cancel')

    }

    async fillingCheckoutInformation(firstName: string, lastName: string, postalCode: string){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)
    }

    async continueCheckout(){
        await this.continueButton.click()
    }

}