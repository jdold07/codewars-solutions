# 5 kyu - A Chain adding function  [ ID: 539a0e4d85e3425cb0000a88  (a-chain-adding-function) ]
# URL: https://www.codewars.com/kata/539a0e4d85e3425cb0000a88
# Category: GAMES  |  Tags: MATHEMATICS | FUNCTIONAL PROGRAMMING | PUZZLES
# ******************************************************************************
def add(n):
      return Add(n)
  
  
  class Add(int):
  
      def __call__(self, x):
          return add(self + x)
  
