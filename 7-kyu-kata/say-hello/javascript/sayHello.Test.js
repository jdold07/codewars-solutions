// 7 kyu - Say hello!  [ ID: 55955a48a4e9c1a77500005a  (say-hello) ]
// URL: https://www.codewars.com/kata/55955a48a4e9c1a77500005a
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("greet", function() {
  it("works for some examples", function() {
    Test.assertEquals(greet("Niks"), "hello Niks!", "didn't work for 'Niks'");
    Test.assertEquals(greet("Nick"), "hello Nick!", "didn't work for 'Nick'");
    Test.assertEquals(greet(""), null, "didn't work for empty string");
    Test.assertEquals(greet(null), null, "didn't work for null");
  });
  
  it("works for random names", function() {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
    const randchar = () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[randint(0, 51)]
    
    const randword = (l) => Array.from({length: l}, _ => randchar()).join("");
    function solution(name) {

    	if (name === '' || name === null) {
      	return null;
      }
    
    	return "hello " + name + "!"; 
    }
    for (let i = 0; i < 40; ++i) {
      let name = randword(randint(0, 10));
      
      Test.assertEquals(greet(name), solution(name), `didn't work for ${name}`);
    }
  });
});

