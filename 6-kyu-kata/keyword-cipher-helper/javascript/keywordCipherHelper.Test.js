// 6 kyu - Keyword Cipher Helper  [ ID: 535c1c80cdbf5011e600030f  (keyword-cipher-helper) ]
// URL: https://www.codewars.com/kata/535c1c80cdbf5011e600030f
// Category: REFACTORING  |  Tags: CRYPTOGRAPHY | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
// *****************************************************************************
var abc = "abcdefghijklmnopqrstuvwxyz";
var key = "keyword";
var sub = new KeywordCipher(abc, key);
Test.assertEquals(sub.encode("abc"), "key");
Test.assertEquals(sub.encode("xyz"), "vxz");
Test.assertEquals(sub.encode("aeiou"), "kobjs");
Test.assertEquals(sub.decode("key"), "abc");
Test.assertEquals(sub.decode("vxz"), "xyz");
Test.assertEquals(sub.decode("kobjs"), "aeiou");

var key = "codewars";
var sub = new KeywordCipher(abc, key);
Test.assertEquals(sub.encode("abc"), "cod");
Test.assertEquals(sub.encode("xyz"), "xyz");
Test.assertEquals(sub.encode("aeiou"), "cwbkt");
Test.assertEquals(sub.decode("cod"), "abc");
Test.assertEquals(sub.decode("xyz"), "xyz");
Test.assertEquals(sub.decode("cwbkt"), "aeiou");

var key = "purplepineapple";
var sub = new KeywordCipher(abc, key);
Test.assertEquals(sub.encode("abc"), "pur");
Test.assertEquals(sub.encode("xyz"), "xyz");
Test.assertEquals(sub.encode("aeiou"), "pebjt");
Test.assertEquals(sub.decode("pur"), "abc");
Test.assertEquals(sub.decode("xyz"), "xyz");
Test.assertEquals(sub.decode("pebjt"), "aeiou");

key = "etaoinshrdlucmfwypvbgkjqxz";
sub = new KeywordCipher(abc, key);
Test.assertEquals(sub.encode("abc"), "eta");
Test.assertEquals(sub.encode("xyz"), "qxz");
Test.assertEquals(sub.encode("aeiou"), "eirfg");
Test.assertEquals(sub.decode("eta"), "abc");
Test.assertEquals(sub.decode("qxz"), "xyz");
Test.assertEquals(sub.decode("eirfg"), "aeiou");

key = 'tfozcivbsjhengarudlkpwqxmy';
sub = new KeywordCipher(abc, key);
Test.assertEquals(sub.encode('abc'), 'tfo');
Test.assertEquals(sub.decode('tfo'), 'abc');
Test.assertEquals(sub.encode('tjuukf'), 'kjpphi');
Test.assertEquals(sub.decode('kjpphi'), 'tjuukf');
Test.assertEquals(sub.decode('tjuukf'), 'ajqqtb');
Test.assertEquals(sub.encode('ajqqtb'), 'tjuukf');

Test.assertEquals(sub.encode('a_bc&*83'), 't_fo&*83');
Test.assertEquals(sub.decode('t_fo*&83'), 'a_bc*&83');

abc = 'qWeRtYuIoPaSdFgHjKlZxCvBnM';
abc = Test.randomize(abc.split('')).join('');
key = Test.randomize(abc.split('')).join('');

sub = new KeywordCipher(abc, key);
for (var i = 0; i < 8; i++) {
  var str = Test.randomToken();
  var cmp = str.split('').map(function (x) {
    var i = abc.indexOf(x);
    return i < 0 ? x : key[i];
  }).join('');
  Test.assertEquals(sub.encode(str), cmp);
  cmp = str.split('').map(function (x) {
    var i = key.indexOf(x);
    return i < 0 ? x : abc[i];
  }).join('');
  Test.assertEquals(sub.decode(str), cmp);
}
