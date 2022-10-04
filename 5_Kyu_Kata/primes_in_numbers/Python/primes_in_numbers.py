# 5 kyu - Primes in numbers  [ ID: 54d512e62a5e54c96200019e  (primes-in-numbers) ]
# URL: https://www.codewars.com/kata/54d512e62a5e54c96200019e
# Category: NONE  |  Tags: FUNDAMENTALS | MATHEMATICS
# ******************************************************************************
from collections import Counter
  
  
  def prime_factors(n):
      primes = [2]
      for num in range(3, int(n**0.5), 2):
          if all(num % x != 0 for x in range(3, int(num**0.5) + 1, 2)):
              primes.append(num)
  
      factors_list = []
      n1 = n
      for prime in sorted(primes):
          while not n1 % prime and n1 > 1:
              n1 /= prime
              factors_list.append(prime)
      
      if n1 != 1:
          factors_list.append(int(n1))
  
      counter = Counter(factors_list)
  
      factors_list.clear()
      for factor in counter:
          factors_list.append(f"({factor}**{counter[factor]})") if counter[factor] > 1 else factors_list.append(f"({factor})")
  
      return "".join(factors_list)
