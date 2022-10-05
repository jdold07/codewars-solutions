// [object Object] - Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product  [ ID: 57fb142297e0860073000064  (exclamation-marks-series-number-13-count-the-number-of-exclamation-marks-and-question-marks-return-the-product) ]
// URL: https://www.codewars.com/kata/57fb142297e0860073000064
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
	const actual = product(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

function solution(string) {
	return (string.split("!").length - 1) * (string.split("?").length - 1);
}

function rand(from, to) {
	return Math.floor((to - from + 1) * Math.random() + from);
}

function randChar() {
	const chars = " abcdefghiABCDEFGH0123456789@#[]{}&~|+-*/";
	return chars[~~(chars.length * Math.random())];
}

function randMarksString() {
	const len = rand(0, 50), array = [];
	for (let i = 0; i < len; i++)
		array[i] = ["!", "?", randChar()][i % 3];
	return array.join("")
}

describe("Tests suite", function () {
	it("It should work for basic tests", function () {
		doTest("", 0);
		doTest("!", 0);
		doTest("!!", 0);
		doTest("!??", 2);
		doTest("!???", 3);
		doTest("!!!??", 6);
		doTest("!!!???", 9);
		doTest("!???!!", 9);
		doTest("!ab? ?", 2);
		doTest("!????!!!?", 20);
	});

	it("It should work for random tests too", function () {
		for (let i = 0; i < 100; i++) {
			const string = randMarksString();
			doTest(string, solution(string));
		}
	});
});
