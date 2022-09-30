import codewars_test as test
from sum_strings_as_numbers import sumStrings


@test.describe("Test Cases")
def test_group():
    @test.it("Fixed Tests")
    def test_case():
        test.assert_equals(sumStrings("8797", "45"), "8842")
        test.assert_equals(sumStrings("800", "9567"), "10367")
        test.assert_equals(sumStrings("99", "1"), "100")
        test.assert_equals(sumStrings("00103", "08567"), "8670")
        test.assert_equals(sumStrings("", "5"), "5")
        test.assert_equals(
            sumStrings("712569312664357328695151392", "8100824045303269669937"), "712577413488402631964821329"
        )
        test.assert_equals(
            sumStrings("50095301248058391139327916261", "81055900096023504197206408605"), "131151201344081895336534324866"
        )
