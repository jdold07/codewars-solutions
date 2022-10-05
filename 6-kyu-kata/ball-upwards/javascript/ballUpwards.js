// 6 kyu - Ball Upwards  [ ID: 566be96bb3174e155300001b  (ball-upwards) ]
// URL: https://www.codewars.com/kata/566be96bb3174e155300001b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const maxBall = (v, h = 0, t = 0.1) =>
  (x = (v / 3.6) * t - 0.5 * 9.81 * t * t) > h ? maxBall(v, x, t + 0.1) : Math.round((t - 0.1) * 10)
