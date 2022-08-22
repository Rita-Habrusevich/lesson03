const BasePage = require('../BasePage');

class Header extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.changeCountryButton = page.locator('.simple-menu__link--country');
        this.armeniaButton = page.locator('//*[@class="radio-with-text__country"][text()="Армения"]');
        this.currentCity = page.locator('.header__address');
        this.menuButton = page.locator('.j-menu-burger-btn');
        this.womenButton = page.locator('.menu-burger__main-list-link--306');
        this.menButton = page.locator('.menu-burger__main-list-link--566');
        this.currentAddress = page.locator('.simple-menu__link--address');
        this.logo = page.locator('.nav-element__logo.j-wba-header-item');
        this.searchField = page.locator('#searchInput');
        this.cartButton = page.locator('.navbar-pc__icon--basket');
    }

    async changeCountry(country) {
        await this.changeCountryButton.waitFor('visible');
        await this.changeCountryButton.hover();
        await country.click();
    }

    async goToCategoryPage(category) {
        await this.menuButton.waitFor('visible');
        await this.menuButton.click();
        await category.click();
    }

    async getSearch(keyWord) {
        await this.searchField.waitFor('visible');
        await this.searchField.click();
        await this.searchField.fill(keyWord);
        await this.searchField.press('Enter');
    }
}

module.exports = Header;