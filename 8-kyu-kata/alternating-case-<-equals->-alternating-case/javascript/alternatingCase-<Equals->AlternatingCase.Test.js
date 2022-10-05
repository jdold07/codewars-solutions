// 8 kyu - altERnaTIng cAsE <=> ALTerNAtiNG CaSe  [ ID: 56efc695740d30f963000557  (alternating-case-<-equals->-alternating-case) ]
// URL: https://www.codewars.com/kata/56efc695740d30f963000557
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("String.prototype.toAlternatingCase", () => {
  it("should work for fixed tests (provided in the description)", () => {
    Test.assertEquals("hello world".toAlternatingCase(), "HELLO WORLD");
    Test.assertEquals("HELLO WORLD".toAlternatingCase(), "hello world");
    Test.assertEquals("hello WORLD".toAlternatingCase(), "HELLO world");
    Test.assertEquals("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    Test.assertEquals("12345".toAlternatingCase(), "12345");
    Test.assertEquals("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    Test.assertEquals("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    Test.assertEquals("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
  });
  it("should not modify the original string", () => {
    var string = "string";
    Test.assertEquals(string.toAlternatingCase(), "STRING");
    Test.assertEquals(string, "string");
    Test.assertNotEquals(string, "STRING");
    for (let i = 0; i < 5; i++) {
      Test.assertEquals(string.toAlternatingCase(), "STRING"); // If original string is mutated when the method is called, calling the method on the same string repeatedly would return alternating results instead of the same results every time
    }
    string = "hElLo wOrLd";
    Test.assertEquals(string.toAlternatingCase(), "HeLlO WoRlD");
    Test.assertEquals(string, "hElLo wOrLd");
    Test.assertNotEquals(string, "HeLlO WoRlD");
    for (let i = 0; i < 5; i++) {
      Test.assertEquals(string.toAlternatingCase(), "HeLlO WoRlD");
    }
  });
  it("should work for the title of this Kata", () => {
    var title = "altERnaTIng cAsE";
    title = title.toAlternatingCase();
    Test.assertEquals(title, "ALTerNAtiNG CaSe");
    title = title.toAlternatingCase();
    Test.assertEquals(title, "altERnaTIng cAsE");
    title = title.toAlternatingCase();
    Test.assertEquals(title, "ALTerNAtiNG CaSe");
    title = title.toAlternatingCase();
    Test.assertEquals(title, "altERnaTIng cAsE");
    title = "altERnaTIng cAsE <=> ALTerNAtiNG CaSe";
    title = title.toAlternatingCase();
    Test.assertEquals(title, "ALTerNAtiNG CaSe <=> altERnaTIng cAsE");
    title = title.toAlternatingCase();
    Test.assertEquals(title, "altERnaTIng cAsE <=> ALTerNAtiNG CaSe");
    title = title.toAlternatingCase();
    Test.assertEquals(title, "ALTerNAtiNG CaSe <=> altERnaTIng cAsE");
    title = title.toAlternatingCase();
    Test.assertEquals(title, "altERnaTIng cAsE <=> ALTerNAtiNG CaSe");
  });
  it("should finally work for random tests", () => {
    const solution = function(s) {
      return s.split("").map(c=>c==c.toLowerCase()?c.toUpperCase():c.toLowerCase()).join("");
    }
    
    const randint = require("lodash/random");
    const base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789   "
    const randword = (s, n) => Array.from({length: n}, x => s[randint(0, s.length - 1)]).join("");
    
    for (let i = 0; i < 200; i++) {
      var randStr = randword(base, randint(1, 20));
      Test.assertEquals(randStr.toAlternatingCase(), solution(randStr));
    }
  });
});
