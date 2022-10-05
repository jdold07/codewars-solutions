// [object Object] - Leonardo Dicaprio and Oscars  [ ID: 56d49587df52101de70011e4  (leonardo-dicaprio-and-oscars) ]
// URL: https://www.codewars.com/kata/56d49587df52101de70011e4
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

Test.assertEquals(leo(88),"Leo finally won the oscar! Leo is happy")
Test.assertEquals(leo(87),"When will you give Leo an Oscar?")
Test.assertEquals(leo(86),"Not even for Wolf of wallstreet?!")
Test.assertEquals(leo(random(1, 85)),"When will you give Leo an Oscar?")
Test.assertEquals(leo(random(1, 85)),"When will you give Leo an Oscar?")
Test.assertEquals(leo(random(1, 85)),"When will you give Leo an Oscar?")
Test.assertEquals(leo(random(89, 150)),"Leo got one already!")
Test.assertEquals(leo(random(89, 150)),"Leo got one already!")
Test.assertEquals(leo(random(89, 150)),"Leo got one already!")
  });
});

