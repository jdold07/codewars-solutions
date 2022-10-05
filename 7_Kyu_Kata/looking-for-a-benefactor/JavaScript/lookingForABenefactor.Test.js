// [object Object] - Looking for a benefactor  [ ID: 569b5cec755dd3534d00000f  (looking-for-a-benefactor) ]
// URL: https://www.codewars.com/kata/569b5cec755dd3534d00000f
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
const {assert, expect} = require('chai')

function testing(arr, newavg, expected) {
  assert.strictEqual(newAvg(arr, newavg), expected)
}

describe("Fixed Tests newAvg", function() {
    it("Basic tests", function() {
        testing([14, 30, 5, 7, 9, 11, 16], 90, 628);
        testing([14, 30, 5, 7, 9, 11, 15], 92, 645);
        testing([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 10000, 58430);
        testing([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 5800, 20630);
        testing([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 4800, 11630);
        testing([], 90, 90);

        expect(function(){ newAvg([14, 30, 5, 7, 9, 11, 15], 2); }).to.throw("Expected New Average is too low");
        expect(function(){ newAvg([14.25, 30.76, 5.56, 7, 9, 11, 15.48, 12.987], 5); }).to.throw("Expected New Average is too low");
        expect(function(){ newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 2000); }).to.throw("Expected New Average is too low");
    
        testing([14000.25, 300.76, 50.56, 70, 90, 11, 150.48, 1200.98], 4800, 27326);
    });
});

function randint(a, b) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}

//................
function newAvgSol32(arr, newavg) {
    let sm = arr === [] ? 0 : arr.reduce(function(a, b) { return a + b; }, 0);
    let add = (arr.length + 1) * newavg - sm;
    if (add > 0)
        return Math.ceil(add);
    throw new RangeError("Expected New Average is too low"); 
}    
//................
function doEx() {
    let out = [];
    let rando = randint(1, 99);
    let j = 0;
    while (j < rando) {
        out.push(randint(10, 200000));
        j += 1;
    }
    return out;
}
//...............

describe("Random Tests 1", function() {  
  for (let i = 0; i < 50; i++) {
    let arr = doEx();
    let rnd = randint(5000, 10000);
    let sm = arr.reduce(function(a, b) { return a + b; }, 0);
    let l = arr.length;
    let avg = sm / l;
    let ans = newAvgSol32(arr, avg + rnd)
    it("", function() {
        testing(arr, avg + rnd, ans);
    }
  )};
});
describe("Random Tests 2", function() {  
  for (let i = 0; i < 10; i++) {
    let arr = doEx();
    let rnd = randint(5000, 10000);
    let sm = arr.reduce(function(a, b) { return a + b; }, 0);
    let l = arr.length;
    let avg = sm / l;
    let ans = newAvgSol32(arr, avg + rnd)
    it("", function() {
        expect(function(){ newAvg(arr, (avg - rnd) / 6.0); }).to.throw("Expected New Average is too low");
    }
  )};
});



