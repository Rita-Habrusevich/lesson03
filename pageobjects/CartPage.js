const BasePage = require('./BasePage');

class CartPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.qtyProductsInCart = page.locator('//*[@class="basket-section__header active"]');
        this.plusButton = page.locator('.count__plus');
        this.twoProductsInTheCart = page.locator('//*[@class="basket-section__header active"][@data-count="2"]');
        this.deleteButton = page.locator('.btn__del.j-basket-item-del');
        this.emptyCartMsg = page.locator('//*[text()="В корзине пока ничего нет"]');
        this.deliveryAddressButton = page.locator('//*[@class="basket-form__basket-section basket-section basket-delivery j-b-basket-delivery basket-section--flex"]//*[text()="Выбрать адрес доставки"]');
        this.deliveryAddress = page.locator('//*[@class="selected-address__data"]//*[text()="Сеница Минская область, Минский район Зелёная 1, "]');
    }
}

module.exports = CartPage;