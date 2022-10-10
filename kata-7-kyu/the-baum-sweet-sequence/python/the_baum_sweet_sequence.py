#+ =====================================================================================================================
#+
#+ 7 kyu - The Baum-Sweet sequence  [ ID: 5d2659626c7aec0022cb8006 ] (the-baum-sweet-sequence)
#+ URL: https://www.codewars.com/kata/5d2659626c7aec0022cb8006
#+ Category: ALGORITHMS  |  Tags: ALGORITHMS
#+
#+ =====================================================================================================================

from itertools import groupby
  
  def baum_sweet():
      i = 0
      while True:
          trigger = True
          if i == 0:
              i += 1
              yield 1
          groups = [(label, sum(1 for _ in group)) for label, group in groupby(f"{i:b}")]
          for x in groups:
              if x[0] == "0" and x[1] % 2 != 0:
                  trigger = False
                  i += 1
                  yield 0
          if trigger:
              i += 1
              yield 1
