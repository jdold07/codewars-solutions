// 8 kyu - isReallyNaN  [ ID: 56c24c58e0c0f741d4001aef  (isreallynan) ]
// URL: https://www.codewars.com/kata/56c24c58e0c0f741d4001aef
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
Test.expect(isReallyNaN(0) === false)
Test.expect(isReallyNaN(37) === false)
Test.expect(isReallyNaN('37') === false)
Test.expect(isReallyNaN(NaN) === true)
Test.expect(isReallyNaN(undefined) === false)

// These really are NaN
Test.expect(isReallyNaN(Number.NaN) === true)
Test.expect(isReallyNaN(0 / 0) === true)

// These are not NaN, but would have been true with global isNaN()
Test.expect(isReallyNaN('NaN') === false)
Test.expect(isReallyNaN({}) === false)
Test.expect(isReallyNaN('blabla') === false)

const rand_int = () => ~~(Math.random() * 100)
const rand_float = () => Math.random() * 100
const rand_string_from_int = () => rand_int().toString
const rand_string_from_float = () => rand_float().toString

// These are not NaN, and already work fine both for
// isNaN() and for Number.isNaN()
Test.expect(isReallyNaN(rand_int()) === false)
Test.expect(isReallyNaN(rand_string_from_int()) === false)
Test.expect(isReallyNaN(true) === false)
Test.expect(isReallyNaN(null) === false)
Test.expect(isReallyNaN(rand_float()) === false)
Test.expect(isReallyNaN(rand_string_from_float()) === false)
Test.expect(isReallyNaN('') === false)
Test.expect(isReallyNaN(' ') === false)

// Random tests, to stop people gaming this Kata
describe("Random Tests:", function() {
  const cases = [
    '',
    ' ',
    null,
    undefined,
    rand_int(),
    rand_float(),
    0 / 0,
    rand_string_from_int(),
    rand_string_from_float(),
    true,
    false,
    'blablabla',
    'NaN',
    {},
    Number.NaN,
    NaN,
  ]
  for (let i = 0; i < 100; i++) {
    let rand = ~~(Math.random() * cases.length);
    let testcase = cases[rand]
    Test.assertEquals(isReallyNaN(testcase), Number.isNaN(testcase));
  }
});
