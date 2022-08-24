const { test, expect } = require('@playwright/test');
const PageFactory  = require('../pageobjects/PageFactory');
const BaseElements  = require('../helpers/BaseElements');

test.describe('Checking product and catalog pages', () => {
    let element = {};
    let I = {};

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.wildberries.by/catalog/zhenshchinam/odezhda/dzhinsy-dzhegginsy');
        element = await new PageFactory(page);
        I = await new BaseElements (page);
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Check product sorting by category "Jeggings"', async ({ page }) => {
         const jeggingsCategory = await (element.catalogPage.jeggingsCheckboxFilter);
         await element.catalogPage.getFilter(jeggingsCategory);
         await expect (element.catalogPage.firstProductTitle).toHaveText("Джеггинсы")
    });

    test('Check product sorting by brand "Mango"', async ({ page }) => {
         const mangoBrend = await (element.catalogPage.mangoCheckboxFilter);
         await element.catalogPage.getFilter(mangoBrend);
         await expect (element.catalogPage.firstProductBrend).toHaveText("Mango")
    });

    test('Sort products by rating', async ({ page }) => {
         const sortingByRating = await (element.catalogPage.raitSorting);
         await element.catalogPage.getFilter(sortingByRating);
         const raitSorting = await I.get(element.catalogPage.sortingByRating);
         await expect (raitSorting).toBeVisible();
    });

    test('Sort products by price', async ({ page }) => {
         const sortingByPrice = await (element.catalogPage.priceSorting);
         await element.catalogPage.getFilter(sortingByPrice);
         const priceSorting = await I.get(element.catalogPage.sortingByPrice);
         await expect (priceSorting).toBeVisible();
    });

    test('Change product color from product page', async ({ page }) => {
         await page.goto('https://www.wildberries.by/catalog/muzhchinam/odezhda/dzhinsy#c48655258');
         await I.click(element.catalogPage.firstItemOnThePage);
         await I.click(element.productPage.nextColor);
         const blackProductColor = await I.get(element.productPage.blackProductColor);
         await expect (blackProductColor).toBeVisible();
    });
});