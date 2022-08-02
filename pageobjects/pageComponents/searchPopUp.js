const { BasePage } = require('../BasePage');
const { BaseElements } = require('../../helpers/BaseElements');
const baseElements  = new BaseElements();

class SearchPopUp extends BasePage {
    constructor(){
        super();
        this.searchPopUp = '//*[@class="DocSearch-Input"]';
        this.searchResult = '//*[@id="docsearch-list"]//li[1]'
    }
    async fillSearchField(value) {
        await $(this.searchPopUp).addValue(value);
        await baseElements.click(this.searchResult)
    }
}

module.exports = { SearchPopUp };