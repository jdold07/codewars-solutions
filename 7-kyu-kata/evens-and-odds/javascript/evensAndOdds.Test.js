// 7 kyu - Evens and Odds  [ ID: 583ade15666df5a64e000058  (evens-and-odds) ]
// URL: https://www.codewars.com/kata/583ade15666df5a64e000058
// Category: REFERENCE  |  Tags: FUNDAMENTALS | BINARY
// *****************************************************************************
const strictEqual = require('chai').assert.strictEqual;

function doTest (number, expected) {
	const actual = evensAndOdds(number);
	strictEqual(actual, expected, `for n = ${number}:\n`);
}

describe("Tests suite", function() {
	it("sample tests", function () {
		doTest(2,'10');
		doTest(13,'d');
		doTest(47,'2f');
		doTest(0,'0');
		doTest(12800,'11001000000000');
		doTest(8172381723,'1e71ca61b');
	});

	it("Random tests", function () {
		const  solution = x => x.toString((x % 2) ? 16 : 2);

		for (let i = 0; i < 100; i++) {
			const n = ~~(Math.random() * 1e3);
			const expected = solution(n);
			doTest(n, expected);
		}
	});
});
