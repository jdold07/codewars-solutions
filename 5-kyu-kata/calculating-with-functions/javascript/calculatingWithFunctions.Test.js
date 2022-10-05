// 5 kyu - Calculating with Functions  [ ID: 525f3eda17c7cd9f9e000b39  (calculating-with-functions) ]
// URL: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
// Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING
// *****************************************************************************
describe('static example calculations', function() {
  Test.assertEquals(seven(times(five())), 35);
  Test.assertEquals(four(plus(nine())), 13);
  Test.assertEquals(eight(minus(three())), 5);
  Test.assertEquals(six(dividedBy(two())), 3);
});

describe('random calculations', function() {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  it('add', function() {
    for (let i=0; i<50; i++) {
      let num1 = Test.sample(numbers);
      let num2 = Test.sample(numbers);
      Test.assertEquals(eval(num1 + '(plus(' + num2 + '()))'), numbers.indexOf(num1) + numbers.indexOf(num2), 'Wrong result for ' + num1 + ' + ' + num2);
    }
  });
  
  it('subtract', function() {
    for (let i=0; i<50; i++) {
      let num1 = Test.sample(numbers);
      let num2 = Test.sample(numbers);
      Test.assertEquals(eval(num1 + '(minus(' + num2 + '()))'), numbers.indexOf(num1) - numbers.indexOf(num2), 'Wrong result for ' + num1 + ' - ' + num2);
    }
  });
  
  it('multiply', function() {
    for (let i=0; i<50; i++) {
      let num1 = Test.sample(numbers);
      let num2 = Test.sample(numbers);
      Test.assertEquals(eval(num1 + '(times(' + num2 + '()))'), numbers.indexOf(num1) * numbers.indexOf(num2), 'Wrong result for ' + num1 + ' * ' + num2);
    }
  });
  
  it('divide', function() {
    for (let i=0; i<50; i++) {
      let num1 = Test.sample(numbers);
      let num2 = Test.sample(numbers.slice(1));
      Test.assertSimilar(eval(num1 + '(dividedBy(' + num2 + '()))'), numbers.indexOf(num1) / numbers.indexOf(num2)|0, 'Wrong result for ' + num1 + ' / ' + num2);
    }
  });
});
