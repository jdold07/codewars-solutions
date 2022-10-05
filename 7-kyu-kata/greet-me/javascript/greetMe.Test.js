// 7 kyu - Greet Me  [ ID: 535474308bb336c9980006f2  (greet-me) ]
// URL: https://www.codewars.com/kata/535474308bb336c9980006f2
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Greet Me", function(){

  function randomString(len, charSet) {
      charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let randomString = '';
      for (let i = 0; i < len; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
      }
      return randomString;
  }
  
  randName = randomString(Math.floor(Math.random() * 15));
  
  it ("should return 'Hello Name!', if all lowerCase string is given", function() {
    Test.assertEquals(greet('molly'), "Hello Molly!");
  });
    
  it ("should return 'Hello Name!' if string is all upperCase", function() {
    Test.assertEquals(greet('BILLY'), "Hello Billy!");
  });
  
  it ("should return 'Hello Name!' for random string", function() {
    Test.assertEquals(greet(randName), "Hello " + randName.charAt(0).toUpperCase() + randName.substring(1).toLowerCase() + "!");
  });
});
