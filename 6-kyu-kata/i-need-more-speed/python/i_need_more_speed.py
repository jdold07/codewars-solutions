# 6 kyu - I need more speed!  [ ID: 55de9c184bb732a87f000055  (i-need-more-speed) ]
# URL: https://www.codewars.com/kata/55de9c184bb732a87f000055
# Category: ALGORITHMS  |  Tags: ARRAYS | ALGORITHMS
# ******************************************************************************
def reverse(seq):
    for indx in range(len(seq) // 2):
        seq[indx], seq[len(seq) - indx - 1] = seq[len(seq) - indx - 1], seq[indx]
