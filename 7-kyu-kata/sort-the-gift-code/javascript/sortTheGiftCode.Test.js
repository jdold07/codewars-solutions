// 7 kyu - Sort the Gift Code  [ ID: 52aeb2f3ad0e952f560005d3  (sort-the-gift-code) ]
// URL: https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3
// Category: REFERENCE  |  Tags: SORTING | STRINGS | FUNDAMENTALS
// *****************************************************************************
Array.prototype.shuffle = function(){
  let copy = [].concat(this);
  let ran1, ran2, tmp;
  for(let i=0; i<copy.length*2; i++){
    ran1 = Math.floor(Math.random()*copy.length);
    ran2 = Math.floor(Math.random()*copy.length);
    
    tmp = copy[ran1]
    copy[ran1] = copy[ran2];
    copy[ran2] = tmp;
  }
  return copy;
}
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let code, rand, solution;
alphabet = alphabet.split('');


for(let i=0; i<10; i++){
  alphabet = alphabet.shuffle();
  rand = Math.floor(Math.random() * 26) || 1;
  code = alphabet.slice(0, rand).join('');
  solution = code.split('').sort().join('');
  Test.assertEquals(sortGiftCode(code), solution);
}
console.log('Congratulations and Happy Holidays from xDranik!');
