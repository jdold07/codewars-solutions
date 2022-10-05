// 7 kyu - Number of People in the Bus  [ ID: 5648b12ce68d9daa6b000099  (number-of-people-in-the-bus) ]
// URL: https://www.codewars.com/kata/5648b12ce68d9daa6b000099
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
var number = function (busStops) {
  let onBus = 0
  for (i = 0; i < busStops.length; i++) {
    onBus += busStops[i][0] - busStops[i][1]
  }
  return onBus
}
