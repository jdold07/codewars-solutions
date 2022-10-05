// 7 kyu - Inspiring Strings  [ ID: 5939ab6eed348a945f0007b2  (inspiring-strings) ]
// URL: https://www.codewars.com/kata/5939ab6eed348a945f0007b2
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
Test.assertEquals( longestWord('a b c d each') , "each" );
Test.assertEquals( longestWord('each step') , "step" );
Test.assertEquals( longestWord('forward each step going') , "forward" );
Test.assertEquals( longestWord('brings each step going') , "brings" );
Test.assertEquals( longestWord('brings each opportunity step going') , "opportunity" );

for(let i = 0; i < 25; i ++){
  let word = Test.randomToken() + ' ' + Test.randomToken();
  Test.assertEquals( longestWord(word) , checkSolution(word) );
}

function checkSolution(strings){
  let stringArr = strings.split(' ');
  let wordBank = '';
  stringArr.map((word)=>{
    if (word.length >= wordBank.length){
      wordBank = word;
    }
  })
  return wordBank;
}
