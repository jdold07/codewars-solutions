# 8 kyu - USD => CNY  [ ID: 5977618080ef220766000022  (usd-equals->-cny) ]
# URL: https://www.codewars.com/kata/5977618080ef220766000022
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import usdcny
import math
import random

@test.describe("USD=>CNY")
def test_group():
    @test.it("Basic test case")
    def test_case():
        test.assert_equals(usdcny(15), "101.25 Chinese Yuan")
        test.assert_equals(usdcny(465), "3138.75 Chinese Yuan")
        
    @test.it('Tests Random Test Cases')
    def test_2():
        
        def my_usdcny(usd):
            return '{:.2f} Chinese Yuan'.format(usd*6.75)

        def rand(minn,maxx):
            return math.ceil(random.random() * (maxx-minn) + minn)

        for _ in range(100):
            n = rand(0,10000)
            test.assert_equals(usdcny(n), my_usdcny(n),f"Testing for usd = {n}")

    



