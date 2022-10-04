# 7 kyu - Alternate capitalization  [ ID: 59cfc000aeb2844d16000075  (alternate-capitalization) ]
# URL: https://www.codewars.com/kata/59cfc000aeb2844d16000075
# Category: NONE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
def capitalize(s):
    result = ["", ""]
    for index, char in enumerate(s):
        result[0] += char.upper() if not index % 2 else char.lower()
        result[1] += char.lower() if not index % 2 else char.upper()
    return result


# ******************************************************************************
# ******************************************************************************
def capitalize(s):
    result = ["", ""]

    def creation_loop(result_index, loop_set):
        for x in s:
            if loop_set:
                result[result_index] += x.upper()
            else:
                result[result_index] += x.lower()
            loop_set = not loop_set  # Swap loop_set for next loop

    creation_loop(0, True)  # Create EVEN capitalisation result
    creation_loop(1, False)  # Create ODD capitalisation result
    return result
