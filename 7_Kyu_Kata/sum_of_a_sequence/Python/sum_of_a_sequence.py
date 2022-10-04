# 7 kyu - Sum of a sequence  [ ID: 586f6741c66d18c22800010a  (sum-of-a-sequence) ]
# URL: https://www.codewars.com/kata/586f6741c66d18c22800010a
# Category: NONE  |  Tags: FUNDAMENTALS | ALGORITHMS | MATHEMATICS
# ******************************************************************************
def sequence_sum(begin_number, end_number, step):
    try:
        return sum(range(begin_number, end_number + 1, step))
    except:
        return 0
