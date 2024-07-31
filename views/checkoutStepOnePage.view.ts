import { Locator, Page } from "@playwright/test";

export class CheckoutStepOnePage{
    titleLabel: Locator;
    continueButton: Locator;
    firstNameInput: Locator;
    lastNameInput: Locator;
    zipInput: Locator;

    constructor(public readonly page: Page) {
       this.titleLabel = page.locator('.title');
       this.continueButton = page.locator('#continue');
       this.firstNameInput = page.locator('#firstName');
       this.lastNameInput = page.locator('#lastName');
       this.zipInput = page.locator('#postal-code');

    }
}