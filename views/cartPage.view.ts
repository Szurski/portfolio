import { Locator, Page } from "@playwright/test";

export class CartPage{
    titleLabel: Locator;
    checkoutButton: Locator;
    cartItemContainer: Locator;

    constructor(public readonly page: Page) {
       this.titleLabel = page.locator('[data-test="title"]');
       this.checkoutButton = page.locator('#checkout');
       this.cartItemContainer = page.locator('[data-test="inventory-item"]');

    }
}