const BasePage = require('../BasePage');

class DeliveryAddressPopUp extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.senitsaAddress = page.locator('//*[text()="Сеница Минская область, Минский район Зелёная 1"]');
        this.submitButton = page.locator('.balloon-content-block-btn');
        this.deliveryAddressButton = page.locator('//*[@class="contents__item contents__self active"]//*[@class="popup__btn-main btn__choose-address"]');
        this.chooseButton = page.locator('//*[@class="popup__btn-main"]');
    }

    async chooseDeliveryAddress(address) {
        await address.waitFor('visible');
        await address.click();
        await this.submitButton.click();
    }
}

module.exports = DeliveryAddressPopUp;