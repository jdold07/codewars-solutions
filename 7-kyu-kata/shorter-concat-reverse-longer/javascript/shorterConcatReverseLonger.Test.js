// 7 kyu - shorter concat [reverse longer]  [ ID: 54557d61126a00423b000a45  (shorter-concat-reverse-longer) ]
// URL: https://www.codewars.com/kata/54557d61126a00423b000a45
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
Test.assertEquals(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
Test.assertEquals(shorter_reverse_longer("hello", "bau"), "bauollehbau");
Test.assertEquals(shorter_reverse_longer("abcde", "fghi"), "fghiedcbafghi");

function test_shorter_reverse_longer(a,b){
  return (b.length > a.length) ? a+b.split("").reverse().join("")+a : b+a.split("").reverse().join("")+b
}

function random_string(){
  let l = Math.floor((Math.random() * 10));
  let text = "";
  let possible = "abcdefghijklmnopqrstuvwxyz";
  for( let i=0; i < l; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

for(let i=0; i < 100; i++ ) {
  let a = random_string();
  let b = random_string();
  Test.assertEquals(test_shorter_reverse_longer(a,b),shorter_reverse_longer(a, b));
}