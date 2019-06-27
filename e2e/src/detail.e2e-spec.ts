import { AppDetailPage } from './detail.po';
import { browser } from 'protractor';

describe('Detail Page', () => {
  let page: AppDetailPage;

  beforeEach(() => {
    page = new AppDetailPage();
    page.navigateTo();
  });

});