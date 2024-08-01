const { test, expect } = require('./../utils/login.js')
import { ItemPage, CartPage, CheckoutStepOnePage, CheckoutStepTwoPage, CheckoutCompletePage } from "../views";

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
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    await test.step('Verify checkout page - step one', async() => {    
        await checkoutStepOnePage.firstNameInput.fill('adam');
        await checkoutStepOnePage.lastNameInput.fill('test');
        await checkoutStepOnePage.zipInput.fill('12345');
        await checkoutStepOnePage.continueButton.click();
    })
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    await test.step('Verify checkout page - step two', async() => {    
        await expect(checkoutStepTwoPage.titleLabel).toContainText('Checkout: Overview');
        await expect(checkoutStepTwoPage.itemDescComponent).toBeVisible();
        await expect(checkoutStepTwoPage.paymentInfoLabel).toContainText('SauceCard #31337');
        await expect(checkoutStepTwoPage.totalPriceLabel).toContainText('Total: $32.39');
        await checkoutStepTwoPage.finishButton.click();
    })
    const checkoutCompletePage = new CheckoutCompletePage(page)
    await test.step('Verify checkout complete page', async() => {    
        await expect(checkoutCompletePage.titleLabel).toContainText('Checkout: Complete!');
        await expect(checkoutCompletePage.confirmationComponent).toBeVisible();
        await expect(checkoutCompletePage.thankYouLabel).toContainText('Thank you for your order!');
        await expect(checkoutCompletePage.descriptionLabel).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    })
})