# [object Object] - Make Class  [ ID: 5d774cfde98179002a7cb3c8  (make-class) ]
# URL: https://www.codewars.com/kata/5d774cfde98179002a7cb3c8
# Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS
# ******************************************************************************
@test.describe("Fixed tests")
def fixed_tests():
    @test.it("Tests")
    def it_1():
        class Animal:
            def __init__(self, name, species, age, health, weight, color):
                self.name = name
                self.species = species
                self.age = age
                self.health = health
                self.weight = weight
                self.color = color
        
        Animel = make_class("name", "species", "age", "health", "weight", "color")
        
        dog1 = Animal("Bob", "Dog", 5, "good", "50lb", "brown")
        dog2 = Animel("Bob", "Dog", 5, "good", "50lb", "brown")
        
        test.assert_equals(dog1.name, dog2.name)
        test.assert_equals(dog1.species, dog2.species)
        test.assert_equals(dog1.age, dog2.age)
        test.assert_equals(dog1.health, dog2.health)
        test.assert_equals(dog1.weight, dog2.weight)
        test.assert_equals(dog1.color, dog2.color)

@test.describe("Random tests")
def random_tests():
    from random import randint as R, choices as C
    from string import ascii_lowercase as AL

    def solution(*args):
        class F:
            def __init__(self, *brgs):
                self.__dict__ = {x: y for x, y in zip(args, brgs)}
        return F

    @test.it("Tests")
    def it_1():
        for _ in range(10):
            n = R(1, 8)
            s = set()
            while len(s) < n:
                s.add("".join(C(AL, k=R(5, 10))))
            s = [*s]
            result, user = solution(*s), make_class(*s)
            for _ in range(10):
                a = [R(1, 1000) if R(0, 1) else "".join(C(AL, k=R(3, 5))) for _ in range(n)]
                test.assert_equals(user(*a).__dict__, result(*a).__dict__)
