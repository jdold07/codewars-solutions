// [object Object] - Enumerable Magic #5- True for Just One?  [ ID: 54599705cbae2aa60b0011a4  (enumerable-magic-number-5-true-for-just-one) ]
// URL: https://www.codewars.com/kata/54599705cbae2aa60b0011a4
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe( "one ?", function(){
  var list = Test.randomize([0,1,2,3,4,5,6,7,8,9]).slice(0,7).sort();
  var dup = list[1+~~(Math.random()*(list.length-2))], min = list[0], max = list[list.length-1];
  list.push(dup);
  
  console.log(Test.randomize(list));
  
  Test.assertEquals(one(list, function(item){ return item == min}), true, "exactly one item equals "+min)
  Test.assertEquals(one(list, function(item){ return item == max}), true, "exactly one item equals "+max)
  Test.assertEquals(one(list, function(item){ return item%2 }), false, "too many items are odd")
  Test.assertEquals(one(list, function(item){ return item == dup }), false, "2 items equals "+dup)
  Test.assertEquals(one(list, function(item){ return item<min }), false, "no items are lesser than "+min)
  Test.assertEquals(one(list, function(item){ return item>max }), false, "no items are greater than "+max)

  Test.assertEquals(one([], function(item){ return item>0 }), false, "empty list should return false")

});
