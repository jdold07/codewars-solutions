// 6 kyu - 1/n- Cycle  [ ID: 5a057ec846d843c81a0000ad  (1-slash-n-cycle) ]
// URL: https://www.codewars.com/kata/5a057ec846d843c81a0000ad
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
describe("cycle",() => {
	it("Basic tests",() => {
		Test.assertEquals(cycle(33), 2)
		Test.assertEquals(cycle(18118), -1)
		Test.assertEquals(cycle(69), 22)
		Test.assertEquals(cycle(197), 98)
		Test.assertEquals(cycle(65), -1)
		Test.assertEquals(cycle(97), 96)
		Test.assertEquals(cycle(19), 18)
		Test.assertEquals(cycle(111), 3)
		Test.assertEquals(cycle(53), 13)
		Test.assertEquals(cycle(59), 58)
		Test.assertEquals(cycle(93), 15)
		Test.assertEquals(cycle(51), 16)
		Test.assertEquals(cycle(159), 13)
		Test.assertEquals(cycle(183), 60)
		Test.assertEquals(cycle(197), 98)
		Test.assertEquals(cycle(167), 166)
		Test.assertEquals(cycle(94), -1)
		Test.assertEquals(cycle(133), 18)
		Test.assertEquals(cycle(218713), 9744)
		Test.assertEquals(cycle(38127), 6230)
		Test.assertEquals(cycle(431541), 726)
		Test.assertEquals(cycle(221193), 3510)
		Test.assertEquals(cycle(1234567), 34020)
	})
})

describe("RandomTest",() => {
	it("cycle",() => {
		for (let i = 0;i < 150;++i) {
			let
			n = 200 + Math.floor((500001 - 200) * __RND__()),
			sol = solve(n);
			Test.assertEquals(cycle(n), sol)
		}

		function solve(n) {
			var c = 1,r = {},p = 0;
			if (0 == n % 2 || 0 == n % 5) return -1
			for (;;c *= 10) {
				c %= n;
				if (r[c]) return p - r[c]
				r[c] = p++
			}
		}
	})
})
