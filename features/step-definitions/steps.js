const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I navigate to {string} page' , async (url) => {
    await browser.url(url);
});

When('I input text {string} to {string} field', async (text, selector) => {
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text);
});

When('I click on {string} element', async (selector) => {
    await $(selector).waitForClickable();
    await $(selector).click();
});

Then('I get text {string} from {string}', async (selector, expectedText) => {
    await $(selector).waitForDisplayed();
    const text = await $(selector).getText();
    await expect(text).toEqual(expectedText);
});

Then('I check that url contains {string}', async (text) => {
    await browser.getUrl();
    await expect(browser).toHaveUrlContaining(text);
});

Then('I check that {string} displayed in viewport', async (selector) => {
    await expect($(selector)).toBeDisplayedInViewport();
});

