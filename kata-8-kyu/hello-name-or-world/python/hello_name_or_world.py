# + =====================================================================================================================
# +
# + 8 kyu - Hello, Name or World!  [ ID: 57e3f79c9cb119374600046b ] (hello-name-or-world)
# + URL: https://www.codewars.com/kata/57e3f79c9cb119374600046b
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================


def hello(name="World"):
    return f"Hello, {name.title()}!" if len(name) > 0 else "Hello, World!"
