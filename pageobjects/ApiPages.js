const BasePage = require('./BasePage');

class ApiPages extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.loggerIsEnabledSideMenu = page.locator('//*[@class = "table-of-contents__link toc-highlight"][text()="logger.isEnabled(name, severity)"]');
        this.loggerLogSideMenu = page.locator('//*[@class = "table-of-contents__link toc-highlight"][text()="logger.log(name, severity, message, args, hints)"]');
        this.loggerButton = page.locator('//*[@class = "menu__link"][text()="Logger"]');
    }
}

module.exports = ApiPages;