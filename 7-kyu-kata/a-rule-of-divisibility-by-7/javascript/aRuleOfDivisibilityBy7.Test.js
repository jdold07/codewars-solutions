// 7 kyu - A Rule of Divisibility by 7  [ ID: 55e6f5e58f7817808e00002e  (a-rule-of-divisibility-by-7) ]
// URL: https://www.codewars.com/kata/55e6f5e58f7817808e00002e
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Seven",function() {
  it("Basic tests ",function() {         
    Test.assertSimilar(seven(1021), [10, 2])
    Test.assertSimilar(seven(477557101), [28, 7])
    Test.assertSimilar(seven(477557102), [47, 7])
    Test.assertSimilar(seven(234002979), [21, 7])
    Test.assertSimilar(seven(1603), [7, 2])
    Test.assertSimilar(seven(371), [35, 1])
    Test.assertSimilar(seven(1369851), [0, 5])
    Test.assertSimilar(seven(483), [42, 1])
    Test.assertSimilar(seven(483595), [28, 4])
    Test.assertSimilar(seven(0), [0, 0])
    Test.assertSimilar(seven(286*7), [7, 2])
})})

describe("Random tests",function() {

    function randint(a,b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    // --------------------
    function sol1378(m) {
        let cnt = 0;
        while (m > 99) {
            let a0 = m % 10;
            m = ~~((m - a0) / 10) - 2 * a0;
            cnt += 1;
        }
        return [m, cnt];
    }
    // --------------------
    for (let _ = 0; _ < 100; _++) {
        let n = randint(50, 7500000);
        it("Testing: ", function() {
            Test.assertSimilar(seven(n), sol1378(n), "It should work for random tests too")
        }
    )}
})
