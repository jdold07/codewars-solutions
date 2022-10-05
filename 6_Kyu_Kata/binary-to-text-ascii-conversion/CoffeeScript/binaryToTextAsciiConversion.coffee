# [object Object] - Binary to Text (ASCII) Conversion  [ ID: 5583d268479559400d000064  (binary-to-text-ascii-conversion) ]
# URL: https://www.codewars.com/kata/5583d268479559400d000064
# Category: REFERENCE  |  Tags: BINARY | STRINGS | FUNDAMENTALS
# ******************************************************************************
binaryToString = (binary) -> binary.replace /[01]{8}/g, (v) -> String.fromCharCode parseInt v, 2
