const { test, expect } = require('@playwright/test');
const PageFactory  = require('../pageobjects/PageFactory');
const BaseElements  = require('../helpers/BaseElements');

test.describe('Website configuration for user', () => {
    let element;
    let I;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.wildberries.by/');
        element = await new PageFactory(page);
        I = await new BaseElements (page);
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('"Brand Pages" should open after click "See all" on the homepage', async ({ page }) => {
         await I.scrollPageToBottom(page);
         await I.click(element.mainPage.seeAllBrandsButton);
         await expect(page).toHaveURL('https://www.wildberries.by/brandlist/all')
    });

    test('Change current country from main page', async () => {
         const Armenia = await I.get(element.header.armeniaButton);
         await element.header.changeCountry(Armenia);
         await expect(element.header.currentCity).toHaveText('Ереван')
    });

    test('"women\'s category" should open after click "women" on the sidebar', async ({ page }) => {
         const womenCategory = await I.get(element.header.womenButton);
         await element.header.goToCategoryPage(womenCategory);
         await expect(page).toHaveTitle('Женщинам в интернет-магазине Wildberries')
    });

    test('"Men\'s category" should open after click "men" on the sidebar', async ({ page }) => {
         const menCategory = await I.get(element.header.menButton);
         await element.header.goToCategoryPage(menCategory);
         await expect(page).toHaveTitle('Купить мужскую одежду и аксессуары в интернет магазине WildBerries')
    });

    test('Choose a delivery address on the main page', async () => {
         await I.click(element.header.currentAddress);
         const senitsa = await I.get(element.deliveryAddressPopUp.senitsaAddress);
         await element.deliveryAddressPopUp.chooseDeliveryAddress(senitsa);
         await expect(element.header.currentAddress).toHaveText('Сеница Минская область, Минский район Зелёная 1')
    });

    test('Check the ability to return to the main page after click on the logo', async ({ page }) => {
         const womenCategory = await I.get(element.header.womenButton);
         await element.header.goToCategoryPage(womenCategory);
         await I.click(element.header.logo);
         await expect(page).toHaveURL('https://www.wildberries.by/')
    });

    test('"Dress" page should open after search for keyword "Dress"', async ({ page }) => {
         await page.goto('https://www.wildberries.by/catalog/muzhchinam/odezhda/dzhinsy#c48655258');
         await element.catalogPage.menJeansHeader.waitFor('visible');
         await element.header.getSearch('платье');
         await expect(element.catalogPage.firstProductTitle).toHaveText('Платье')
    });

    test('Check banner scrolling on the main page', async () => {
         await I.click(element.mainPage.nextButton);
         const secondSlideBanner = await I.get(element.mainPage.secondSlideBanner);
         await expect (secondSlideBanner).toBeVisible();
    });

    test('Check pagination on product page', async ({ page }) => {
        await page.goto('https://www.wildberries.by/catalog/muzhchinam/odezhda/bryuki-i-shorty');
        await I.click(element.catalogPage.paginatiya);
        await expect(page).toHaveURL('https://www.wildberries.by/catalog/muzhchinam/odezhda/bryuki-i-shorty?sort=popular&page=2');
    });
});