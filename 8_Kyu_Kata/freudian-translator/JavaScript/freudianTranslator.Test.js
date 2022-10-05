// [object Object] - Freudian translator   [ ID: 5713bc89c82eff33c60009f7  (freudian-translator) ]
// URL: https://www.codewars.com/kata/5713bc89c82eff33c60009f7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Final Tests", () => {
  
  it("Fixed test", () => {
    Test.assertSimilar(toFreud(""), "");
    Test.assertSimilar(toFreud("test"), "sex");
    Test.assertSimilar(toFreud("This is a test"), "sex sex sex sex" );
    Test.assertSimilar(toFreud("This is a longer test"), "sex sex sex sex sex" );
    Test.assertSimilar(toFreud("You're becoming a true freudian expert"), "sex sex sex sex sex sex" );
  });
});


function toffreud(string) {
string=string.split(' ');
for (i=0;i<string.length;i++) { 

string[i]="sex"; }

return string.join(' ');

}

function newword() {
  
let arr=[];
let letters=    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let length= (3+Math.floor(Math.random()*5));
  
for (let i=0;i<length;i++) {arr.push(letters[Math.floor(Math.random()*48)]);}
  return arr.join('');
  
}

describe("Random test", () => {

for (let j=0;j<=100;j++) {
  
  let arrlength=Math.floor(2+Math.random()*50);
  let arr2=[];
  
  for (let k=0;k<arrlength;k++) {
    
   arr2.push(newword());
    
  }
  arr2=arr2.join(' ');
  console.log("Original string was "+"'"+arr2+"'");
  Test.assertSimilar(toFreud(arr2), toffreud(arr2), arr2);
} 

});
