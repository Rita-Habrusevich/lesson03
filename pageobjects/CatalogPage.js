const BasePage = require('./BasePage');

class CatalogPage extends BasePage {
    constructor(page){
        super(page);
        this.page = page;
        this.firstItemOnThePage = page.locator('//*[@class="product-card-list"]/div[1]');
        this.addToCartButton = page.locator('//*[@class="product-card-list"]/div[1]//*[text()="В корзину        "]');
        this.firstSizeButton = page.locator('//*[@class="sizes-list j-quick-order-sizes"]//li[1]');
        this.quickView= page.locator('//*[@class="product-card-list"]/div[1]//*[text()="Быстрый просмотр"]');
        this.firstProductTitle = page.locator('//*[@class="product-card-list"]/div[1]//*[@class="goods-name"]');
        this.firstProductBrend= page.locator('//*[@class="product-card-list"]/div[1]//*[@class="brand-name"]');
        this.raitSorting= page.locator('//*[@class="sort-item"]//*[text()="рейтингу"]');
        this.sortingByRating = page.locator('//*[@class="sort-item sort_select"]//*[text()="рейтингу"]');
        this.sortingByPrice = page.locator('//*[@class="sort-item sort_select"][text()="        цене"]');
        this.paginatiya = page.locator('//*[@class="pagination-next pagination__next"]');
        this.jeggingsCheckboxFilter = page.locator('//*[@data-value="1687"]');
        this.mangoCheckboxFilter = page.locator('//*[@data-value="2513"]');
        this.priceSorting = page.locator('//*[@class="sort-item"][text()="        цене"]');
        this.menJeansHeader = page.locator('//*[@class="catalog-title"][text()="Мужские джинсы"]');
    }

    async addProductToCart(product, size) {
        await product.waitFor('visible');
        await product.hover();
        await this.addToCartButton.click();
        await size.waitFor('visible');
        await size.click();
    }
}

module.exports = CatalogPage;