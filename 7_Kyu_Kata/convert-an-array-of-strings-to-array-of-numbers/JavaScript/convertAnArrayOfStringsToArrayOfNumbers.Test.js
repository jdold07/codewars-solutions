// [object Object] - Convert an array of strings to array of numbers  [ ID: 5783d8f3202c0e486c001d23  (convert-an-array-of-strings-to-array-of-numbers) ]
// URL: https://www.codewars.com/kata/5783d8f3202c0e486c001d23
// Category: REFERENCE  |  Tags: ARRAYS | PARSING | STRINGS | FUNDAMENTALS
// *****************************************************************************
describe('Running toNumberArray("1.1", "2.2", "3.3")...', function() {
  Test.assertSimilar(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);
});

var n = Math.floor(getRandomArbitrary(1, 50));
console.log("Generating "+ n + " random test cases...");

for(let i = 0; i<n; i++){
  var m = Math.floor(getRandomArbitrary(1, 10));
  var strval = [];
  var strrep = "[";
  
    for(let j = 0; j < m; j++){
      newval = getRandomArbitrary(1, 10).toFixed(1) + "";
      strval.push(newval);
      strrep = (j == 0) ? strrep + '"' + newval + '"' : strrep + ', "' + newval + '"';
    }
  strrep = strrep + "]";
  
  describe('Running toNumberArray('+ strrep +')...', function() {
    Test.assertSimilar(toNumberArray(strval), tNA(strval));
  });
}

function tNA(s){ return s.map(x => parseFloat(x)); }

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
