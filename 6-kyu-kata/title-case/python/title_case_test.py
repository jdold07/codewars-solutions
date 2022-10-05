# 6 kyu - Title Case  [ ID: 5202ef17a402dd033c000009  (title-case) ]
# URL: https://www.codewars.com/kata/5202ef17a402dd033c000009
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test 
from solution import title_case

@test.describe("Fixed tests")
def _():
    @test.it("Tests")
    def __():
        test.assert_equals(title_case(''), '')
        test.assert_equals(title_case('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
        test.assert_equals(title_case('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
        test.assert_equals(title_case('the quick brown fox'), 'The Quick Brown Fox')
        test.assert_equals(title_case('aBC deF Ghi', ''), 'Abc Def Ghi')
        test.assert_equals(title_case('ab', 'ab'), 'Ab')
        test.assert_equals(title_case('a bc', 'bc'), 'A bc')
        test.assert_equals(title_case('a bc', 'BC'), 'A bc')
        test.assert_equals(title_case('First a of in', 'an often into'), 'First A Of In')
        test.assert_equals(title_case('a clash of KINGS', 'a an the OF'), 'A Clash of Kings')
        test.assert_equals(title_case('the QUICK bRoWn fOX', 'xyz fox quick the'), 'The quick Brown fox')
