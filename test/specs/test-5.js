var title;
describe('demo.asteriag.com landing page title validation', () => {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com/');
    });
    it('Get title', () => {
        title = browser.getTitle();
    });
    it('Title Validation', () => {
        expect(title).toBe('Asteria Bank – We Test For Better Software');
    });
    it('Click Deposit link', () => {
        $('a=Deposit').click();
    })
})
