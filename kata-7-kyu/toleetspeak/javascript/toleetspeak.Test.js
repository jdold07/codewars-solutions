//+ ====================================================================================================================
//+
//+ 7 kyu - ToLeetSpeak  [ ID: 57c1ab3949324c321600013f ] (toleetspeak)
//+ URL: https://www.codewars.com/kata/57c1ab3949324c321600013f
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { toLeetSpeak } = require("./toleetspeak")

it("Basic tests", function () {
  assert.deepEqual(toLeetSpeak("LEET"), "1337")
  assert.deepEqual(toLeetSpeak("CODEWARS"), "(0D3W@R$")
  assert.deepEqual(toLeetSpeak("HELLO WORLD"), "#3110 W0R1D")
  assert.deepEqual(toLeetSpeak("LOREM IPSUM DOLOR SIT AMET"), "10R3M !P$UM D010R $!7 @M37")
  assert.deepEqual(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"), "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06")
})

it("Random tests", function () {
  const abc = {
    A: "@",
    B: "8",
    C: "(",
    D: "D",
    E: "3",
    F: "F",
    G: "6",
    H: "#",
    I: "!",
    J: "J",
    K: "K",
    L: "1",
    M: "M",
    N: "N",
    O: "0",
    P: "P",
    Q: "Q",
    R: "R",
    S: "$",
    T: "7",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "2"
  }
  const solution = (s) => [...s].map((v) => (abc[v] === undefined ? v : abc[v])).join("")

  let az = " "
  for (let i = 65; i < 65 + 26; i++) az += String.fromCharCode(i)

  for (let n = 0; n < 100; n++) {
    let testStr = ""
    for (let i = 0; i < 30; i++) testStr += az[~~(Math.random() * 100) % 27]
    assert.deepEqual(toLeetSpeak(testStr), solution(testStr))
  }
})
