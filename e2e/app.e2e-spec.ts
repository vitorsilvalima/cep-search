import { AppCorreiosPage } from './app.po';

describe('app-correios App', () => {
  let page: AppCorreiosPage;

  beforeEach(() => {
    page = new AppCorreiosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
