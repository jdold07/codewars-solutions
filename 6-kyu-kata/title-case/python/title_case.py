# 6 kyu - Title Case  [ ID: 5202ef17a402dd033c000009  (title-case) ]
# URL: https://www.codewars.com/kata/5202ef17a402dd033c000009
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
def title_case(title, minor_words=""):
    title = title.lower().split()
    result = [title.pop(0).title()] if title else []
    for x in title:
        result.append(x) if x in minor_words.lower().split() else result.append(x.title())
    return " ".join(result)
