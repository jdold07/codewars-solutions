# [object Object] - Reverse polish notation calculator  [ ID: 52f78966747862fc9a0009ae  (reverse-polish-notation-calculator) ]
# URL: https://www.codewars.com/kata/52f78966747862fc9a0009ae
# Category: ALGORITHMS  |  Tags: ALGORITHMS | MATHEMATICS | INTERPRETERS | PARSING | STRINGS
# ******************************************************************************
test.assert_equals(calc(""), 0, "Should work with empty string")
test.assert_equals(calc("3"), 3, "Should parse numbers")
test.assert_equals(calc("3.5"), 3.5, "Should parse float numbers")
test.assert_equals(calc("1 3 +"), 4, "Should support addition")
test.assert_equals(calc("1 3 *"), 3, "Should support multiplication")
test.assert_equals(calc("1 3 -"), -2, "Should support subtraction")
test.assert_equals(calc("4 2 /"), 2, "Should support division")
test.assert_equals(calc("10000 123 +"), 10123, "Should work with numbers longer than 1 digit")
test.assert_equals(calc("5 1 2 + 4 * + 3 -"), 14, "Should work with complex expressions")
