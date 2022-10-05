# 6 kyu - Backspaces in string  [ ID: 5727bb0fe81185ae62000ae3  (backspaces-in-string) ]
# URL: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
# Category: ALGORITHMS  |  Tags: FUNDAMENTALS | STRINGS | ALGORITHMS
# ******************************************************************************
@test.describe("Fixed tests")
def fixed_tests():
    test.assert_equals(clean_string("abjd####jfk#"), "jf")
    test.assert_equals(clean_string("gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##"), "gdasda")
    test.assert_equals(clean_string("831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##"), "6+yqw8hfklsd-=-f")
    test.assert_equals(clean_string("######831###dhkj####jd#dsfsdnjkf###d####dasns"), "jdsfdasns")
    test.assert_equals(clean_string(""), "")
    test.assert_equals(clean_string("#######"), "")
    test.assert_equals(clean_string("####gfdsgf##hhs#dg####fjhsd###dbs########afns#######sdanfl##db#####s#a"), "sa")
    test.assert_equals(clean_string("#hskjdf#gd"), "hskjdgd")
    test.assert_equals(clean_string("hsk48hjjdfgd"), "hsk48hjjdfgd")


@test.describe("Random tests")
def random_tests():
    from random import randint, choice

    CHARS = [chr(i) for i in range(33, 126)] + ["#"] * 50

    for _ in range(50):
        s = "".join(choice(CHARS) for _ in range(randint(0, 25)))
        exp = []
        for c in s:
            if c == "#":
                if exp:
                    exp.pop()
            else:
                exp.append(c)
        exp = "".join(exp)

        @test.it('Testing "%s", expecting "%s"' % (s, exp))
        def single_test():
            test.assert_equals(clean_string(s), exp)
