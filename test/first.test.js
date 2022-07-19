const { Builder, By, Key} = require('selenium-webdriver');

describe(`new test`, function() {
    let driver;
    before(async() => {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
    });
    after(async () => {
        await driver.quit();
    });

    it(`new test`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.findElement(By.xpath('//*[@class= " Rn3Z1b"][text()="ChromeDriver"]')).isDisplayed();
        const chromeExtensionsButton = await driver.findElement(By.xpath('//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"][contains(string(), "Chrome Extensions")]'));
        await driver.actions().click(chromeExtensionsButton).perform();
        const titleChromeExtensions = await driver.findElement(By.xpath('//*[@class= " Rn3Z1b"]'));
        await driver.executeScript('arguments[0].style.backgroundColor="pink"', titleChromeExtensions);
        await driver.sleep(1000);
        await driver.findElement(By.xpath('//*[@class= " Rn3Z1b"][text()="Chrome Extensions"]')).isDisplayed();
        const searchButton = await driver.findElement(By.xpath('//*[@class="RBEWZc"]'));
        await driver.actions().click(searchButton).perform();
        const searchField = await driver.findElement(By.xpath('//*[@class= "whsOnd zHQkBf"]'));
        await searchField.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@class= "lZsZxe"]/div[1][contains(string(), "driver")]')).isDisplayed();
    })
});