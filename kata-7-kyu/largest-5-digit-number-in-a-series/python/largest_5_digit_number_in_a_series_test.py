# + =====================================================================================================================
# +
# + 7 kyu - Largest 5 digit number in a series  [ ID: 51675d17e0c1bed195000001 ] (largest-5-digit-number-in-a-series)
# + URL: https://www.codewars.com/kata/51675d17e0c1bed195000001
# + Category: ALGORITHMS  |  Tags: ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from largest_5_digit_number_in_a_series import solution


@test.describe("Largest 5 digit number in a series")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        number = "7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"
        test.assert_equals(solution(number), 99890, "solution did not return correct value")
        test.assert_equals(solution("1234567898765"), 98765, "Failed when max 5 digits is at end of number")
        test.assert_equals(solution("731674765"), 74765, "Failed when max 5 digits is at end of number")

    @test.it("Random numbers")
    def _():
        from random import randint

        def __solution(digits):
            digits = str(digits)
            maxs = 0
            for i in range(0, len(digits)):
                maxs = max(maxs, int(digits[i : i + 5]))
            return int(maxs)

        for i in range(0, 10):
            __number = str(randint(0, 10**1000))
            __actual = __solution(__number)
            actual = solution(__number)
            test.assert_equals(actual, __actual, f"Testing for digits = {__number}")
