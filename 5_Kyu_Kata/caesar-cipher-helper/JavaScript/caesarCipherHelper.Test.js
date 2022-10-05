// [object Object] - Caesar Cipher Helper  [ ID: 526d42b6526963598d0004db  (caesar-cipher-helper) ]
// URL: https://www.codewars.com/kata/526d42b6526963598d0004db
// Category: ALGORITHMS  |  Tags: CIPHERS | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
// *****************************************************************************
describe("Testing the CaesarCipher class", function () {
  let c;
  it("Shift of 5", function () {
    c = new CaesarCipher(5);
  
    Test.assertEquals(c.encode('Codewars'), 'HTIJBFWX');
    Test.assertEquals(c.decode('HTIJBFWX'), 'CODEWARS');
    Test.assertEquals(c.encode('WAFFLES'), 'BFKKQJX');
    Test.assertEquals(c.decode('BFKKQJX'), 'WAFFLES');
    Test.assertEquals(c.encode("IT'S A SHIFT CIPHER!!"), "NY'X F XMNKY HNUMJW!!");
    Test.assertEquals(c.decode("NY'X F XMNKY HNUMJW!!"), "IT'S A SHIFT CIPHER!!");
  });
  it("Shift of 13", function () {
    c = new CaesarCipher(13);
    let rs;
  
    Test.assertEquals(c.encode('CNAPNXRF'), 'PANCAKES');
    Test.assertEquals(c.decode('PANCAKES'), 'CNAPNXRF');
    Test.assertEquals(c.encode('JAVASCRIPT'), 'WNINFPEVCG');
    Test.assertEquals(c.decode('WNINFPEVCG'), 'JAVASCRIPT');
    for(let i = 0; i < 5; i++) {
      rs = Test.randomToken().toUpperCase();
      Test.assertEquals(c.decode(c.encode(rs)), rs);
    }
  });
  it("Shift of 26", function () {
    c = new CaesarCipher(26);
    let rs;
  
    for(let i = 0; i < 7; i++) {
      rs = Test.randomToken().toUpperCase();
      Test.assertEquals(c.decode(rs), rs);
      Test.assertEquals(c.encode(rs), rs);
    }
  });
});
