// [object Object] - Classy Extentions  [ ID: 55a14aa4817efe41c20000bc  (classy-extentions) ]
// URL: https://www.codewars.com/kata/55a14aa4817efe41c20000bc
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe('Fixed Tests', () => {
  let cat = new Cat('Mr Whiskers');
  Test.assertEquals(cat.speak(),'Mr Whiskers meows.')
  cat = new Cat('Lamp');
  Test.assertEquals(cat.speak(),'Lamp meows.')
  cat = new Cat('$$Money Bags$$');
  Test.assertEquals(cat.speak(),'$$Money Bags$$ meows.')
});

let names = ['Mr Whiskers', 'Lamp', '$$Money Bags$$', 'meowmeow',
'mirou','milo','spots','dog','llama','code','wars',
'stripes','dug','barf'];
describe('Random Tests', () => {
  for(let i=0;i<50;i++){
    let name = names[Math.floor(Math.random()*names.length)];
    cat = new Cat(name);
    Test.assertEquals(cat.speak(),`${name} meows.`);
  }
});

describe('Animal Test', () => {
  let animal = new Animal('noise');
  Test.assertEquals(animal.speak(), 'noise makes a noise.');
});

