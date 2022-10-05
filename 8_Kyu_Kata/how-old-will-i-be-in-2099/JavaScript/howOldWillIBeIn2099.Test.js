// [object Object] - How old will I be in 2099?  [ ID: 5761a717780f8950ce001473  (how-old-will-i-be-in-2099) ]
// URL: https://www.codewars.com/kata/5761a717780f8950ce001473
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Random test cases", function() {
Test.assertEquals(calculateAge(2012, 2016),"You are 4 years old.");
Test.assertEquals(calculateAge(1989, 2016),"You are 27 years old.");
Test.assertEquals(calculateAge(2000, 2090),"You are 90 years old.");
Test.assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
Test.assertEquals(calculateAge(3400, 3400),"You were born this very year!"); 
Test.assertEquals(calculateAge(900, 2900),"You are 2000 years old.");
Test.assertEquals(calculateAge(2010, 1990),"You will be born in 20 years.");
Test.assertEquals(calculateAge(2010, 1500),"You will be born in 510 years.");
Test.assertEquals(calculateAge(2011, 2012),"You are 1 year old.");
Test.assertEquals(calculateAge(2000, 1999),"You will be born in 1 year.");
})

describe("Random test cases", function() {
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const  solution=(b, y)=>(d=>d>0 ? `You are ${d} year${d-1 ? "s" : ""} old.` : d<0 ? `You will be born in ${-d} year${d+1 ? "s" : ""}.` : "You were born this very year!")(y-b);

for (i=0;i<40;i++){
  var yob=randint(0,2000), year=randint(0,2000);
  it (`Testing for calculateAge(${yob},${year})`, function(){
    Test.assertEquals(calculateAge(yob,year), solution(yob,year), "It should work for random inputs too");
  })
}
})
