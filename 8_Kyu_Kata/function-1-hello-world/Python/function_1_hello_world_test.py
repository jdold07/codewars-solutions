# [object Object] - Function 1 - hello world  [ ID: 523b4ff7adca849afe000035  (function-1-hello-world) ]
# URL: https://www.codewars.com/kata/523b4ff7adca849afe000035
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
# New tests for 3.8+
import codewars_test as test
from solution import greet

@test.describe("Greet function")
def _():
    @test.it("Making sure greet exists")
    def _():
        try:
            test.expect(greet)
        except NameError:
            test.fail("Greet doesn't exist")
    @test.it("Testing that it returns hello world!")
    def _():
        test.assert_equals(greet(), "hello world!", "Greet doesn't return hello world!")
