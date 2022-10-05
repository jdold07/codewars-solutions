// [object Object] - Tip Calculator  [ ID: 56598d8076ee7a0759000087  (tip-calculator) ]
// URL: https://www.codewars.com/kata/56598d8076ee7a0759000087
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

var bigRandomNum = getRandomNum(500, 2000);
var medRandomNum = getRandomNum(50, 100);
var smallRandomNum = getRandomNum(0, 15);

function answer(randomNum, percent) {
  return Math.ceil(randomNum * percent);
}

describe("calculateTip", function(){
  it ("returns 'Rating not recognised' when invalid rating", function(){
    Test.assertEquals(calculateTip(20, "hi"), 'Rating not recognised');
    Test.assertEquals(calculateTip(20, "dfsjkfh"), 'Rating not recognised');
    Test.assertEquals(calculateTip(20, "great!"), 'Rating not recognised');   
  });
  
    it ("returns correct tip amount for whole amounts", function(){
    Test.assertEquals(calculateTip(10, "Terrible"), 0);
    Test.assertEquals(calculateTip(30, "poor"), 2);
    Test.assertEquals(calculateTip(20, "Excellent"), 4);
  });

  it ("returns correct tip amount for amounts with decimals", function(){
    Test.assertEquals(calculateTip(26.95, "gOod"), 3);
    Test.assertEquals(calculateTip(107.65, "GReat"), 17);
    Test.assertEquals(calculateTip(684.99, "Poor"), 35);
  });
  
  it ("should work with random amounts", function(){
    Test.assertEquals(calculateTip(bigRandomNum, "GREAT"), answer(bigRandomNum, 0.15));
    Test.assertEquals(calculateTip(medRandomNum, "good"), answer(medRandomNum, 0.10));
    Test.assertEquals(calculateTip(smallRandomNum, "excellent"), answer(smallRandomNum, 0.20));   
  });
});
