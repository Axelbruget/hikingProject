import { AppLoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login Page', () => {
  let page: AppLoginPage;

  beforeEach(() => {
    page = new AppLoginPage();
  });

  it('L’utilisateur se connecte avec de bons identifiants', () => {
    page.navigateTo();
    page.getEmailInput().click();
    page.getEmailInput().sendKeys("root");

    page.getPasswordInput().click();
    page.getPasswordInput().sendKeys("root");

    page.getLoginButton().click();
    expect(browser.getCurrentUrl()).toEqual("/list");
  });
});
