# [object Object] - Convert A Hex String To RGB  [ ID: 5282b48bb70058e4c4000fa7  (convert-a-hex-string-to-rgb) ]
# URL: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
# Category: ALGORITHMS  |  Tags: PARSING | STRINGS | ALGORITHMS
# ******************************************************************************
@test.describe('Example Tests')
def example_tests():
    test.assert_equals(hex_string_to_RGB("#FF9933"), {'r':255, 'g':153, 'b':51})
    test.assert_equals(hex_string_to_RGB("#beaded"), {'r':190, 'g':173, 'b':237})
    test.assert_equals(hex_string_to_RGB("#000000"), {'r':0, 'g':0, 'b':0})
    test.assert_equals(hex_string_to_RGB("#111111"), {'r':17, 'g':17, 'b':17})
    test.assert_equals(hex_string_to_RGB("#Fa3456"), {'r':250, 'g':52, 'b':86})

from random import randint, random

@test.describe('Random Tests')
def random_tests():

    def generate_random_case():
        res = f"#{randint(0, 0xFFFFFF):06x}"
        return res.lower() if random()<0.5 else res.upper()

    def _hex_string_to_RGB_123(hex_string): 
        return {k: int(hex_string[i:i+2], 16) for k, i in zip('rgb', range(1, 6, 2))}

    def _do_one_test():
        hex_string = generate_random_case()
        expected = _hex_string_to_RGB_123(hex_string)
        actual = hex_string_to_RGB(hex_string)
        test.assert_equals(actual, expected)

    @test.it('Random Test Cases')
    def random_test_cases():
        for _ in range(100):
            _do_one_test()
