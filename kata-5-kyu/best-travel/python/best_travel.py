#+ =====================================================================================================================
#+
#+ 5 kyu - Best travel  [ ID: 55e7280b40e1c4a06d0000aa ] (best-travel)
#+ URL: https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS
#+
#+ =====================================================================================================================

from itertools import combinations
  
  
  def choose_best_sum(t, k, ls):
      if len(ls) < k or k * min(ls) > t:
          return None
      possible = sorted(combinations(filter(lambda in_range: in_range <= t, ls), k), key=sum, reverse=True)
      for trip in possible:
          if sum(trip) <= t:
              return sum(trip)
      return None
