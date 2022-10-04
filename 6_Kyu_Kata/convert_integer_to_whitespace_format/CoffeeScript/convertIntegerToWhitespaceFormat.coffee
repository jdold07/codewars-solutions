# 6 kyu - Convert integer to Whitespace format  [ ID: 55b350026cc02ac1a7000032  (convert-integer-to-whitespace-format) ]
# URL: https://www.codewars.com/kata/55b350026cc02ac1a7000032
# Category: NONE  |  Tags: BINARY | FUNDAMENTALS
# ******************************************************************************
whitespaceNumber = (n) ->
    "#{if n > 0 then " " else ""}#{n
      .toString 2
      .replace /./g, (v) -> if v == "0" then " " else "\t"}\n"
