# 6 kyu - Error correction #1 - Hamming Code  [ ID: 5ef9ca8b76be6d001d5e1c3e  (error-correction-number-1-hamming-code) ]
# URL: https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e
# Category: NONE  |  Tags: ALGORITHMS | BITS
# ******************************************************************************
encode = (text) ->
    text.replace /./g, (v) ->
      v
        .charCodeAt 0
        .toString 2
        .padStart 8, "0"
        .replace /./g, (v) -> v.repeat 3
  
  decode = (bits) ->
    bits
      .replace /.../g, ([c1, c2, c3]) -> if [c2, c3].includes c1 then c1 else c2
      .replace /.{8}/g, (v) -> String.fromCharCode parseInt v, 2
