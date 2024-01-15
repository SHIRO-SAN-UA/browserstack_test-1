const footerScreen = require("../screenObjects/footerScreen.js");
const swipeScreen = require("../screenObjects/swipeScreen.js");

describe("Swipe functionality", () => {
  beforeEach(async () => {
    await footerScreen.swipeButton.click();
  });
  it("should allow to swipe right to left", async () => {
    expect(await swipeScreen.sliderCard1).toBeDisplayed();

    const { width, height } = await driver.getWindowSize();

    const start_x = width * 0.8; // Start from 80% of the screen width
    const end_x = width * 0.2; // End at 20% of the screen width
    const y = height / 2; // Swipe at the middle of the screen height

    await driver.touchAction([
      { action: "press", x: start_x, y: y },
      { action: "wait", ms: 1000 }, // Duration of swipe
      { action: "moveTo", x: end_x, y: y },
      "release",
    ]);

    // Assert the expected result of the swipe
    expect(await swipeScreen.sliderCard2).toBeDisplayed();
  });

  it("should allow to swipe left to right", async () => {
    const { width, height } = await driver.getWindowSize();

    const start_x = width * 0.2; // Start from 20% of the screen width
    const end_x = width * 0.8; // End at 80% of the screen width
    const y = height / 2; // Swipe at the middle of the screen height

    await driver.touchAction([
      { action: "press", x: start_x, y: y },
      { action: "wait", ms: 1000 }, // Duration of swipe
      { action: "moveTo", x: end_x, y: y },
      "release",
    ]);

    // Assert the expected result of the swipe
    expect(await swipeScreen.sliderCard1).toBeDisplayed();
  });

  it("should swipe up the whole screen", async () => {
    // Assuming you are already on the screen where the swipe is applicable

    const { width, height } = await driver.getWindowSize();

    const x = width / 2; // Swipe in the middle of the screen width
    const start_y = height * 0.8; // Start from 80% of the screen height (near the bottom)
    const end_y = height * 0.2; // End at 20% of the screen height (near the top)

    await driver.touchAction([
      { action: "press", x: x, y: start_y },
      { action: "wait", ms: 500 }, // Duration of the swipe
      { action: "moveTo", x: x, y: end_y },
      "release",
    ]);

    // Add assertions here to validate the result of the swipe action
    expect(await swipeScreen.webdriverLogo).toBeDisplayed();
  });
});
