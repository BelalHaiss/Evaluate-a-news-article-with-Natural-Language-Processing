import { validateUrl } from '../client/js/checkURL';
test('is it a valid url ', () => {
  expect(
    validateUrl('https://www.ted.com/recommends?exploreCTASource=footer.link')
  ).toBe(true);
  expect(validateUrl('ssd')).toBe(false);
});
