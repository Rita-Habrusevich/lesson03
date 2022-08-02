const { BasePage } = require('./BasePage');
const { BaseElements } = require('../helpers/BaseElements');
const baseElements  = new BaseElements();

class ApiPages extends BasePage {
    constructor() {
        super();
        this.examplesSideMenu = '//*[@class="table-of-contents__link toc-highlight"][text() = "Examples"]';
        this.contributeSideMenu = '//*[@class="table-of-contents__link toc-highlight"][text() = "Contribute"]';
    }

    async clickSideMenuExamples() {
        await baseElements.click(this.examplesSideMenu);
    }
    async clickSideMenuContribute() {
        await baseElements.click(this.contributeSideMenu);
    }
}

module.exports = { ApiPages };