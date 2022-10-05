// [object Object] - Atbash Cipher Helper  [ ID: 52f2f5ecc807c0ab1a00001a  (atbash-cipher-helper) ]
// URL: https://www.codewars.com/kata/52f2f5ecc807c0ab1a00001a
// Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
// *****************************************************************************
var desc = "Testing with Latin lowercase alphabet";
describe(desc, function () {
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var c = new AtbashCipher(abc);
  Test.assertEquals(c.encode('abc'), 'zyx');
  Test.assertEquals(c.encode('zyx'), 'abc');
  Test.assertEquals(c.decode('abc'), 'zyx');
  Test.assertEquals(c.decode('zyx'), 'abc');
  Test.assertEquals(c.encode('codewars'), 'xlwvdzih');
  Test.assertEquals(c.decode('codewars'), 'xlwvdzih');
  Test.assertEquals(c.encode('xlwvdzih'), 'codewars');
  Test.assertEquals(c.decode('xlwvdzih'), 'codewars');
  Test.assertEquals(c.encode('CODEWARS'), 'CODEWARS');
  Test.assertEquals(c.encode('WARCODES'), 'WARCODES');

});

desc = "Testing with described Hebrew alphabet";
describe(desc, function () {
  var abc = "אבגדהוזחטיכלמנסעפצקרשת";
  var c = new AtbashCipher(abc);
  Test.assertEquals(c.encode('\u05d0\u05d1\u05d2'), '\u05ea\u05e9\u05e8');
  Test.assertEquals(c.encode('\u05ea\u05e9\u05e8'), '\u05d0\u05d1\u05d2');
  Test.assertEquals(c.decode('\u05d0\u05d1\u05d2'), '\u05ea\u05e9\u05e8');
  Test.assertEquals(c.decode('\u05ea\u05e9\u05e8'), '\u05d0\u05d1\u05d2');

  Test.assertEquals(c.encode('\u05e9\u05e9\u05db'), '\u05d1\u05d1\u05dc');
  Test.assertEquals(c.decode('\u05d1\u05d1\u05dc'), '\u05e9\u05e9\u05db');
  Test.assertEquals(c.encode('\u05e9\u05e9\u05db'), '\u05d1\u05d1\u05dc');
  Test.assertEquals(c.decode('\u05d1\u05d1\u05dc'), '\u05e9\u05e9\u05db');

  Test.assertEquals(c.encode('\u05dc\u05d1\u05e7\u05de\u05d9'), '\u05db\u05e9\u05d3\u05d9\u05de');
  Test.assertEquals(c.decode('\u05db\u05e9\u05d3\u05d9\u05de'), '\u05dc\u05d1\u05e7\u05de\u05d9');
  Test.assertEquals(c.encode('\u05db\u05e9\u05d3\u05d9\u05de'), '\u05dc\u05d1\u05e7\u05de\u05d9');
  Test.assertEquals(c.decode('\u05dc\u05d1\u05e7\u05de\u05d9'), '\u05db\u05e9\u05d3\u05d9\u05de');
});

desc = "Testing with Greek uppercase alphabet";
describe(desc, function () {
  var abc = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
  var c = new AtbashCipher(abc);
  Test.assertEquals(c.encode('ΑΒΓ'), 'ΩΨΧ');
  Test.assertEquals(c.encode('ΩΨΧ'), 'ΑΒΓ');
  Test.assertEquals(c.decode('ΑΒΓ'), 'ΩΨΧ');
  Test.assertEquals(c.decode('ΩΨΧ'), 'ΑΒΓ');
  Test.assertEquals(c.encode('ΑΓΑΠΗ'), 'ΩΧΩΙΣ');
  Test.assertEquals(c.decode('ΩΧΩΙΣ'), 'ΑΓΑΠΗ');
  Test.assertEquals(c.decode('ΑΓΑΠΗ'), 'ΩΧΩΙΣ');
  Test.assertEquals(c.encode('ΚΩΔΙΚΟΣ'), 'ΟΑΦΠΟΚΗ');
  Test.assertEquals(c.decode('ΟΑΦΠΟΚΗ'), 'ΚΩΔΙΚΟΣ');
  Test.assertEquals(c.encode('ΜΑΧΗ'), 'ΝΩΓΣ');
  Test.assertEquals(c.encode('ΝΩΓΣ'), 'ΜΑΧΗ');
});
