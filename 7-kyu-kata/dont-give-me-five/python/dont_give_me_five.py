# 7 kyu - Don't give me five!  [ ID: 5813d19765d81c592200001a  (dont-give-me-five) ]
# URL: https://www.codewars.com/kata/5813d19765d81c592200001a
# Category: ALGORITHMS  |  Tags: MATHEMATICS | ARRAYS | ALGORITHMS
# ******************************************************************************
def dont_give_me_five(start, end):
      return len(list(filter(lambda x: "5" not in str(x), range(start, end + 1))))
