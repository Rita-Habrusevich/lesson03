class BaseElements {
    constructor(page){
        this.page = page;
    }
    async click(element) {
        await element.waitFor('visible');
        await element.click();
    }

    async wrapper(element) {
        this.webElement = element;
        return this.webElement;
    }

    async get(selector) {
        if (!(selector instanceof BaseElements)) {
            this.wrapper(await (selector));
            this.selector = selector;
            return this.webElement;
        }
        return selector;
    }
}

module.exports = BaseElements;