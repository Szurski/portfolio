import { expect, Locator } from "@playwright/test";

export class InventoryItemComponent{
    item: Locator;
    image: Locator;

    constructor(locator: Locator){

        this.item = locator;
        this.image = this.item.locator('img.inventory_item_img')
    }
    async containsText(text: string): Promise<void> {
        await expect (this.item).toContainText(text); 
    }
    async click(): Promise<void> {
        await this.item.click(); 
    }  
}
