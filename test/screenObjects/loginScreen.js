
class LoginScreen {
    // Login Tab
    get loginTab () {
        return $('(//android.widget.TextView[@text="Login"])[1]');
    };

    get emailInputField () {
        return $('~input-email');
    };

    get passwordInputField () {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    };

    get loginSubmitButton () {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
    };

    get loginPopupBox () {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]');
    };

    get loginAlert () {
        return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    };

    get loginAlertMessage () {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    };

    get loginPopupBoxButton () {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    };

    // Signup Tab
    get signupTab () {
        return $('//android.widget.TextView[@text="Sign up"]');
    };

    get confirmPasswordField () {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]');
    };

    get signupSubmitButton () {
        return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]');
    };

    async login(email, password) {
        await this.emailInputField.setValue(email);
        await this.passwordInputField.setValue(password);
        await this.loginSubmitButton.click();
    };

    async signup(email, password) {
        await this.emailInputField.setValue(email);
        await this.passwordInputField.setValue(password);
        //await this.confirmPasswordField.setvalue(password);
        await this.signupSubmitButton.click();
    };

};

module.exports = new LoginScreen();