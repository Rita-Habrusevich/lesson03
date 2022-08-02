const { BasePage } = require('./BasePage');
const { BaseElements } = require('../helpers/BaseElements');
const baseElements  = new BaseElements();

class DocsPage extends BasePage {
     constructor(){
         super();
         this.gettingStartedHeader = '//*[@class = "theme-doc-markdown markdown"]//*[text() = "Getting Started"]';
         this.boilerplateProjectsHeader = '//*[@class = "theme-doc-markdown markdown"]//*[text() = "Boilerplate Projects"]';
         this.nextButton = '.pagination-nav__item--next';
         this.coreConceptsDropDown = '//*[@class = "menu__list-item-collapsible"]//*[text() = "Core Concepts"]';
         this.setupTypes = '//*[@class = "theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-2 menu__list-item"]//*[text() = "Setup Types"]';
         this.chromeDevToolsTab = '//*[text() = "Chrome DevTools"]';
         this.devToolsContent = '//*[@class="token-line"]//*[text() = "DevTools"]';
         this.searchResultHeader = '//*[@class = "theme-doc-markdown markdown"]//header';

     }
    async clickCoreConceptsDropDown (){
        await baseElements.click(this.coreConceptsDropDown);
    }
    async clickNextButton (){
        await baseElements.click(this.nextButton);
    }
    async clickSetupTypes (){
        await baseElements.click(this.setupTypes);
    }
    async clickChromeDevToolsTab (){
        await baseElements.click(this.chromeDevToolsTab);
    }
 }

module.exports = { DocsPage };