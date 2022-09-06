const BasePage = require('./BasePage');

class MainPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.seeAllBrandsButton = page.locator('.top-brands__all-brands');
        this.nextButton = page.locator('.swiper-button-next');
        this.secondSlideBanner = page.locator('//*[@class="img-plug banners-catalog-custom__container swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"]');
    }
}

module.exports = MainPage;