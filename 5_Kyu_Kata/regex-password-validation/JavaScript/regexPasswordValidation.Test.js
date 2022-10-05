// [object Object] - Regex Password Validation  [ ID: 52e1476c8147a7547a000811  (regex-password-validation) ]
// URL: https://www.codewars.com/kata/52e1476c8147a7547a000811
// Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
// *****************************************************************************
const {instanceOf, strictEqual} = require('chai').assert;

function doTest (string, expected) {
	const actual = REGEXP.test(string);
	const log = `"${string}" is${expected ? '' : ' not'} a valid password\n`;
	strictEqual(actual, expected, log);
}

describe("Tests suite", () => {
	it("REGEXP sould be a RegExp", () => {
		instanceOf(REGEXP, RegExp);
    // test(), RegExp and its prototype are frozen in Preloaded
    // so this should prevent subclassing RegExp, and mutating test()
    strictEqual(REGEXP.test, RegExp.prototype.test);
	});

	it("fixed tests", () => {
		doTest('fjd3IR9', true);
		doTest('ghdfj32', false);
		doTest('DSJKHD23', false);
		doTest('dsF43', false);
		doTest('4fdg5Fj3', true);
		doTest('DHSJdhjsU', false);
		doTest('fjd3IR9.;', false);
		doTest('fjd3  IR9', false);
		doTest('djI38D55', true);
		doTest('djI3_8D55', false);
		doTest('djI38D55@@', false);
		doTest('a2.d412', false);
		doTest('JHD5FJ53', false);
		doTest('!fdjn345', false);
		doTest('jfkdfj3j', false);
		doTest('123', false);
		doTest('abc', false);
		doTest('123abcABC', true);
		doTest('ABC123abc', true);
		doTest('Password123', true);
	});

	const DIGITS = '0123456789';
	const LOWER = 'abcdefghijklmnopqrstuvwxyz';
	const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const SYMBOLS = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

	function randInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function sample(sequence) { // returns a random element from a string / array
		return sequence[randInt(0, sequence.length - 1)];
	}

	function randPassword() {
		const arrays = [DIGITS, LOWER, UPPER];
		if (randInt(0, 1))
			arrays.push(SYMBOLS);
		return Array.from({length : randInt(0, 15)},
			_ => sample(sample(arrays))
		).join('');
	}

	const SOLUTION = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])^[a-zA-Z0-9]{6,}$/;

	it("random tests", () => {
		for (let i = 0; i < 100; i++) {
			const password = randPassword();
			const expected = SOLUTION.test(password);
			doTest(password, expected);
		}
	});
});
