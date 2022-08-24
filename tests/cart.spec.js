const { test, expect } = require('@playwright/test');
const PageFactory  = require('../pageobjects/PageFactory');
const BaseElements  = require('../helpers/BaseElements');

test.describe('Checking the shopping cart', () => {
    let element = {};
    let I = {};

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.wildberries.by/catalog/muzhchinam/odezhda/verhnyaya-odezhda');
        element = await new PageFactory(page);
        I = new BaseElements (page);
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Add product to cart from catalog page', async () => {
         const firstItem = await (element.catalogPage.firstItemOnThePage);
         const firstSize = await (element.catalogPage.firstSizeButton);
         await element.catalogPage.addProductToCart(firstItem, firstSize);
         await I.click(element.header.cartButton);
         await expect(element.cartPage.qtyProductsInCart).toHaveCount(1)
    });

    test('Add product to cart from product page', async () => {
        await I.click(element.catalogPage.firstItemOnThePage);
        const firstAvailableSize = await (element.productPage.allAvailableSizes).first();
        await element.productPage.addProductToCart(firstAvailableSize);
        await I.click(element.header.cartButton);
        await expect(element.cartPage.qtyProductsInCart).toHaveCount(1)
    });

    test('Add product to cart from quick view', async () => {
        await I.hover(element.catalogPage.firstItemOnThePage);
        await I.click(element.catalogPage.quickView);
        const firstAvailableSize = await (element.productCardPopUp.allAvailableSizes).first();
        await element.productCardPopUp.addProductToCart(firstAvailableSize);
        await I.click(element.header.cartButton);
        await expect(element.cartPage.qtyProductsInCart).toHaveCount(1)
    });

    test('Change the quantity of goods in the cart', async () => {
        await I.click(element.catalogPage.firstItemOnThePage);
        const firstAvailableSize = await (element.productPage.allAvailableSizes).first();
        await element.productPage.addProductToCart(firstAvailableSize);
        await I.click(element.header.cartButton);
        await I.click(element.cartPage.plusButton);
        await expect(element.cartPage.twoProductsInTheCart).toBeVisible();
    });

    test('Remove all items from cart', async () => {
        await I.click(element.catalogPage.firstItemOnThePage);
        const firstAvailableSize = await (element.productPage.allAvailableSizes).first();
        await element.productPage.addProductToCart(firstAvailableSize);
        await I.click(element.header.cartButton);
        await I.click(element.cartPage.deleteButton);
        await expect(element.cartPage.emptyCartMsg).toHaveText("В корзине пока ничего нет")
    });

    test('Change shipping address from cart', async () => {
        await I.click(element.catalogPage.firstItemOnThePage);
        const firstAvailableSize = await (element.productPage.allAvailableSizes).first();
        await element.productPage.addProductToCart(firstAvailableSize);
        await I.click(element.header.cartButton);
        await I.click(element.cartPage.deliveryAddressButton);
        await I.click(element.deliveryAddressPopUp.deliveryAddressButton);
        const senitsa = await I.get(element.deliveryAddressPopUp.senitsaAddress);
        await element.deliveryAddressPopUp.chooseDeliveryAddress(senitsa);
        await I.click(element.deliveryAddressPopUp.chooseButton);
        await expect(element.cartPage.deliveryAddress).toHaveText('Сеница Минская область, Минский район Зелёная 1, ')
    });
});