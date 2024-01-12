
class FooterScreen {

    get homeButton () {
        return $('//android.widget.Button[@content-desc="Home"]')
    };

    get webviewButton () {
        return $('//android.widget.Button[@content-desc="Webview"]')
    };

    get loginButton () {
        return $('//android.widget.Button[@content-desc="Login"]')
    };

    get formsButton () {
        return $('//android.widget.Button[@content-desc="Forms"]')
    };

    get swipeButton () {
        return $('//android.widget.Button[@content-desc="Swipe"]')
    };

    get dragButton () {
        return $('//android.widget.Button[@content-desc="Drag"]')
    };


}

module.exports = new FooterScreen();