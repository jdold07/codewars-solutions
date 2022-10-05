# 6 kyu - Steps in Primes  [ ID: 5613d06cee1e7da6d5000055  (steps-in-primes) ]
# URL: https://www.codewars.com/kata/5613d06cee1e7da6d5000055
# Category: REFERENCE  |  Tags: MATHEMATICS | NUMBER THEORY
# ******************************************************************************
def step(g, m, n):
      i = m
      if m != 2 and g % 2:
          return None
      if m == 2 and is_prime(2+g):
          return [i, i+g]
      if not m % 2:
          i += 1
  
      while i <= n-g:
          if is_prime(i) and is_prime(i+g):
              return [i, i+g]
          i += 2
      return None
  
  
  def is_prime(i):
      for j in range(3, int(i**0.5+1), 2):
          if not i % j:
              return False
      return True
