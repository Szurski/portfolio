const { test, expect } =require('./../utils/login.js')


test('Verify inventory on page', async({inventoryPage}) => {
await expect(inventoryPage.headingLabel).toContainText('Products');
})