// Import all numbers.ts exports
import numbers from '../utilities/numbers';

// Test suite for sum function in numbers.ts
describe('Test for sum function', () => {
  // Input positive numbers
  it('expect numbers.sum(5,10) to equal 15', () => {
    expect(numbers.sum(5, 10)).toEqual(15);
  });
});

// Test suite for square function in numbers.ts
describe('Test for square function', () => {
  // Input positive number
  it('expect numbers.square(10) to equal (100)', () => {
    expect(numbers.square(10)).toEqual(100);
  });
  // Input negative number
  it('expect numbers.square(10) to equal (100)', () => {
    expect(numbers.square(-10)).toEqual(100);
  });
});

// Test suite for divide function in numbers.ts
describe('Test for divide function', () => {
  // Input positive numbers
  it('expect numbers.divide(12.5,2) to be close to (6.25)', () => {
    expect(numbers.divide(12.5, 2)).toBeCloseTo(6.25);
  });
  // Input negative numbers divided by one
  it('expect numbers.divide(-55,1) to Equal (-55)', () => {
    expect(numbers.divide(-55, 1)).toEqual(-55);
  });
});

// Test suite for multiply function in numbers.ts
describe('Test for multiply function', () => {
  // Input negative numbers multiplied by 0
  it('expect numbers.multiply(-100,0) to not be truthy (0)', () => {
    expect(numbers.multiply(-100, 0)).not.toBeTruthy(0);
  });
});

// Import all arrays.ts exports
import arrays from '../utilities/arrays';

// Test suite for cut3 function in arrays.ts
describe('Test for cut3 function', () => {
  // Input positive number array
  it('expect arrays.cut3(arr) to not equal (arr)', () => {
    expect(arrays.cut3([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5]);
  });
});

// Import all strings.ts exports
import strings from '../utilities/strings';

// Test suite for capitalize function in strings.ts
describe('Test for capitalize function', () => {
  it('expect strings.capitalize(string) to not equal (string)', () => {
    expect(strings.capitalize('hello')).not.toEqual('hello');
  });
});
