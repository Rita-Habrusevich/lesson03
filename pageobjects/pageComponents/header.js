const BasePage = require('../BasePage');

class Header extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.docButton = page.locator('//*[@class="navbar__item navbar__link"][text() = "Docs"]');
        this.apiButton = page.locator('//*[@class="navbar__item navbar__link"][text() = "API"]');
        this.changeThemeToggle = page.locator('//*[@class = "clean-btn toggleButton_gllP"]');
        this.darkTheme = page.locator('//*[@title = "Switch between dark and light mode (currently dark mode)"]');
        this.searchField = page.locator('.DocSearch-Button');
    }
}

module.exports = Header;