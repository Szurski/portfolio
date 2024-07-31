const { test, expect } = require('./../utils/login.js')
import { ItemPage, CartPage } from "../views";

test('Verify inventory is visible on inventory page', async({inventoryPage}) => {
    await expect(inventoryPage.headingLabel).toContainText('Swag Labs');
    await inventoryPage.backpackItem.containsText('Sauce Labs Backpackcarry.');
    await inventoryPage.biklightItem.containsText('Sauce Labs Bike LightA red');
    await inventoryPage.tshirtItem.containsText('Sauce Labs Bolt T-ShirtGet');
    await inventoryPage.jacketItem.containsText('Sauce Labs Fleece JacketIt\'s');
})

test('Verify user can purchase an item', async({inventoryPage, page}) => {
    const itemPage = new ItemPage(page);
    await test.step('Verify item is present', async() => {
        await inventoryPage.backpackItem.image.click();
        await expect (itemPage.titleLabel).toContainText('Sauce Labs Backpack');
        await expect (itemPage.descriptionText).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(itemPage.priceLabel).toContainText('$29.99');
        await expect(itemPage.itemImage).toBeVisible();
    })
    await test.step('Add to cart', async() => {    
        await itemPage.addToCartButton.click();
    })
    const cartPage = new CartPage(page);
    await test.step('Verify cart page', async() => {    
        await itemPage.cartButton.click();
        await expect(cartPage.titleLabel).toContainText('Your Cart');
        await expect(cartPage.cartItemContainer).toBeVisible();
        await cartPage.checkoutButton.click();
    })
})
