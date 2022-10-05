# 8 kyu - Grasshopper - Messi Goals  [ ID: 55ca77fa094a2af31f00002a  (grasshopper-messi-goals) ]
# URL: https://www.codewars.com/kata/55ca77fa094a2af31f00002a
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(la_liga_goals, 43, "la_liga_goals should equal to 43")
        test.assert_equals(champions_league_goals, 10, "champions_league_goals should equal to 10")
        test.assert_equals(copa_del_rey_goals, 5, "copa_del_rey_goals should equal to 5")
        test.assert_equals(total_goals, 58, "total goals should equal to 58")
