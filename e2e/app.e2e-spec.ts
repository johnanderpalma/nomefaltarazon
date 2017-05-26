import { NomefaltarazonPage } from './app.po';

describe('nomefaltarazon App', function() {
  let page: NomefaltarazonPage;

  beforeEach(() => {
    page = new NomefaltarazonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
