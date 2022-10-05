// [object Object] - Basic Math (Add or Subtract)  [ ID: 5809b62808ad92e31b000031  (basic-math-add-or-subtract) ]
// URL: https://www.codewars.com/kata/5809b62808ad92e31b000031
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Let's go...", function() {
it("Basic (fixed) tests", function() {
  Test.assertEquals(calculate("1plus2plus3plus4"), '10');
  Test.assertEquals(calculate('1minus2minus3minus4'), '-8');
	Test.assertEquals(calculate('1plus2plus3minus4'), '2');
	Test.assertEquals(calculate('1minus2plus3minus4'), '-2');
	Test.assertEquals(calculate('1plus2minus3plus4minus5'), '-1');
})

//set-up for random testing
let calculateTest = testStr => testStr.match(/\d+|minus\d+|plus\d+/g).map(s => s.replace(/minus/g, '-').replace(/plus/g, '')).map(x => parseInt(x)).reduce((a, b) => a + b)+'';
let operators = ['plus','minus','plus','minus','minus','plus'];
let randNum = range => ((Math.floor(Math.random() * range) + 1).toString());
let selectRandomFrom = arr => arr[Math.floor(Math.random() * arr.length)];
let testStringSmall = () => randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000);
let testStringMedium = () => randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000);
let testStringBig = () => randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000);

it("Random tests", function() {
  for(let i = 0; i < 15; i++) {
    let s=testStringSmall();
    Test.assertEquals(calculate(s), calculateTest(s), 'Should work with random values:');
  }
  
  for(let i = 0; i < 15; i++) {
    let s=testStringMedium();
    Test.assertEquals(calculate(s), calculateTest(s), 'Should work with random values:');
  }
  
  for(let i = 0; i < 15; i++) {
    let s=testStringBig();
    Test.assertEquals(calculate(s), calculateTest(s), 'Should work with random values:');
  }

})


});
