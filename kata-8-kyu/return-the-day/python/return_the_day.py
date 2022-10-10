# + =====================================================================================================================
# +
# + 8 kyu - Return the day   [ ID: 59dd3ccdded72fc78b000b25 ] (return-the-day)
# + URL: https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================


def whatday(num):
    days = {1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday", 7: "Saturday"}
    return days.get(num) or "Wrong, please enter a number between 1 and 7"
