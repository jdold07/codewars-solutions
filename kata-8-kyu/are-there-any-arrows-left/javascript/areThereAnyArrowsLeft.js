//+ ====================================================================================================================
//+
//+ 8 kyu - Are there any arrows left?  [ ID: 559f860f8c0d6c7784000119 ] (are-there-any-arrows-left)
//+ URL: https://www.codewars.com/kata/559f860f8c0d6c7784000119
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const anyArrows = (arrows) => arrows.reduce((a, c) => !c.damaged || a, false)

module.exports = { anyArrows }
