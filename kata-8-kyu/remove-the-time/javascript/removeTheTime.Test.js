//+ ====================================================================================================================
//+
//+ 8 kyu - Remove the time  [ ID: 56b0ff16d4aa33e5bb00008e ] (remove-the-time)
//+ URL: https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e
//+ Category: REFERENCE  |  Tags: DATE TIME | PARSING | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { shortenToDate } = require("./removeTheTime")

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(shortenToDate("Monday February 2, 8pm"), "Monday February 2")
    assert.strictEqual(shortenToDate("Tuesday May 29, 8pm"), "Tuesday May 29")
    assert.strictEqual(shortenToDate("Wed September 1, 3am"), "Wed September 1")

    for (let i = 0; i < 31; i++) {
      let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
      let times = ["1am", "2pm", "3pm", "10am", "11pm", "12am"]

      let inputDays = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)]
      let inputMonths = months[Math.floor(Math.random() * months.length)]
      let inputTimes = times[Math.floor(Math.random() * times.length)]
      let input = inputDays + " " + inputMonths + " " + i + ", " + inputTimes
      let output = inputDays + " " + inputMonths + " " + i

      assert.strictEqual(shortenToDate(input), output)
    }
  })
})
