const BasePage = require('../BasePage');

class SearchPopUp extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.searchPopUp = page.locator('//*[@class="DocSearch-Input"]');
        this.searchResult = page.locator('//*[@id = "docsearch-item-0"]');
    }
}

module.exports = SearchPopUp;