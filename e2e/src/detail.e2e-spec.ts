import { AppDetailPage } from './detail.po';

describe('Detail Page', () => {
  let page: AppDetailPage;

  beforeEach(() => {
    page = new AppDetailPage();
    page.navigateTo();
  });

});
