// 6 kyu - CamelCase Method  [ ID: 587731fda577b3d1b0001196  (camelcase-method) ]
// URL: https://www.codewars.com/kata/587731fda577b3d1b0001196
// Category: ALGORITHMS  |  Tags: FUNDAMENTALS | ALGORITHMS | STRINGS
// *****************************************************************************
describe("Basic tests",() =>{
Test.assertEquals("test case".camelCase(), "TestCase");
Test.assertEquals("camel case method".camelCase(), "CamelCaseMethod");
Test.assertEquals("say hello ".camelCase(), "SayHello");
Test.assertEquals(" camel case word".camelCase(), "CamelCaseWord");
Test.assertEquals("".camelCase(), "");
})

describe("Random tests",() =>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=s=>s.split(" ").map(a=>a[0].toUpperCase()+a.slice(1).toLowerCase()).join("");
const base="abcdefghijklmnopqrstuvwxyz";

for (let i=0;i<40;i++){
  const s=Array.from({length: randint(1,15)},a=>Array.from({length: randint(3,15)},a=>base[randint(0,base.length-1)]).join("")).join(" ");
  it(`Testing for ${s}`,() =>{
  const expected=sol(s);
  Test.assertEquals(s.camelCase(), expected, "It should work for random inputs too");
  })
}
})
