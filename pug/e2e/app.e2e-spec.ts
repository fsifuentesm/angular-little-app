import { PugPage } from './app.po';

describe('pug App', function() {
  let page: PugPage;

  beforeEach(() => {
    page = new PugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
