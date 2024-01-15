const footerScreen = require('../screenObjects/footerScreen.js')
const loginScreen = require('../screenObjects/loginScreen.js')

describe("User Login", () => {
    beforeEach(async () => {
        await footerScreen.loginButton.click();  
    });
      it("should allow Signup with valid credentials", async () => {
        await loginScreen.signupTab.click();
        await loginScreen.signup('RickSanches@pentagon.com', '12345678', '12345678');
        expect(loginScreen.loginPopupBox).toBeDisplayed();
        expect(loginScreen.loginAlert).toBeDisplayed();
        expect(loginScreen.loginAlertMessage).toHaveText('You successfully signed up!');
        await loginScreen.loginPopupBoxButton.click();
      });
});