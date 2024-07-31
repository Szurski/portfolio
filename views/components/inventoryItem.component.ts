import { expect, Locator } from "@playwright/test";

export class InventoryItemComponent{
    item: Locator;

    constructor(locator: Locator){

        this.item = locator;
    }
    async containsText(text: string): Promise<void> {
        await expect (this.item).toContainText(text); 
    } 
}
