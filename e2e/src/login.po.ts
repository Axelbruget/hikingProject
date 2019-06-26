import { browser, by, element } from 'protractor';

export class AppLoginPage {
  navigateTo() {
    return browser.get('#/test');
  }
  getEmailInput(){
    return element(by.css('.input-email'));
  }
  getPasswordInput(){
    return element(by.css('.input-password'));
  }
  getLoginButton(){
    return element(by.css('.login-button'));
  }
}
