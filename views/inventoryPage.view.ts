import { Locator, Page } from "@playwright/test";
import { InventoryItemComponent } from "./components/inventoryItem.component";
export class InventoryPage{
    headingLabel: Locator;
    backpackItem:InventoryItemComponent;
    biklightItem:InventoryItemComponent;
    tshirtItem:InventoryItemComponent;
    jacketItem:InventoryItemComponent;
    onesieItem:InventoryItemComponent;
    redShirtItem:InventoryItemComponent;

    
    constructor(public readonly page: Page) {
        this.headingLabel = page.locator('[data-test="primary-header"]');
        this.backpackItem = new InventoryItemComponent(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.' }).first());
        this.biklightItem = new InventoryItemComponent(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Bike LightA red' }).first());
        this.tshirtItem = new InventoryItemComponent(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Bolt T-ShirtGet' }).first());
        this.jacketItem = new InventoryItemComponent(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Fleece JacketIt\'s' }).first());
        this.onesieItem = new InventoryItemComponent(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs OnesieRib snap' }).first());
        this.redShirtItem = new InventoryItemComponent(page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Test.allTheThings() T-Shirt (' }).first());
    }
}