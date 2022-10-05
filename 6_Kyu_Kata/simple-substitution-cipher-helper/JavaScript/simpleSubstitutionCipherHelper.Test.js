// [object Object] - Simple Substitution Cipher Helper  [ ID: 52eb114b2d55f0e69800078d  (simple-substitution-cipher-helper) ]
// URL: https://www.codewars.com/kata/52eb114b2d55f0e69800078d
// Category: ALGORITHMS  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
// *****************************************************************************
let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";
let sub = new SubstitutionCipher(abc1, abc2);
Test.assertEquals(sub.encode("abc"), "eta");
Test.assertEquals(sub.encode("xyz"), "qxz");
Test.assertEquals(sub.encode("aeiou"), "eirfg");
Test.assertEquals(sub.decode("eta"), "abc");
Test.assertEquals(sub.decode("qxz"), "xyz");
Test.assertEquals(sub.decode("eirfg"), "aeiou");

abc2 = 'tfozcivbsjhengarudlkpwqxmy';
sub = new SubstitutionCipher(abc1, abc2);
Test.assertEquals(sub.encode('abc'), 'tfo');
Test.assertEquals(sub.decode('tfo'), 'abc');
Test.assertEquals(sub.encode('tjuukf'), 'kjpphi');
Test.assertEquals(sub.decode('kjpphi'), 'tjuukf');
Test.assertEquals(sub.decode('tjuukf'), 'ajqqtb');
Test.assertEquals(sub.encode('ajqqtb'), 'tjuukf');

Test.assertEquals(sub.encode('a_bc&*83'), 't_fo&*83');
Test.assertEquals(sub.decode('t_fo*&83'), 'a_bc*&83');

abc1 = Test.randomize(abc1.split('')).join('');
abc2 = Test.randomize(abc1.split('')).join('');

sub = new SubstitutionCipher(abc1, abc2);
for (let i = 0; i < 8; i++) {
  let str = Test.randomToken();
  let cmp = str.split('').map(function (x) {
    let i = abc1.indexOf(x);
    return i < 0 ? x : abc2[i];
  }).join('');
  Test.assertEquals(sub.encode(str), cmp);
  cmp = str.split('').map(function (x) {
    let i = abc2.indexOf(x);
    return i < 0 ? x : abc1[i];
  }).join('');
  Test.assertEquals(sub.decode(str), cmp);
}
