import { TestRoutingAngularPage } from './app.po';

describe('test-routing-angular App', function() {
  let page: TestRoutingAngularPage;

  beforeEach(() => {
    page = new TestRoutingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
