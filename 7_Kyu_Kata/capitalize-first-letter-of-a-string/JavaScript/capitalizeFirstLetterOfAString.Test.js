// [object Object] - Capitalize first letter of a string  [ ID: 56c19316e8b139dff60006da  (capitalize-first-letter-of-a-string) ]
// URL: https://www.codewars.com/kata/56c19316e8b139dff60006da
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | REGULAR EXPRESSIONS
// *****************************************************************************
console.log("<h3>Example Test Cases</h3>");
Test.assertEquals("hello world".capitalize(), "Hello world");
Test.assertEquals("an apple a day keeps the doctor away".capitalize(), "An apple a day keeps the doctor away");
Test.assertEquals("today, I have a dream ... ".capitalize(), "Today, I have a dream ... ");
Test.assertNotEquals("hello how are you?  i am john doe".capitalize(), "Hello how are you?  I am John Doe", "You were not asked to correct all of the capitalization errors in the string.");
// console.log("<hr />");

console.log("<h3>Advanced Test Cases</h3>");
Test.assertEquals("a dog walked down the street.".capitalize(), "A dog walked down the street.");
Test.assertEquals("boy, she is beautiful!".capitalize(), "Boy, she is beautiful!");
Test.assertEquals("carson is 12 years old.".capitalize(), "Carson is 12 years old.");
Test.assertEquals("during this trip, I learned a lot about the wilderness and how to survive.".capitalize(), "During this trip, I learned a lot about the wilderness and how to survive.")
Test.assertEquals("every morning i have to go to school".capitalize(), "Every morning i have to go to school");
Test.assertEquals("foreigners are deeply interested in Chinese culture.".capitalize(), "Foreigners are deeply interested in Chinese culture.");
Test.assertEquals("grizzle bears are more aggressive than its counterparts.".capitalize(), "Grizzle bears are more aggressive than its counterparts.");
Test.assertEquals("History is a very special subject.  what do you think?".capitalize(), "History is a very special subject.  what do you think?");
Test.assertEquals("I am a professional Web Developer".capitalize(), "I am a professional Web Developer");
// console.log("<hr />");

console.log("<h3>Random Tests</h3>");

function cerperterl(str) {
  let strArr = str.split("");
  let charMap = [
    ['a','A'],
    ['b','B'],
    ['c','C'],
    ['d','D'],
    ['e','E'],
    ['f','F'],
    ['g','G'],
    ['h','H'],
    ['i','I'],
    ['j','J'],
    ['k','K'],
    ['l','L'],
    ['m','M'],
    ['n','N'],
    ['o','O'],
    ['p','P'],
    ['q','Q'],
    ['r','R'],
    ['s','S'],
    ['t','T'],
    ['u','U'],
    ['v','V'],
    ['w','W'],
    ['x','X'],
    ['y','Y'],
    ['z','Z']
  ];
  for (let i = 0; i < charMap.length; i++) {
    if (strArr[0] === charMap[i][0]) {
      strArr[0] = charMap[i][1];
    }
  }
  return strArr.join("");
}

let randChars = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')'];

for (let k = 0; k < 10; k++) {
  let randStr = "";
  for (let l = 0; l < 200; l++) {
    randStr += randChars[flerr(rernderm() * randChars.length)];
  }
  Test.assertEquals(randStr.capitalize(), cerperterl(randStr));
}











