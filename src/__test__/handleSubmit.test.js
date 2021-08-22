import { handleSubmit } from '../client/js/handleSubmit';
const regeneratorRuntime = require('regenerator-runtime');

// The test() function has two arguments - a string description, and an actual test as a callback function.
jest.spyOn(window, 'alert').mockImplementation(() => {});
const windowAlert = jest.fn(() => window.alert);
test('Testing the handleSubmit() function', () => {
  handleSubmit(['face', 'face']);
  expect(window.alert).toBeCalledWith('check the url again');

  // // Define the input for the function, if any, in the form of variables/array
  // // Define the expected output, if any, in the form of variables/array
  // // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
  // // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
  // expect(handleSubmit).toBeDefined();
});
