// 8 kyu - Contamination #1 -String-  [ ID: 596fba44963025c878000039  (contamination-number-1-string) ]
// URL: https://www.codewars.com/kata/596fba44963025c878000039
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const contamination = (text, char) => !text || !char ? "" : char.repeat(text.length)
