# + =====================================================================================================================
# +
# + 6 kyu - WeIrD StRiNg CaSe  [ ID: 52b757663a95b11b3d00062d ] (weird-string-case)
# + URL: https://www.codewars.com/kata/52b757663a95b11b3d00062d
# + Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from weird_string_case import to_weird_case


import random
import string


@test.describe("toWeirdCase")
def to_weird_case():
    def reference_solution(sentence):
        return " ".join("".join(c.upper() if i % 2 == 0 else c.lower() for (i, c) in enumerate(w)) for w in sentence.split())

    @test.it("should return the correct value for a single word")
    def single_word_tests():
        words = ["This", "is", "a", "test", "Looks", "like", "you", "passed"]

        for word in words:
            test.assert_equals(to_weird_case(word), reference_solution(word))

    @test.it("should return the correct value for multiple words")
    def multiple_word_tests():

        sentences = [
            "This is a test",
            "Looks LIKE yOu paSsED",
            "ThiS IS the FINAL tEsT CasE",
            "Just kIDDING",
            "Ok fine you ARE doNe nOw",
        ]

        for sentence in sentences:
            test.assert_equals(to_weird_case(sentence), reference_solution(sentence))

    @test.it("should work for random inputs")
    def random_tests():
        chars = string.ascii_lowercase + string.ascii_uppercase

        for _ in range(200):
            words = []
            for _ in range(random.randint(1, 15)):
                word = "".join(random.choice(chars) for _ in range(random.randint(1, 25)))
                words.append(word)

            words = " ".join(words)
            test.assert_equals(to_weird_case(words), reference_solution(words), f"Testing for words: {repr(words)}")
