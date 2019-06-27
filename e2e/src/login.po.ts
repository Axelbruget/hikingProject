import { browser, by, element } from 'protractor';

export class AppLoginPage {
  navigateTo() {
    return browser.get('/login');
  }
  getEmailInput(){
    return element(by.css('.input-email > .native-input'));
  }
  getPasswordInput(){
    return element(by.css('.input-password > .native-input'));
  }
  getLoginButton(){
    return element(by.css('.login-button'));
  }
  getErrorMessage(){
    return element(by.css('.error-span'));
  }
}
