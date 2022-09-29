# * Python version of the Kata doesn't exist, probably because it's a non issue in Python, but here is my solution
def sumStrings(a, b):
    a = 0 if not a else a
    b = 0 if not b else b
    return str(int(a) + int(b))
