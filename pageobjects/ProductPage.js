const BasePage = require('./BasePage');

class ProductPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.addToCartButton = page.locator('//*[@class="product-page__aside-container j-price-block"]//*[text()="Добавить в корзину"]');
        this.allAvailableSizes = page.locator('//*[@class="product-page__sizes-wrap"]//label[not(contains(@class, \'j-size disabled\'))]');
        this.nextColor = page.locator('//*[@class="j-color swiper-slide swiper-slide-next"]');
        this.blackProductColor = page.locator('//*[@class="j-color swiper-slide swiper-slide-next active"]');
    }

    async addProductToCart(size) {
        await size.waitFor('visible');
        await size.click();
        await this.addToCartButton.click();
    }
}

module.exports = ProductPage;