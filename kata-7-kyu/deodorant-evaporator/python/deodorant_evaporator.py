# + =====================================================================================================================
# +
# + 7 kyu - Deodorant Evaporator  [ ID: 5506b230a11c0aeab3000c1f ] (deodorant-evaporator)
# + URL: https://www.codewars.com/kata/5506b230a11c0aeab3000c1f
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================


def evaporator(content, evap_per_day, threshold):
    days = 0
    content_limit = content * threshold / 100
    while content > content_limit:
        days += 1
        content -= content * (evap_per_day / 100)
    return days
