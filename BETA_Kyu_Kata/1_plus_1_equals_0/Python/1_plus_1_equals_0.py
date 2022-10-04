# null - "1 + 1 = 0 "  [ ID: 625c3c2af115ff0035969f41  (1-plus-1-equals-0) ]
# URL: https://www.codewars.com/kata/625c3c2af115ff0035969f41
# Category: NONE  |  Tags: ALGORITHMS | FUNDAMENTALS | MATHEMATICS | STRINGS
# ******************************************************************************
def wrong_equation(eq):
    if not isinstance(eq, str):
        return eq  # Return non-string type input per instructions
    if eq == "":
        return "Empty!!"  # Return response to empty string input per instructions
    result = [eq]
    eq2 = eq.split()  # Mutatable list copy
    num2 = eq2[2]  # Copy of the only value that get mutated
    # Step 1
    eq2[2] = f"√{eq2[2]}"
    result.append(" ".join(eq2))
    # Step 2
    eq2[2] = f"√(-{int(int(num2)**0.5)})*(-{int(int(num2)**0.5)})"
    result.append(" ".join(eq2))
    # Step 3
    eq2[2] = f"√((-{int(int(num2)**0.5)}²))"
    result.append(" ".join(eq2))
    # Step 4
    eq2[2] = f"(-{int(int(num2)**0.5)})"
    result.append(" ".join(eq2))
    # Step 5 - Evaluate with full float value of square root, but return string with int value
    if eval(" ".join((eq2[0:2] + [f"(-{int(num2)**0.5})"]))) == int(eq2[-1]):
        result.append(f"{' '.join(eq2)} *Correct*")
    return result
