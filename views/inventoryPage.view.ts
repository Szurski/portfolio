import { Locator, Page } from "@playwright/test";

export class InventoryPage{
    headingLabel: Locator;

    
    constructor(public readonly page: Page) {
       this.headingLabel = page.locator('[data-test="title"]')
    }
}