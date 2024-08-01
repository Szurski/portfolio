import { Locator, Page } from "@playwright/test";

export class CheckoutCompletePage{
    titleLabel: Locator;
    confirmationComponent: Locator;
    thankYouLabel: Locator;
    descriptionLabel: Locator;

    constructor(public readonly page: Page) {
        this.titleLabel = page.locator('.title');
        this.confirmationComponent = page.locator('[data-test="checkout-complete-container"]')
        this.thankYouLabel = page.locator('[data-test="checkout-complete-container"]')
        this.descriptionLabel = page.locator('[data-test="complete-text"]')
        }
}