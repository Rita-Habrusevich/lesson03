const BasePage = require('./BasePage');
const MainPage = require('./MainPage');
const DocsPage = require('./DocsPage');
const ApiPages = require('./ApiPages');
const BaseElements = require('../helpers/BaseElements');
const Header = require('../pageobjects/pageComponents/header');
const SearchPopUp = require('./pageComponents/searchPopUp');

 class PageFactory {
  constructor(page){
   this.page = page;
   this.basePage = new BasePage (page);
   this.mainPage = new MainPage (page);
   this.baseElements = new BaseElements (page);
   this.header = new Header (page);
   this.docsPage = new DocsPage (page);
   this.searchPopUp = new SearchPopUp (page);
   this.apiPage = new ApiPages (page);
  }
 }

module.exports = PageFactory;