#+ =====================================================================================================================
#+
#+ 6 kyu - Simple Fun #217: Sort By Guide  [ ID: 590148d79097384be600001e ] (simple-fun-number-217-sort-by-guide)
#+ URL: https://www.codewars.com/kata/590148d79097384be600001e
#+ Category: REFERENCE  |  Tags: ALGORITHMS | ARRAYS | SORTING
#+
#+ =====================================================================================================================

def sort_by_guide(arr, guide):
      my_map = [(zp[0], zp[1]) for zp in zip(guide, arr)]
      sorted_pos = sorted(filter(lambda x: x[0] != -1, my_map))
      return [sorted_pos.pop(0)[1] if x[0] != -1 else x[1] for x in my_map]

# ======================================================================================================================
# ======================================================================================================================

import heapq
  
  def sort_by_guide(arr, guide):
      my_map = [(zp[0], zp[1]) for zp in zip(guide, arr)]
      sorted_pos = sorted(filter(lambda x: x[0] != -1, my_map))
      return [heapq.heappop(sorted_pos)[1] if x[0] != -1 else x[1] for x in my_map]


