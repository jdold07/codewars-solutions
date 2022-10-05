# 5 kyu - A Chain adding function  [ ID: 539a0e4d85e3425cb0000a88  (a-chain-adding-function) ]
# URL: https://www.codewars.com/kata/539a0e4d85e3425cb0000a88
# Category: GAMES  |  Tags: MATHEMATICS | FUNCTIONAL PROGRAMMING | PUZZLES
# ******************************************************************************
from solution import add
from keyword import kwlist
from itertools import count, product
from random import choice, choices, randrange, sample, shuffle
from string import ascii_lowercase as abc
import codewars_test as test


def genvars():
    # a b c .. y z aa ab ac .. zz aaa aab ..
    yield from (
        name
        for len in count(1)
        for name in map("".join, product(abc, repeat=len))
        if name not in kwlist
    )


class AssertionFailed(Exception):
    # Used to signal test failure (stop the test scenario)
    pass


def run_scenario():
    varpool = genvars()
    log = []
    vars = []  # :: [(Name, Expected, Uservalue)]

    def init():
        # introduce a singleton/simple value
        # var = add(x)
        var = next(varpool)
        x = randrange(10)
        log.append(f"{var} = add({x})")
        if not callable(add):
            log.append(f"add is supposed to be callable, but isn't.")
            raise AssertionFailed()
        userval = add(x)
        vars.append((var, x, userval))
        check(var, x, userval)

    def checkallvars():
        shuffle(vars)
        for var in vars:
            check(*var)

    def check(var, expected, actual):
        # test whether a value has its expected .. value
        control = choice([1, -1])
        checks = sample([expected, expected + control], k=2)
        for ch in checks:
            if expected == ch:
                log.append(f"assert {var} == {ch!r}")
                if not (actual == ch):
                    log.append("^^^ ASSERTION FAILED ^^^")
                    log.append(f"{var} is {actual!r} but should be {expected} ")
                    raise AssertionFailed()
            else:
                log.append(f"assert not ({var} == {ch!r})")
                if actual == ch:
                    log.append("^^^ ASSERTION FAILED ^^^")
                    log.append(f"{var} is {actual!r} but should be {expected} ")
                    raise AssertionFailed()

    def callassign():
        # pick an existing var and add to it using call
        # var = a(x)
        var = next(varpool)
        x = randrange(10)
        (an, ae, au) = choice(vars)
        log.append(f"{var} = {an}({x})")
        if not callable(au):
            log.append(f"{an} is supposed to be callable, but isn't.")
            raise AssertionFailed()
        out = (var, ae + x, au(x))
        vars.append(out)
        check(*out)

    def plus():
        # pick an existing var and add to it using +
        # can't keep it for further operations, but can directly test it
        # var = a + x
        var = next(varpool)
        x = randrange(10)
        (an, ae, au) = choice(vars)
        log.append(f"{var} = {an} + {x}")
        check(var, ae + x, au + x)

    def addadd():
        # pick two vars, add one to the other.
        # var = a(b)
        var = next(varpool)
        a, b = choices(vars, k=2)
        (an, ae, au) = a
        (bn, be, bu) = b
        log.append(f"{var} = {an}({bn})")
        if not callable(au):
            log.append(f"{an} is supposed to be callable, but isn't.")
            raise AssertionFailed()
        out = (var, ae + be, au(bu))
        vars.append(out)
        check(*out)

    actions = choices(
        [init, plus, callassign, addadd], weights=[1, 1, 4, 4], k=15
    )
    actions = [init] + actions + [checkallvars]
    for action in actions:
        try:
            action()
        except AssertionFailed:
            # wrong answer
            test.fail("\n".join(log))
            break
        except:
            # user crashed. show the log and re-raise
            log.append("CRASHED! See error below.")
            test.fail("\n".join(log))
            raise
    else:
        test.expect(True)

def check_fixed(xs, expected):
    # a simpler version for the fixed tests that only checks the end result
    # and whether intermediaries are callable so that the test failure output
    # is reasonable.
    @test.it(f"add(" + ")(".join(map(str, xs)) + f") == {expected}")
    def _():
        log = []
        try:
            vars = genvars()
            f = add
            var = "add"
            for x in xs:
                if not callable(f):
                    log.append(f"{var} is supposed to be callable, but isn't.")
                    raise AssertionFailed()
                newvar = next(vars)
                log.append(f"{newvar} = {var}({x})")
                var = newvar
                f = f(x)
            log.append(f"assert {var} == {expected}")
            if not f == expected:
                log.append("^^^ ASSERTION FAILED ^^^")
                log.append(f"{var} is {f!r} but should be {expected} ")
                raise AssertionFailed()
        except AssertionFailed:
            test.fail("\n".join(log))
            return
        except:
            log.append("CRASHED! See error below.")
            test.fail("\n".join(log))
            raise
        test.expect(True)


@test.describe("Basic tests")
def _():
    check_fixed([1], 1)
    check_fixed([1, 2], 3)
    check_fixed([1, 2, 3], 6)
    check_fixed([1, 2, 3, 4], 10)
    check_fixed([1, 2, 3, 4, 5], 15)


@test.it("Random tests")
def _random():
    for _ in range(50):
        run_scenario()
