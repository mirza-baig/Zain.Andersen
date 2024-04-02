import failOnConsole from 'jest-fail-on-console';
import fetchMock from 'jest-fetch-mock';

// https://github.com/ValentinH/jest-fail-on-console
const IGNORED_ERRORS = [
  ,

];

failOnConsole({
  shouldFailOnWarn: false,
  silenceMessage: (errorMessage) => {
    if (/Warning: Invalid DOM property `allowfullscreen`\. Did you mean `allowFullScreen`\?/.test(errorMessage)) {
      return true
    } else if (/Warning: Removing a style property during rerender/.test(errorMessage)
      && (/node_modules\\next\\client\\image.tsx/.test(errorMessage) || /node_modules\/next\/client\/image.tsx/.test(errorMessage))) {
      return true
    }
    return false
  },

});

// https://www.npmjs.com/package/jest-fetch-mock
fetchMock.enableMocks();
