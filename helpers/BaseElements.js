class BaseElements {
    constructor(page){
        this.page = page;
    }

    async click(element) {
        await element.waitFor('visible');
        await element.click();
    }

    async hover(element) {
        await element.waitFor('visible');
        await element.hover();
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

    async scrollPageToBottom(page) {
        page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    }
}

module.exports = BaseElements;