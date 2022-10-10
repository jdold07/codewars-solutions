#+ =====================================================================================================================
#+
#+ 7 kyu - Plastic Balance  [ ID: 625ea5c1a071210065c923af ] (plastic-balance)
#+ URL: https://www.codewars.com/kata/625ea5c1a071210065c923af
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | LISTS | DATA STRUCTURES | ARRAYS
#+
#+ =====================================================================================================================

def plastic_balance(lst):
      if len(lst) > 2:
          if lst[0] + lst[-1] == sum(lst[1:-1]):
              return lst
          return plastic_balance(lst[1:-1])
      return lst if sum(lst) == 0 else []

# ======================================================================================================================
# ======================================================================================================================

import copy
  
  def plastic_balance(lst):
      no_sides = copy.copy(lst)
      while len(no_sides) > 1:
          sides = [no_sides.pop(0), no_sides.pop(-1)]
          if sum(sides) == sum(no_sides):
              return [sides[0]] + no_sides + [sides[-1]]
      return no_sides if sum(no_sides) == 0 else []


