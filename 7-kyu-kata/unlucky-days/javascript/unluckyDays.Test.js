// 7 kyu - Unlucky Days  [ ID: 56eb0be52caf798c630013c0  (unlucky-days) ]
// URL: https://www.codewars.com/kata/56eb0be52caf798c630013c0
// Category: REFERENCE  |  Tags: DATE TIME | FUNDAMENTALS
// *****************************************************************************
describe("Basic Tests",() =>{
Test.assertEquals(unluckyDays(2819), 2, "should be: 2");
Test.assertEquals(unluckyDays(2792), 2, "should be: 2");
Test.assertEquals(unluckyDays(2723), 2, "should be: 2");
Test.assertEquals(unluckyDays(1909), 1, "should be: 1");
Test.assertEquals(unluckyDays(1812), 2, "should be: 2");
Test.assertEquals(unluckyDays(1618), 2, "should be: 2");
Test.assertEquals(unluckyDays(2132), 1, "should be: 1");
Test.assertEquals(unluckyDays(2065), 3, "should be: 3");
Test.assertEquals(unluckyDays(2017), 2, "should be: 2");
})

describe("Random tests",() =>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=y=>new Array(13).join("a").split("").map((a,i)=>new Date(y,i,13).getDay()==5).reduce((a,b)=>a+b,0);

for (let i=0;i<40;i++){
  let y=randint(1583,2999);
  it(`Testing for year ${y}`,() =>{
  Test.assertEquals(unluckyDays(y),sol(y),"It should work for random inputs too");
  })
}
})
