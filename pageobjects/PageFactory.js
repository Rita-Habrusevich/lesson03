const MainPage = require('./MainPage');
const Header = require('../pageobjects/pageComponents/header');
const DeliveryAddressPopUp = require('../pageobjects/pageComponents/deliveryAddressPopUp');
const ProductCardPopUp = require('../pageobjects/pageComponents/productCardPopUp');
const ProductPage = require('./ProductPage');
const CartPage = require('./CartPage');
const CatalogPage = require('./CatalogPage');

 class PageFactory {
  constructor(page){
   this.page = page;
   this.mainPage = new MainPage (page);
   this.header = new Header (page);
   this.productPage = new ProductPage (page);
   this.cartPage = new CartPage (page);
   this.catalogPage = new CatalogPage (page);
   this.deliveryAddressPopUp = new DeliveryAddressPopUp (page);
   this.productCardPopUp = new ProductCardPopUp (page);
  }
}

module.exports = PageFactory;