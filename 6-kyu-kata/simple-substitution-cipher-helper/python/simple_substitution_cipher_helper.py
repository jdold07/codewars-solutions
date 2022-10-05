# 6 kyu - Simple Substitution Cipher Helper  [ ID: 52eb114b2d55f0e69800078d  (simple-substitution-cipher-helper) ]
# URL: https://www.codewars.com/kata/52eb114b2d55f0e69800078d
# Category: ALGORITHMS  |  Tags: CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS
# ******************************************************************************
class Cipher(object):
      def __init__(self, map1, map2):
          self.dict1 = dict(zip(map1, map2))
          self.dict2 = dict(zip(map2, map1))
      
      def encode(self, s):
          return "".join([self.dict1.get(char, char) for char in s])
      
      def decode(self, s):
          return "".join([self.dict2.get(char, char) for char in s])
