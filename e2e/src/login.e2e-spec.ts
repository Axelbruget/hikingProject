import { AppLoginPage } from './login.po';
import { browser } from 'protractor';

describe('Login Page', () => {
  let page: AppLoginPage;

  beforeEach(() => {
    page = new AppLoginPage();
    page.navigateTo();
  });

  it('L’utilisateur se connecte avec de bons identifiants', () => {
    page.getEmailInput().click();
    page.getEmailInput().sendKeys("root");

    page.getPasswordInput().click();
    page.getPasswordInput().sendKeys("root");

    page.getLoginButton().click().then(() => { 
      expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/list");
    });
  });

  it('L’utilisateur se connecte avec de mauvais identifiants', () => {
    page.getEmailInput().click();
    page.getEmailInput().sendKeys("mauvaisEmail");

    page.getPasswordInput().click();
    page.getPasswordInput().sendKeys("mauvaisPassword");

    page.getLoginButton().click().then(() => { 
      expect(page.getErrorMessage().getText()).toEqual("L'email ou le mot de passe est incorrect");
    });
  });
});
