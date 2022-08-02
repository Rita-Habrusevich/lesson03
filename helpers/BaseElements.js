 class BaseElements {

    async click(element) {
       await $(element).waitForClickable();
       await $(element).click();
    }

    async getText(element) {
        await $(element).waitForDisplayed();
        return $(element).getText();
    }

     async wrapper(element) {
         this.webElement = element;
         return this.webElement;
     }

     async get(selector) {
         if (!(selector instanceof BaseElements)) {
             this.wrapper(await $(selector));
             this.selector = selector;
             return this.webElement;
         }
         return selector;
     }
 }

 module.exports = { BaseElements };