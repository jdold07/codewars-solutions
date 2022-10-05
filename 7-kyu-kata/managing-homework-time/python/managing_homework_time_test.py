# 7 kyu - Managing Homework Time  [ ID: 58cbc48930bcf09b7a000117  (managing-homework-time) ]
# URL: https://www.codewars.com/kata/58cbc48930bcf09b7a000117
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
from random import randint

test.describe("Example tests:")
test.expect(
    time_per_day([(1, 20), (2, 10), (3, 15), (4, 10)]) == 0.31,
    "{0} should equal 0.31".format(time_per_day([(1, 20), (2, 10), (3, 15), (4, 10)])),
)
test.expect(
    time_per_day([(2, 25), (5, 10), (6, 15)]) == 0.47,
    "{0} should equal 0.47".format(time_per_day([(2, 25), (5, 10), (6, 15)])),
)
test.expect(time_per_day([(1, 100), (5, 50)]) == 0.88, "{0} should equal 0.88".format(time_per_day([(1, 100), (5, 50)])))
test.expect(
    time_per_day([(2, 40), (3, 20), (4, 10), (1, 5)]) == 0.46,
    "{0} should equal 0.46".format(time_per_day([(2, 40), (3, 20), (4, 10), (1, 5)])),
)
test.expect(time_per_day([(10, 100)]) == 2.5, "{0} should equal 2.5".format(time_per_day([(10, 100)])))

test.describe("Random tests:")
for i in range(50):
    lists = []
    for j in range(randint(1, 4)):
        lists.append((randint(1, 10), randint(5, 50)))
    test.expect(
        time_per_day(lists) == round(sum(((0.75 * x[0]) * x[1]) for x in lists) / 300, 2),
        "{0} should equal {1}".format(time_per_day(lists), round(sum(((0.75 * x[0]) * x[1]) for x in lists) / 300, 2)),
    )
