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
       this.firstNameInput = page.locator('[data-test="firstName"]');
       this.lastNameInput = page.locator('[data-test="lastName"]');
       this.zipInput = page.locator('[data-test="postalCode"]');

    }
}