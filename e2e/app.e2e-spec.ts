import { LifecyclePage } from './app.po';

describe('lifecycle App', function() {
  let page: LifecyclePage;

  beforeEach(() => {
    page = new LifecyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
