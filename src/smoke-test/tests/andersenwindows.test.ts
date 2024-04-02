import { By, ThenableWebDriver, until } from 'selenium-webdriver';
import { createWebdriverFromEnvironmentVariableSettings } from './webdriver-factory';

// The default timeout for tests/fixtures (5 seconds) is not always enough to start/quit/navigate a browser instance.
const TEST_TIMEOUT_MS = 30000;

const siteUrl = (global as any).enterpriseWeb.urls.aw;

describe('AndersenWindows.com', () => {
  describe('homepage', () => {
    let driver: ThenableWebDriver;

    // Starting a browser instance is time-consuming, so we share one browser instance between
    // all tests in the file (by initializing it in beforeAll rather than beforeEach)
    beforeAll(async () => {
      // The helper method we're using here is just an example; if you already have a test suite with
      // logic for initializing a Selenium WebDriver, you can keep using that. For example, if you are
      // using Protractor, you would want to use the webdriver instance that Protractor maintains in its
      // global "browser" variable, like this:
      //
      //     driver = browser.webdriver;
      driver = createWebdriverFromEnvironmentVariableSettings();
    }, TEST_TIMEOUT_MS);

        // Starting a browser instance is time-consuming, so we share one browser instance between
    // all tests in the file (by initializing it in beforeAll rather than beforeEach)
    afterAll(async () => {
      // The helper method we're using here is just an example; if you already have a test suite with
      // logic for initializing a Selenium WebDriver, you can keep using that. For example, if you are
      // using Protractor, you would want to use the webdriver instance that Protractor maintains in its
      // global "browser" variable, like this:
      //
      //     driver = browser.webdriver;
      driver.quit();
    }, TEST_TIMEOUT_MS);

    it('loads', async function() {
      await driver.get(siteUrl);

      let pageTitle = await driver.getTitle();

      expect(pageTitle).toEqual('Andersen Windows & Doors | LOVE THE LIFE YOU SEE.™');
    }, TEST_TIMEOUT_MS);
  });
});
