const BasePage = require('./BasePage');

class DocsPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.nextButton = page.locator('.pagination-nav__link--next');
        this.yarnTab = page.locator('//*[@class = "tabs__item tabItem_LNqP"][text() = "yarn"]');
        this.yarnContent = page.locator('//*[@class="codeBlockLines_e6Vv"]//*[text() = "yarn"]');
        this.searchResultHeader = '//*[@class = "theme-doc-markdown markdown"]//header';
    }
}

module.exports = DocsPage;