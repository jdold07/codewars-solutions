// 7 kyu - Simple string characters  [ ID: 5a29a0898f27f2d9c9000058  (simple-string-characters) ]
// URL: https://www.codewars.com/kata/5a29a0898f27f2d9c9000058
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const _ = require('lodash');

describe("Basic tests", function(){
Test.assertDeepEquals(solve("Codewars@codewars123.com"),[1,18,3,2]);
Test.assertDeepEquals(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
Test.assertDeepEquals(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
Test.assertDeepEquals(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
Test.assertDeepEquals(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
Test.assertDeepEquals(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
});

describe("Random tests", function(){
for (let i = 0; i < 100; i++) {
    let arr = randSt();
    let expected = solvec8ui(arr);
    Test.assertDeepEquals(solve(arr), expected);
  }
});

function solvec8ui(s){
    let n = 0; let up = 0; let low = 0; let sp = 0;
    for (let i = 0; i < s.length; i++){
        let temp = s.charCodeAt(i);
        if (temp >= 48 && temp <= 57){
            n++;
        }
        else if (temp >= 97 && temp <= 122){
            low++;
        }
        else if (temp >= 65 && temp <= 90){
            up++;
        }
        else sp++;
    }
    return [up,low,n,sp]
}

function randSt() {
    res = [];
    for (let i = 33; i < 47; i++){
        res.push(String.fromCharCode(i))
    }
    for (let i = 60; i < 65; i++){
        res.push(String.fromCharCode(i))
    }
    for (let i = 97; i < 123; i++){
        res.push(String.fromCharCode(i))
    }
    for (let i = 65; i < 91; i++){
        res.push(String.fromCharCode(i))
    }
    for (let i = 48; i < 58; i++){
        res.push(String.fromCharCode(i))
    }    
    let r = _.random(15,res.length-1);
    return _.take ((_.shuffle(res)),r).join("");
};
