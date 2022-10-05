# [object Object] - Help the bookseller !  [ ID: 54dc6f5a224c26032800005c  (help-the-bookseller) ]
# URL: https://www.codewars.com/kata/54dc6f5a224c26032800005c
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
# ******************************************************************************
from solution import stock_list
import codewars_test as test

@test.describe("Testing")
def _():
    @test.it("Tests")
    def _():
        b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
        c = ["A", "B", "C", "D"]
        test.assert_equals(stock_list(b, c), "(A : 0) - (B : 1290) - (C : 515) - (D : 600)")

        b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
        c = ["A", "B"]
        test.assert_equals(stock_list(b, c), "(A : 200) - (B : 1140)")

        b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
        c = ["A", "B", "C", "W"]
        test.assert_equals(stock_list(b, c), "(A : 0) - (B : 114) - (C : 70) - (W : 0)")

        b = ["ROXANNE 102", "RHODODE 123", "BKWRKAA 125", "BTSQZFG 239", "DRTYMKH 060"]
        c = ["B", "R", "D", "X"]
        test.assert_equals(stock_list(b, c), "(B : 364) - (R : 225) - (D : 60) - (X : 0)")

        b = []
        c = ["B", "R", "D", "X"]
        test.assert_equals(stock_list(b, c), "")

        b = ["ROXANNE 102", "RHODODE 123", "BKWRKAA 125", "BTSQZFG 239", "DRTYMKH 060"]
        c = []
        test.assert_equals(stock_list(b, c), "")

        b = ["ROXANNE 102", "RHODODE 123", "BKWRKAA 125", "BTSQZFG 239", "DRTYMKH 060"]
        c = ["U", "V", "R"]
        test.assert_equals(stock_list(b, c), "(U : 0) - (V : 0) - (R : 225)")

