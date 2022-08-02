const { BasePage } = require('../BasePage');
const { BaseElements } = require('../../helpers/BaseElements');
const baseElements  = new BaseElements();

class Header extends BasePage {
    constructor() {
        super();
        this.docButton = '//*[@class="navbar__item navbar__link"][text() = "Docs"]';
        this.apiButton = '//*[@class="navbar__item navbar__link"][text() = "API"]';
        this.changeThemeToggle = '.lightToggleIcon_v35p';
        this.darkTheme = '//*[@aria-label="Switch between dark and light mode (currently dark mode)"]';
        this.searchField = '.DocSearch-Button-Placeholder';
    }

    async clickChangeThemeToggle (){
        await baseElements.click(this.changeThemeToggle);
    }
    async clickDocButton (){
        await baseElements.click(this.docButton);
    }
    async clickApiButton (){
        await baseElements.click(this.apiButton);
    }
    async clickSearchField (){
        await baseElements.click(this.searchField);
    }
}

module.exports = { Header };