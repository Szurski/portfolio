const { test, expect } =require('./../utils/login.js')


test('Verify inventory on page', async({inventoryPage}) => {
    await expect(inventoryPage.headingLabel).toContainText('Swag Labs');
    await inventoryPage.backpackItem.containsText('Sauce Labs Backpackcarry.');
    await inventoryPage.biklightItem.containsText('Sauce Labs Bike LightA red');
    await inventoryPage.tshirtItem.containsText('Sauce Labs Bolt T-ShirtGet');
    await inventoryPage.jacketItem.containsText('Sauce Labs Fleece JacketIt\'s');
})