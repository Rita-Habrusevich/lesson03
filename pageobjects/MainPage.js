const BasePage = require('./BasePage');

class MainPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.getStartedButton = page.locator('//*[@class = "getStarted_Sjon"]');
    }
}

module.exports = MainPage;