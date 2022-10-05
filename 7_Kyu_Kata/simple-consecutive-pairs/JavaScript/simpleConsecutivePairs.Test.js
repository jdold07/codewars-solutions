// [object Object] - Simple consecutive pairs  [ ID: 5a3e1319b6486ac96f000049  (simple-consecutive-pairs) ]
// URL: https://www.codewars.com/kata/5a3e1319b6486ac96f000049
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const _ = require('lodash');

describe("Basic tests", function(){
Test.assertEquals(pairs([1,2,5,8,-4,-3,7,6,5]),3);
Test.assertEquals(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
Test.assertEquals(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
Test.assertEquals(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
Test.assertEquals(pairs([73, 72, 8, 9, 73, 72]),3);
});

describe("Random tests", function(){
for (let i = 0; i < 100; i++) {
    let s = randsojs();
    let expected = solveI8yiy(s);
    Test.assertEquals(pairs(s), expected);
  }
});

function solveI8yiy(arr){
    let c = 0;
    for (let i = 1; i < arr.length; i+=2){
        if (Math.abs(arr[i] - arr[i-1]) == 1) c++;
    }
    return c;
}

function randsojs(){
    let len = _.random(5,100), i = 0, res = [];
    while (i < len){
        let n = _.random(-100,100), p = _.random(0,1), t = _.random(4,5);
        res.push(n);
        if (t == 4) res.push(_.random(0,50))
        p == 0 ? res.push(n+1) : res.push(n-1);
        i++;
    }
    return res;
}


