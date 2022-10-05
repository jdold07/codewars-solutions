// [object Object] - Did she say hallo?  [ ID: 56a4addbfd4a55694100001f  (did-she-say-hallo) ]
// URL: https://www.codewars.com/kata/56a4addbfd4a55694100001f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Basic tests",() =>{
Test.assertEquals(validateHello('hello'), true);
Test.assertEquals(validateHello('ciao'), true);
Test.assertEquals(validateHello('salut'), true);
Test.assertEquals(validateHello('hallo'), true);
Test.assertEquals(validateHello('hola'), true);
Test.assertEquals(validateHello('ahoj'), true);
Test.assertEquals(validateHello('czesc'), true);
Test.assertEquals(validateHello('meh'), false);
Test.assertEquals(validateHello('Ahoj'), true);
})

describe("Random tests",() =>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const validate_sol=greetings=>(greetings=>["hello","ciao","salut","hallo","hola","ahoj","czesc"].map(a=>greetings.indexOf(a)!=-1).reduce((a,b)=>a || b, false))(greetings.toLowerCase());
greetings=["hello","ciao","salut","hallo","hola","ahoj","czesc"]
other=["tschuss","hombre","hasta","la","vista","que","pasa","wie","tres","bien","how","are","you","doing"]
punctuation=["","","","","",",",".","?",":",";","!"]

for (let qu=0;qu<40;qu++){
    let greeting=[], len=randint(3,30);
    for (let q=0;q<len;q++){
      greeting.push((randint(0,10)==0 ? greetings[randint(0,greetings.length-1)] : other[randint(0,other.length-1)])+punctuation[randint(0,punctuation.length-1)]);
    }
    greeting=greeting.join(" ");
    greeting=greeting.split("").map(x=>randint(0,1)==0 ? x : x.toUpperCase()).join("");
    it(`Testing for "${greeting}"`,() =>{
    Test.assertEquals(validateHello(greeting),validate_sol(greeting),"It should work for random inputs too")
    })
}
})
