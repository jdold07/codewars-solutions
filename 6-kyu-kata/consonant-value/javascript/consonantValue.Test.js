// 6 kyu - Consonant value  [ ID: 59c633e7dcc4053512000073  (consonant-value) ]
// URL: https://www.codewars.com/kata/59c633e7dcc4053512000073
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const _ = require('lodash')

describe("Basic tests", function(){
Test.assertEquals(solve("zodiac"),26);
Test.assertEquals(solve("chruschtschov"),80);
Test.assertEquals(solve("khrushchev"),38);
Test.assertEquals(solve("strength"),57);
Test.assertEquals(solve("catchphrase"),73);
Test.assertEquals(solve("twelfthstreet"),103);
Test.assertEquals(solve("mischtschenkoana"),80);
Test.assertEquals(solve("az"),26);
});

describe("Random tests", function(){
for (let i=0;i<100;i++){
  let r  = _.random(300,1000);
  let s = randomWord(r);
  Test.assertEquals(solve(s), solve51_YxM(s), "It should work for random inputs too"); 
}
});

function solve51_YxM(s){
    return Math.max(...s.split(/[aeiou]+/).filter(e=>e!="").map(e=> e.split('')).map(x => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0)))
}

    
function randomWord(r) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let vowels = "aeiou", v = '', abc =''
    for (let i = 0; i <= r; i++) {
        v += vowels[_.random(0,vowels.length-1)];      
        abc += letters[_.random(0,letters.length-1)];
    }   
    return (v + abc).split('').sort(function () {
        return 0.5 - Math.random()
    }).join('');}
