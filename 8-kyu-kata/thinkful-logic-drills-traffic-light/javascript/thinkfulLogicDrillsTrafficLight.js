// 8 kyu - Thinkful - Logic Drills: Traffic light  [ ID: 58649884a1659ed6cb000072  (thinkful-logic-drills-traffic-light) ]
// URL: https://www.codewars.com/kata/58649884a1659ed6cb000072
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function updateLight(current) {
  const lightMap = {
    green: "yellow",
    yellow: "red",
    red: "green"
  }
  return lightMap[current]
}
