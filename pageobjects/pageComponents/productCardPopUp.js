const BasePage = require('../BasePage');

class ProductCardPopUp extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.allAvailableSizes = page.locator('//*[@class="product__sizes"]//*[@class="j-size"]');
        this.closePopUpButton = page.locator('.j-close.popup__close.close');
        this.addToCartButton = page.locator('//*[text()="Добавить в корзину"]');
    }

    async addProductToCart(size) {
        await size.waitFor('visible');
        await size.click();
        await this.addToCartButton.click();
        await this.closePopUpButton.click();
    }
}

module.exports = ProductCardPopUp;