import { Locator, Page } from "@playwright/test";

export class ItemPage{
    titleLabel: Locator;
    descriptionText: Locator;
    priceLabel: Locator;
    itemImage: Locator;
    addToCartButton: Locator;
    cartButton: Locator;

    constructor(public readonly page: Page) {
       this.titleLabel = page.locator('[data-test="inventory-item-name"]').first();
       this.descriptionText = page.locator('[data-test="inventory-item-desc"]').first();
       this.priceLabel = page.locator('[data-test="inventory-item-price"]').first();
       this.itemImage = page.locator('img.inventory_details_img')
       this.addToCartButton = page.locator('#add-to-cart');
       this.cartButton = page.locator('a.shopping_cart_link');
    }
}