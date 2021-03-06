const { sum, subtract, sumAsync, subtractAsync } = require('../math');

test('sum makes addition', () => {
  let result = sum(3, 7);
  let expected = 10;
  expect(result).toBe(expected);
});

test('subtract makes subtraction', () => {
  expect(subtract(7, 3)).toBe(4);
});

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toEqualDeep() {},
  };
}

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}
