import { browser, by, element } from 'protractor';

export class AppListPage {
  navigateTo() {
    return browser.get('/list');
  }
  
  getFirstHiking(){
    return element(by.css('.hiking-link-1'));
  }
}
