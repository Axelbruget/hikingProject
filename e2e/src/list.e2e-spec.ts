import { AppListPage } from './list.po';
import { browser } from 'protractor';

describe('List Page', () => {
  let page: AppListPage;

  beforeEach(() => {
    page = new AppListPage();
    page.navigateTo();
  });

  it('Affichage des randonnées en ligne', () => {
    //expect(navigator.connection.toEqual(true));
  });

  it('Affichage des randonnées hors-ligne', () => {
    
  });

  it('Navigation vers la page détail', () => {
    page.getFirstHiking().click().then(() => { 
        expect(browser.getCurrentUrl()).toEqual("http://localhost:4200/hiking/1");
    });
  });
});