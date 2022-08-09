const { test, expect } = require('@playwright/test');
const PageFactory  = require('../pageobjects/pageFactory');

test.beforeEach(async ({ page }) => {
    await page.setViewportSize ({width: 1920, height: 1200,});
    await page.goto('https://playwright.dev/');
});

test.afterEach(async ({ page }) => {
    await page.close();
});


test.describe('Website configuration for user', () => {

    test('Installation page should open after click Get Started button on the main page', async ({ page }) => {
        const I = new PageFactory(page);
        await I.baseElements.click(I.mainPage.getStartedButton);
        await expect(page).toHaveTitle('Installation | Playwright')
    });

    test('Theme should change after switching from light to dark', async ({ page }) => {
        const I = new PageFactory(page);
        await I.baseElements.click(I.header.changeThemeToggle);
        const currentlyMode = await I.baseElements.get(I.header.darkTheme);
        await expect (currentlyMode).toBeVisible();
    });

    test('Check pagination on Docs page, from Installation to Writing Tests', async ({ page }) => {
        const I = new PageFactory(page);
        await I.baseElements.click(I.header.docButton);
        await I.baseElements.click(I.docsPage.nextButton);
        await expect(page).toHaveTitle('Writing Tests | Playwright')
    });

    test('Check switching between tabs yarn and npm  on the Installation page', async ({ page }) => {
        const I = new PageFactory(page);
        await I.baseElements.click(I.header.docButton);
        await I.baseElements.click(I.docsPage.yarnTab);
        const yarnTab = await I.baseElements.get(I.docsPage.yarnContent);
        await expect(yarnTab).toBeVisible();
    });

    test('Locators page should open after search for keyword "Locators"', async ({ page }) => {
        const I = new PageFactory(page);
        await I.baseElements.click(I.header.searchField);
        await (I.searchPopUp.searchPopUp).fill('locators');
        await I.baseElements.click(I.searchPopUp.searchResult);
        await expect(page).toHaveTitle('Locators | Playwright')
    });

    test('Check side menu navigation on Logger page', async ({ page }) => {
        const I = new PageFactory(page);
        await I.baseElements.click(I.header.apiButton);
        await I.baseElements.click(I.apiPage.loggerButton);
        await I.baseElements.click(I.apiPage.loggerIsEnabledSideMenu);
        await expect(page).toHaveURL('https://playwright.dev/docs/api/class-logger#logger-is-enabled');
        await I.baseElements.click(I.apiPage.loggerLogSideMenu);
        await expect(page).toHaveURL('https://playwright.dev/docs/api/class-logger#logger-log')
    });
});