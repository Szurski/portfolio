import { Locator, Page } from "@playwright/test";

export class CheckoutStepTwoPage{
    titleLabel: Locator;
    finishButton: Locator;
    itemDescComponent: Locator;
    paymentInfoLabel: Locator;
    totalPriceLabel: Locator;

    constructor(public readonly page: Page) {
        this.titleLabel = page.locator('.title');
        this.finishButton = page.locator('#finish');
        this.itemDescComponent = page.locator('[data-test="inventory-item"]');
        this.paymentInfoLabel = page.locator('[data-test="payment-info-value"]');
        this.totalPriceLabel = page.locator('[data-test="total-label"]');
    }
}