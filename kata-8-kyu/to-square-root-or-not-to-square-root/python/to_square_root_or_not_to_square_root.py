#+ =====================================================================================================================
#+
#+ 8 kyu - To square(root) or not to square(root)  [ ID: 57f6ad55cca6e045d2000627 ] (to-square-root-or-not-to-square-root)
#+ URL: https://www.codewars.com/kata/57f6ad55cca6e045d2000627
#+ Category: ALGORITHMS  |  Tags: MATHEMATICS | ARRAYS | ALGORITHMS
#+
#+ =====================================================================================================================

def square_or_square_root(arr):
      return [int(num ** 0.5) if not num ** 0.5 % 1 else num ** 2 for num in arr]
