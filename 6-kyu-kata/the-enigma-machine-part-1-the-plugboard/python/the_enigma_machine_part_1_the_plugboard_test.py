# 6 kyu - The Enigma Machine - Part 1: The Plugboard  [ ID: 5523b97ac8f5025c45000900  (the-enigma-machine-part-1-the-plugboard) ]
# URL: https://www.codewars.com/kata/5523b97ac8f5025c45000900
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
# ******************************************************************************
test.describe("Test construction")

test.it("A valid construction")
plugboard = Plugboard("AB")
test.assert_equals(plugboard.process("A"), "B", "Invalid translation")
test.assert_equals(plugboard.process("B"), "A", "Invalid translation")
test.assert_equals(plugboard.process("C"), "C", "Invalid translation")

test.it("A valid empty construction")
plugboard = Plugboard()
test.assert_equals(plugboard.process("A"), "A", "Invalid translation")

test.it("Too many wires defined")
test.expect_error("Should not have accepted too many wires defined", lambda: Plugboard("ABCDEFGHIJKLMNOPQRSTUV"))

test.it("Not enough wire ends defined")
test.expect_error("Should not have accepted a partial wire definition", lambda: Plugboard("ABCDEFGHIJKLMNOPQ"))

test.it("Wires are only mapped once")
test.expect_error("Should not have accepted a second definition for a wire end", lambda: Plugboard("ABCA"))
test.expect_error("Should not have accepted a second definition for a wire end", lambda: Plugboard("ABCA"))

test.describe("Test usage")
test.it("Translate characters")
plugboard = Plugboard("ABCDEFGHIJKLMNOPQRST")
test.assert_equals(plugboard.process("A"), "B", "Invalid translation")
test.assert_equals(plugboard.process("B"), "A", "Invalid translation")
test.assert_equals(plugboard.process("Z"), "Z", "Invalid translation")

test.it("Translate a message")
encipher = lambda p, m: "".join([p.process(c) for c in m])
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
wire_config = alphabet[:10] + "".join(reversed(alphabet[-10:]))
plugboard = Plugboard(wire_config)

plain = "THE ENIGMA MACHINE CANNOT BE CRACKED"
cipher = "SGF FNJHMB MBDGJNF DBNNOS AF DQBDKFC"
cipher_text = encipher(plugboard, plain)
test.assert_equals(cipher_text, cipher, "Invalid translation")

test.it("Reverse translate a message")
plain_text = encipher(plugboard, cipher)
test.assert_equals(plain_text, plain, "Invalid translation")


plain = "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"
cipher = "SGF RVJDK AQOXN EOW IVMPFC OUFQ SGF LBYZ COH"
cipher_text = encipher(plugboard, plain)
test.assert_equals(cipher_text, cipher, "Invalid translation")

test.it("Reverse translate a message")
plain_text = encipher(plugboard, cipher)
test.assert_equals(plain_text, plain, "Invalid translation")
