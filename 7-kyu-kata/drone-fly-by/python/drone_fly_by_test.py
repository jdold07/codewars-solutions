# 7 kyu - Drone Fly-By  [ ID: 58356a94f8358058f30004b5  (drone-fly-by) ]
# URL: https://www.codewars.com/kata/58356a94f8358058f30004b5
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
import codewars_test as test
from solution import fly_by
from random import randint


@test.describe("Basic tests")
def test_group():
    @test.it("basic tests")
    def test_case():
        test.assert_equals(fly_by("xxxxxx", "====T"), "ooooox")
        test.assert_equals(fly_by("xxxxxxxxx", "==T"), "oooxxxxxx")
        test.assert_equals(fly_by("xxxxxxxxxxxxxxx", "=========T"), "ooooooooooxxxxx")


@test.describe("Random tests")
def test_group():
    def my_fly_by(lamps, drone):
        return "o" * min(len(drone), len(lamps)) + lamps[len(drone) :]

    @test.it("random tests")
    def test_case():
        for _ in range(100):
            lamps = "x" * randint(1, 30)
            drone = "=" * randint(0, len(lamps)) + "T"
            test.assert_equals(fly_by(lamps, drone), my_fly_by(lamps, drone))
