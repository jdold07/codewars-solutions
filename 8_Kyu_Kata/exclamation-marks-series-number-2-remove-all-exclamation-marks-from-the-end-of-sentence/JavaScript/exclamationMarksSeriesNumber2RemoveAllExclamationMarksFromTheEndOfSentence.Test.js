// [object Object] - Exclamation marks series #2: Remove all exclamation marks from the end of sentence  [ ID: 57faece99610ced690000165  (exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence) ]
// URL: https://www.codewars.com/kata/57faece99610ced690000165
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const strictEqual = require("chai").assert.strictEqual;

function doTest (input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

it("It should works for basic tests", function () {
	doTest("Hi!", "Hi")
	doTest("Hi!!!", "Hi")
	doTest("!Hi", "!Hi")
	doTest("!Hi!", "!Hi")
	doTest("Hi! Hi!", "Hi! Hi")
	doTest("Hi", "Hi")
});

function solution (string) {
	return string.replace(/\!+$/, "")
}

function randLetter () {
	const letters = "abcdefghijklmnopqrstuvwxyz"
	return letters[~~(letters.length * Math.random())];
}

function randString (n) {
	const len = n || rand(3, 7);
	const array = [];
	for (let i = 0; i < len; i++)
		array[i] = randLetter();
	return array.join("");
}

function rand (from, to) {
	return Math.floor((to - from + 1) * Math.random() + from)
}

function randomMarksString () {
	const len = rand(1, 6);
	const array = [];

	for (let i = 0; i < len; i++)
		array[i] = randString() + (rand(0, 1000) % 4 == 0 ? "!" : "");

	return array.join(" ") + "!".repeat(Math.max(0, rand(-2, 5)))
}

it("It should works for random tests too", function () {
	for (let i = 0; i < 100; i++) {
		const input = randomMarksString(), expected = solution(input);
		doTest(input, expected);
	}
});
