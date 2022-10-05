# [object Object] - Fizz Buzz  [ ID: 5300901726d12b80e8000498  (fizz-buzz) ]
# URL: https://www.codewars.com/kata/5300901726d12b80e8000498
# Category: ALGORITHMS  |  Tags: ALGORITHMS | FUNDAMENTALS | ARRAYS
# ******************************************************************************
test.describe('Fizzbuzz')
test.it('Should fizzify 10 numbers correctly')
expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
test.assert_equals(fizzbuzz(10), expected, 'Fails with 10 numbers!')

test.it('Should fizzify 30 numbers correctly')
expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz"]
test.assert_equals(fizzbuzz(30), expected, 'Fails with 30 numbers!')

test.it('Should fizzify 1 number correctly')
expected = [1]
test.assert_equals(fizzbuzz(1), expected, 'Fails with 1 number!')

test.it('Should fizzify 100 numbers correctly')
expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"]
test.assert_equals(fizzbuzz(100), expected, 'Fails with 100 numbers!')

test.it('Should fizzify a random positive integer (1~100) correctly')
from random import randint
random_num = randint(1,100)
expected = expected[0:random_num]
test.assert_equals(fizzbuzz(random_num), expected, 'Fails with random number!')
