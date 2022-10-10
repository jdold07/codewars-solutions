//+ ====================================================================================================================
//+
//+ 7 kyu - Add property to every object in array   [ ID: 54e8c3e89e2ae6f4900005a1 ] (add-property-to-every-object-in-array)
//+ URL: https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================
//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

const questions = [
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 2
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 1,
    numAttempts: 3
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 1
  },
  {
    question: "Question",
    options: ["US dollar", "Ruble", "Horses", "Gold"],
    rightAns: 0,
    numAttempts: 0
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 0
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 10
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 1
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 5
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 1
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 0
  },
  {
    question: "Question",
    options: ["Choice1", "Choice2", "Choice3", "Choice4"],
    rightAns: 0,
    numAttempts: 6
  }
]

//+ ====================================================================================================================

questions.map((v) => ({ ...v, usersAnswer: null }))

module.exports = { questions }
