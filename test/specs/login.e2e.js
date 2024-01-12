const faker = require('@faker-js/faker');
const footerScreen = require('../screenObjects/footerScreen.js')
const loginScreen = require('../screenObjects/loginScreen.js')

describe("User Login", () => {
    beforeEach(async () => {
        await footerScreen.loginButton.click();  
    });
    // afterEach(async () => {
    //     await loginScreen.loginPopupBoxButton.click();
    // });

      it("should allow login with valid credentials", async () => {
        await loginScreen.login('RickSanches@pentagon.com', '12345678');
        expect(loginScreen.loginPopupBox).toBeDisplayed();
        expect(loginScreen.loginAlert).toBeDisplayed();
        expect(loginScreen.loginAlertMessage).toHaveText('You are logged in!');
      });
});