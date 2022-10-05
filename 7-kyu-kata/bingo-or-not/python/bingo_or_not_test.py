# 7 kyu - Bingo ( Or Not )  [ ID: 5a1ee4dfffe75f0fcb000145  (bingo-or-not) ]
# URL: https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
# Category: REFERENCE  |  Tags: GAMES | ARRAYS | FUNDAMENTALS
# ******************************************************************************
@test.describe("Example Tests")
def example_tests():
    test.assert_equals(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE")
    test.assert_equals(bingo([20, 12, 23, 14, 6, 22, 12, 17, 2, 26]), "LOSE")
    test.assert_equals(bingo([1, 2, 3, 7, 5, 14, 7, 15, 9, 10]), "WIN")
    test.assert_equals(bingo([5, 2, 13, 7, 5, 14, 17, 15, 9, 10]), "WIN")


from random import randint, shuffle, choice


@test.it("Random Tests")
def random_tests():
    BINGO = [2, 9, 14, 7, 15]

    def _bingo_solution(array):
        res = set([chr(x + 96) for x in array])
        return "WIN" if set("bingo").issubset(res) else "LOSE"

    def generate_random_case(bingo):
        force_bingo = choice([True, False])

        # Win
        if force_bingo:
            res = bingo + [randint(1, 26) for _ in range(5)]
            shuffle(res)

        # Almost everytime LOSE
        else:
            res = [randint(1, 26) for _ in range(10)]

        return res

    def _do_one_test():
        array = generate_random_case(BINGO)
        expected_solution = _bingo_solution(array)
        user_solution = bingo(array)
        test.assert_equals(user_solution, expected_solution)

    # 200 random tests
    for _ in range(200):
        _do_one_test()
