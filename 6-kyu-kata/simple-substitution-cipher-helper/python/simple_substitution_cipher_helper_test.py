# 6 kyu - Simple Substitution Cipher Helper  [ ID: 52eb114b2d55f0e69800078d  (simple-substitution-cipher-helper) ]
# URL: https://www.codewars.com/kata/52eb114b2d55f0e69800078d
# Category: ALGORITHMS  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
# ******************************************************************************
map1 = "abcdefghijklmnopqrstuvwxyz"
map2 = "etaoinshrdlucmfwypvbgkjqxz"

print("Examples")
cipher = Cipher(map1, map2)
test.assert_equals(cipher.encode("abc"), "eta")
test.assert_equals(cipher.encode("xyz"), "qxz")
test.assert_equals(cipher.encode("aeiou"), "eirfg")
test.assert_equals(cipher.decode("eta"), "abc")
test.assert_equals(cipher.decode("qxz"), "xyz")
test.assert_equals(cipher.decode("eirfg"), "aeiou")

map2 = "tfozcivbsjhengarudlkpwqxmy"
cipher = Cipher(map1, map2)
test.assert_equals(cipher.encode("abc"), "tfo")
test.assert_equals(cipher.decode("tfo"), "abc")
test.assert_equals(cipher.encode("tjuukf"), "kjpphi")
test.assert_equals(cipher.decode("kjpphi"), "tjuukf")
test.assert_equals(cipher.decode("tjuukf"), "ajqqtb")
test.assert_equals(cipher.encode("ajqqtb"), "tjuukf")

print("\nSpecial Characters")
test.assert_equals(cipher.encode("a_bc&*83"), "t_fo&*83")
test.assert_equals(cipher.decode("t_fo*&83"), "a_bc*&83")

print("\nRandomized tests")
import string, random


def string_shuffle(s):
    l = list(s)
    random.shuffle(l)
    return "".join(l)


map1 = string_shuffle(map1)
map2 = string_shuffle(map2)
encode_table = str.maketrans(map1, map2)
decode_table = str.maketrans(map2, map1)
cipher = Cipher(map1, map2)
for i in range(0, 10):
    s = "".join(random.sample(string.ascii_lowercase, 5))
    test.assert_equals(cipher.encode(s), s.translate(encode_table))

    s = "".join(random.sample(string.ascii_lowercase, 5))
    test.assert_equals(cipher.decode(s), s.translate(decode_table))
