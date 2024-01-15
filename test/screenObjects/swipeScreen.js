
class SwipeScreen {
    

    get  carouselSlider () {
        return $('//android.view.ViewGroup[@content-desc="Carousel"]');
    };

    get sliderCard1 () {
        return $('//android.widget.TextView[@text="FULLY OPEN SOURCE"]');
    };

    get sliderCard2 () {
        return $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
    };

    get sliderCard3 () {
        return $('//android.widget.TextView[@text="JS.FOUNDATION"]');
    };

    get sliderCard4 () {
        return $('//android.widget.TextView[@text="SUPPORT VIDEOS"]');
    };

    get sliderCard5 () {
        return $('//android.widget.TextView[@text="EXTENDABLE"]');
    };

    get sliderCard6 () {
        return $('//android.widget.TextView[@text="COMPATIBLE"]');
    };

    get webdriverLogo () {
        return $('//android.widget.ImageView[@content-desc="WebdriverIO logo"]');
    };



};

module.exports = new SwipeScreen();