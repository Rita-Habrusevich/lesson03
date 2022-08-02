 const { BasePage } = require('./BasePage');
 const { BaseElements } = require('../helpers/BaseElements');
 const baseElements  = new BaseElements();

 class MainPage extends BasePage {
     constructor(){
         super();
         this.getStartedButton = '//*[@class = "button button--outline button--secondary button--lg"][text() = "Get Started"]'
     }

     async clickGetStartedButton (){
         await baseElements.click(this.getStartedButton);
     }
 }

 module.exports = { MainPage };