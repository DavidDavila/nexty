import { NextyPage } from './app.po';

describe('nexty App', function() {
  let page: NextyPage;

  beforeEach(() => {
    page = new NextyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
