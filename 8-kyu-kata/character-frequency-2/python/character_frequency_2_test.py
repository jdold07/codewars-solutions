# 8 kyu - Character Frequency  [ ID: 548ef5b7f33a646ea50000b2  (character-frequency-2) ]
# URL: https://www.codewars.com/kata/548ef5b7f33a646ea50000b2
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
# ******************************************************************************
# Modules "Random" and "String" are imported in the "Preloaded" section
cf = lambda message:{x:message.count(x) for x in message}
test.describe("Should exist")
test.expect(char_freq)
test.describe("Basic Testing")
def testing(value):
    test.assert_equals(char_freq(value), cf(value))
basic_tests = [
"How can mirrors be real when our eyes aren't real?",
"Everybody dance now!",
"Can I haz cheezburger?",
"Everybody do the flop!",
"Io sono giovanni rana!",
"It's-a me, Mario!",
"The End ( of the line ) "
]


for item in basic_tests:
    test.it("Testing with string \"{}\"".format(item)) 
    testing(item)
    
test.describe("Random Testing")
for item in range(22):
    msg = ""
    for item in range(random.randint(5, 15)):
        msg += random.choice(string.ascii_letters + string.digits)
    test.it("Testing with string \"{}\"".format(msg))
    testing(msg)
    
