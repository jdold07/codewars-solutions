// [object Object] - Find the position!  [ ID: 5808e2006b65bff35500008f  (find-the-position) ]
// URL: https://www.codewars.com/kata/5808e2006b65bff35500008f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Basic Tests", () =>{
  Test.assertEquals(position("a"),"Position of alphabet: 1");
  Test.assertEquals(position("z"),"Position of alphabet: 26");
  Test.assertEquals(position("e"),"Position of alphabet: 5");
});

describe("Random Test",() =>{
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
  for(let i = 0; i < 100;i ++) {
    const letter = ALPHABET[Math.floor(Math.random()*26)]
    Test.assertEquals(position(letter),"Position of alphabet: "+(letter.charCodeAt(0)-96));
  }
});
