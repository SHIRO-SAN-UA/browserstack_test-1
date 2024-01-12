const faker = require('@faker-js/faker');
const footerScreen = require('./test/screenObjects/footerScreen.js');
const loginScreen = require('./test/screenObjects/loginScreen.js');

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password({length: 8})

describe("User Login", () => {
    beforeEach(async () => {
        await footerScreen.loginButton.click();  
    });
    // afterEach(async () => {
    //     await loginScreen.loginPopupBoxButton.click();
    // });

      it("should allow login with valid credentials", async () => {
        await loginScreen.login(randomEmail, randomPassword);
        expect(loginScreen.loginPopupBox).toBeDisplayed();
        expect(loginScreen.loginAlert).toBeDisplayed();
        expect(loginScreen.loginAlertMessage).toHaveText('You are logged in!');
      });
});