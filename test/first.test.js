const { MainPage } = require('../pageobjects/MainPage');
const { DocsPage } = require('../pageobjects/DocsPage');
const { ApiPages } = require('../pageobjects/ApiPages');
const { BaseElements } = require('../helpers/BaseElements');
const { Header } = require('../pageobjects/pageComponents/header');
const { SearchPopUp } = require('../pageobjects/pageComponents/searchPopUp');
const mainPage = new MainPage();
const docsPage = new DocsPage();
const action = new BaseElements();
const apiPage = new ApiPages();
const header = new Header();
const searchPopUp = new SearchPopUp();


describe('Website configuration for user', function() {
    beforeEach(async () => {
        await browser.setWindowSize(1920, 1070);
        await mainPage.navigate('https://webdriver.io/');
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

        it('Getting Started page should open after click Get Started button on the main page', async () => {
            await mainPage.clickGetStartedButton();
            const gettingStartedHeader = await action.getText(docsPage.gettingStartedHeader);
            expect(gettingStartedHeader).toEqual('Getting Started');
        });

        it('Theme should change after switching from light to dark', async () => {
            await header.clickChangeThemeToggle();
            const currentlyMode = await action.get(header.darkTheme);
            await expect(currentlyMode).toBeDisplayed()
        });

        it('Check pagination on Getting Started page', async () => {
            await header.clickDocButton();
            await docsPage.clickNextButton();
            const boilerplateProjectsHeader = await action.getText(docsPage.boilerplateProjectsHeader);
            expect(boilerplateProjectsHeader).toEqual('Boilerplate Projects');
        });

        it('Check switching between tabs WebDriver and Chrome DevTools on the Setup Types page', async () => {
            await header.clickDocButton();
            await docsPage.clickCoreConceptsDropDown();
            await docsPage.clickSetupTypes();
            await docsPage.clickChromeDevToolsTab();
            const chromeDevToolsTab = await action.get(docsPage.devToolsContent);
            await expect(chromeDevToolsTab).toBeDisplayedInViewport();
        });

        it('Check the search for keyword', async () => {
            await header.clickSearchField();
            await searchPopUp.fillSearchField('selectors');
            const searchResultHeader = await action.getText(docsPage.searchResultHeader);
            expect(searchResultHeader).toEqual('Selectors');
        });

        it('Check side menu navigation on Introduction page', async () => {
            await header.clickApiButton();
            await apiPage.clickSideMenuExamples();
            await browser.getUrl();
            await expect(browser).toHaveUrlContaining('examples');
            await apiPage.clickSideMenuContribute();
            await browser.getUrl();
            await expect(browser).toHaveUrlContaining('contribute');
        });
});