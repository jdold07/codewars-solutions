# 7 kyu - Case Swapping  [ ID: 5590961e6620c0825000008f  (case-swapping) ]
# URL: https://www.codewars.com/kata/5590961e6620c0825000008f
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import swap


@test.describe("Basic tests")
def basic_tests():
    @test.it("Basic sentences")
    def basic_sentences():
        test.assert_equals(swap("HelloWorld"), "hELLOwORLD")
        test.assert_equals(swap("CodeWars"), "cODEwARS")
        test.assert_equals(
            swap("ThIs iS A l0NG sENTence witH nUMbERs in IT 123 456"), "tHiS Is a L0ng SentENCE WITh NumBerS IN it 123 456"
        )

    @test.it("Strings with no text")
    def no_text():
        test.assert_equals(swap(""), "")
        test.assert_equals(swap(" "), " ")
        test.assert_equals(swap("  "), "  ")

    @test.it("Strings with special characters")
    def special_text():
        test.assert_equals(swap(" 1a1 "), " 1A1 ")
        test.assert_equals(swap("H_E_l-l_0 WO|||Rld"), "h_e_L-L_0 wo|||rLD")
        test.assert_equals(swap("TeSt"), "tEsT")
        test.assert_equals(swap("EeEEeeEEEeee"), "eEeeEEeeeEEE")


@test.describe("Random tests")
def random_tests():
    from random import randint, choice

    base = "abcdefghijklmnopqrstuvwxyz  0123456789  ,._-"

    for _ in range(40):
        s = "".join([choice(base).upper() if randint(0, 1) == 1 else choice(base) for x in range(randint(1, 50))])

        @test.it(f"Testing for '{s}'")
        def random_case():
            test.assert_equals(swap(s), s.swapcase())
