import { isSvgUrl } from './string-utils';
describe('string-utils', () => {
  // --------
  // isSvgUrl
  // --------
  describe('isSvgUrl', () => {
    describe('Matches absolute paths', () => {
      test.each([
        { input: 'http://test/file.svg', expected: true },
        { input: 'http://test/file.jpg', expected: false },
        { input: 'http://test/file.svg?a=1', expected: true },
        { input: 'http://test/file.jpg?a=1', expected: false },
        ])('the matching `$input` should be `$expected`,', ({input, expected}) => {
          const output = isSvgUrl(input);
          expect(output).toBe(expected);
        });
    });

    describe('Matches relative paths', () => {
      test.each([
        { input: '/file.svg', expected: true },
        { input: '/file.jpg', expected: false },
        { input: '/file.svg?a=1', expected: true },
        { input: '/file.jpg?a=1', expected: false },
        { input: 'file.svg', expected: true },
        { input: 'file.jpg', expected: false },
        ])('the matching `$input` should be `$expected`,', ({input, expected}) => {
          const output = isSvgUrl(input);
          expect(output).toBe(expected);
        });
    });

    describe('Handles undefined', () => {
      test.each([
        { input: undefined, expected: false },
        ])('the matching `$input` should be `$expected`,', ({input, expected}) => {
          const output = isSvgUrl(input);
          expect(output).toBe(expected);
        });
    });
  });
});
