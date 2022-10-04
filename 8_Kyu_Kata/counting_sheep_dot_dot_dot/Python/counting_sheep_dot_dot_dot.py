# 8 kyu - Counting sheep...  [ ID: 54edbc7200b811e956000556  (counting-sheep-dot-dot-dot) ]
# URL: https://www.codewars.com/kata/54edbc7200b811e956000556
# Category: NONE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
def count_sheeps(sheep):
    return sum(present is True for present in sheep)
